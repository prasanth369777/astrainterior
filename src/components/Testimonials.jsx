import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Julianne Moore",
    location: "The Heights Penthouse",
    role: "Homeowner",
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300",
    content: "Astra Interior didn't just design a home; they curated a sanctuary. The way they balanced the dark walnut textures with natural light in our penthouse is absolute mastery.",
    rating: 5,
  },
  {
    name: "Adrian Sterling",
    location: "Sterling & Co. Offices",
    role: "Founding Partner",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300",
    content: "Their attention to architectural detail is unmatched. They managed the entire execution—from the custom marble foyer to the smart lighting—with surgical precision.",
    rating: 5,
  },
  {
    name: "Elena Rodriguez",
    location: "Coastal Villa",
    role: "Architect",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300",
    content: "As an architect, I am selective about collaborators. Astra's bespoke furniture workshop delivered pieces that are effectively habitable art. A true legacy firm.",
    rating: 5,
  },
  {
    name: "Victor Thorne",
    location: "Heritage Estate",
    role: "Collector",
    image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300",
    content: "The sofa redesign service gave my family heirlooms a second life. The Italian velvet and structural restoration work was flawless. Exceptional craftsmanship.",
    rating: 5,
  },
];

function TestimonialCard({ testimonial }) {
  return (
    <div className="group relative bg-white p-10 border border-stone-100 hover:shadow-[30px_30px_60px_-15px_rgba(44,30,20,0.1)] transition-all duration-700 w-full">
      <div className="absolute top-10 right-10 text-[#A68A64]/10 group-hover:text-[#A68A64]/20 transition-colors">
        <Quote className="w-12 h-12" />
      </div>

      <div className="relative z-10">
        <div className="flex items-center mb-8 space-x-1">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} className="w-3 h-3 text-[#A68A64] fill-current" />
          ))}
        </div>

        <p className="text-[#2C1E14] font-serif italic text-xl mb-10 leading-relaxed">
          "{testimonial.content}"
        </p>

        <div className="flex items-center border-t border-stone-100 pt-8">
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="w-14 h-14 object-cover mr-6 grayscale group-hover:grayscale-0 transition-all duration-500"
          />
          <div>
            <h4 className="text-[#2C1E14] font-serif font-bold text-lg tracking-tight">{testimonial.name}</h4>
            <p className="text-[10px] uppercase tracking-[0.2em] text-[#A68A64] font-bold">
              {testimonial.role} — {testimonial.location}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-32 bg-[#FAF9F6] relative overflow-hidden font-sans">
      
      {/* SVG BACKGROUND: ARCHITECTURAL RADIUS & GRID */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
          <circle cx="500" cy="500" r="400" fill="none" stroke="#2C1E14" strokeWidth="1" strokeDasharray="20 20" />
          <path d="M0 500 H1000 M500 0 V1000" stroke="#2C1E14" strokeWidth="0.5" />
          <pattern id="dot-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" fill="#A68A64" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#dot-pattern)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <div className="max-w-3xl">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-[1px] bg-[#A68A64]"></div>
              <span className="text-[#A68A64] uppercase tracking-[0.4em] text-xs font-bold">Client Perspectives</span>
            </div>
            <h2 className="text-5xl md:text-8xl font-serif text-[#2C1E14] leading-[0.9] tracking-tighter">
              Shared <br />
              <span className="italic bg-gradient-to-r from-[#2C1E14] via-[#A68A64] to-[#2C1E14] bg-clip-text text-transparent pb-2">Experiences.</span>
            </h2>
          </div>
          <p className="text-stone-500 max-w-sm italic font-light text-lg border-l border-stone-200 pl-8">
            "Authenticity is the soul of our craft. Hear from those who have entrusted us with their private sanctuaries."
          </p>
        </div>

        {/* Staggered Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="space-y-10 lg:pt-20">
            {testimonials.filter((_, i) => i % 2 === 0).map((t, i) => (
              <TestimonialCard key={`left-${i}`} testimonial={t} />
            ))}
          </div>
          <div className="space-y-10">
            {testimonials.filter((_, i) => i % 2 !== 0).map((t, i) => (
              <TestimonialCard key={`right-${i}`} testimonial={t} />
            ))}
          </div>
        </div>

        {/* Stats Section with Brown Gradient Elements */}
        <div className="mt-32 pt-20 border-t border-stone-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
            <div>
              <div className="text-5xl font-serif text-[#2C1E14] mb-3">40+</div>
              <div className="text-[10px] uppercase tracking-[0.3em] text-[#A68A64] font-bold">Sanctuaries Delivered</div>
            </div>
            <div className="relative">
              <div className="hidden md:block absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-px h-12 bg-stone-200"></div>
              <div className="text-5xl font-serif text-[#2C1E14] mb-3">98%</div>
              <div className="text-[10px] uppercase tracking-[0.3em] text-[#A68A64] font-bold">Client Retention</div>
              <div className="hidden md:block absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-px h-12 bg-stone-200"></div>
            </div>
            <div>
              <div className="text-5xl font-serif text-[#2C1E14] mb-3">12</div>
              <div className="text-[10px] uppercase tracking-[0.3em] text-[#A68A64] font-bold">Design Awards</div>
            </div>
          </div>
        </div>
      </div>

      {/* Large Watermark */}
      <div className="absolute -bottom-10 right-0 opacity-[0.03] pointer-events-none select-none">
        <h2 className="text-[25vw] font-serif leading-none text-[#2C1E14] tracking-tighter">VOICES</h2>
      </div>
    </section>
  );
}