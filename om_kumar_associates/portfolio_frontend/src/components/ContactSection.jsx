import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
});

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     setTimeout(() => {
//       toast({
//         title: "Message Sent!",
//         description: "We'll get back to you shortly.",
//       });

//       setForm({ name: "", email: "", phone: "", message: "" });
//       setLoading(false);
//     }, 1000);
//   };

const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const token = document.querySelector(
        'textarea[name="cf-turnstile-response"]'
    )?.value;

    const response = await fetch("YOUR_WORKER_URL", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
        ...form,
        token,
        company: "", // honeypot
        }),
    });

    setLoading(false);
};

  return (
    <section
      id="contact"
      className="py-20 bg-[hsl(var(--background))]"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="font-display text-[hsl(var(--accent))] text-sm font-semibold tracking-widest uppercase mb-2">
            Reach Out
          </p>

          <h2 className="font-display text-3xl md:text-4xl font-bold text-[hsl(var(--foreground))]">
            Contact Us
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Info */}
          <div className="space-y-8">
            <div>
              <h3 className="font-display text-xl font-bold text-[hsl(var(--primary))] mb-4">
                Get In Touch
              </h3>

              <p className="text-[hsl(var(--muted-foreground))] leading-relaxed">
                Have a project in mind? Reach out to us for a free consultation
                and quote. We're ready to bring your infrastructure vision to life.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-[hsl(var(--primary)/0.1)] flex items-center justify-center shrink-0">
                  <MapPin className="text-[hsl(var(--primary))]" size={20} />
                </div>
                <div>
                  <p className="font-display font-bold text-[hsl(var(--foreground))] text-sm">
                    Office Address
                  </p>
                  <p className="text-sm text-[hsl(var(--muted-foreground))]">
                    123 Construction Avenue, Industrial Area, City - 400001
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-[hsl(var(--primary)/0.1)] flex items-center justify-center shrink-0">
                  <Phone className="text-[hsl(var(--primary))]" size={20} />
                </div>
                <div>
                  <p className="font-display font-bold text-[hsl(var(--foreground))] text-sm">
                    Phone
                  </p>
                  <p className="text-sm text-[hsl(var(--muted-foreground))]">
                    +91 98765 43210
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-[hsl(var(--primary)/0.1)] flex items-center justify-center shrink-0">
                  <Mail className="text-[hsl(var(--primary))]" size={20} />
                </div>
                <div>
                  <p className="font-display font-bold text-[hsl(var(--foreground))] text-sm">
                    Email
                  </p>
                  <p className="text-sm text-[hsl(var(--muted-foreground))]">
                    info@buildcraft.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-xl p-6 space-y-4"
          >
            <div>
              <Label htmlFor="name" className="font-display font-semibold">
                Full Name
              </Label>
              <Input
                id="name"
                placeholder="Your name"
                value={form.name}
                onChange={(e) =>
                  setForm({ ...form, name: e.target.value })
                }
                required
              />
            </div>

            <div>
              <Label htmlFor="email" className="font-display font-semibold">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                value={form.email}
                onChange={(e) =>
                  setForm({ ...form, email: e.target.value })
                }
                required
              />
            </div>

            <div>
              <Label htmlFor="phone" className="font-display font-semibold">
                Phone
              </Label>
              <Input
                id="phone"
                type="tel"
                placeholder="+91 XXXXX XXXXX"
                value={form.phone}
                onChange={(e) =>
                  setForm({ ...form, phone: e.target.value })
                }
              />
            </div>

            <div>
              <Label htmlFor="message" className="font-display font-semibold">
                Message
              </Label>
              <Textarea
                id="message"
                placeholder="Tell us about your project..."
                rows={4}
                value={form.message}
                onChange={(e) =>
                  setForm({ ...form, message: e.target.value })
                }
                required
              />
            </div>

            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-[hsl(var(--accent))] text-[hsl(var(--accent-foreground))] hover:bg-[hsl(var(--construction-gold-dark))] font-display font-bold text-base"
              size="lg"
            >
              {loading ? (
                "Sending..."
              ) : (
                <>
                  <Send size={18} className="mr-2" />
                  Send Message
                </>
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;