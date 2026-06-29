import React from "react";
import { MapPin, Truck, MessageCircle, Lock, Award, Clock } from "lucide-react";
const REASONS = [
  { icon: MapPin, title: "Ireland Based", text: "Locally based with fast nationwide delivery across Ireland." },
  { icon: Truck, title: "Fast Shipping", text: "Quick dispatch and reliable tracked delivery to your facility." },
  { icon: MessageCircle, title: "WhatsApp Support", text: "Direct support via WhatsApp at 085 204 3438." },
  { icon: Lock, title: "Secure Ordering", text: "Safe, private ordering process with data protection." },
  { icon: Award, title: "Research Quality", text: "Lab-grade products for research and laboratory applications." },
  { icon: Clock, title: "Trusted Service", text: "Professional communication and reliable customer support." },
];
export default function WhyChoose() {
  return (
    <section className="py-16 lg:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-teal-600 font-semibold text-sm uppercase tracking-wider mb-3">Why Choose Us</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">Committed to excellence in research supply</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {REASONS.map((reason) => (
            <div key={reason.title} className="bg-white rounded-2xl p-6 border border-slate-100 hover:shadow-lg hover:border-teal-100 transition-all duration-300">
              <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center mb-4"><reason.icon size={24} className="text-teal-600" /></div>
              <h3 className="font-bold text-slate-900 mb-2">{reason.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{reason.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
