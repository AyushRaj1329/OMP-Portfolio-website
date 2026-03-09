import { Building2, Calendar, VectorSquare, Users } from "lucide-react";

const stats = [
  { icon: Calendar, value: "25+", label: "Years Experience" },
  { icon: Building2, value: "200+", label: "Projects Completed" },
  { icon: VectorSquare, value: "15+", label: "Industrial Clients" },
  { icon: Users, value: "450+", label: "Skilled Workforce" },
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
              Our mission is to deliver high-quality civil engineering and construction services while maintaining the highest standards of safety, quality, and reliability.


            </p>

            <p className="text-[hsl(var(--muted-foreground))] leading-relaxed mb-4">
              Om Prakash Associates is committed to providing efficient infrastructure solutions including building construction, road development, structural works, drainage systems, and industrial projects. We aim to complete every project on time with superior workmanship and technical expertise while maintaining long-term relationships with our clients.
            </p>

            <h3 className="font-display text-xl font-bold text-[hsl(var(--primary))] mb-4">
              Our Vision
            </h3>

            <p className="text-[hsl(var(--muted-foreground))] leading-relaxed">
              Our vision is to become a trusted and leading civil construction company known for delivering reliable infrastructure and industrial development projects.

              We strive to expand our capabilities, adopt modern construction techniques, and contribute to the development of strong infrastructure while maintaining our commitment to quality, safety, and client satisfaction.
            </p>
          </div>

          <div className="bg-[hsl(var(--primary)/0.05)] border border-[hsl(var(--primary)/0.1)] rounded-2xl p-8">
            <h3 className="font-display text-xl font-bold text-[hsl(var(--primary))] mb-4">
              Company History
            </h3>

            <p className="text-[hsl(var(--muted-foreground))] leading-relaxed mb-3">
              Om Prakash Associates was founded by Shri Omprakash Singh and is headquartered in Dhampur, District Bijnor, Uttar Pradesh. The company was established to provide professional civil engineering and construction services in industrial and residential sectors.

              Over the years, the company has gained extensive experience in projects such as road construction, industrial buildings, drainage systems, culverts, and infrastructure development. Through consistent quality work and skilled engineering staff, Om Prakash Associates has successfully completed numerous projects for major clients across different regions.
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