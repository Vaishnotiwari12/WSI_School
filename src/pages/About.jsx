import React from "react";
import PageHero from "../components/PageHero";
import Leadership from "../components/Leadership";
import { 
  Eye, 
  Layers, 
  Star, 
  Heart, 
  Lightbulb, 
  Globe2, 
  BookOpenCheck, 
  Building,
  CheckCircle2
} from "lucide-react";
import { schoolInfo } from "../data/mock";

const coreValues = [
  { icon: Star, iconColor: "text-amber-500", title: "Excellence", desc: "We strive for the highest standards in everything we do — academics, sports, arts, and character." },
  { icon: Heart, iconColor: "text-amber-500", title: "Integrity", desc: "We foster honesty, transparency, and ethical behaviour in all our students and staff." },
  { icon: Lightbulb, iconColor: "text-amber-500", title: "Innovation", desc: "We embrace new ideas, technologies, and teaching methods to prepare students for the future." },
  { icon: Globe2, iconColor: "text-blue-500", title: "Inclusivity", desc: "We celebrate diversity and ensure every student feels valued, respected, and included." },
  { icon: BookOpenCheck, iconColor: "text-emerald-500", title: "Discipline", desc: "We instill self-discipline and responsibility as the foundation of personal and academic success." },
  { icon: Building, iconColor: "text-orange-500", title: "Community", desc: "We build strong bonds between students, teachers, parents, and the wider community." },
];

export default function About() {
  return (
    <>
      {/* 1. ORIGINAL PAGE HERO */}
      <PageHero 
        breadcrumb="About Us" 
        title="About Wonder Star International School" 
        subtitle="A community dedicated to nurturing young minds, empowering futures, and inspiring excellence since 2005." 
      />

      {/* 2. IMAGE 1: WHO WE ARE (With Logo) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-emerald-500 text-sm font-bold uppercase tracking-widest mb-2 block">
              Who We Are
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0b3a8f] font-serif mb-6 leading-tight">
              Wonder Star International School
            </h2>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                Wonder Star International School is a premier educational institution located in the heart of Chandranagari, Kanpur. Established with a vision to provide world-class education, we have been nurturing young minds and shaping future leaders since our inception.
              </p>
              <p>
                Our school is affiliated with the Central Board of Secondary Education (CBSE) and offers a comprehensive curriculum from Nursery to Class XII. We believe in a holistic approach to education that combines academic excellence with character development, sports, and the arts.
              </p>
              <p>
                Located at {schoolInfo.addressShort}, our campus provides a safe, stimulating, and supportive environment for every student.
              </p>
            </div>
          </div>
          
          <div className="flex justify-center lg:justify-end">
            <div className="relative p-2 rounded-2xl bg-white border border-gray-100 shadow-[8px_8px_0px_#10b981] w-full max-w-md">
              <img 
                src="/SchoolLogo.jpeg" 
                alt="Wonder Star School Logo" 
                className="w-full h-auto rounded-xl object-contain p-4" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. ORIGINAL PAGE: CLASSROOM SECTION */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="order-2 lg:order-1 relative">
            <img 
              src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1200&q=80" 
              alt="School campus" 
              className="rounded-2xl shadow-lg w-full h-[480px] object-cover" 
            />
            <div className="absolute -bottom-6 -left-6 bg-emerald-500 text-white p-5 rounded-xl shadow-xl hidden md:block">
              <p className="text-4xl font-bold font-serif">20+</p>
              <p className="text-sm uppercase tracking-wider">Years of Excellence</p>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <span className="inline-block bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-3">
              Our Story
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0b3a8f] font-serif leading-tight">
              Where Every Child's Potential Shines Bright
            </h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Established in 2005, Wonder Star International School has become a trusted name in quality education in Kanpur. Located in the heart of Chandranagari, our school offers a nurturing environment where students grow academically, socially and morally.
            </p>
            <p className="mt-4 text-slate-600 leading-relaxed">
              We are fully affiliated with the CBSE Board and cater to students from Nursery to Class XII across Science, Commerce and Arts streams. Our curriculum is designed to build a strong foundation of knowledge combined with real-world problem-solving skills.
            </p>
            <ul className="mt-6 space-y-2">
              {[
                "20+ years of academic legacy",
                "Consistently outstanding board results",
                "State-of-the-art infrastructure and safe campus",
                "Focus on values, discipline, and character",
              ].map((s, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" />
                  <span className="text-slate-700">{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 4. VISION & MISSION (New Styling from Image 1) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-emerald-500 text-sm font-bold uppercase tracking-widest mb-2 block">
              Our Purpose
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0b3a8f] font-serif">
              Vision & Mission
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-50 p-10 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 rounded-full bg-[#0b3a8f] flex items-center justify-center mb-6 shadow-md">
                <Eye className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#0b3a8f] font-serif mb-4">Our Vision</h3>
              <p className="text-slate-600 leading-relaxed">
                To be a globally recognized institution that empowers every student to achieve their fullest potential — academically, socially, and morally — and to become responsible citizens who contribute positively to society.
              </p>
            </div>

            <div className="bg-slate-50 p-10 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 rounded-full bg-emerald-500 flex items-center justify-center mb-6 shadow-md">
                <Layers className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#0b3a8f] font-serif mb-4">Our Mission</h3>
              <p className="text-slate-600 leading-relaxed">
                To provide a nurturing, inclusive, and intellectually stimulating environment where students develop a love for learning, critical thinking skills, and strong ethical values that guide them throughout their lives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. IMAGE 1: CORE VALUES GRID */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-emerald-500 text-sm font-bold uppercase tracking-widest mb-2 block">
              What We Stand For
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0b3a8f] font-serif">
              Our Core Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((value, idx) => {
              const Icon = value.icon;
              return (
                <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
                  <div className="mb-4">
                    <Icon className={`w-8 h-8 ${value.iconColor}`} />
                  </div>
                  <h4 className="font-bold text-[#0b3a8f] text-xl mb-3">{value.title}</h4>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    {value.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. ORIGINAL LEADERSHIP & BOTTOM TEXT */}
      <Leadership />

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-slate-600">Visit us at:</p>
          <p className="text-xl font-semibold text-[#0b3a8f] mt-1">{schoolInfo.address}</p>
        </div>
      </section>
    </>
  );
}