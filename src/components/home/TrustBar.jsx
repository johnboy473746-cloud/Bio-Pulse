import React from "react";
import { ShieldCheck, Truck, BadgeCheck, MapPin } from "lucide-react";
const STATS = [
  { icon: ShieldCheck, value: "99%+", label: "Purity Grade" },
  { icon: Truck, value: "Fast", label: "Ireland & EU Shipping" },
  { icon: BadgeCheck, value: "18+", label: "Age Verified" },
  { icon: MapPin, value: "Ireland", label: "Based & Trusted" },
];
export default function TrustBar() {
  return (
    <section className="border-y border-slate-100 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS.map((stat) => (
            <div key={stat.label} className="flex items-center gap-3">
              <div className="w-11 h-11 bg-teal-50 rounded-xl flex items-center justify-center flex-shrink-0"><stat.icon size={22} className="text-teal-600" /></div>
              <div><div className="text-lg font-bold text-slate-900">{stat.value}</div><div className="text-xs text-slate-500">{stat.label}</div></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
