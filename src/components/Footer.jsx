import { Facebook, Twitter, Instagram, Linkedin, ArrowRight } from 'lucide-react';
import Logo from '../assests/BUS (38).png'; // Ensure you have your Astra logo

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#2C1E14] overflow-hidden">
      {/* SVG BACKGROUND: TEXTILE WEAVE PATTERN */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <pattern id="footer-weave" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M0 20 L40 20 M20 0 L20 40" fill="none" stroke="#FAF9F6" strokeWidth="0.5" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#footer-weave)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 lg:px-16 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          
          {/* Brand Identity */}
          <div className="space-y-8">
            <div className="mb-6">
              <img src={Logo} alt="Astra Interior" className="h-16 w-auto brightness-0 invert" />
            </div>
            <p className="text-stone-400 leading-relaxed font-light italic text-lg">
              "Crafting timeless sanctuaries where architectural precision meets the soul of modern living."
            </p>
            <div className="flex space-x-5">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                <a
                  key={index}
                  href="/contact"
                  className="w-10 h-10 border border-stone-700 flex items-center justify-center text-stone-400 hover:text-white hover:border-[#A68A64] transition-all duration-500 rounded-none"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Curated Services */}
          <div>
            <h4 className="text-[#A68A64] font-serif font-bold mb-8 text-xl tracking-tight">Our Expertise</h4>
            <ul className="space-y-4">
              {[
                'Full Interior Design',
                'Bespoke Furniture',
                'Electrical & Lighting',
                'Sofa Redesign',
                'Commercial Spaces',
                'Material Consultation'
              ].map((item) => (
                <li key={item}>
                  <a href="/contact" className="text-stone-400 hover:text-[#A68A64] transition-all flex items-center group text-sm uppercase tracking-widest font-medium">
                    <span className="w-0 group-hover:w-4 h-[1px] bg-[#A68A64] mr-0 group-hover:mr-2 transition-all duration-300"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Studio Links */}
          <div>
            <h4 className="text-[#A68A64] font-serif font-bold mb-8 text-xl tracking-tight">The Studio</h4>
            <ul className="space-y-4">
              {[
                'About Astra',
                'Featured Work',
                'Design Journal',
                'Our Process',
                'Private Inquiry',
                'Careers'
              ].map((item) => (
                <li key={item}>
                  <a href="/contact" className="text-stone-400 hover:text-[#A68A64] transition-all flex items-center group text-sm uppercase tracking-widest font-medium">
                    <span className="w-0 group-hover:w-4 h-[1px] bg-[#A68A64] mr-0 group-hover:mr-2 transition-all duration-300"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter / Exclusive Access */}
          <div className="bg-[#36271C] p-8 border border-stone-800">
            <h4 className="text-white font-serif font-bold mb-4 text-xl">The Newsletter</h4>
            <p className="text-stone-400 mb-8 text-sm font-light leading-relaxed">
              Join our exclusive list for seasonal design catalogs and bespoke furniture releases.
            </p>
            <div className="relative flex flex-col space-y-4">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-0 py-3 bg-transparent border-b border-stone-700 text-white placeholder-stone-600 focus:outline-none focus:border-[#A68A64] transition-colors"
              />
              <button className="flex items-center justify-between w-full py-4 bg-[#A68A64] text-white px-6 uppercase tracking-[0.3em] text-[10px] font-bold hover:bg-[#8E7350] transition-all group">
                Subscribe <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-stone-800 pt-12">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
            <div className="flex flex-col items-center lg:items-start space-y-2">
              <p className="text-stone-500 text-[10px] uppercase tracking-[0.4em] font-bold">
                © {currentYear} Astra Interior Design Studio
              </p>
              <p className="text-stone-600 text-[9px] uppercase tracking-widest">
                Handcrafted Excellence in Coimbatore, India.
              </p>
            </div>
            
            <div className="flex space-x-10">
              {['Privacy', 'Legal', 'Shipping'].map((link) => (
                <a key={link} href="/contact" className="text-stone-500 hover:text-[#A68A64] text-[10px] uppercase tracking-widest transition-colors font-bold">
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* LARGE BACKGROUND DECOR */}
      <div className="absolute -bottom-10 left-10 opacity-[0.02] pointer-events-none select-none">
        <h2 className="text-[15vw] font-serif leading-none text-white tracking-tighter">ASTRA</h2>
      </div>
    </footer>
  );
}