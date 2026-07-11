import React from "react";

export default function PageHero({ title, subtitle, breadcrumb }) {
  return (
    <section className="relative bg-gradient-to-br from-[#0b3a8f] via-[#0e4299] to-[#1e4fb3] text-white py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 25% 30%, white 1px, transparent 1px), radial-gradient(circle at 75% 60%, white 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
      <div className="max-w-7xl mx-auto px-4 relative">
        {breadcrumb && (
          <p className="text-sm text-emerald-300 font-semibold uppercase tracking-wider mb-3">{breadcrumb}</p>
        )}
        <h1 className="text-4xl md:text-6xl font-bold font-serif leading-tight">{title}</h1>
        {subtitle && <p className="mt-4 max-w-2xl text-blue-100/85 text-lg">{subtitle}</p>}
      </div>
    </section>
  );
}
