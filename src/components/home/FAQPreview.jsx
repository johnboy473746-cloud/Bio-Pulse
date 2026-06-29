import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
const FAQS = [
  { q: "How does ordering work?", a: "Simply contact us via WhatsApp at 085 204 3438. Let us know which research products you need and we'll guide you through the process." },
  { q: "How long does shipping take?", a: "We dispatch within 24 hours. Ireland 2–3 days, UK & NI 3–5 days, EU 5–10 working days." },
  { q: "Where do you ship?", a: "We ship across Ireland and Europe, including Northern Ireland and all EU countries." },
  { q: "Are products for research use only?", a: "Yes. All products are intended strictly for laboratory and research purposes. NOT FOR HUMAN CONSUMPTION." },
];
export default function FAQPreview() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-teal-600 font-semibold text-sm uppercase tracking-wider mb-3">FAQ</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">Frequently asked questions</h2>
        </div>
        <div className="space-y-4">
          {FAQS.map((faq, idx) => (
            <details key={idx} className="border border-slate-200 rounded-xl px-5 py-4">
              <summary className="text-slate-900 font-semibold cursor-pointer">{faq.q}</summary>
              <p className="text-slate-600 mt-3">{faq.a}</p>
            </details>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link to="/faq" className="inline-flex items-center gap-2 text-teal-600 font-semibold hover:gap-3 transition-all">View all FAQs <ArrowRight size={18} /></Link>
        </div>
      </div>
    </section>
  );
}
