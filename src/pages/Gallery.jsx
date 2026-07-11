import React, { useState, useMemo } from "react";
import PageHero from "../components/PageHero";
import { galleryImages } from "../data/mock";
import { X } from "lucide-react";

const categories = ["All", "Classrooms", "Campus", "Sports", "Library", "Events", "Our Staff"];

export default function Gallery() {
  const [cat, setCat] = useState("All");
  const [preview, setPreview] = useState(null);

  const list = useMemo(
    () => (cat === "All" ? galleryImages : galleryImages.filter((g) => g.cat === cat)),
    [cat]
  );

  return (
    <>
      <PageHero breadcrumb="Gallery" title="Moments from Wonder Star" subtitle="A glimpse of life on campus — our classrooms, events, sports, and celebrations." />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors ${
                  cat === c ? "bg-[#0b3a8f] text-white shadow-md" : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {list.map((g, i) => (
              <button
                key={i}
                onClick={() => setPreview(g)}
                className="group relative aspect-square rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow"
              >
                <img src={g.src} alt={g.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b3a8f]/90 via-[#0b3a8f]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <div className="text-left">
                    <p className="text-emerald-300 text-xs font-bold uppercase tracking-wider">{g.cat}</p>
                    <p className="text-white font-semibold">{g.title}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {preview && (
        <div onClick={() => setPreview(null)} className="fixed inset-0 bg-black/90 z-[60] flex items-center justify-center p-4 cursor-pointer">
          <button aria-label="Close" className="absolute top-4 right-4 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 border border-white/30 text-white flex items-center justify-center">
            <X className="w-6 h-6" />
          </button>
          <div onClick={(e) => e.stopPropagation()} className="max-w-5xl w-full">
            <img src={preview.src.replace("w=800", "w=1600")} alt={preview.title} className="w-full max-h-[80vh] object-contain rounded-lg" />
            <p className="text-white text-center mt-4">
              <span className="text-emerald-300 text-xs font-bold uppercase tracking-wider mr-2">{preview.cat}</span>
              {preview.title}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
