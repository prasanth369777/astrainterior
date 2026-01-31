import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock, Home } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    budget: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Inquiry submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="relative py-32 bg-[#FAF9F6] overflow-hidden font-sans">
      
      {/* --- SVG BACKGROUND: ARCHITECTURAL SITE PLAN --- */}
      <div className="absolute inset-0 z-0 opacity-[0.04] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <pattern id="site-plan" width="200" height="200" patternUnits="userSpaceOnUse">
            <path d="M 0 0 L 200 0 M 0 0 L 0 200" fill="none" stroke="#2C1E14" strokeWidth="0.5" />
            <circle cx="100" cy="100" r="40" fill="none" stroke="#A68A64" strokeWidth="0.5" strokeDasharray="5 5" />
            <path d="M 100 60 L 100 140 M 60 100 L 140 100" stroke="#A68A64" strokeWidth="0.5" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#site-plan)" />
        </svg>
      </div>

      {/* Subtle Bronze Glows for depth */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#A68A64]/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16">
        
        {/* Header */}
        <div className="text-center mb-24">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="w-12 h-[1px] bg-[#A68A64]"></div>
            <span className="text-[#A68A64] uppercase tracking-[0.4em] text-xs font-bold">Project Inquiry</span>
            <div className="w-12 h-[1px] bg-[#A68A64]"></div>
          </div>
          <h2 className="text-5xl md:text-8xl font-serif text-[#2C1E14] leading-none tracking-tighter mb-8">
            Begin Your <br />
            <span className="italic bg-gradient-to-r from-[#2C1E14] via-[#A68A64] to-[#2C1E14] bg-clip-text text-transparent pb-2">
              Sanctuary
            </span>
          </h2>
          <p className="text-stone-500 text-xl font-light max-w-2xl mx-auto leading-relaxed italic">
            "We are currently accepting bespoke projects for the 2026 season. Let us translate your vision into a living masterpiece."
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Inquiry Form (7 cols) */}
          <div className="lg:col-span-7 bg-white p-10 md:p-16 shadow-[30px_30px_60px_-15px_rgba(44,30,20,0.08)] border border-stone-50">
            <form onSubmit={handleSubmit} className="space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-stone-400 font-bold">Full Name</label>
                  <input
                    name="name"
                    onChange={handleChange}
                    className="w-full pb-4 bg-transparent border-b border-stone-200 text-[#2C1E14] focus:outline-none focus:border-[#A68A64] transition-colors placeholder:text-stone-300 font-serif"
                    placeholder="Alexander Thorne"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-stone-400 font-bold">Email Address</label>
                  <input
                    name="email"
                    onChange={handleChange}
                    className="w-full pb-4 bg-transparent border-b border-stone-200 text-[#2C1E14] focus:outline-none focus:border-[#A68A64] transition-colors placeholder:text-stone-300"
                    placeholder="alex@prestige.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-stone-400 font-bold">Project Type</label>
                  <select
                    name="projectType"
                    className="w-full pb-4 bg-transparent border-b border-stone-200 text-[#2C1E14] focus:outline-none focus:border-[#A68A64] transition-colors cursor-pointer"
                  >
                    <option>Residential Renovation</option>
                    <option>Commercial/Boutique Office</option>
                    <option>Bespoke Furniture Commission</option>
                    <option>Full Interior Transformation</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-stone-400 font-bold">Estimated Investment</label>
                  <select
                    name="budget"
                    className="w-full pb-4 bg-transparent border-b border-stone-200 text-[#2C1E14] focus:outline-none focus:border-[#A68A64] transition-colors cursor-pointer"
                  >
                    <option>$25k - $50k</option>
                    <option>$50k - $150k</option>
                    <option>$150k - $500k</option>
                    <option>$500k+</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-stone-400 font-bold">Spatial Vision</label>
                <textarea
                  name="message"
                  rows={4}
                  className="w-full pb-4 bg-transparent border-b border-stone-200 text-[#2C1E14] focus:outline-none focus:border-[#A68A64] transition-colors resize-none placeholder:text-stone-300 font-light"
                  placeholder="Describe your aesthetic goals and spatial requirements..."
                />
              </div>

              <button className="group relative w-full py-6 bg-[#2C1E14] text-white flex items-center justify-center space-x-4 overflow-hidden transition-all duration-500">
                <span className="relative z-10 uppercase tracking-[0.4em] text-xs font-bold">Send Private Inquiry</span>
                <Send className="relative z-10 w-4 h-4 group-hover:translate-x-2 group-hover:-translate-y-1 transition-transform" />
                <div className="absolute inset-0 bg-[#A68A64] translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
              </button>
            </form>
          </div>

          {/* Contact Info Side (5 cols) */}
          <div className="lg:col-span-5 space-y-10">
            <div className="bg-[#2C1E14] text-white p-12 shadow-2xl relative overflow-hidden">
              <Home className="absolute -right-8 -bottom-8 w-48 h-48 text-white/5 opacity-10" />
              
              <h3 className="text-3xl font-serif mb-10 relative z-10">The Design Atelier</h3>
              <div className="space-y-10 relative z-10">
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-stone-800 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-[#A68A64]" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-[#A68A64] font-bold mb-2">Studio Location</p>
                    <p className="text-stone-300 font-light leading-relaxed">Race Course, Coimbatore<br />Tamil Nadu, India</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-stone-800 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-[#A68A64]" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-[#A68A64] font-bold mb-2">Concierge</p>
                    <p className="text-stone-300 font-light">curate@astra-interior.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-stone-800 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-[#A68A64]" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-[#A68A64] font-bold mb-2">Inquiries</p>
                    <p className="text-stone-300 font-light">+91 85319 85733</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-10 border border-stone-200 bg-white">
              <div className="flex items-center space-x-3 mb-6">
                <Clock className="w-5 h-5 text-[#A68A64]" />
                <h4 className="font-serif text-[#2C1E14] text-xl italic">Atelier Hours</h4>
              </div>
              <div className="space-y-3 text-stone-500 text-sm font-light">
                <div className="flex justify-between border-b border-stone-100 pb-2">
                  <span>Monday — Friday</span>
                  <span className="text-[#2C1E14] font-medium">09:00 — 18:00</span>
                </div>
                <div className="flex justify-between border-b border-stone-100 pb-2">
                  <span>Saturday</span>
                  <span className="text-[#2C1E14] font-medium">10:00 — 16:00</span>
                </div>
                <p className="text-[10px] text-stone-400 italic pt-4">Site visits and studio walkthroughs by prior appointment only.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Section Title Watermark */}
      <div className="absolute -bottom-10 left-0 w-full opacity-[0.02] pointer-events-none select-none">
        <h2 className="text-[25vw] font-serif leading-none text-[#2C1E14] tracking-tighter">ASTRA</h2>
      </div>
    </section>
  );
}