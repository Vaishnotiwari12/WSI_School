import React from "react";
import { faculty } from "../data/mock";

export default function FacultyGrid({ limit }) {
  const list = limit ? faculty.slice(0, limit) : faculty;
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
      {list.map((f, i) => (
        <div
          key={i}
          className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-100 hover:border-emerald-200 transition-all duration-300"
        >
          <div className="relative aspect-[4/5] overflow-hidden bg-slate-100">
            <img
              src={f.image}
              alt={f.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            <span className="absolute top-3 left-3 bg-emerald-500 text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded">
              {f.dept}
            </span>
          </div>
          <div className="p-4">
            <h3 className="font-bold text-[#0b3a8f] text-base leading-tight">{f.name}</h3>
            <p className="text-sm text-emerald-700 mt-1 font-medium">{f.role}</p>
            <p className="text-xs text-slate-500 mt-1">{f.org}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
