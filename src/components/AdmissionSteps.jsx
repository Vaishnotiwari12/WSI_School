import React from "react";
import { Link } from "react-router-dom";
import { MapPin, ArrowRight, Phone } from "lucide-react";
import { admissionSteps, schoolInfo } from "../data/mock";

export default function AdmissionSteps() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#0b3a8f] via-[#0e4299] to-[#1e4fb3] text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 25% 30%, white 1px, transparent 1px), radial-gradient(circle at 75% 60%, white 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="max-w-3xl mb-12">
          <span className="inline-block bg-emerald-500 text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-3">
            Admissions Open
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-serif leading-tight">
            How to Apply
          </h2>
          <p className="mt-4 text-blue-100/85 text-lg">
            Simple, transparent, and student-friendly admission process for Session 2025-26.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {admissionSteps.map((s, i) => (
            <div key={i} className="relative bg-white/10 backdrop-blur border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-colors">
              <div className="text-5xl font-bold text-emerald-400 font-serif mb-3">{s.num}</div>
              <h3 className="text-xl font-bold mb-2">{s.title}</h3>
              <p className="text-sm text-blue-100/80 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-emerald-300 mb-2">Session 2025-26</p>
            <h3 className="text-2xl md:text-3xl font-bold font-serif leading-tight">
              Begin your child's journey at Wonder Star International School
            </h3>
            <p className="mt-3 flex items-start gap-2 text-blue-100/85 text-sm">
              <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-emerald-300" />
              {schoolInfo.address}
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link to="/admissions" className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-6 py-3 rounded-md transition-colors">
              Apply Now <ArrowRight className="w-4 h-4" />
            </Link>
            <a href={`tel:${schoolInfo.primaryPhone}`} className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border-2 border-white/60 text-white font-semibold px-6 py-3 rounded-md transition-colors">
              <Phone className="w-4 h-4" /> Contact Office
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
