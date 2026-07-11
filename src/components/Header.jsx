import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Phone, Mail, Menu, X, Layers, MapPin } from "lucide-react";
import { schoolInfo } from "../data/mock";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/admissions", label: "Admissions" },
  { to: "/faculty", label: "Faculty" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  // We extract the badge into a small constant so we can reuse it on both Desktop and Mobile effortlessly
  const AdmissionBadge = () => (
    <div className="relative group cursor-pointer w-max">
      {/* Animated glowing background */}
      <div className="absolute -inset-0.5 bg-emerald-400 rounded-lg blur opacity-50 animate-pulse"></div>
      
      {/* Main button with hover scale */}
      <div className="relative bg-gradient-to-br from-emerald-600 to-emerald-700 text-white rounded-lg px-5 py-2.5 shadow-md text-center transform transition-transform duration-300 hover:scale-105 border border-emerald-500/50">
        <div className="flex items-center justify-center gap-1.5 text-[10px] uppercase tracking-wider font-semibold">
          {/* Bouncing icon */}
          <Layers className="w-3 h-3 animate-bounce" /> Admission Open
        </div>
        <div className="text-xl font-bold leading-none mt-0.5">2025-26</div>
        <div className="text-[10px] opacity-90 mt-0.5">Session Starting Now</div>
      </div>
    </div>
  );

  return (
    <header className="w-full bg-white sticky top-0 z-50 shadow-sm">
      {/* Top announcement bar */}
      <div className="bg-[#0b3a8f] text-white text-xs md:text-sm">
        <div className="max-w-7xl mx-auto px-4 py-2 flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <Layers className="w-4 h-4 text-emerald-300" />
            <span className="opacity-90">
              Admissions Open 2025-26 | Affiliated with CBSE Board | Nurturing Excellence Since 2005
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a href={`tel:${schoolInfo.primaryPhone}`} className="flex items-center gap-1.5 hover:text-emerald-300 transition-colors">
              <Phone className="w-3.5 h-3.5" />
              <span>{schoolInfo.primaryPhone}</span>
            </a>
            <a href={`mailto:${schoolInfo.email}`} className="flex items-center gap-1.5 hover:text-emerald-300 transition-colors">
              <Mail className="w-3.5 h-3.5" />
              <span>Email Us</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-3">
          <img 
            src="/SchoolLogo.jpeg" 
            alt="Wonder Star International School Logo" 
            className="h-16 md:h-20 w-auto object-contain" 
          />
          
          <div>
            <h1 className="text-lg md:text-2xl font-bold text-[#0b3a8f] leading-tight font-serif">
              Wonder Star International School
            </h1>
            <div className="flex items-center gap-2 mt-1 flex-wrap">
              <span className="flex items-center gap-1 text-xs text-slate-600">
                <MapPin className="w-3 h-3" /> {schoolInfo.addressShort}
              </span>
              <span className="text-[10px] md:text-xs bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded font-semibold">CBSE Affiliated</span>
              <span className="text-[10px] md:text-xs bg-amber-100 text-amber-800 px-2 py-0.5 rounded font-semibold">Est. 2005</span>
            </div>
          </div>
        </Link>

        {/* DESKTOP BADGE: Hidden on mobile, visible on large screens */}
        <div className="hidden lg:block">
          <AdmissionBadge />
        </div>

        <button
          className="lg:hidden p-2 rounded-md hover:bg-slate-100"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X className="w-6 h-6 text-[#0b3a8f]" /> : <Menu className="w-6 h-6 text-[#0b3a8f]" />}
        </button>
      </div>

      {/* Nav bar */}
      <nav className="bg-[#0b3a8f] text-white border-t-4 border-emerald-500">
        <div className="max-w-7xl mx-auto px-4">
          <div className="hidden lg:flex items-center justify-between">
            <ul className="flex items-center">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      `inline-block px-6 py-4 text-sm font-semibold uppercase tracking-wide transition-colors relative ${
                        isActive
                          ? "text-emerald-300 after:absolute after:bottom-0 after:left-4 after:right-4 after:h-0.5 after:bg-emerald-400"
                          : "hover:text-emerald-300"
                      }`
                    }
                    end={link.to === "/"}
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
            <a
              href={`tel:${schoolInfo.primaryPhone}`}
              className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-5 py-2 rounded-md font-semibold text-sm transition-colors"
            >
              <Phone className="w-4 h-4" /> {schoolInfo.primaryPhone}
            </a>
          </div>
        </div>

        {/* MOBILE MENU */}
        {open && (
          <div className="lg:hidden bg-[#0b3a8f] border-t border-white/10">
            
            {/* MOBILE BADGE: Injected at the top of the mobile menu drawer */}
            <div className="flex justify-center pt-6 pb-2">
              <AdmissionBadge />
            </div>

            <ul className="flex flex-col py-2">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `block px-6 py-3 text-sm font-semibold uppercase tracking-wide ${
                        isActive ? "text-emerald-300 bg-white/5" : "text-white hover:bg-white/5"
                      }`
                    }
                    end={link.to === "/"}
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
              <li className="px-6 py-4">
                <a
                  href={`tel:${schoolInfo.primaryPhone}`}
                  className="flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-5 py-3 rounded-md font-semibold text-sm transition-colors"
                >
                  <Phone className="w-5 h-5" /> Tap to Call: {schoolInfo.primaryPhone}
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}