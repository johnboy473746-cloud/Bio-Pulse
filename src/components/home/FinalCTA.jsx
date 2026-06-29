import React from "react";
import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL, WHATSAPP_NUMBER } from "@/data/site";
export default function FinalCTA() {
  return (
    <section className="py-16 lg:py-24 bg-teal-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Want to order?</h2>
        <p className="text-teal-50 text-lg mb-8 max-w-xl mx-auto">WhatsApp us at {WHATSAPP_NUMBER} — it's the easiest way to place an order or ask a question.</p>
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white text-teal-700 font-bold px-8 py-4 rounded-xl hover:bg-teal-50 transition-colors text-lg">
          <MessageCircle size={22} />Place an Order
        </a>
      </div>
    </section>
  );
}
