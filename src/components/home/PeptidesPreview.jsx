import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Microscope, Dna, Zap, Heart } from "lucide-react";
const CATEGORIES = [
  { icon: Microscope, title: "GLP-1 Agonists", text: "Retatrutide, Tirzepatide, Carglinitide — metabolic research compounds.", count: "3 compounds" },
  { icon: Dna, title: "Recovery Peptides", text: "BPC-157, TB-500, KPV — tissue repair and inflammation studies.", count: "3 compounds" },
  { icon: Zap, title: "Growth Factors", text: "CJC-1295, HGH, NAD+ — growth hormone and cellular energy research.", count: "3 compounds" },
  { icon: Heart, title: "Metabolic Support", text: "5-Amino-1MQ, AOD-9604, Lipo-C+B12 — body composition research.", count: "3 compounds" },
];
export default function PeptidesPreview() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-4">
          <div><p className="text-teal-600 font-semibold text-sm uppercase tracking-wider mb-3">Our Catalogue</p><h2 className="text-3xl lg:text-4xl font-bold text-slate-900">Research Categories</h2></div>
          <Link to="/peptides" className="inline-flex items-center gap-2 text-teal-600 font-semibold hover:gap-3 transition-all">View all categories <ArrowRight size={18} /></Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CATEGORIES.map((cat) => (
            <div key={cat.title} className="bg-slate-50 rounded-2xl p-6 hover:bg-teal-50/50 transition-colors duration-300">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4 shadow-sm"><cat.icon size={24} className="text-teal-600" /></div>
              <h3 className="font-bold text-slate-900 mb-2">{cat.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-3">{cat.text}</p>
              <p className="text-xs text-teal-600 font-semibold">{cat.count}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
