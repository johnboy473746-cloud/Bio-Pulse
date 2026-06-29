import React from "react";
import { Link } from "react-router-dom";
import { MessageCircle, ClipboardList, Truck, ArrowRight } from "lucide-react";
const STEPS = [
  { icon: MessageCircle, title: "Contact via WhatsApp", text: "Message us at 085 204 3438 with your order or questions." },
  { icon: ClipboardList, title: "Confirm Your Order", text: "We'll confirm availability, details, and payment information." },
  { icon: Truck, title: "Fast Delivery", text: "We dispatch within 24 hours with tracked delivery across Ireland and Europe." },
];
export default function HowToOrderPreview() {
  return (
    <section className="py-16 lg:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-teal-600 font-semibold text-sm uppercase tracking-wider mb-3">How to Order</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">Simple, fast, and personal</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {STEPS.map((step, idx) => (
            <div key={step.title} className="bg-white rounded-2xl p-8 border border-slate-100 h-full">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-teal-600 text-white rounded-xl flex items-center justify-center font-bold text-lg">{idx + 1}</div>
                <step.icon size={24} className="text-teal-600" />
              </div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">{step.title}</h3>
              <p className="text-slate-600 leading-relaxed">{step.text}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/how-to-order" className="inline-flex items-center gap-2 text-teal-600 font-semibold hover:gap-3 transition-all">See full ordering guide <ArrowRight size={18} /></Link>
        </div>
      </div>
    </section>
  );
}
