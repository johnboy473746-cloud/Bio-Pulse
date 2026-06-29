import React from "react";
import { Link } from "react-router-dom";
import { MessageCircle, Mail } from "lucide-react";
import { WHATSAPP_URL, WHATSAPP_NUMBER, EMAIL } from "@/data/site";

const QUICK_LINKS = [
  { label: "Home", path: "/" }, { label: "About", path: "/about" },
  { label: "Peptides & Products", path: "/peptides" }, { label: "How to Order", path: "/how-to-order" },
  { label: "FAQ", path: "/faq" }, { label: "Blog", path: "/blog" }, { label: "Contact", path: "/contact" },
];
const LEGAL_LINKS = [
  { label: "Terms & Conditions", path: "/terms" }, { label: "Privacy Policy", path: "/privacy" },
  { label: "Shipping Policy", path: "/shipping" }, { label: "Refund Policy", path: "/refund" },
  { label: "Cookie Policy", path: "/cookie" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-10">
          <div>
            <Link to="/" className="flex items-center gap-1.5 mb-4">
              <span className="text-teal-400 font-bold text-xl">Bio</span>
              <span className="text-white font-bold text-xl">Pulse</span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed">Ireland's trusted supplier of research-grade peptides and laboratory supplies. For research use only.</p>
          </div>
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Navigate</h3>
            <ul className="space-y-2.5">{QUICK_LINKS.map((link) => (<li key={link.path}><Link to={link.path} className="text-sm text-slate-400 hover:text-teal-400 transition-colors">{link.label}</Link></li>))}</ul>
          </div>
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Legal</h3>
            <ul className="space-y-2.5">{LEGAL_LINKS.map((link) => (<li key={link.path}><Link to={link.path} className="text-sm text-slate-400 hover:text-teal-400 transition-colors">{link.label}</Link></li>))}</ul>
          </div>
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Contact</h3>
            <div className="space-y-3">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-slate-400 hover:text-teal-400 transition-colors"><MessageCircle size={16} className="text-teal-400" />{WHATSAPP_NUMBER}</a>
              <a href={`mailto:${EMAIL}`} className="flex items-center gap-2 text-sm text-slate-400 hover:text-teal-400 transition-colors"><Mail size={16} className="text-teal-400" />{EMAIL}</a>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-slate-800">
          <p className="text-xs text-slate-500 leading-relaxed"><span className="text-teal-400 font-semibold">FOR RESEARCH USE ONLY.</span> Products sold by Bio Pulse are intended strictly for laboratory and research purposes. NOT FOR HUMAN CONSUMPTION.</p>
          <p className="text-xs text-slate-500 mt-4">© {new Date().getFullYear()} Bio Pulse · Ireland · All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
