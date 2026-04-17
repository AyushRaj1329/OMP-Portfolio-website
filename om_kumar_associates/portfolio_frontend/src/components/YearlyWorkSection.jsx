import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
const projectsByYear = {
  "2024": {
    clients: [
      "D.S.C.L. Sugar mill Ajbapur, Lakhimpur Kheri (U.P.)",
      "D.S.C.L. Sugar mill Haryama (Hardoi) (U.P.)",
      "Dwarikesh Sugar Afzalgarh (Bijnor) (U.P.)",
      "D.S.C.L. Sugar mill Haryama (Loni) (U.P.)",
      "Bundki Dwarikesh Sugar Ltd, Bijnor",
      "Fareedpur Dwarikesh Sugar Bareilly",
      "Super Tech Eco Village Phase-II Ghaziabad (U.P.)",
      "Akshaya Patra Foundation (ISCON Temple Trust)",
      "Hygena Group Himachal Pradesh",
      "Trivatinath Sugars and Chemicals Pvt Ltd"
    ],
    totalBudget: "₹22.50 Cr"
  },

  "2023": {
    clients: [
      "D.S.C.L. Sugar mill Ajbapur, Lakhimpur Kheri (U.P.)",
      "D.S.C.L. Sugar mill Haryama (Hardoi) (U.P.)",
      "Dwarikesh Sugar Afzalgarh (Bijnor) (U.P.)",
      "D.S.C.L. Sugar mill Haryama (Loni) (U.P.)",
      "Bundki Dwarikesh Sugar Ltd, Bijnor",
      "Fareedpur Dwarikesh Sugar Bareilly",
      "Super Tech Eco Village Phase-II Ghaziabad (U.P.)",
      "Akshaya Patra Foundation (ISCON Temple Trust)",
      "Hygena Group Himachal Pradesh",
      "Trivatinath Sugars and Chemicals Pvt Ltd"
    ],
    totalBudget: "₹22.00 Cr"
  },

  "2022": {
    clients: [
      "D.S.C.L. Sugar mill Ajbapur, Lakhimpur Kheri (U.P.)",
      "D.S.C.L. Sugar mill Haryama (Hardoi) (U.P.)",
      "Dwarikesh Sugar Afzalgarh (Bijnor) (U.P.)",
      "Bundki Dwarikesh Sugar Ltd, Bijnor",
      "Fareedpur Dwarikesh Sugar Bareilly",
      "Super Tech Eco Village Phase-II Ghaziabad (U.P.)",
      "Akshaya Patra Foundation (ISCON Temple Trust)"
    ],
    totalBudget: "₹22.50 Cr"
  },

  "2021": {
    clients: [
      "D.S.C.L. Sugar mill Ajbapur, Lakhimpur Kheri (U.P.)",
      "D.S.C.L. Sugar mill Haryama (Hardoi) (U.P.)",
      "Dwarikesh Sugar Afzalgarh (Bijnor) (U.P.)",
      "Bundki Dwarikesh Sugar Ltd, Bijnor",
      "Fareedpur Dwarikesh Sugar Bareilly",
      "Super Tech Eco Village Phase-II Ghaziabad (U.P.)"
    ],
    totalBudget: "₹19.50 Cr"
  },

  "2020": {
    clients: [
      "D.S.C.L. Sugar mill Ajbapur, Lakhimpur Kheri (U.P.)",
      "D.S.C.L. Sugar mill Haryama (Hardoi) (U.P.)",
      "Dwarikesh Sugar Afzalgarh (Bijnor) (U.P.)",
      "Bundki Dwarikesh Sugar Ltd, Bijnor",
      "Fareedpur Dwarikesh Sugar Bareilly",
      "Chaddha Sugar mill Keeri (Gurdaspur) Punjab",
      "Swan Aluminum Ltd. Baddi (Himachal)",
      "Super Tech Eco Village Phase-II Ghaziabad (U.P.)",
      "Upper Ganges Sugar & Industries Ltd, Seohara (Bijnor) U.P."
    ],
    totalBudget: "₹14.59 Cr"
  },

  "2019": {
    clients: [
      "D.S.C.L. Sugar mill Ajbapur, Lakhimpur Kheri (U.P.)",
      "D.S.C.L. Sugar mill Haryama (Hardoi) (U.P.)",
      "Dwarikesh Sugar Afzalgarh (Bijnor) (U.P.)",
      "Bundki Dwarikesh Sugar Ltd, Bijnor",
      "Fareedpur Dwarikesh Sugar Bareilly",
      "Chaddha Sugar mill Keeri (Gurdaspur) Punjab",
      "Swan Aluminum Ltd. Baddi (Himachal)",
      "Super Tech Eco Village Phase-II Ghaziabad (U.P.)",
      "Upper Ganges Sugar & Industries Ltd, Seohara (Bijnor) U.P."
    ],
    totalBudget: "₹10.91 Cr"
  },

  "2018": {
    clients: [
      "D.S.C.L. Sugar mill Ajbapur, Lakhimpur Kheri (U.P.)",
      "D.S.C.L. Sugar mill Haryama (Hardoi) (U.P.)",
      "Dwarikesh Sugar Afzalgarh (Bijnor) (U.P.)",
      "Bundki Dwarikesh Sugar Ltd, Bijnor",
      "Fareedpur Dwarikesh Sugar Bareilly",
      "Chaddha Sugar mill Keeri (Gurdaspur) Punjab",
      "Swan Aluminum Ltd. Baddi (Himachal)",
      "Super Tech Eco Village Phase-II Ghaziabad (U.P.)",
      "Upper Ganges Sugar & Industries Ltd, Seohara (Bijnor) U.P."
    ],
    totalBudget: "₹11.27 Cr"
  },

  "2017": {
    clients: [
      "D.S.C.L. Sugar mill Ajbapur, Lakhimpur Kheri (U.P.)",
      "D.S.C.L. Sugar mill Haryama (Hardoi) (U.P.)",
      "Dwarikesh Sugar Afzalgarh (Bijnor) (U.P.)",
      "Bundki Dwarikesh Sugar Ltd, Bijnor",
      "Fareedpur Dwarikesh Sugar Bareilly",
      "Chaddha Sugar mill Keeri (Gurdaspur) Punjab",
      "Swan Aluminum Ltd. Baddi (Himachal)",
      "Super Tech Eco Village Phase-II Ghaziabad (U.P.)",
      "Upper Ganges Sugar & Industries Ltd, Seohara (Bijnor) U.P."
    ],
    totalBudget: "₹12.70 Cr"
  },

  "2016": {
    clients: [
      "D.S.C.L. Sugar mill Ajbapur, Lakhimpur Kheri (U.P.)",
      "D.S.C.L. Sugar mill Haryama (Hardoi) (U.P.)",
      "Dwarikesh Sugar Afzalgarh (Bijnor) (U.P.)",
      "Bundki Dwarikesh Sugar Ltd, Bijnor",
      "Fareedpur Dwarikesh Sugar Bareilly",
      "Chaddha Sugar mill Keeri (Gurdaspur) Punjab",
      "Swan Aluminum Ltd. Baddi (Himachal)",
      "Super Tech Eco Village Phase-II Ghaziabad (U.P.)",
      "Upper Ganges Sugar & Industries Ltd, Seohara (Bijnor) U.P."
    ],
    totalBudget: "₹17.50 Cr"
  }
};

