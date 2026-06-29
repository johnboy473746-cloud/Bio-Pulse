import React, { useState, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";
import { WHATSAPP_QUESTION_URL } from "@/data/site";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  useEffect(() => { const timer = setTimeout(() => { if (!dismissed) setOpen(true); }, 3000); return () => clearTimeout(timer); }, [dismissed]);
  const handleQuestion = () => window.open(WHATSAPP_QUESTION_URL, "_blank", "noopener,noreferrer");
  const handleNoThanks = () => { setOpen(false); setDismissed(true); };
  return (
    <>
      {open && (
        <div className="fixed bottom-24 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-80 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-fade-in">
          <div className="bg-teal-600 px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 bg-white/20 rounded-full flex items-center justify-center"><MessageCircle size={18} className="text-white" /></div>
              <div><p className="text-white font-semibold text-sm">Bio Pulse Team</p><p className="text-teal-100 text-xs">Typically replies in minutes</p></div>
            </div>
            <button onClick={() => setOpen(false)} className="text-white/80 hover:text-white transition-colors"><X size={18} /></button>
          </div>
          <div className="p-4">
            <div className="bg-slate-100 rounded-xl rounded-tl-sm p-3.5 mb-4">
              <p className="text-sm text-slate-700 leading-relaxed">Hi! Got a question or want to place an order? WhatsApp us — it's our best form of communication. Looking forward to hearing from you! The Bio Pulse Team</p>
            </div>
            <div className="space-y-2">
              <button onClick={handleQuestion} className="w-full bg-teal-600 text-white text-sm font-semibold py-2.5 rounded-xl hover:bg-teal-700 transition-colors">I have a question</button>
              <button onClick={handleNoThanks} className="w-full bg-slate-100 text-slate-600 text-sm font-medium py-2.5 rounded-xl hover:bg-slate-200 transition-colors">No thanks</button>
            </div>
          </div>
        </div>
      )}
      {!open && (
        <button onClick={() => setOpen(true)} className="fixed bottom-6 right-4 sm:right-6 z-50 w-14 h-14 bg-teal-600 rounded-full shadow-lg flex items-center justify-center hover:bg-teal-700 transition-colors" aria-label="Open chat">
          <MessageCircle size={24} className="text-white" />
        </button>
      )}
    </>
  );
}
