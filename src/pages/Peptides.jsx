import React from "react";
import { Link } from "react-router-dom";
import { Microscope, Dna, Zap, Heart, Sparkles, Sun, MessageCircle } from "lucide-react";
import PageHero from "@/components/PageHero";
import { WHATSAPP_URL } from "@/data/site";

const CATEGORIES = [
  { icon: Microscope, name: "GLP-1 & Multi-Receptor Agonists", description: "Next-generation compounds targeting GLP-1, GIP, and glucagon receptors to support metabolic research, appetite regulation studies, and insulin sensitivity investigations.", compounds: [{ name: "Retatrutide", info: "A triple-receptor agonist targeting GLP-1, GIP, and glucagon. Studied for its effects on fat loss, insulin sensitivity, and energy expenditure in metabolic research." }, { name: "Tirzepatide", info: "A dual-receptor agonist activating both GLP-1 and GIP pathways. Investigated for effects on appetite regulation, glucose metabolism, and body composition." }, { name: "Carglinitide", info: "Targets the amylin pathway to enhance satiety and slow gastric emptying. Studied for appetite regulation and sustained weight management research." }] },
  { icon: Dna, name: "Tissue Repair & Recovery Peptides", description: "Compounds studied for their potential roles in tissue regeneration, inflammation modulation, and accelerated healing pathways.", compounds: [{ name: "BPC-157 / TB-500", info: "Studied together for their potential synergistic effects on tissue repair, inflammation reduction, and muscle, tendon, and joint recovery." }, { name: "KPV", info: "A tripeptide studied for its anti-inflammatory properties, with research exploring roles in gut inflammation, skin health, and immune modulation." }, { name: "GHK-Cu", info: "A copper peptide studied for its roles in collagen production, skin regeneration, and wound healing research." }] },
  { icon: Zap, name: "Growth Hormone Secretagogues", description: "Compounds supporting research into natural growth hormone production, cellular repair mechanisms, and metabolic optimization.", compounds: [{ name: "CJC-1295 (No DAC)", info: "Studied for its effects on growth hormone release, with research exploring muscle growth, fat metabolism, and recovery." }, { name: "HGH (Human Growth Hormone)", info: "Studied for its roles in lean muscle development, fat metabolism, tissue repair, and overall vitality in research models." }, { name: "NAD+", info: "A vital coenzyme studied for its roles in cellular energy production, mitochondrial function, and healthy aging research." }] },
  { icon: Heart, name: "Metabolic & Body Composition", description: "Compounds for research into fat metabolism, energy expenditure, and body composition optimization.", compounds: [{ name: "5-Amino-1MQ", info: "Targets cellular pathways regulating fat storage and energy use. Studied for effects on metabolism and body composition." }, { name: "AOD-9604", info: "Studied for its potential to stimulate lipolysis and promote fat breakdown without impacting appetite or blood sugar levels." }, { name: "Lipo-C + B12", info: "A lipotropic blend studied for its roles in converting stored fat to energy, supporting liver function and metabolic efficiency." }] },
  { icon: Sparkles, name: "Skin & Aesthetics Research", description: "Peptides studied for their potential roles in skin rejuvenation, anti-aging, and aesthetic research.", compounds: [{ name: "Snap-8", info: "A topical peptide studied as a botox alternative, researched for reducing the appearance of fine lines and expression lines." }, { name: "Melanotan I (MT-1)", info: "Studied for its effects on melanin production, promoting a gradual, natural-looking tan with reduced sun exposure." }, { name: "Melanotan II (MT-2)", info: "Studied for stimulating melanin production for a deeper tan, with additional research into mood and vitality effects." }] },
  { icon: Sun, name: "Wellness & Vitality Research", description: "Compounds supporting research into mood, stress, and overall emotional and physical wellness.", compounds: [{ name: "Oxytocin", info: "Studied for its roles in mood, stress reduction, and emotional balance, with research exploring social bonding and mental clarity." }] },
];

export default function Peptides() {
  return (
    <>
      <PageHero title="Peptides & Products" subtitle="Research-grade peptides and laboratory supplies for scientific investigation. All products are for research use only — not for human consumption." breadcrumb={<Link to="/" className="hover:text-teal-600">Home</Link>} />
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {CATEGORIES.map((category, catIdx) => (
              <div key={category.name}>
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 bg-teal-50 rounded-2xl flex items-center justify-center flex-shrink-0"><category.icon size={28} className="text-teal-600" /></div>
                  <div>
                    <p className="text-xs text-teal-600 font-semibold uppercase tracking-wider mb-1">Category {String(catIdx + 1).padStart(2, "0")}</p>
                    <h2 className="text-2xl lg:text-3xl font-bold text-slate-900">{category.name}</h2>
                  </div>
                </div>
                <p className="text-slate-600 leading-relaxed mb-8 max-w-3xl">{category.description}</p>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.compounds.map((compound) => (
                    <div key={compound.name} className="bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:border-teal-100 transition-colors">
                      <h3 className="font-bold text-slate-900 text-lg mb-3">{compound.name}</h3>
                      <p className="text-sm text-slate-600 leading-relaxed">{compound.info}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-16 bg-teal-50 border border-teal-100 rounded-2xl p-8 text-center">
            <h3 className="text-xl font-bold text-slate-900 mb-3">Need help choosing?</h3>
            <p className="text-slate-600 mb-6 max-w-lg mx-auto">Our team is available via WhatsApp to help with product information and research guidance. No prices are listed online — contact us directly to order.</p>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-teal-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-teal-700 transition-colors">
              <MessageCircle size={20} />Contact Us to Order
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