const years = Object.keys(projectsByYear).sort((a, b) => +b - +a);

const YearlyWorkSection = () => {
  return (
    <section
      id="projects"
      className="py-20 bg-[hsl(var(--secondary)/0.3)]"
    >
      <div className="container mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-12">
          <p className="font-display text-[hsl(var(--accent))] text-sm font-semibold tracking-widest uppercase mb-2">
            Our Portfolio
          </p>

          <h2 className="font-display text-3xl md:text-4xl font-bold text-[hsl(var(--foreground))]">
            Yearly Work Showcase
          </h2>
        </div>

        {/* Tabs */}
        <Tabs defaultValue={years[0]} className="w-full">
          <TabsList className="flex flex-wrap justify-center gap-2 bg-[hsl(var(--card))] border border-[hsl(var(--border))] mb-8 h-auto p-2">
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

          {/* Content */}
          {years.map((year) => (
            <TabsContent key={year} value={year}>
              <div className="bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-2xl p-6 md:p-10">

                {/* Year Title */}
                <h3 className="text-center text-2xl font-bold mb-8 text-[hsl(var(--primary))]">
                  Year {year} Work Summary
                </h3>

                {/* Layout */}
                <div className="grid md:grid-cols-3 gap-6">

                  {/* LEFT - Companies */}
                  <div className="md:col-span-2 border border-[hsl(var(--border))] rounded-xl p-6">

                    <h4 className="text-xl font-semibold text-center border-b pb-2">
                      Companies Completed Work For
                    </h4>

                    <div className="space-y-3 mt-4">
                      {projectsByYear[year].clients.map((client, idx) => (
                        <div
                          key={idx}
                          className="border border-[hsl(var(--border))] rounded-lg px-4 py-2"
                        >
                          {client}
                        </div>
                      ))}
                    </div>

                  </div>

                  {/* RIGHT - Budget */}
                  <div className="border border-[hsl(var(--border))] rounded-xl p-6 flex flex-col justify-between">

                    <h4 className="text-xl font-semibold text-center border-b pb-2">
                      Total Budget of the Year
                    </h4>

                    <div className="flex items-center justify-center grow">
                      <div className="border border-[hsl(var(--border))] rounded-xl px-6 py-10 text-2xl font-bold text-[hsl(var(--primary))]">
                        {projectsByYear[year].totalBudget}
                      </div>
                    </div>

                  </div>

                </div>
              </div>
            </TabsContent>
          ))}

        </Tabs>
      </div>
    </section>
  );
};

export default YearlyWorkSection;