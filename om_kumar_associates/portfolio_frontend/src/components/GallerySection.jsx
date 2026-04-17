import { useState } from "react";
import b1 from "@/assets/1b.png";
import a1 from "@/assets/1a.png";
import b2 from "@/assets/2b.png";
import a2 from "@/assets/2a.png";
import b3 from "@/assets/3b.png";
import a3 from "@/assets/3a.png";
import b4 from "@/assets/4b.png";
import a4 from "@/assets/4a.png";
import b5 from "@/assets/5b.png";
import a5 from "@/assets/5a.png";
import b6 from "@/assets/6b.png";
import a6 from "@/assets/6a.png";




const galleryItems = [
  {
    title: "NH-47 Highway Extension",
    type: "Road Construction",
    before: b1,
    after: a1,
  },
  {
    title: "Municipal Drainage System",
    type: "Drainage",
    before: b2,
    after: a2,
  },
  {
    title: "Green Valley Township",
    type: "Residential",
    before:b3 ,
    after: a3,
  },
  {
    title: "Sewage Treatment Plant",
    type: "Sewage System",
    before:b4 ,
    after: a4,
  },
   {
    title: "Green Valley Township",
    type: "Residential",
    before:b5 ,
    after: a5,
  },
  {
    title: "Sewage Treatment Plant",
    type: "Sewage System",
    before:b6 ,
    after: a6,
  },
];

const GallerySection = () => {
  const [activeSlider, setActiveSlider] = useState({});

  const getSliderValue = (idx) => activeSlider[idx] ?? 50;

  return (
    <section
      id="gallery"
      className="py-20 bg-[hsl(var(--secondary)/0.3)]"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="font-display text-[hsl(var(--accent))] text-sm font-semibold tracking-widest uppercase mb-2">
            Our Work
          </p>

          <h2 className="font-display text-3xl md:text-4xl font-bold text-[hsl(var(--foreground))]">
            Project Gallery
          </h2>

          <p className="text-[hsl(var(--muted-foreground))] mt-2">
            Drag the slider to compare before & after
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {galleryItems.map((item, idx) => {
            const sliderVal = getSliderValue(idx);

            return (
              <div
                key={idx}
                className="bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-xl overflow-hidden"
              >
                <div className="relative w-full h-64 md:h-72 overflow-hidden select-none">
                  {/* After */}
                  <img
                    src={item.after}
                    alt={`${item.title} after`}
                    className="absolute inset-0 w-full h-full object-cover"
                  />

                  {/* Before */}
                  <div
                    className="absolute inset-0 overflow-hidden"
                    style={{ width: `${sliderVal}%` }}
                  >
                    <img
                      src={item.before}
                      alt={`${item.title} before`}
                      className="absolute inset-0 w-full h-full object-cover"
                      style={{
                        minWidth: "100%",
                        width: `${100 / (sliderVal / 100)}%`,
                        maxWidth: "none",
                      }}
                    />
                  </div>

                  {/* Divider */}
                  <div
                    className="absolute top-0 bottom-0 w-1 bg-[hsl(var(--accent))] shadow-lg"
                    style={{
                      left: `${sliderVal}%`,
                      transform: "translateX(-50%)",
                    }}
                  >
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[hsl(var(--accent))] flex items-center justify-center shadow-lg">
                      <span className="text-[hsl(var(--accent-foreground))] text-xs font-bold">
                        ↔
                      </span>
                    </div>
                  </div>

                  {/* Labels */}
                  <span className="absolute top-3 left-3 bg-[hsl(var(--construction-dark)/0.7)] text-[hsl(var(--primary-foreground))] text-xs font-display font-bold px-2 py-1 rounded">
                    Before
                  </span>

                  <span className="absolute top-3 right-3 bg-[hsl(var(--accent)/0.9)] text-[hsl(var(--accent-foreground))] text-xs font-display font-bold px-2 py-1 rounded">
                    After
                  </span>

                  {/* Slider */}
                  <input
                    type="range"
                    min={0}
                    max={100}
                    value={sliderVal}
                    onChange={(e) =>
                      setActiveSlider((prev) => ({
                        ...prev,
                        [idx]: Number(e.target.value),
                      }))
                    }
                    className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize"
                  />
                </div>

                <div className="p-4">
                  {/* <h3 className="font-display font-bold text-[hsl(var(--foreground))]">
                    {item.title}
                  </h3>

                  <p className="text-sm text-[hsl(var(--muted-foreground))]">
                    {item.type}
                  </p> */}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;