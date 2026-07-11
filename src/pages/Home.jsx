import React from "react";
import HeroCarousel from "../components/HeroCarousel";
import NoticesMarquee from "../components/NoticesMarquee";
import WhyUs from "../components/WhyUs";
import Leadership from "../components/Leadership";
import Programmes from "../components/Programmes";
import Facilities from "../components/Facilities";
import AdmissionSteps from "../components/AdmissionSteps";
import FacultyGrid from "../components/FacultyGrid";
import ContactSection from "../components/ContactSection";
import { GraduationCap, ShieldCheck, Calendar } from "lucide-react";

export default function Home() {
  return (
    <>
      <HeroCarousel />
      <NoticesMarquee />

      {/* Stats strip */}
      <div className="bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 py-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-lg bg-emerald-100 flex items-center justify-center">
              <ShieldCheck className="w-6 h-6 text-emerald-600" />
            </div>
            <div>
              <p className="text-sm text-slate-500">Fully</p>
              <p className="font-bold text-[#0b3a8f]">CBSE Affiliated School</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-lg bg-emerald-100 flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-emerald-600" />
            </div>
            <div>
              <p className="text-sm text-slate-500">From</p>
              <p className="font-bold text-[#0b3a8f]">Nursery to Class XII</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-lg bg-emerald-100 flex items-center justify-center">
              <Calendar className="w-6 h-6 text-emerald-600" />
            </div>
            <div>
              <p className="text-sm text-slate-500">Trusted</p>
              <p className="font-bold text-[#0b3a8f]">Established Since 2005</p>
            </div>
          </div>
        </div>
      </div>

      <WhyUs />
      <Leadership />
      <Programmes />
      <Facilities />
      <AdmissionSteps />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mb-10">
            <span className="inline-block bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-3">
              Our Team
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-[#0b3a8f] font-serif leading-tight">
              Meet Our Leadership & Faculty
            </h2>
            <p className="mt-4 text-slate-600 text-lg">
              Dedicated, qualified, and passionate educators committed to bringing out the best in every student.
            </p>
          </div>
          <FacultyGrid limit={8} />
        </div>
      </section>

      <ContactSection />
    </>
  );
}
