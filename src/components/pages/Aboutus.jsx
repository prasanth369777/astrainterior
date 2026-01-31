import React, { useEffect, useState } from "react";

import Tilt from "react-parallax-tilt";
import Lenis from "@studio-freight/lenis";
import { Ruler, Sparkles, Hammer, Award, Compass, PenTool, ClipboardCheck, Key } from "lucide-react";

// Team images (Paths remain the same)
import Person1Img from '../../assests/team/person1.webp';
import Person2Img from '../../assests/team/person1.webp';
import Person3Img from '../../assests/team/person1.webp';
import Person4Img from '../../assests/team/person1.webp';
import Person5Img from '../../assests/team/person1.webp';

const values = [
  { icon: Ruler, title: "Precision Planning", description: "Every millimeter is calculated to balance structural integrity with aesthetic flow." },
  { icon: Sparkles, title: "Curated Elegance", description: "We source rare materials and artisanal textures to create unique living sanctuaries." },
  { icon: Hammer, title: "Artisanal Craft", description: "Our bespoke furniture and cabinetry are hand-finished by master craftsmen." },
  { icon: Award, title: "Timeless Quality", description: "We design for longevity, ensuring your space matures beautifully over decades." },
];

const team = [
  { name: "Prasanth", role: "Principal Designer", image: Person1Img },
  { name: "Prasant", role: "Master Craftsman", image: Person2Img },
  { name: "Prasant", role: "Project Lead", image: Person3Img },
  { name: "Prasant", role: "Technical Architect", image: Person4Img },
  { name: "Prasant", role: "Creative Stylist", image: Person5Img },
];

const processSteps = [
  { title: "Discovery", description: "A deep dive into your lifestyle and spatial requirements.", icon: Compass },
  { title: "Design Concept", description: "Creating mood boards, 3D renders, and material palettes.", icon: PenTool },
  { title: "Curation & Build", description: "Sourcing premium materials and executing with precision.", icon: ClipboardCheck },
  { title: "The Reveal", description: "A seamless handover of your new curated sanctuary.", icon: Key },
];

