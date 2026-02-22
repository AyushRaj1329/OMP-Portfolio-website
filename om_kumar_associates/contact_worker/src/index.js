const rateLimitStore = new Map();

export default {
  async fetch(request, env) {
    if (request.method === "OPTIONS") {
      return new Response(null, {
        headers: corsHeaders(env),
      });
    }

    if (request.method !== "POST") {
      return new Response("Method Not Allowed", { status: 405 });
    }

    try {
      const ip =
        request.headers.get("CF-Connecting-IP") || "unknown";

      const body = await request.json();
      const { name, email, phone, message, token, company } = body;

      /* ======================
         1️⃣ Honeypot Protection
      ======================= */
      if (company) {
        return errorResponse("Spam detected (honeypot).");
      }

      /* ======================
         2️⃣ Rate Limiting
      ======================= */
      if (!checkRateLimit(ip)) {
        return errorResponse("Too many requests. Try again later.", 429);
      }

      /* ======================
         3️⃣ CAPTCHA Verification
      ======================= */
      const captchaValid = await verifyTurnstile(token, env);
      if (!captchaValid) {
        return errorResponse("Captcha verification failed.");
      }

      /* ======================
         4️⃣ Spam Filtering
      ======================= */
      if (isSpam(message)) {
        return errorResponse("Spam content detected.");
      }

      /* ======================
         5️⃣ Send Email
      ======================= */
      const emailData = {
        personalizations: [
          { to: [{ email: env.TO_EMAIL }] }
        ],
        from: {
          email: env.FROM_EMAIL,
          name: "BuildCraft Website",
        },
        subject: `New Contact Form Submission from ${name}`,
        content: [
          {
            type: "text/plain",
            value: `
Name: ${name}
Email: ${email}
Phone: ${phone}
Message:
${message}
            `,
          },
        ],
      };

      const mailResponse = await fetch(
        "https://api.mailchannels.net/tx/v1/send",
        {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(emailData),
        }
      );

      if (!mailResponse.ok) {
        return errorResponse("Failed to send email.", 500);
      }

      return new Response(
        JSON.stringify({ success: true }),
        {
          headers: {
            "Content-Type": "application/json",
            ...corsHeaders(env),
          },
        }
      );

    } catch (err) {
      return errorResponse("Server error.", 500);
    }
  },
};

/* =========================
   Turnstile Verification
========================= */
async function verifyTurnstile(token, env) {
  if (!token) return false;

  const response = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    {
      method: "POST",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
      },
      body: `secret=${env.TURNSTILE_SECRET}&response=${token}`,
    }
  );

  const data = await response.json();
  return data.success === true;
}

/* =========================
   Rate Limiter
========================= */
function checkRateLimit(ip) {
  const now = Date.now();
  const windowTime = 10 * 60 * 1000; // 10 minutes
  const maxRequests = 5;

  if (!rateLimitStore.has(ip)) {
    rateLimitStore.set(ip, []);
  }

  const timestamps = rateLimitStore
    .get(ip)
    .filter((t) => now - t < windowTime);

  if (timestamps.length >= maxRequests) {
    return false;
  }

  timestamps.push(now);
  rateLimitStore.set(ip, timestamps);
  return true;
}

/* =========================
   Spam Filter
========================= */
function isSpam(message) {
  if (!message || message.length < 10) return true;

  const spamKeywords = [
    "viagra",
    "casino",
    "crypto",
    "loan",
    "bitcoin",
    "free money",
    "investment",
  ];

  const lower = message.toLowerCase();

  return spamKeywords.some((word) =>
    lower.includes(word)
  );
}

/* =========================
   Helpers
========================= */
function errorResponse(message, status = 400) {
  return new Response(
    JSON.stringify({ error: message }),
    { status }
  );
}

function corsHeaders(env) {
  return {
    "Access-Control-Allow-Origin": env.ALLOWED_ORIGIN,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };
}