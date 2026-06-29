import React, { useState, useEffect } from "react";
import { X, MessageCircle } from "lucide-react";
import { WHATSAPP_URL, WHATSAPP_NUMBER } from "@/data/site";

export default function OrderModal() {
  const [show, setShow] = useState(false);
  useEffect(() => { const timer = setTimeout(() => setShow(true), 1000); return () => clearTimeout(timer); }, []);
  if (!show) return null;
  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={() => setShow(false)} />
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 mx-4 animate-fade-in">
        <button onClick={() => setShow(false)} className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors"><X size={20} /></button>
        <div className="text-center">
          <div className="w-16 h-16 bg-teal-50 rounded-full flex items-center justify-center mx-auto mb-5"><MessageCircle size={30} className="text-teal-600" /></div>
          <h2 className="text-2xl font-bold text-slate-900 mb-2 tracking-tight">WANT TO ORDER?</h2>
          <p className="text-slate-600 mb-1">The easiest way to place an order is via WhatsApp.</p>
          <p className="text-slate-900 font-bold text-xl mb-6">{WHATSAPP_NUMBER}</p>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 w-full bg-teal-600 text-white font-semibold py-3.5 rounded-xl hover:bg-teal-700 transition-colors">
            <MessageCircle size={18} />ORDER HERE
          </a>
          <button onClick={() => setShow(false)} className="mt-3 text-sm text-slate-500 hover:text-slate-700 transition-colors">Maybe later</button>
        </div>
      </div>
    </div>
  );
}
