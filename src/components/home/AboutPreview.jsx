import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, FlaskConical, Award, Users } from "lucide-react";
export default function AboutPreview() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 lg:order-1">
            <img src="https://media.base44.com/images/public/6a4126f40d8f82f729876bc9/7157881c6_generated_image.png" alt="Bio Pulse laboratory" className="rounded-2xl shadow-lg w-full aspect-[4/3] object-cover" />
          </div>
          <div className="order-1 lg:order-2">
            <p className="text-teal-600 font-semibold text-sm uppercase tracking-wider mb-3">Welcome to Bio Pulse</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 leading-tight mb-5">Ireland's trusted source for research-grade peptides</h2>
            <p className="text-slate-600 leading-relaxed mb-6">At Bio Pulse, we supply high-purity research peptides and laboratory supplies to support scientific exploration across Ireland and Europe.</p>
            <div className="space-y-4 mb-8">
              {[{icon:FlaskConical,text:"Lab-grade products with certificates of analysis"},{icon:Award,text:"99%+ purity verified through independent testing"},{icon:Users,text:"Professional support via WhatsApp, 6 days a week"}].map((item) => (
                <div key={item.text} className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-teal-50 rounded-lg flex items-center justify-center flex-shrink-0"><item.icon size={18} className="text-teal-600" /></div>
                  <p className="text-slate-700 pt-1.5">{item.text}</p>
                </div>
              ))}
            </div>
            <Link to="/about" className="inline-flex items-center gap-2 text-teal-600 font-semibold hover:gap-3 transition-all">Learn more about us <ArrowRight size={18} /></Link>
          </div>
        </div>
      </div>
    </section>
  );
}
