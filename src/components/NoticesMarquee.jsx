import React from "react";
import { Megaphone } from "lucide-react";
import { notices } from "../data/mock";

export default function NoticesMarquee() {
  const items = [...notices, ...notices];
  return (
    <div className="bg-gradient-to-r from-[#0b3a8f] to-[#1e4fb3] text-white overflow-hidden border-y-4 border-emerald-500">
      <div className="max-w-7xl mx-auto flex items-center">
        <div className="flex items-center gap-2 bg-emerald-500 px-4 md:px-6 py-3 md:py-4 shrink-0 font-bold text-sm uppercase tracking-wider">
          <Megaphone className="w-5 h-5" />
          <span className="hidden sm:inline">Latest Notices</span>
          <span className="sm:hidden">Notices</span>
        </div>
        <div className="flex-1 overflow-hidden py-3 md:py-4">
          <div className="flex whitespace-nowrap animate-marquee gap-8">
            {items.map((n, i) => (
              <span key={i} className="inline-flex items-center gap-2 text-sm md:text-base">
                {n.isNew && (
                  <span className="bg-amber-400 text-[#0b3a8f] text-[10px] font-bold px-1.5 py-0.5 rounded uppercase">New</span>
                )}
                <span>{n.text}</span>
                <span className="text-emerald-300 ml-6">•</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
