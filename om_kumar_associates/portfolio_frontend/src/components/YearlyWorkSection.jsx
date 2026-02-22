import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const projectsByYear = {
  "2024": [
    { name: "NH-47 Highway Extension", client: "National Highways Authority", type: "Road", amount: "₹12.5 Cr" },
    { name: "Municipal Drainage Phase-III", client: "City Municipal Corporation", type: "Drainage", amount: "₹4.8 Cr" },
    { name: "Green Valley Residential Colony", client: "State Housing Board", type: "Residential", amount: "₹18.2 Cr" },
    { name: "Industrial Cane Yard - Unit B", client: "Sugar Corp Ltd.", type: "Cane Yard", amount: "₹6.3 Cr" },
  ],
  "2023": [
    { name: "District Road Resurfacing", client: "PWD", type: "Road", amount: "₹8.1 Cr" },
    { name: "Sewage Treatment Plant Expansion", client: "Water Authority", type: "Sewage", amount: "₹15.7 Cr" },
    { name: "Township Development Phase-II", client: "Urban Development Authority", type: "Residential", amount: "₹22.0 Cr" },
    { name: "Storm Water Drain Network", client: "City Municipal Corporation", type: "Drainage", amount: "₹5.4 Cr" },
  ],
  "2022": [
    { name: "State Highway SH-12 Widening", client: "State Highways Dept", type: "Road", amount: "₹20.5 Cr" },
    { name: "Cane Yard Heavy Axle Pavement", client: "Agri Industries Ltd.", type: "Cane Yard", amount: "₹9.8 Cr" },
    { name: "Underground Sewage Line", client: "Water Authority", type: "Sewage", amount: "₹7.2 Cr" },
  ],
  "2021": [
    { name: "Rural Road Connectivity Project", client: "PMGSY", type: "Road", amount: "₹11.0 Cr" },
    { name: "Residential Quarters - Govt Staff", client: "State Govt.", type: "Residential", amount: "₹14.3 Cr" },
    { name: "Main Drain Rehabilitation", client: "Irrigation Dept", type: "Drainage", amount: "₹3.9 Cr" },
  ],
};

const typeColor = {
  Road: "bg-[hsl(var(--primary)/0.1)] text-[hsl(var(--primary))]",
  Drainage: "bg-blue-100 text-blue-800",
  Residential: "bg-green-100 text-green-800",
  "Cane Yard": "bg-[hsl(var(--accent)/0.2)] text-[hsl(var(--accent))]",
  Sewage: "bg-purple-100 text-purple-800",
};

const years = Object.keys(projectsByYear).sort((a, b) => +b - +a);

const YearlyWorkSection = () => {
  return (
    <section
      id="projects"
      className="py-20 bg-[hsl(var(--secondary)/0.3)]"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="font-display text-[hsl(var(--accent))] text-sm font-semibold tracking-widest uppercase mb-2">
            Our Portfolio
          </p>

          <h2 className="font-display text-3xl md:text-4xl font-bold text-[hsl(var(--foreground))]">
            Yearly Work Showcase
          </h2>
        </div>

        <Tabs defaultValue={years[0]} className="w-full">
          <TabsList className="flex flex-wrap justify-center gap-1 bg-[hsl(var(--card))] border border-[hsl(var(--border))] mb-8 h-auto p-2">
            {years.map((year) => (
              <TabsTrigger
                key={year}
                value={year}
                className="font-display font-bold data-[state=active]:bg-[hsl(var(--primary))] data-[state=active]:text-[hsl(var(--primary-foreground))]"
              >
                {year}
              </TabsTrigger>
            ))}
          </TabsList>

          {years.map((year) => (
            <TabsContent key={year} value={year}>
              <div className="bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-xl overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-[hsl(var(--primary)/0.05)]">
                      <TableHead className="font-display font-bold">
                        Project Name
                      </TableHead>
                      <TableHead className="font-display font-bold">
                        Client / Organization
                      </TableHead>
                      <TableHead className="font-display font-bold">
                        Type
                      </TableHead>
                      <TableHead className="font-display font-bold text-right">
                        Contract Amount
                      </TableHead>
                    </TableRow>
                  </TableHeader>

                  <TableBody>
                    {projectsByYear[year].map((project, idx) => (
                      <TableRow key={idx}>
                        <TableCell className="font-medium">
                          {project.name}
                        </TableCell>

                        <TableCell>
                          {project.client}
                        </TableCell>

                        <TableCell>
                          <span
                            className={`inline-block px-2 py-0.5 rounded-full text-xs font-semibold ${
                              typeColor[project.type] ||
                              "bg-[hsl(var(--muted))] text-[hsl(var(--muted-foreground))]"
                            }`}
                          >
                            {project.type}
                          </span>
                        </TableCell>

                        <TableCell className="text-right font-display font-bold text-[hsl(var(--primary))]">
                          {project.amount}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default YearlyWorkSection;