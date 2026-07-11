import React from "react";
import PageHero from "../components/PageHero";
import ContactSection from "../components/ContactSection";

export default function Contact() {
  return (
    <>
      <PageHero breadcrumb="Contact" title="We'd love to hear from you" subtitle="Have a question about admissions, curriculum, or a school visit? Reach out — we're here to help." />
      <ContactSection />
      <section className="pb-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-white">
            <iframe
              title="Wonder Star School Map"
              src="https://www.google.com/maps?q=Chandranagari,Kanpur&output=embed"
              className="w-full h-96 border-0"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </>
  );
}
