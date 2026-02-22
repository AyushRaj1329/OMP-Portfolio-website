import { useState } from "react";

const galleryItems = [
  {
    title: "NH-47 Highway Extension",
    type: "Road Construction",
    before: "https://images.unsplash.com/photo-1517089596392-fb9a9033e05b?w=600&h=400&fit=crop",
    after: "https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?w=600&h=400&fit=crop",
  },
  {
    title: "Municipal Drainage System",
    type: "Drainage",
    before: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop",
    after: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&h=400&fit=crop",
  },
  {
    title: "Green Valley Township",
    type: "Residential",
    before: "https://images.unsplash.com/photo-1429497419816-9ca5cfb4571a?w=600&h=400&fit=crop",
    after: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop",
  },
  {
    title: "Sewage Treatment Plant",
    type: "Sewage System",
    before: "https://images.unsplash.com/photo-1590846083693-f23fdede3a7e?w=600&h=400&fit=crop",
    after: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop",
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
                  <h3 className="font-display font-bold text-[hsl(var(--foreground))]">
                    {item.title}
                  </h3>

                  <p className="text-sm text-[hsl(var(--muted-foreground))]">
                    {item.type}
                  </p>
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