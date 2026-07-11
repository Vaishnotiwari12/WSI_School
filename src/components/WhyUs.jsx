import React from "react";
import { BookOpen, Users, FlaskConical, Library, Trophy, Award } from "lucide-react";
import { features } from "../data/mock";

const iconMap = { BookOpen, Users, FlaskConical, Library, Trophy, Award };

export default function WhyUs() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="max-w-3xl mb-14">
          <span className="inline-block bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-3">
            Why Wonder Star
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-[#0b3a8f] font-serif leading-tight">
            A foundation built on excellence, values and purpose
          </h2>
          <p className="mt-4 text-slate-600 text-lg leading-relaxed">
            We nurture complete individuals — grounded in ethics, inspired by curiosity, and ready to lead in a rapidly changing world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => {
            const Icon = iconMap[f.icon] || Award;
            return (
              <div
                key={i}
                className="group bg-white rounded-xl p-7 shadow-sm hover:shadow-xl border border-slate-100 hover:border-emerald-200 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-[#0b3a8f] to-[#1e4fb3] flex items-center justify-center mb-5 group-hover:from-emerald-500 group-hover:to-emerald-600 transition-colors">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#0b3a8f] mb-2">{f.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{f.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
