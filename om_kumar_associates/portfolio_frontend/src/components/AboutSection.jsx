import { Building2, Calendar, Award, Users } from "lucide-react";

const stats = [
  { icon: Calendar, value: "15+", label: "Years Experience" },
  { icon: Building2, value: "250+", label: "Projects Completed" },
  { icon: Award, value: "50+", label: "Awards & Certifications" },
  { icon: Users, value: "500+", label: "Team Members" },
];

const AboutSection = () => {
  return (
    <section
      id="about"
      className="py-20 bg-[hsl(var(--background))]"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="font-display text-[hsl(var(--accent))] text-sm font-semibold tracking-widest uppercase mb-2">
            Who We Are
          </p>

          <h2 className="font-display text-3xl md:text-4xl font-bold text-[hsl(var(--foreground))]">
            About Our Company
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="font-display text-xl font-bold text-[hsl(var(--primary))] mb-4">
              Our Mission
            </h3>

            <p className="text-[hsl(var(--muted-foreground))] leading-relaxed mb-4">
              We are a leading civil construction firm dedicated to building robust infrastructure
              that stands the test of time. From drainage systems and road networks to residential
              quarters and sewage systems, we deliver projects with precision and quality.
            </p>

            <p className="text-[hsl(var(--muted-foreground))] leading-relaxed mb-4">
              Our expertise extends to constructing cane yards designed for heavy axle load traffic,
              ensuring durability and safety for industrial operations.
            </p>

            <h3 className="font-display text-xl font-bold text-[hsl(var(--primary))] mb-4">
              Our Vision
            </h3>

            <p className="text-[hsl(var(--muted-foreground))] leading-relaxed">
              To be the most trusted name in civil construction, recognized for delivering
              world-class infrastructure that drives economic growth and improves communities.
            </p>
          </div>

          <div className="bg-[hsl(var(--primary)/0.05)] border border-[hsl(var(--primary)/0.1)] rounded-2xl p-8">
            <h3 className="font-display text-xl font-bold text-[hsl(var(--primary))] mb-4">
              Company History
            </h3>

            <p className="text-[hsl(var(--muted-foreground))] leading-relaxed mb-3">
              Established in 2009, we began as a small contracting firm specializing in drainage
              works. Over the years, we expanded into road construction, residential development,
              and large-scale industrial projects.
            </p>

            <p className="text-[hsl(var(--muted-foreground))] leading-relaxed">
              Today we operate across multiple regions with a fleet of modern equipment and a
              team of experienced engineers, supervisors, and skilled workers.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-xl p-6 text-center hover:border-[hsl(var(--primary)/0.3)] transition-colors"
            >
              <stat.icon
                className="mx-auto mb-3 text-[hsl(var(--accent))]"
                size={32}
              />

              <p className="font-display text-3xl font-bold text-[hsl(var(--primary))]">
                {stat.value}
              </p>

              <p className="text-sm text-[hsl(var(--muted-foreground))] mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;