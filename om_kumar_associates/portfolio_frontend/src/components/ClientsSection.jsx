import { Building, Building2, Landmark, Factory } from "lucide-react";

const majorClients = [
  { name: "National Highways Authority of India", icon: Landmark },
  { name: "State Public Works Department", icon: Building2 },
  { name: "City Municipal Corporation", icon: Building },
  { name: "State Housing Board", icon: Building2 },
  { name: "Water & Sewage Authority", icon: Landmark },
  { name: "Sugar Corporation Ltd.", icon: Factory },
];

const regularClients = [
  "Urban Development Authority",
  "Irrigation Department",
  "PMGSY (Rural Roads)",
  "District Administration",
  "Agri Industries Ltd.",
  "State Electricity Board",
  "Railway Construction Div.",
  "Port Trust Authority",
];

const ClientsSection = () => {
  return (
    <section
      id="clients"
      className="py-20 bg-[hsl(var(--background))]"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="font-display text-[hsl(var(--accent))] text-sm font-semibold tracking-widest uppercase mb-2">
            Trusted Partners
          </p>

          <h2 className="font-display text-3xl md:text-4xl font-bold text-[hsl(var(--foreground))]">
            Our Clients
          </h2>
        </div>

        {/* Major Clients */}
        <div className="mb-12">
          <h3 className="font-display text-xl font-bold text-[hsl(var(--primary))] mb-6 text-center">
            Major Clients
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {majorClients.map((client) => (
              <div
                key={client.name}
                className="bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-xl p-6 flex items-center gap-4 hover:border-[hsl(var(--primary)/0.3)] hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 shrink-0 rounded-lg bg-[hsl(var(--primary)/0.1)] flex items-center justify-center">
                  <client.icon
                    className="text-[hsl(var(--primary))]"
                    size={24}
                  />
                </div>

                <p className="font-display font-semibold text-sm text-[hsl(var(--foreground))]">
                  {client.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Regular Clients */}
        <div>
          <h3 className="font-display text-xl font-bold text-[hsl(var(--primary))] mb-6 text-center">
            Regular Clients
          </h3>

          <div className="flex flex-wrap justify-center gap-3">
            {regularClients.map((client) => (
              <span
                key={client}
                className="bg-[hsl(var(--secondary))] text-[hsl(var(--secondary-foreground))] px-4 py-2 rounded-full text-sm font-medium border border-[hsl(var(--border))]"
              >
                {client}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;