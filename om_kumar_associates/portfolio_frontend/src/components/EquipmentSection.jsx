import { Truck, Cog, Hammer, Container, Drill, Forklift, Tally4, Shovel, Vibrate, Cylinder, Shell, Blend, Layers } from "lucide-react";

const equipment = [
  { name: "JCB Excavator", quantity: 3, icon: Shovel },
  { name: "Motor Grader/Leveler", quantity: 2, icon: Cog },
  { name: "Vibro Roller", quantity: 1, icon: Vibrate },
  { name: "Simple Roller", quantity: 1, icon: Cylinder },
  { name: "Tandem Roller", quantity: 1, icon: Shell },
  { name: "Concrete Mixer", quantity: 20, icon:Blend },
  { name: "Tractors with Tippers", quantity: 10, icon: Truck },
  { name: "Batching Plant", quantity: 2, icon: Container },
  { name: "Steel Shuttering", quantity: 10000, icon: Tally4 },
  { name: "Structural Fabrication & Erection Tools", quantity: null, icon: Layers },
  { name: "Survey Instruments", quantity: null, icon: Hammer },

];

const EquipmentSection = () => {
  return (
    <section
      id="equipment"
      className="py-20 bg-[hsl(var(--background))]"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="font-display text-[hsl(var(--accent))] text-sm font-semibold tracking-widest uppercase mb-2">
            Our Fleet
          </p>

          <h2 className="font-display text-3xl md:text-4xl font-bold text-[hsl(var(--foreground))]">
            Machinery & Equipment
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {equipment.map((item) => (
            <div
              key={item.name}
              className="bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-xl p-4 text-center hover:border-[hsl(var(--primary)/0.3)] hover:shadow-md transition-all group"
            >
              <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-[hsl(var(--primary)/0.1)] flex items-center justify-center group-hover:bg-[hsl(var(--accent)/0.2)] transition-colors">
                <item.icon
                  className="text-[hsl(var(--primary))] group-hover:text-[hsl(var(--accent))] transition-colors"
                  size={24}
                />
              </div>

              <p className="font-display font-bold text-sm text-[hsl(var(--foreground))]">
                {item.name}
              </p>

              <p className="text-[hsl(var(--accent))] font-display font-bold text-lg mt-1">
                ×{item.quantity}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EquipmentSection;