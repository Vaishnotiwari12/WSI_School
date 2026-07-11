import React from "react";
import { CheckCircle2 } from "lucide-react";
import { facilities, facilityImages } from "../data/mock";

export default function Facilities() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-block bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-3">
              Campus & Facilities
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-[#0b3a8f] font-serif leading-tight">
              A campus that inspires <span className="text-emerald-600">learning every day.</span>
            </h2>
            <ul className="mt-8 space-y-3">
              {facilities.map((f, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" />
                  <span className="text-slate-700">{f}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-3 h-full">
            <img src={facilityImages[0]} alt="Classroom" className="w-full h-full object-cover rounded-xl row-span-2 min-h-[300px]" />
            <img src={facilityImages[1]} alt="Sports" className="w-full h-52 object-cover rounded-xl" />
            <img src={facilityImages[2]} alt="Library" className="w-full h-52 object-cover rounded-xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
