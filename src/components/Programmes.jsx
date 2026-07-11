import React from "react";
import { ArrowRight } from "lucide-react";
import { programmes } from "../data/mock";

export default function Programmes() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="max-w-3xl mb-12">
          <span className="inline-block bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-3">
            Programmes
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-[#0b3a8f] font-serif leading-tight">
            Academic Programmes We Offer
          </h2>
          <p className="mt-4 text-slate-600 text-lg">
            CBSE-aligned curriculum from Nursery to Class XII, designed to nurture every stage of a child's growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
          {programmes.map((p, i) => (
            <div
              key={i}
              className="group relative bg-white rounded-xl p-6 border border-slate-200 hover:border-emerald-400 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0b3a8f] to-emerald-500" />
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">{p.tag}</span>
              <h3 className="text-lg font-bold text-[#0b3a8f] mt-2 font-serif">{p.title}</h3>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">{p.desc}</p>
              <button className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-emerald-700 hover:gap-2 transition-all">
                Learn more <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
