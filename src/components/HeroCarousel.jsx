import React, { useEffect, useState, useCallback } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { heroSlides } from "../data/mock";
import { Link } from "react-router-dom";

export default function HeroCarousel() {
  const [idx, setIdx] = useState(0);

  const next = useCallback(() => setIdx((i) => (i + 1) % heroSlides.length), []);
  const prev = () => setIdx((i) => (i - 1 + heroSlides.length) % heroSlides.length);

  useEffect(() => {
    const t = setInterval(next, 6000);
    return () => clearInterval(t);
  }, [next]);

  return (
    <section className="relative w-full h-[520px] md:h-[620px] overflow-hidden bg-slate-900">
      {heroSlides.map((slide, i) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            i === idx ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
            loading={i === 0 ? "eager" : "lazy"}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0b3a8f]/85 via-[#0b3a8f]/60 to-[#0b3a8f]/30" />
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-6 md:px-10 w-full">
              <div className="max-w-2xl text-white">
                <span className="inline-block bg-emerald-500 text-white text-xs md:text-sm font-semibold uppercase tracking-wider px-4 py-1.5 rounded mb-6 shadow-lg">
                  {slide.tag}
                </span>
                <h2 className="text-4xl md:text-6xl font-bold font-serif leading-tight drop-shadow-lg">
                  {slide.title}
                </h2>
                <p className="mt-5 text-base md:text-lg text-blue-50/90 max-w-xl leading-relaxed">
                  {slide.subtitle}
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    to="/admissions"
                    className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-6 py-3 rounded-md shadow-lg transition-colors"
                  >
                    Apply Now <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    to="/about"
                    className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur border-2 border-white/70 text-white font-semibold px-6 py-3 rounded-md transition-colors"
                  >
                    Explore School
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/15 hover:bg-emerald-500 backdrop-blur border border-white/30 text-white flex items-center justify-center transition-colors"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={next}
        aria-label="Next slide"
        className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/15 hover:bg-emerald-500 backdrop-blur border border-white/30 text-white flex items-center justify-center transition-colors"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2 rounded-full transition-all ${i === idx ? "w-8 bg-emerald-400" : "w-2 bg-white/50"}`}
          />
        ))}
      </div>
    </section>
  );
}
