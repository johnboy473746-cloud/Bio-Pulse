import React from "react";
import { Link } from "react-router-dom";
import { MessageCircle, ClipboardList, CreditCard, Truck, CheckCircle } from "lucide-react";
import PageHero from "@/components/PageHero";
import { WHATSAPP_URL, WHATSAPP_NUMBER } from "@/data/site";

const STEPS = [
  { icon: MessageCircle, title: "Step 1: Contact Us on WhatsApp", text: "Message us at 085 204 3438 with the products you're interested in. Let us know the compounds and quantities you need for your research." },
  { icon: ClipboardList, title: "Step 2: Confirm Your Order", text: "We'll confirm product availability, provide pricing, and answer any questions. Once you're happy, we'll finalise your order details." },
  { icon: CreditCard, title: "Step 3: Complete Payment", text: "We accept bank transfer and other secure payment methods. All transactions are handled privately and securely." },
  { icon: Truck, title: "Step 4: Fast Tracked Delivery", text: "Once payment is confirmed, we dispatch within 24 hours. Ireland 2–3 working days, UK & NI 3–5 working days, EU 5–10 working days." },
];

const NOTES = [
  "All orders require age verification — you must be 18 or older to order.",
  "Products are for research and laboratory use only — not for human consumption.",
  "We ship across Ireland and Europe, including Northern Ireland and all EU countries.",
  "Free alcohol wipes are included with every bacteriostatic water or syringe purchase.",
];

export default function HowToOrder() {
  return (
    <>
      <PageHero title="How to Order" subtitle="Placing an order with Bio Pulse is simple, fast, and personal." breadcrumb={<Link to="/" className="hover:text-teal-600">Home</Link>} />
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {STEPS.map((step, idx) => (
              <div key={step.title} className="flex gap-5">
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 bg-teal-600 text-white rounded-2xl flex items-center justify-center font-bold text-xl flex-shrink-0">{idx + 1}</div>
                  {idx < STEPS.length - 1 && <div className="w-px h-full bg-slate-200 mt-3" />}
                </div>
                <div className="pb-6">
                  <div className="flex items-center gap-3 mb-2"><step.icon size={20} className="text-teal-600" /><h2 className="text-xl font-bold text-slate-900">{step.title}</h2></div>
                  <p className="text-slate-600 leading-relaxed">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 bg-slate-50 rounded-2xl p-8">
            <h3 className="font-bold text-slate-900 text-lg mb-4">Important Notes</h3>
            <ul className="space-y-3">
              {NOTES.map((note) => (<li key={note} className="flex items-start gap-3"><CheckCircle size={18} className="text-teal-600 flex-shrink-0 mt-0.5" /><span className="text-slate-700 text-sm">{note}</span></li>))}
            </ul>
          </div>
          <div className="mt-12 bg-teal-600 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-3">Ready to place an order?</h3>
            <p className="text-teal-50 mb-6">WhatsApp us at {WHATSAPP_NUMBER} — we're ready to help.</p>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white text-teal-700 font-bold px-6 py-3 rounded-xl hover:bg-teal-50 transition-colors">
              <MessageCircle size={20} />Place an Order
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
