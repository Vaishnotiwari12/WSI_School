import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
// I imported ChevronDown, User, and GraduationCap icons here for the dropdown!
import { Phone, Mail, Menu, X, Layers, MapPin, ChevronDown, User, GraduationCap } from "lucide-react";
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
  const [isScrolled, setIsScrolled] = useState(false);
  
  // New state to handle the mobile dropdown toggle
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

  // This detects when you scroll down to make the header dynamically shrink
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    <header className={`w-full bg-white sticky top-0 z-50 transition-all duration-300 ${isScrolled ? "shadow-lg" : "shadow-sm"}`}>
      
      {/* Top announcement bar - with COMPLETELY MOVING text */}
      <div className="bg-[#0b3a8f] text-white text-xs md:text-sm overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between gap-4">
          
          {/* Dynamic Scrolling Marquee Area */}
          <div className="flex items-center gap-2 overflow-hidden w-full">
            <Layers className="w-4 h-4 text-emerald-300 shrink-0 z-10 bg-[#0b3a8f]" />
            <div className="w-full overflow-hidden relative flex items-center">
              <style>
                {`
                  @keyframes scrollText {
                    from { transform: translateX(100vw); }
                    to { transform: translateX(-100%); }
                  }
                  .moving-text {
                    display: inline-block;
                    white-space: nowrap;
                    animation: scrollText 25s linear infinite;
                  }
                  .moving-text:hover {
                    animation-play-state: paused;
                  }
                `}
              </style>
              <div className="moving-text opacity-90 font-medium">
                Admissions Open 2025-26 &nbsp;&nbsp; | &nbsp;&nbsp; Affiliated with CBSE Board &nbsp;&nbsp; | &nbsp;&nbsp; Nurturing Excellence Since 2005 &nbsp;&nbsp; | &nbsp;&nbsp; Enroll Today!
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-4 shrink-0 bg-[#0b3a8f] pl-4 z-10 relative">
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

      {/* Main header - Padding and logo size shrink dynamically based on isScrolled */}
      <div className={`max-w-7xl mx-auto px-4 flex items-center justify-between gap-4 transition-all duration-300 ${isScrolled ? "py-2" : "py-4"}`}>
        <Link to="/" className="flex items-center gap-3">
          <img 
            src="/SchoolLogo.jpeg" 
            alt="Wonder Star International School Logo" 
            className={`w-auto object-contain transition-all duration-300 ${isScrolled ? "h-12 md:h-14" : "h-16 md:h-20"}`} 
          />
          
          <div>
            <h1 className={`font-bold text-[#0b3a8f] leading-tight font-serif transition-all duration-300 ${isScrolled ? "text-base md:text-xl" : "text-lg md:text-2xl"}`}>
              Wonder Star International School
            </h1>
            <div className="flex items-center gap-2 mt-1 flex-wrap">
              <span className="flex items-center gap-1 text-xs text-slate-600">
                <MapPin className="w-3 h-3" /> {schoolInfo.addressShort}
              </span>
              <span className="text-[10px] md:text-xs bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded font-semibold">CBSE Affiliated</span>
              <span className="text-[10px] md:text-xs bg-amber-100 text-amber-800 px-2 py-0.5 rounded font-semibold hidden md:inline-block">Est. 2005</span>
            </div>
          </div>
        </Link>

        {/* DESKTOP BADGE: Hidden on mobile, visible on large screens */}
        <div className={`hidden lg:block transition-all duration-300 origin-right ${isScrolled ? "scale-90" : "scale-100"}`}>
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
      <nav className="bg-[#0b3a8f] text-white border-t-4 border-emerald-500 shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="hidden lg:flex items-center justify-between">
            
            <ul className="flex items-center">
              {/* Standard Links */}
              {navLinks.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      `inline-block px-6 transition-all duration-300 font-semibold uppercase tracking-wide relative ${
                        isScrolled ? "py-2.5 text-xs" : "py-4 text-sm"
                      } ${
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

              {/* NEW DESKTOP SIGN IN DROPDOWN */}
              <li className="relative group">
                <button 
                  className={`flex items-center gap-1.5 px-6 transition-all duration-300 font-semibold uppercase tracking-wide ${
                    isScrolled ? "py-2.5 text-xs" : "py-4 text-sm"
                  } hover:text-emerald-300`}
                >
                  Sign In <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
                </button>
                
                {/* Dropdown Box */}
                <div className="absolute top-full right-0 w-48 bg-white text-[#0b3a8f] shadow-xl rounded-b-lg overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border-t-[3px] border-emerald-500">
                  <Link 
                    to="/student-login" 
                    className="flex items-center gap-3 px-4 py-3.5 hover:bg-slate-50 hover:text-emerald-600 transition-colors font-semibold text-sm border-b border-slate-100"
                  >
                    <GraduationCap className="w-4 h-4 text-emerald-500" /> Student Portal
                  </Link>
                  <Link 
                    to="/teacher-login" 
                    className="flex items-center gap-3 px-4 py-3.5 hover:bg-slate-50 hover:text-emerald-600 transition-colors font-semibold text-sm"
                  >
                    <User className="w-4 h-4 text-[#0b3a8f]" /> Teacher Portal
                  </Link>
                </div>
              </li>
            </ul>

            <a
              href={`tel:${schoolInfo.primaryPhone}`}
              className={`flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-md font-semibold transition-all duration-300 ${isScrolled ? "px-4 py-1.5 text-xs" : "px-5 py-2 text-sm"}`}
            >
              <Phone className="w-4 h-4" /> {schoolInfo.primaryPhone}
            </a>
          </div>
        </div>

        {/* MOBILE MENU */}
        {open && (
          <div className="lg:hidden bg-[#0b3a8f] border-t border-white/10 max-h-[75vh] overflow-y-auto">
            
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

              {/* NEW MOBILE SIGN IN DROPDOWN */}
              <li>
                <button 
                  onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                  className="flex items-center justify-between w-full px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white hover:bg-white/5"
                >
                  <span>Sign In</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${mobileDropdownOpen ? "rotate-180" : ""}`} />
                </button>
                
                {/* Mobile Submenu Items */}
                <div className={`overflow-hidden transition-all duration-300 bg-black/20 ${mobileDropdownOpen ? "max-h-40" : "max-h-0"}`}>
                  <Link 
                    to="/student-login" 
                    onClick={() => setOpen(false)} 
                    className="flex items-center gap-3 px-10 py-3 text-sm font-semibold text-emerald-100 hover:text-emerald-300 hover:bg-white/5"
                  >
                    <GraduationCap className="w-4 h-4" /> Student Portal
                  </Link>
                  <Link 
                    to="/teacher-login" 
                    onClick={() => setOpen(false)} 
                    className="flex items-center gap-3 px-10 py-3 text-sm font-semibold text-emerald-100 hover:text-emerald-300 hover:bg-white/5 border-t border-white/5"
                  >
                    <User className="w-4 h-4" /> Teacher Portal
                  </Link>
                </div>
              </li>

              <li className="px-6 py-4 mt-2 border-t border-white/10">
                <a
                  href={`tel:${schoolInfo.primaryPhone}`}
                  className="flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-5 py-3 rounded-md font-semibold text-sm transition-colors"
                >
                  <Phone className="w-5 h-5" /> Tap to Call
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}