export default function Aboutus() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.1, smoothWheel: true });
    function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => setCursorPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="bg-[#FAF9F6]">
    

      <section id="about" className="relative py-32 overflow-hidden font-sans">
        
        {/* --- ARCHITECTURAL SVG BACKGROUND --- */}
        <div className="absolute inset-0 z-0 opacity-[0.04] pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M 100 0 L 0 0 0 100" fill="none" stroke="#2C1E14" strokeWidth="1"/>
                <circle cx="50" cy="50" r="1.5" fill="#A68A64" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* Floating Bronze Glow */}
        <div className="absolute rounded-full w-[500px] h-[500px] bg-[#A68A64]/10 blur-[120px] pointer-events-none transition-transform duration-1000" 
             style={{ transform: `translate(${cursorPos.x * 0.01}px, ${cursorPos.y * 0.01}px)` }} />

        <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16">
          
          {/* Section Header */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 gap-12">
            <div className="max-w-4xl">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-16 h-[1px] bg-[#A68A64]"></div>
                <span className="text-[#A68A64] uppercase tracking-[0.5em] text-xs font-bold">About Astra Interior</span>
              </div>
              <h2 className="text-6xl md:text-8xl font-serif text-[#2C1E14] leading-[0.95] tracking-tighter">
                Refining the <br /> 
                <span className="italic bg-gradient-to-r from-[#2C1E14] via-[#A68A64] to-[#2C1E14] bg-clip-text text-transparent pb-2 font-light">Art of Living.</span>
              </h2>
            </div>
            <div className="max-w-md">
              <p className="text-xl text-stone-600 leading-relaxed font-light italic mb-6">
                "In 2 years, we have delivered 40+ sanctuaries, blending architectural rigor with the soul of modern design."
              </p>
              <div className="h-[2px] w-20 bg-[#2C1E14]"></div>
            </div>
          </div>

          {/* Values Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
            {values.map((value, index) => (
              <Tilt key={index} tiltMaxAngleX={5} tiltMaxAngleY={5} className="w-full group">
                <div className="bg-white p-10 border border-stone-100 shadow-sm transition-all duration-500 group-hover:shadow-[20px_20px_60px_-15px_rgba(44,30,20,0.1)] group-hover:-translate-y-2">
                  <div className="w-14 h-14 flex items-center justify-center bg-[#FAF9F6] border border-[#A68A64]/20 mb-8 transition-colors group-hover:bg-[#2C1E14]">
                    <value.icon className="w-6 h-6 text-[#A68A64] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-2xl font-serif text-[#2C1E14] mb-4">{value.title}</h3>
                  <p className="text-stone-500 text-sm leading-relaxed font-light">{value.description}</p>
                </div>
              </Tilt>
            ))}
          </div>

          {/* Staggered Vertical Process Roadmap */}
          <div className="mb-40">
            <div className="text-center mb-20">
              <h3 className="text-4xl md:text-6xl font-serif text-[#2C1E14]">The <span className="italic text-[#A68A64]">Astra</span> Methodology</h3>
            </div>
            <div className="relative max-w-5xl mx-auto">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[1px] bg-stone-200 hidden md:block"></div>
              <div className="space-y-24 md:space-y-0">
                {processSteps.map((step, idx) => (
                  <div key={idx} className={`relative flex items-center justify-between w-full md:pb-32 last:pb-0 ${idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                    <div className="w-full md:w-[42%] group">
                      <div className="bg-white p-10 border border-stone-100 shadow-sm transition-all duration-700 group-hover:shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                           <step.icon className="w-24 h-24 text-[#2C1E14]" />
                        </div>
                        <span className="text-[10px] uppercase tracking-[0.4em] text-[#A68A64] font-bold mb-4 block">Phase 0{idx + 1}</span>
                        <h4 className="text-3xl font-serif text-[#2C1E14] mb-4 tracking-tight">{step.title}</h4>
                        <p className="text-stone-500 text-sm leading-relaxed font-light">{step.description}</p>
                      </div>
                    </div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-2 border-[#A68A64] rounded-full z-20 hidden md:block group-hover:bg-[#2C1E14] transition-colors"></div>
                    <div className="hidden md:block w-[42%]"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Leadership Team */}
          <div className="mb-32">
            <h3 className="text-4xl md:text-6xl font-serif text-center text-[#2C1E14] mb-20">The <span className="italic text-[#A68A64]">Visionaries</span></h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {team.map((member, index) => (
                <div key={index} className="group text-center">
                  <div className="relative mb-6 overflow-hidden aspect-[4/5] bg-stone-200">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2C1E14]/40 to-transparent"></div>
                  </div>
                  <h4 className="text-2xl font-serif text-[#2C1E14] mb-1">{member.name}</h4>
                  <p className="text-[#A68A64] text-[10px] uppercase tracking-widest font-bold">{member.role}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action: Large Gradient Banner */}
          <div className="relative overflow-hidden bg-gradient-to-br from-[#2C1E14] to-[#4A3728] p-16 md:p-24 text-center">
             {/* Pattern overlay for CTA */}
            <div className="absolute inset-0 opacity-10"><svg width="100%" height="100%"><rect width="100%" height="100%" fill="url(#grid)" /></svg></div>
            
            <h3 className="relative z-10 text-4xl md:text-6xl font-serif text-white mb-8 leading-tight">
              Ready to <span className="italic text-[#A68A64]">Astra-fy</span> <br /> your sanctuary?
            </h3>
            <p className="relative z-10 text-stone-300 text-lg mb-12 max-w-2xl mx-auto font-light leading-relaxed">
              With 40+ projects completed, we bring the wealth of experience and the precision of craftsmanship to your doorstep.
            </p>
            <button 
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })} 
              className="relative z-10 px-12 py-5 bg-[#A68A64] text-white uppercase tracking-[0.3em] text-xs font-bold hover:bg-white hover:text-[#2C1E14] transition-all duration-500 shadow-2xl"
            >
              Start a Conversation
            </button>
          </div>

        </div>
      </section>

     
    </div>
  );
}