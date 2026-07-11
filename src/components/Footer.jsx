import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { schoolInfo } from "../data/mock";

export default function Footer() {
  return (
    <footer className="bg-[#08306b] text-white pt-16 pb-6 mt-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* COLUMN 1: Brand & Socials */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            {/* The Logo Image */}
            <img 
              src="/SchoolLogo.jpeg" 
              alt="Wonder Star International School Logo" 
              className="h-14 w-auto object-contain rounded-md" 
            />
            <div>
              <h3 className="font-bold text-lg leading-tight font-serif">Wonder Star</h3>
              <p className="text-xs text-emerald-300">International School</p>
            </div>
          </div>
          <p className="text-sm text-blue-100/80 leading-relaxed">
            CBSE affiliated school in Kanpur, delivering quality education with values from Nursery to Class XII since 2005.
          </p>
          <div className="flex items-center gap-3 mt-5">
            <a href="#" aria-label="Facebook" className="w-9 h-9 rounded-full bg-white/10 hover:bg-emerald-500 flex items-center justify-center transition-colors">
              <FaFacebook className="w-4 h-4" />
            </a>
            <a href="#" aria-label="Instagram" className="w-9 h-9 rounded-full bg-white/10 hover:bg-emerald-500 flex items-center justify-center transition-colors">
              <FaInstagram className="w-4 h-4" />
            </a>
            <a href="#" aria-label="YouTube" className="w-9 h-9 rounded-full bg-white/10 hover:bg-emerald-500 flex items-center justify-center transition-colors">
              <FaYoutube className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* COLUMN 2: Quick Links */}
        <div>
          <h4 className="font-semibold text-base mb-4 text-emerald-300 uppercase tracking-wider text-sm">Quick Links</h4>
          <ul className="space-y-2 text-sm text-blue-100/80">
            <li><Link to="/" className="hover:text-emerald-300 transition-colors">Home</Link></li>
            <li><Link to="/about" className="hover:text-emerald-300 transition-colors">About Us</Link></li>
            <li><Link to="/admissions" className="hover:text-emerald-300 transition-colors">Admissions</Link></li>
            <li><Link to="/faculty" className="hover:text-emerald-300 transition-colors">Faculty</Link></li>
            <li><Link to="/gallery" className="hover:text-emerald-300 transition-colors">Gallery</Link></li>
            <li><Link to="/contact" className="hover:text-emerald-300 transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* COLUMN 3: Contact Info */}
        <div>
          <h4 className="font-semibold text-emerald-300 uppercase tracking-wider text-sm mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-blue-100/80">
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
              <span>{schoolInfo.address}</span>
            </li>
            <li className="flex items-start gap-2">
              <Phone className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
              <span>+91 {schoolInfo.phones[0]} • +91 {schoolInfo.phones[1]}</span>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
              <a href={`mailto:${schoolInfo.email}`} className="break-all hover:text-emerald-300">{schoolInfo.email}</a>
            </li>
            <li className="flex items-start gap-2">
              <Clock className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
              <span>{schoolInfo.hours}</span>
            </li>
          </ul>
        </div>

        {/* COLUMN 4: Newsletter */}
        <div>
          <h4 className="font-semibold text-emerald-300 uppercase tracking-wider text-sm mb-4">Newsletter</h4>
          <p className="text-sm text-blue-100/80 mb-3">Stay updated with our latest events, notices, and announcements.</p>
          <form onSubmit={(e) => { e.preventDefault(); alert('Subscribed! (mock)'); }} className="flex gap-2">
            <input
              type="email"
              required
              placeholder="Your email"
              className="flex-1 bg-white/10 border border-white/20 rounded px-3 py-2 text-sm placeholder:text-blue-100/50 focus:outline-none focus:border-emerald-400"
            />
            <button type="submit" className="bg-emerald-500 hover:bg-emerald-600 text-white px-3 rounded transition-colors" aria-label="Subscribe">
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>

      {/* BOTTOM ROW: Copyright & Developer Credit */}
      <div className="max-w-7xl mx-auto px-4 mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-blue-100/60">
        <div className="flex flex-col gap-1 text-center md:text-left">
          <p>© {new Date().getFullYear()} Wonder Star International School. All rights reserved.</p>
          <p>Nurturing Excellence Since 2005 • CBSE Affiliated</p>
        </div>
        
        {/* Developer Credit */}
        <p className="text-center md:text-right">
          Developed by{" "}
          <a 
            href="https://pinweb.in/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-emerald-400 font-semibold hover:text-emerald-300 transition-colors"
          >
            Pinweb Pvt Ltd Kanpur
          </a>
        </p>
      </div>
    </footer>
  );
}