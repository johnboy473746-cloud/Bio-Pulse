import React from "react";
import { Link } from "react-router-dom";
import { MessageCircle, Target, Eye, Heart } from "lucide-react";
import PageHero from "@/components/PageHero";
import { WHATSAPP_URL, WHATSAPP_NUMBER } from "@/data/site";

const VALUES = [
  { icon: Target, title: "Our Mission", text: "To supply Ireland's research community with the highest-quality peptides and laboratory materials, supporting scientific exploration with integrity and transparency." },
  { icon: Eye, title: "Our Vision", text: "To be Ireland's most trusted name in research supply — recognised for purity, reliability, and professional service in every interaction." },
  { icon: Heart, title: "Our Values", text: "Quality without compromise. Honest communication. Fast, reliable service. And a genuine commitment to the research community we serve." },
];

export default function About() {
  return (
    <>
      <PageHero title="About Bio Pulse" subtitle="Ireland's trusted supplier of research-grade peptides and laboratory supplies." breadcrumb={<Link to="/" className="hover:text-teal-600">Home</Link>} />
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div><img src="https://media.base44.com/images/public/6a4126f40d8f82f729876bc9/7157881c6_generated_image.png" alt="Bio Pulse research laboratory" className="rounded-2xl shadow-lg w-full aspect-[4/3] object-cover" /></div>
            <div>
              <p className="text-teal-600 font-semibold text-sm uppercase tracking-wider mb-3">Our Story</p>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 leading-tight mb-5">Built on quality, trust, and scientific integrity</h2>
              <p className="text-slate-600 leading-relaxed mb-4">Bio Pulse was founded with a clear purpose: to provide Ireland's research community with reliable access to high-purity peptides and laboratory supplies. We saw a gap in the market for a supplier that combined genuine product quality with professional, personal service.</p>
              <p className="text-slate-600 leading-relaxed mb-4">Today, we supply research-grade compounds to laboratories, researchers, and institutions across Ireland and Europe. Every product we supply is verified for purity and consistency, with certificates of analysis available for every batch.</p>
              <p className="text-slate-600 leading-relaxed">We're not just a supplier — we're a partner to the research community, committed to supporting scientific exploration with the materials and service it deserves.</p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {VALUES.map((value) => (
              <div key={value.title} className="bg-slate-50 rounded-2xl p-8">
                <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center mb-4"><value.icon size={24} className="text-teal-600" /></div>
                <h3 className="font-bold text-slate-900 text-lg mb-3">{value.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">{value.text}</p>
              </div>
            ))}
          </div>
          <div className="bg-teal-600 rounded-2xl p-8 lg:p-12 text-center">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3">Want to learn more?</h3>
            <p className="text-teal-50 mb-6 max-w-lg mx-auto">Get in touch via WhatsApp at {WHATSAPP_NUMBER} — we're happy to answer any questions about our products or service.</p>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white text-teal-700 font-bold px-6 py-3 rounded-xl hover:bg-teal-50 transition-colors">
              <MessageCircle size={20} />Contact Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
