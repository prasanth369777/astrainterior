import { useEffect, useState } from "react";
import { ExternalLink, MoveRight } from "lucide-react";
import Lenis from "@studio-freight/lenis";

const articles = [
  {
    title: "The Alchemy of Light & Shadow",
    description: "How strategic lighting can redefine the architectural boundaries of your living space.",
    author: "Elena Rossi",
    date: "Feb 2026",
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=800",
    tags: ["Atmosphere", "Lighting"],
  },
  {
    title: "Milling the Future: Sustainable Oak",
    description: "A deep dive into our ethical sourcing of heirloom-quality timber from European forests.",
    author: "Marcus Thorne",
    date: "Jan 2026",
    image: "https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?auto=format&fit=crop&q=80&w=800",
    tags: ["Materials", "Craft"],
  },
  {
    title: "Minimalism: The Art of Enough",
    description: "Curating a home that breathes. Why fewer objects lead to a more soulful environment.",
    author: "Sophia Chen",
    date: "Dec 2025",
    image: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&q=80&w=800",
    tags: ["Philosophy", "Minimalism"],
  },
];

export default function DesignJournal() {
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
    <section className="relative py-32 bg-[#FAF9F6] overflow-hidden font-sans">
      
      {/* SVG BACKGROUND: WEAVE TEXTURE */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <pattern id="weave" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M0 20 L40 20 M20 0 L20 40" fill="none" stroke="#2C1E14" strokeWidth="0.5" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#weave)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-[1px] bg-[#A68A64]"></div>
              <span className="text-[#A68A64] uppercase tracking-[0.4em] text-xs font-bold">The Astra Journal</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-serif text-[#2C1E14] leading-none tracking-tighter">
              Curated <br />
              <span className="italic bg-gradient-to-r from-[#2C1E14] via-[#A68A64] to-[#2C1E14] bg-clip-text text-transparent">Insights</span>
            </h2>
          </div>
          <button className="group flex items-center space-x-3 text-stone-500 hover:text-[#2C1E14] transition-colors uppercase tracking-widest text-xs font-bold border-b border-stone-200 pb-2">
            <span>View All Articles</span>
            <MoveRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
          </button>
        </div>

        {/* Journal Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {articles.map((article, idx) => (
            <div
              key={idx}
              className="group flex flex-col bg-white border border-stone-100 shadow-sm hover:shadow-[0_20px_50px_rgba(44,30,20,0.08)] transition-all duration-500"
            >
              <div className="relative h-[400px] overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 grayscale-[0.2] group-hover:grayscale-0"
                />
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-1">
                   <span className="text-[10px] uppercase tracking-widest text-[#A68A64] font-bold">{article.tags[0]}</span>
                </div>
              </div>

              <div className="p-10 flex flex-col flex-1">
                <div className="flex justify-between items-center text-[10px] uppercase tracking-widest text-stone-400 mb-6 font-bold">
                  <span>By {article.author}</span>
                  <div className="w-8 h-[1px] bg-stone-200"></div>
                  <span>{article.date}</span>
                </div>
                
                <h3 className="text-3xl font-serif text-[#2C1E14] mb-6 leading-tight group-hover:text-[#A68A64] transition-colors">
                  {article.title}
                </h3>
                
                <p className="text-stone-500 font-light leading-relaxed mb-8 flex-1">
                  {article.description}
                </p>

                <a
                  href="/blog"
                  className="inline-flex items-center text-[10px] uppercase tracking-[0.3em] font-bold text-[#2C1E14] group-hover:text-[#A68A64] transition-all"
                >
                  Read Journal
                  <ExternalLink className="ml-3 w-3 h-3 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* BACKGROUND WATERMARK */}
      <div className="absolute -bottom-10 left-0 w-full overflow-hidden pointer-events-none select-none opacity-[0.02]">
        <h2 className="text-[20vw] font-serif leading-none text-[#2C1E14]">EDITORIAL</h2>
      </div>

     
      <div
        className="absolute w-64 h-64 bg-[#A68A64]/5 rounded-full blur-[100px] pointer-events-none"
        style={{
          transform: `translate(${cursorPos.x - 128}px, ${cursorPos.y - 128}px)`,
        }}
      />
    </section>
  );
}