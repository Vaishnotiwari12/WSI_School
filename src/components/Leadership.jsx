import React, { useState } from "react";
import { Quote } from "lucide-react";
import { leadership } from "../data/mock";

export default function Leadership() {
  const [active, setActive] = useState(0);
  const person = leadership[active];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="max-w-3xl mb-12 text-center mx-auto">
          <span className="inline-block bg-amber-100 text-amber-800 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-3">
            Voices
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-[#0b3a8f] font-serif leading-tight">
            Message from Leadership
          </h2>
          <p className="mt-4 text-slate-600 text-lg">
            Guiding wisdom from our Director, Vice Principal, Manager & Coordinator.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-10">
          {leadership.map((p, i) => (
            <button
              key={p.id}
              onClick={() => setActive(i)}
              className={`px-4 md:px-6 py-2 md:py-2.5 rounded-full text-sm font-semibold transition-colors ${
                i === active
                  ? "bg-[#0b3a8f] text-white shadow-md"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              {p.role}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center bg-slate-50 rounded-2xl p-6 md:p-10 border border-slate-100">
          <div className="lg:col-span-2">
            <div className="relative aspect-[4/5] rounded-xl overflow-hidden shadow-lg">
              <img src={person.image} alt={person.role} className="w-full h-full object-cover" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <p className="text-white text-lg font-bold">{person.role}</p>
                <p className="text-emerald-300 text-xs">Wonder Star International School</p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-3">
            <p className="text-xs font-bold uppercase tracking-widest text-emerald-600 mb-2">{person.subtitle}</p>
            <h3 className="text-2xl md:text-3xl font-bold text-[#0b3a8f] font-serif mb-5">{person.heading}</h3>
            <Quote className="w-10 h-10 text-emerald-200 mb-3" />
            <p className="text-slate-700 leading-relaxed text-base md:text-lg">{person.message}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
