import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/data/site";

const NAV_LINKS = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Peptides & Products", path: "/peptides" },
  { label: "How to Order", path: "/how-to-order" },
  { label: "FAQ", path: "/faq" },
  { label: "Blog", path: "/blog" },
  { label: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [location.pathname]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100" : "bg-white border-b border-slate-100"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link to="/" className="flex items-center gap-1.5 flex-shrink-0">
            <span className="text-teal-600 font-bold text-xl tracking-tight">Bio</span>
            <span className="text-slate-900 font-bold text-xl tracking-tight">Pulse</span>
          </Link>
          <div className="hidden lg:flex items-center gap-6">
            {NAV_LINKS.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link key={link.path} to={link.path} className={`text-sm font-medium transition-colors relative group ${isActive ? "text-teal-600" : "text-slate-700 hover:text-teal-600"}`}>
                  {link.label}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-teal-600 transition-all duration-300 ${isActive ? "w-full" : "w-0 group-hover:w-full"}`} />
                </Link>
              );
            })}
          </div>
          <div className="flex items-center gap-3">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hidden sm:inline-flex items-center gap-2 bg-teal-600 text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-teal-700 transition-colors">
              <MessageCircle size={16} />Place an Order
            </a>
            <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden text-slate-700 p-1">
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 px-4 py-4 space-y-1 animate-fade-in">
          {NAV_LINKS.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link key={link.path} to={link.path} className={`block px-3 py-2.5 rounded-lg text-sm font-medium ${isActive ? "bg-teal-50 text-teal-600" : "text-slate-700 hover:bg-slate-50"}`}>
                {link.label}
              </Link>
            );
          })}
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-teal-600 text-white text-sm font-semibold px-3 py-2.5 rounded-lg mt-2">
            <MessageCircle size={16} />Place an Order
          </a>
        </div>
      )}
    </nav>
  );
}
