import React, { useState } from "react";
import PageHero from "../components/PageHero";
import AdmissionSteps from "../components/AdmissionSteps";
import { CheckCircle2, FileText, Calendar, Users } from "lucide-react";
import { schoolInfo, programmes } from "../data/mock";

const docs = [
  "Birth Certificate (Original + Photocopy)",
  "Transfer Certificate from previous school (if applicable)",
  "Previous class marksheet / report card",
  "4 recent passport size photographs of student",
  "2 passport size photographs of parents",
  "Aadhaar card copy of student and parents",
  "Address proof (utility bill/rent agreement)",
];

const fees = [
  { klass: "Nursery & KG", admission: "₹ 5,000", tuition: "₹ 2,000 / month" },
  { klass: "Classes I - V", admission: "₹ 6,000", tuition: "₹ 2,500 / month" },
  { klass: "Classes VI - VIII", admission: "₹ 7,000", tuition: "₹ 3,000 / month" },
  { klass: "Classes IX - X", admission: "₹ 8,000", tuition: "₹ 3,500 / month" },
  { klass: "Classes XI - XII", admission: "₹ 10,000", tuition: "₹ 4,000 / month" },
];

export default function Admissions() {
  const [form, setForm] = useState({ name: "", parent: "", phone: "", email: "", klass: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save to localStorage as mock persistence
    const list = JSON.parse(localStorage.getItem("ws_enquiries") || "[]");
    list.push({ ...form, ts: new Date().toISOString() });
    localStorage.setItem("ws_enquiries", JSON.stringify(list));
    setSubmitted(true);
    setForm({ name: "", parent: "", phone: "", email: "", klass: "", message: "" });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <>
      <PageHero breadcrumb="Admissions" title="Admissions Open 2025-26" subtitle="Join a legacy of academic excellence and holistic development at Wonder Star International School." />

      <AdmissionSteps />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <span className="inline-block bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-3">Required Documents</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0b3a8f] font-serif leading-tight">Documents Checklist</h2>
            <p className="mt-3 text-slate-600">Please carry the following documents at the time of admission.</p>
            <ul className="mt-6 space-y-3">
              {docs.map((d, i) => (
                <li key={i} className="flex items-start gap-3 bg-slate-50 rounded-lg p-3">
                  <FileText className="w-5 h-5 text-emerald-600 mt-0.5 shrink-0" />
                  <span className="text-slate-700">{d}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <span className="inline-block bg-amber-100 text-amber-800 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-3">Fee Structure</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0b3a8f] font-serif leading-tight">Transparent Fee Structure</h2>
            <p className="mt-3 text-slate-600">Indicative fee structure for the 2025-26 academic session.</p>
            <div className="mt-6 rounded-xl border border-slate-200 overflow-hidden">
              <table className="w-full text-sm">
                <thead className="bg-[#0b3a8f] text-white">
                  <tr>
                    <th className="text-left px-4 py-3 font-semibold">Class</th>
                    <th className="text-left px-4 py-3 font-semibold">Admission</th>
                    <th className="text-left px-4 py-3 font-semibold">Tuition</th>
                  </tr>
                </thead>
                <tbody>
                  {fees.map((f, i) => (
                    <tr key={i} className={i % 2 ? "bg-slate-50" : "bg-white"}>
                      <td className="px-4 py-3 font-medium text-slate-800">{f.klass}</td>
                      <td className="px-4 py-3 text-slate-600">{f.admission}</td>
                      <td className="px-4 py-3 text-slate-600">{f.tuition}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-slate-500">* Fees are subject to change. Please contact office for current fee details.</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="inline-block bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-3">Enquiry Form</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0b3a8f] font-serif">Start Your Admission Enquiry</h2>
            <p className="mt-3 text-slate-600">Submit your details and our admissions team will get back to you shortly.</p>
          </div>

          {submitted && (
            <div className="mb-6 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-lg p-4 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5" /> Thank you! Your enquiry has been submitted. We'll contact you soon.
            </div>
          )}

          <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-100 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1.5">Student Name</label>
              <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 outline-none" placeholder="Full name" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1.5">Parent/Guardian Name</label>
              <input required value={form.parent} onChange={(e) => setForm({ ...form, parent: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 outline-none" placeholder="Parent/Guardian" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1.5">Phone</label>
              <input required type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 outline-none" placeholder="+91" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1.5">Email</label>
              <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 outline-none" placeholder="you@example.com" />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-slate-700 mb-1.5">Class Applying For</label>
              <select required value={form.klass} onChange={(e) => setForm({ ...form, klass: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 outline-none">
                <option value="">Select a class</option>
                {programmes.map((p, i) => (
                  <option key={i} value={p.title}>{p.title} — {p.tag}</option>
                ))}
              </select>
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-slate-700 mb-1.5">Message (optional)</label>
              <textarea rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 outline-none resize-none" placeholder="Any additional information" />
            </div>
            <div className="md:col-span-2 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <Users className="w-4 h-4" /> We'll contact you at {schoolInfo.primaryPhone}
              </div>
              <button type="submit" className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors shadow-md">
                <Calendar className="w-4 h-4" /> Submit Enquiry
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
