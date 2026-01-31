import { useEffect, useState } from "react";
import { Compass, PenTool, ClipboardCheck, Hammer, Key } from "lucide-react";

const steps = [
  { 
    title: "Discovery & Consultation", 
    description: "A deep dive into your lifestyle, aesthetic preferences, and the soulful intent of your space.", 
    icon: Compass, 
    number: "01"
  },
  { 
    title: "Concept Visualization", 
    description: "Translating ideas into immersive 3D renders and tactile mood boards for architectural clarity.", 
    icon: PenTool, 
    number: "02"
  },
  { 
    title: "Material Curation", 
    description: "Sourcing premium marbles, hand-finished timbers, and bespoke textiles from our global artisans.", 
    icon: ClipboardCheck, 
    number: "03"
  },
  { 
    title: "Crafted Execution", 
    description: "Our master craftsmen and engineers bring the vision to life with millimetric precision.", 
    icon: Hammer, 
    number: "04"
  },
  { 
    title: "The Grand Reveal", 
    description: "A seamless handover of your new sanctuary, curated down to the final scent and shadow.", 
    icon: Key, 
    number: "05"
  },
];

export default function Process() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => setCursorPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative py-32 bg-[#FAF9F6] overflow-hidden font-sans">
      
      {/* SVG BACKGROUND: ARCHITECTURAL BLUEPRINT GRID */}
      <div className="absolute inset-0 z-0 opacity-[0.04] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="blueprint-grid" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#2C1E14" strokeWidth="0.5"/>
              <circle cx="0" cy="0" r="1.5" fill="#A68A64" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#blueprint-grid)" />
        </svg>
      </div>

      {/* Floating Light Accents (Subtle Brown Glow) */}
      <div
        className="absolute w-96 h-96 bg-[#A68A64]/10 rounded-full blur-[120px] pointer-events-none transition-transform duration-1000"
        style={{ transform: `translate(${cursorPos.x * 0.01}px, ${cursorPos.y * 0.01}px)` }}
      />

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16">
        
        {/* Section Header */}
        <div className="text-center mb-32">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="w-12 h-[1px] bg-[#A68A64]"></div>
            <span className="text-[#A68A64] uppercase tracking-[0.5em] text-xs font-bold">The Astra Method</span>
            <div className="w-12 h-[1px] bg-[#A68A64]"></div>
          </div>
          <h2 className="text-5xl md:text-8xl font-serif text-[#2C1E14] leading-none tracking-tighter mb-8">
            From Blueprint <br />
            <span className="italic bg-gradient-to-r from-[#2C1E14] via-[#A68A64] to-[#2C1E14] bg-clip-text text-transparent pb-2">
              To Masterpiece
            </span>
          </h2>
          <p className="text-stone-500 text-xl font-light max-w-2xl mx-auto leading-relaxed italic">
            "A structured journey through the art of living well."
          </p>
        </div>

        {/* Vertical Staggered Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Central Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[1px] bg-gradient-to-b from-transparent via-stone-200 to-transparent hidden md:block"></div>

          <div className="space-y-24 md:space-y-0">
            {steps.map((step, idx) => {
              const StepIcon = step.icon;
              const isEven = idx % 2 === 0;

              return (
                <div key={idx} className={`relative flex items-center justify-between w-full md:pb-32 last:pb-0 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  
                  {/* Content Card */}
                  <div className="w-full md:w-[42%] group">
                    <div className="bg-white p-10 border border-stone-100 shadow-sm transition-all duration-700 group-hover:shadow-[30px_30px_60px_-15px_rgba(44,30,20,0.1)] group-hover:-translate-y-2 relative">
                      <span className="absolute -top-6 left-10 text-6xl font-serif text-stone-100 z-0 group-hover:text-[#FAF9F6] transition-colors">
                        {step.number}
                      </span>
                      <div className="relative z-10">
                        <div className="w-12 h-12 bg-[#FAF9F6] border border-[#A68A64]/20 flex items-center justify-center mb-6 transition-colors group-hover:bg-[#2C1E14]">
                          <StepIcon className="w-5 h-5 text-[#A68A64] group-hover:text-white transition-colors" />
                        </div>
                        <h3 className="text-2xl font-serif text-[#2C1E14] mb-4">{step.title}</h3>
                        <p className="text-stone-500 text-sm leading-relaxed font-light font-sans tracking-wide">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Dot on Timeline */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#FAF9F6] border-2 border-[#A68A64] rounded-full z-20 hidden md:block group-hover:bg-[#A68A64] transition-colors duration-500"></div>

                  {/* Empty space for the other side */}
                  <div className="hidden md:block w-[42%]"></div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-40 text-center relative py-20 border-t border-stone-200">
          <h3 className="text-4xl font-serif text-[#2C1E14] mb-10">
            Every Detail <span className="italic text-[#A68A64]">Obsessed</span> Over.
          </h3>
          <button className="px-16 py-6 bg-[#2C1E14] text-white uppercase tracking-[0.4em] text-xs font-bold hover:bg-[#4A3728] transition-all duration-500 shadow-xl">
            Book Your Consultation
          </button>
        </div>
      </div>

      {/* Large Vertical Background Text */}
      <div className="absolute top-1/2 left-0 transform -rotate-90 origin-left opacity-[0.02] pointer-events-none select-none">
        <h2 className="text-[15vw] font-serif leading-none text-[#2C1E14] tracking-tighter">
          METHODOLOGY
        </h2>
      </div>
    </section>
  );
}