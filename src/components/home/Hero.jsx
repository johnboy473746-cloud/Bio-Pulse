import React from "react";
import { MessageCircle, ArrowRight } from "lucide-react";
import { WHATSAPP_URL } from "@/data/site";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-teal-50/60 to-white pt-28 lg:pt-36 pb-16 lg:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-teal-50 text-teal-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-5">
              <span className="w-2 h-2 bg-teal-500 rounded-full" />
              FOR RESEARCH USE ONLY · IRELAND
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.05] tracking-tight">
              Premium Research Peptides. <span className="text-teal-600">Trusted Quality.</span>
            </h1>
            <p className="text-lg text-slate-600 mt-6 max-w-xl leading-relaxed">
              Ireland's trusted supplier of research-grade peptides and laboratory supplies. Research-grade quality, fast shipping, and professional service — delivered across Ireland and Europe.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-teal-600 text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-teal-700 transition-colors text-base">
                <MessageCircle size={20} />Place an Order
              </a>
              <Link to="/peptides" className="inline-flex items-center justify-center gap-2 bg-white text-slate-900 font-semibold px-7 py-3.5 rounded-xl border border-slate-200 hover:border-teal-300 hover:text-teal-600 transition-colors text-base">
                Learn More<ArrowRight size={18} />
              </Link>
            </div>
          </div>
          <div className="relative">
            <img src="https://media.base44.com/images/public/6a4126f40d8f82f729876bc9/06d9424a8_generated_image.png" alt="Research laboratory" className="rounded-2xl shadow-xl w-full aspect-[4/3] object-cover" />
            <div className="absolute -bottom-5 -left-5 bg-white rounded-xl shadow-lg p-4 border border-slate-100 hidden sm:block">
              <div className="text-3xl font-bold text-teal-600">99%+</div>
              <div className="text-xs text-slate-500 font-medium">PURITY GRADE</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
