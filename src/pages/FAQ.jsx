import React from "react";
import { Link } from "react-router-dom";
import { MessageCircle, Mail } from "lucide-react";
import PageHero from "@/components/PageHero";
import { WHATSAPP_URL, WHATSAPP_NUMBER, EMAIL } from "@/data/site";

const FAQS = [
  { q: "How does ordering work?", a: "Simply contact us via WhatsApp at 085 204 3438. Let us know which research products you need and we'll guide you through the process. It's quick, easy, and personal." },
  { q: "How long does shipping take?", a: "We dispatch within 24 hours. Delivery times: Ireland 2–3 working days, UK & Northern Ireland 3–5 working days, EU countries 5–10 working days." },
  { q: "Where do you ship?", a: "We ship across Ireland and Europe, including Northern Ireland and all EU countries." },
  { q: "What payment methods are available?", a: "We accept bank transfer and other secure payment methods. Full details are provided when you place your order via WhatsApp." },
  { q: "Are products for research use only?", a: "Yes. All products sold by Bio Pulse are intended strictly for laboratory and research purposes. Not for human consumption." },
  { q: "Do you provide certificates of analysis?", a: "Yes, we can provide certificates of analysis for our products. Please ask when placing your order." },
  { q: "What purity grade are your products?", a: "Our peptides are supplied at 99%+ purity, verified through independent laboratory analysis." },
  { q: "What are your business hours?", a: "We're available Monday to Saturday, 9:00 AM to 6:00 PM." },
];

export default function FAQ() {
  return (
    <>
      <PageHero title="Frequently Asked Questions" subtitle="Find answers to common questions about ordering, shipping, and our research products." breadcrumb={<Link to="/" className="hover:text-teal-600">Home</Link>} />
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {FAQS.map((faq, idx) => (
              <details key={idx} className="border border-slate-200 rounded-xl px-5 py-4">
                <summary className="text-slate-900 font-semibold cursor-pointer">{faq.q}</summary>
                <p className="text-slate-600 mt-3">{faq.a}</p>
              </details>
            ))}
          </div>
          <div className="mt-12 bg-slate-50 rounded-2xl p-8 text-center">
            <h3 className="text-xl font-bold text-slate-900 mb-3">Still have questions?</h3>
            <p className="text-slate-600 mb-6">Our team is available to help via WhatsApp or email.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-teal-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-teal-700 transition-colors">
                <MessageCircle size={20} />WhatsApp: {WHATSAPP_NUMBER}
              </a>
              <a href={`mailto:${EMAIL}`} className="inline-flex items-center justify-center gap-2 bg-white text-slate-900 font-semibold px-6 py-3 rounded-xl border border-slate-200 hover:border-teal-300 transition-colors">
                <Mail size={20} />Email Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
