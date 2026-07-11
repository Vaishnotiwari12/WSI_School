import React from "react";
import { MessageCircle } from "lucide-react";
import { schoolInfo } from "../data/mock";

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${schoolInfo.whatsapp}?text=Hello%20Wonder%20Star%20International%20School%2C%20I%20would%20like%20to%20know%20more%20about%20admissions.`}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-4 py-3 rounded-full shadow-2xl transition-transform hover:scale-105"
    >
      <MessageCircle className="w-5 h-5" />
      <span className="hidden sm:inline text-sm">Chat on WhatsApp</span>
    </a>
  );
}
