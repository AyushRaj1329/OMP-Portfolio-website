import { FileDown, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";


const Footer = () => {
  return (
    <footer className="bg-[hsl(var(--construction-dark))] text-[hsl(var(--primary-foreground))] py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
             <a
          href="#hero"
          className="flex items-center gap-2"
        >
          <img
            src={logo}
            alt="OMP Logo"
            className="h-30 w-auto object-contain"
          />
        </a>
            <p className="text-[hsl(var(--primary-foreground)/0.7)] text-sm leading-relaxed">
              Building robust infrastructure that stands the test of time.
              Drainage, roads, residential quarters, sewage systems, and cane yards.
            </p>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-4">
              Contact Info
            </h4>

            <div className="space-y-3 text-sm text-[hsl(var(--primary-foreground)/0.7)]">
              <div className="flex items-center gap-2">
                <MapPin
                  size={16}
                  className="text-[hsl(var(--accent))] shrink-0"
                />
                <span>
                  Teachers colony, <br /> Opp. SBI <br /> Kalagarh Road <br /> Dhampur-246 761<br /> Distt.Bijnor <br /> Uttar Pradesh
                </span>
              </div>

              <div className="flex items-center gap-2">
                <Phone
                  size={16}
                  className="text-[hsl(var(--accent))] shrink-0"
                />
                <span>+91 94121 53022</span>
              </div>

              <div className="flex items-center gap-2">
                <Mail
                  size={16}
                  className="text-[hsl(var(--accent))] shrink-0"
                />
                <span>omprakashassociatesdpr@gmail.com  </span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-4">
              Quick Links
            </h4>

            <div className="space-y-2 text-sm mb-6">
              {[
                "About",
                "Projects",
                "Equipment",
                "Team",
                "Clients",
                "Gallery",
                "Contact",
              ].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block text-[hsl(var(--primary-foreground)/0.7)] hover:text-[hsl(var(--accent))] transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>

            <Button
              asChild
              className="bg-[hsl(var(--accent))] text-[hsl(var(--accent-foreground))] hover:bg-[hsl(var(--construction-gold-dark))] font-display font-bold"
            >
              <a href="/portfolio.pdf" download>
                <FileDown size={16} className="mr-2" />
                Download Portfolio PDF
              </a>
            </Button>
          </div>
        </div>

        <div className="border-t border-[hsl(var(--primary-foreground)/0.1)] pt-6 text-center text-sm text-[hsl(var(--primary-foreground)/0.5)]">
          © {new Date().getFullYear()} OM Prakash Associates. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;