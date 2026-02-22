import { ArrowDown, FileDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[hsl(var(--construction-dark)/0.7)]" />

      <div className="relative z-10 container mx-auto px-4 text-center">
        <p className="font-display text-[hsl(var(--accent))] text-lg md:text-xl font-semibold tracking-widest uppercase mb-4">
          Building Tomorrow's Infrastructure
        </p>

        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-[hsl(var(--primary-foreground))] leading-tight mb-6">
          Civil Construction
          <br />
          <span className="text-[hsl(var(--accent))]">Excellence</span>
        </h1>

        <p className="max-w-2xl mx-auto text-[hsl(var(--primary-foreground)/0.8)] text-base md:text-lg mb-8">
          Specialists in drainage systems, road construction, residential
          quarters, sewage systems, and cane yards for heavy axle load traffic.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            asChild
            size="lg"
            className="bg-[hsl(var(--accent))] text-[hsl(var(--accent-foreground))] hover:bg-[hsl(var(--accent)/0.9)] font-display font-bold text-base px-8"
          >
            <a href="#contact">Contact Us</a>
          </Button>

          <Button
            asChild
            variant="outline"
            size="lg"
            className="border border-[hsl(var(--primary-foreground)/0.3)] text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary-foreground)/0.1)] font-display font-bold text-base px-8"
          >
            <a href="/portfolio.pdf" download>
              <FileDown className="mr-2" size={18} />
              Download Portfolio
            </a>
          </Button>
        </div>

        <a
          href="#about"
          className="inline-block mt-16 animate-bounce text-[hsl(var(--primary-foreground)/0.6)] hover:text-[hsl(var(--accent))] transition-colors"
        >
          <ArrowDown size={28} />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;