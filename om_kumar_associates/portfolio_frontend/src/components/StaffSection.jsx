import { HardHat, Briefcase, Wrench, Users } from "lucide-react";

const staffCategories = [
  {
    icon: Briefcase,
    title: "Management & Engineers",
    roles: [
      {
        role: "Graduate Engineers", count: 3
      },
      { role: "Diploma Engineers", count: 7 },

    ],
  },
  {
    icon: HardHat,
    title: "Supervisors & Foremen",
    roles: [
      { role: "Site Supervisors", count: 11 },
      { role: "Foremen", count: 9 },

    ],
  },
  {
    icon: Wrench,
    title: "Skilled Workers",
    roles: [

      { role: "Electricians", count: 6 },

    ],
  },
  {
    icon: Users,
    title: "Workforce Capacity",
    roles: [
      { role: "Skilled Labour", count: 200 },
      { role: "General Labour", count: 250 },
     
    ],
  },
];

const StaffSection = () => {
  const totalStaff = staffCategories.reduce(
    (sum, cat) => sum + cat.roles.reduce((s, r) => s + r.count, 0),
    0
  );

  return (
    <section
      id="team"
      className="py-20 bg-[hsl(var(--secondary)/0.3)]"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="font-display text-[hsl(var(--accent))] text-sm font-semibold tracking-widest uppercase mb-2">
            Our Workforce
          </p>

          <h2 className="font-display text-3xl md:text-4xl font-bold text-[hsl(var(--foreground))]">
            Staff & Labour Details
          </h2>

          <p className="text-[hsl(var(--muted-foreground))] mt-2">
            Total Workforce:{" "}
            <span className="font-display font-bold text-[hsl(var(--primary))] text-xl">
              {totalStaff}+
            </span>
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {staffCategories.map((category) => {
            const categoryTotal = category.roles.reduce(
              (s, r) => s + r.count,
              0
            );

            return (
              <div
                key={category.title}
                className="bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-xl overflow-hidden hover:border-[hsl(var(--primary)/0.3)] transition-colors"
              >
                <div className="bg-[hsl(var(--primary)/0.05)] p-4 flex items-center gap-3 border-b border-[hsl(var(--border))]">
                  <category.icon
                    className="text-[hsl(var(--accent))]"
                    size={24}
                  />
                  <div>
                    <h3 className="font-display font-bold text-[hsl(var(--foreground))] text-sm">
                      {category.title}
                    </h3>
                    <p className="text-xs text-[hsl(var(--muted-foreground))]">
                      {categoryTotal} members
                    </p>
                  </div>
                </div>

                <div className="p-4 space-y-3">
                  {category.roles.map((role) => (
                    <div
                      key={role.role}
                      className="flex justify-between items-center"
                    >
                      <span className="text-sm text-[hsl(var(--muted-foreground))]">
                        {role.role}
                      </span>

                      <span className="font-display font-bold text-[hsl(var(--primary))]">
                        {role.count}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StaffSection;