import React, { useEffect, useState } from "react";
import Navigation from "../Navigation";

import { MoveRight } from "lucide-react";
import Lenis from "@studio-freight/lenis";

const journalPosts = [
  {
    title: "The Alchemy of Light & Shadow",
    description: "How strategic architectural lighting can redefine the boundaries of a modern living sanctuary.",
    author: "Elena Rossi",
    date: "Feb 2026",
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=800",
    tags: ["Atmosphere", "Lighting"],
  },
  {
    title: "Milling the Future: Sustainable Oak",
    description: "A deep dive into our ethical sourcing of heirloom-quality timber from managed European forests.",
    author: "Marcus Thorne",
    date: "Jan 2026",
    image: "https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?auto=format&fit=crop&q=80&w=800",
    tags: ["Materials", "Craft"],
  },
  {
    title: "Minimalism: The Art of Enough",
    description: "Curating a home that breathes. Why fewer objects lead to a more soulful and focused environment.",
    author: "Sophia Chen",
    date: "Dec 2025",
    image: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&q=80&w=800",
    tags: ["Philosophy", "Minimalism"],
  },
];

const trendingStyles = [
  {
    title: "The 2026 Color Palette",
    description: "Earthy ochres and deep walnuts are making a definitive return to luxury interiors.",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Bespoke Carpentry Trends",
    description: "Integrating smart technology into hand-finished oak cabinetry.",
    image: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "The Return of the Atrium",
    description: "Bringing nature indoors through glass-vaulted ceilings and indoor greenery.",
    image: "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&q=80&w=800",
  },
];

export default function BlogSectionClassic() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const lenis = new Lenis({ smooth: true, lerp: 0.1 });
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
    <>
      <Navigation />

      {/* Main Journal Section */}
      <section className="relative py-32 bg-[#FAF9F6] overflow-hidden font-sans">
        
        {/* SVG BACKGROUND: ARCHITECTURAL BLUEPRINT GRID */}
        <div className="absolute inset-0 z-0 opacity-[0.04] pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="arch-grid" width="80" height="80" patternUnits="userSpaceOnUse">
                <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#2C1E14" strokeWidth="0.5"/>
                <circle cx="40" cy="40" r="1.5" fill="#A68A64" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#arch-grid)" />
          </svg>
        </div>

        <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
            <div className="max-w-2xl">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-[1px] bg-[#A68A64]"></div>
                <span className="text-[#A68A64] uppercase tracking-[0.5em] text-xs font-bold">The Astra Journal</span>
              </div>
              <h2 className="text-6xl md:text-8xl font-serif text-[#2C1E14] leading-[0.9] tracking-tighter">
                Curated <br />
                <span className="italic bg-gradient-to-r from-[#2C1E14] via-[#A68A64] to-[#2C1E14] bg-clip-text text-transparent">Insights.</span>
              </h2>
            </div>
            <p className="text-xl text-stone-500 max-w-sm italic font-light border-l border-stone-200 pl-8">
              "Stay updated with our explorations into the craft of living well."
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {journalPosts.map((post, idx) => (
              <div
                key={idx}
                className="group flex flex-col bg-white border border-stone-100 shadow-sm hover:shadow-[30px_30px_60px_-15px_rgba(44,30,20,0.1)] transition-all duration-700"
              >
                <div className="h-[450px] overflow-hidden relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110 grayscale-[0.3] group-hover:grayscale-0"
                  />
                  <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-1">
                    <span className="text-[10px] uppercase tracking-widest text-[#A68A64] font-bold">{post.tags[0]}</span>
                  </div>
                </div>
                <div className="p-10 flex flex-col flex-1">
                  <div className="flex justify-between items-center text-[10px] uppercase tracking-widest text-stone-400 mb-6 font-bold">
                    <span>By {post.author}</span>
                    <div className="w-8 h-[1px] bg-stone-200"></div>
                    <span>{post.date}</span>
                  </div>
                  <h3 className="text-3xl font-serif text-[#2C1E14] mb-4 leading-tight group-hover:text-[#A68A64] transition-colors">{post.title}</h3>
                  <p className="text-stone-500 font-light leading-relaxed mb-8 flex-1">{post.description}</p>
                  <a
                    href="/contact"
                    className="inline-flex items-center text-[11px] uppercase tracking-[0.3em] font-bold text-[#2C1E14] group-hover:text-[#A68A64] transition-all"
                  >
                    Read Article
                    <MoveRight className="ml-3 w-4 h-4 group-hover:translate-x-2 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Floating Mouse Aura */}
        <div
          className="absolute w-96 h-96 bg-[#A68A64]/5 rounded-full blur-[120px] pointer-events-none transition-transform"
          style={{ transform: `translate(${cursorPos.x - 192}px, ${cursorPos.y - 192}px)` }}
        />
      </section>

      {/* Trending Styles Section (Dark Mode) */}
      <section className="relative py-32 bg-[#2C1E14] text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-[0.05]">
          <svg width="100%" height="100%"><rect width="100%" height="100%" fill="url(#arch-grid)" /></svg>
        </div>

        <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row items-end justify-between mb-24 gap-8">
            <h2 className="text-5xl md:text-7xl font-serif leading-none tracking-tighter">
              Trending <br />
              <span className="italic text-[#A68A64]">Aesthetics</span>
            </h2>
            <p className="text-stone-400 max-w-xs font-light tracking-widest text-[11px] uppercase border-r border-stone-800 pr-8 text-right">
              Global influences shaping our <br /> upcoming 2026 collection.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {trendingStyles.map((news, idx) => (
              <div
                key={idx}
                className="group relative bg-[#36271C]/50 border border-stone-800 p-8 transition-all duration-500 hover:border-[#A68A64]"
              >
                <div className="aspect-video overflow-hidden mb-8">
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                </div>
                <h3 className="text-2xl font-serif text-[#A68A64] mb-4">{news.title}</h3>
                <p className="text-stone-400 font-light leading-relaxed text-sm mb-6">{news.description}</p>
                <div className="h-[1px] w-0 bg-[#A68A64] group-hover:w-full transition-all duration-700"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

 
    </>
  );
}