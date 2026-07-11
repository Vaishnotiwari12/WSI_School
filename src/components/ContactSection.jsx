import React, { useState } from "react";
import { MapPin, Phone, Mail, Clock, MessageCircle, Send } from "lucide-react";
import { schoolInfo } from "../data/mock";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `Hello Wonder Star International School,%0A%0AName: ${encodeURIComponent(form.name)}%0APhone: ${encodeURIComponent(form.phone)}%0AMessage: ${encodeURIComponent(form.message)}`;
    window.open(`https://wa.me/${schoolInfo.whatsapp}?text=${text}`, "_blank");
  };

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="max-w-3xl mb-12">
          <span className="inline-block bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-3">
            Contact Us
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-[#0b3a8f] font-serif leading-tight">
            Get in touch with us
          </h2>
          <p className="mt-4 text-slate-600 text-lg">
            Reach out for admissions, school visits, or any general query. We usually respond within a day.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {[
              { icon: MapPin, label: "Address", value: schoolInfo.address },
              { icon: Phone, label: "Phone", value: `+91 ${schoolInfo.phones[0]} • +91 ${schoolInfo.phones[1]}` },
              { icon: Mail, label: "Email", value: schoolInfo.email, href: `mailto:${schoolInfo.email}` },
              { icon: Clock, label: "School Hours", value: schoolInfo.hours },
            ].map((c, i) => {
              const Icon = c.icon;
              return (
                <div key={i} className="bg-white rounded-xl p-5 border border-slate-100 flex items-start gap-4 hover:shadow-md transition-shadow">
                  <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-[#0b3a8f] to-[#1e4fb3] flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-emerald-600">{c.label}</p>
                    {c.href ? (
                      <a href={c.href} className="text-slate-700 text-sm mt-1 hover:text-[#0b3a8f] break-all">{c.value}</a>
                    ) : (
                      <p className="text-slate-700 text-sm mt-1 leading-relaxed">{c.value}</p>
                    )}
                  </div>
                </div>
              );
            })}

            <a
              href={`https://wa.me/${schoolInfo.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-6 py-3.5 rounded-xl transition-colors shadow-md"
            >
              <MessageCircle className="w-5 h-5" /> Chat on WhatsApp
            </a>
          </div>

          <div className="lg:col-span-3 bg-white rounded-2xl p-6 md:p-8 border border-slate-100 shadow-sm">
            <h3 className="text-2xl font-bold text-[#0b3a8f] font-serif mb-1">Send us a message</h3>
            <p className="text-sm text-slate-500 mb-6">Fill in your details — we'll continue the conversation on WhatsApp.</p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">Full Name</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 outline-none transition"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">Phone</label>
                <input
                  type="tel"
                  required
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 outline-none transition"
                  placeholder="+91 XXXXXXXXXX"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">Message</label>
                <textarea
                  rows={5}
                  required
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 outline-none transition resize-none"
                  placeholder="How can we help you?"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-2 bg-[#0b3a8f] hover:bg-[#0e4299] text-white font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                <Send className="w-4 h-4" /> Send via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
