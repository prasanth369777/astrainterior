import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, ShoppingBag } from "lucide-react";
import logo from "../assests/BUS (38).png"; // Ensure this matches your Astra logo path

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for glassmorphism
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled 
          ? "bg-[#FAF9F6]/90 backdrop-blur-md py-4 shadow-sm" 
          : "bg-transparent py-8"
      }`}
    >
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 flex justify-between items-center">
        
        {/* Brand Logo & Name */}
        <Link to="/" className="flex items-center space-x-4 group">
          <img
            src={logo}
            alt="Astra Interior Logo"
            className="h-12 w-12 object-contain transition-transform duration-700 group-hover:rotate-[360deg]"
          />
          <span className="font-serif text-2xl tracking-tighter text-[#2C1E14] font-bold">
            ASTRA <span className="italic font-light text-[#A68A64]">INTERIOR</span>
          </span>
        </Link>

        {/* Desktop Navigation: Editorial Style */}
        <div className="hidden md:flex items-center space-x-12">
          {[
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
            { name: "Services", path: "/services" },
            { name: "Portfolio", path: "/port" },
            { name: "Journal", path: "/blog" },
          ].map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `relative text-[11px] uppercase tracking-[0.3em] font-bold transition-all duration-300 ${
                  isActive
                    ? "text-[#A68A64] after:absolute after:bottom-[-8px] after:left-0 after:w-full after:h-[1px] after:bg-[#A68A64]"
                    : "text-[#2C1E14] hover:text-[#A68A64]"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Action Icons: E-commerce Feel */}
        <div className="hidden md:flex items-center space-x-8 border-l border-stone-200 pl-8">
          <button className="relative text-[#2C1E14] hover:text-[#A68A64] transition-colors">
            <ShoppingBag className="w-5 h-5" />
            <span className="absolute -top-2 -right-2 bg-[#A68A64] text-white text-[9px] rounded-full w-4 h-4 flex items-center justify-center font-bold">
              0
            </span>
          </button>
          <Link 
            to="/contact" 
            className="px-8 py-3 bg-[#2C1E14] text-white text-[10px] uppercase tracking-widest font-bold hover:bg-[#4A3728] transition-all"
          >
            Inquire
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-[#2C1E14]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Full-Screen Menu */}
      <div
        className={`fixed inset-0 bg-[#FAF9F6] z-[-1] flex flex-col items-center justify-center space-y-8 transition-all duration-700 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible translate-y-[-20px]"
        }`}
      >
        {[
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
          { name: "Portfolio", path: "/port" },
          { name: "Journal", path: "/blog" },
          { name: "Contact", path: "/contact" },
        ].map((link) => (
          <NavLink
            key={link.name}
            to={link.path}
            onClick={() => setIsOpen(false)}
            className="text-4xl font-serif text-[#2C1E14] hover:italic hover:text-[#A68A64] transition-all"
          >
            {link.name}
          </NavLink>
        ))}
        <div className="pt-12 border-t border-stone-200 w-2/3 text-center">
          <p className="text-[10px] uppercase tracking-[0.4em] text-[#A68A64] font-bold">
            Astra Interior Studio
          </p>
        </div>
      </div>
    </nav>
  );
}