import React from "react";
import { Link } from "react-router-dom";
import {
  Microscope,
  Dna,
  Zap,
  Heart,
  Sparkles,
  Sun,
  MessageCircle,
  Star,
  FlaskConical,
} from "lucide-react";

import PageHero from "@/components/PageHero";
import { WHATSAPP_URL } from "@/data/site";

const CATEGORIES = [
  {
    icon: Dna,
    name: "Tissue Research Peptides",
    description:
      "Research compounds studied in areas involving tissue processes, cellular activity and related biological pathways.",
    compounds: [
      {
        name: "BPC-157",
        info:
          "BPC-157 is a peptide used in scientific research investigating biological and tissue-related processes.",
      },
      {
        name: "TB-500",
        info:
          "TB-500 is a research peptide investigated in studies involving cellular and tissue-related pathways.",
      },
      {
        name: "Wolverine Stack",
        info:
          "The Wolverine Stack combines BPC-157 and TB-500 for research involving these two compounds.",
      },
    ],
  },
  {
    icon: Sparkles,
    name: "Skin & Peptide Research",
    description:
      "Research compounds studied in areas involving skin biology, peptide activity and melanocortin pathways.",
    compounds: [
      {
        name: "GHK-Cu",
        info:
          "GHK-Cu is a copper peptide studied in research involving skin biology, collagen-related processes and cellular activity.",
      },
      {
        name: "Melanotan II (MT-2)",
        info:
          "Melanotan II is a research peptide investigated for its interaction with melanocortin receptors and melanin-related pathways.",
      },
    ],
  },
  {
    icon: Zap,
    name: "Cellular Research",
    description:
      "Compounds used in scientific research involving cellular energy and metabolic processes.",
    compounds: [
      {
        name: "NAD+",
        info:
          "NAD+ is a coenzyme widely studied for its role in cellular energy production and metabolic processes.",
      },
    ],
  },
  {
    icon: Heart,
    name: "Oxytocin Research",
    description:
      "Research compounds investigated for their role in biological signalling and receptor pathways.",
    compounds: [
      {
        name: "Oxytocin",
        info:
          "Oxytocin is a peptide hormone studied in scientific research involving biological signalling and receptor activity.",
      },
    ],
  },
];

export default function Peptides() {
  return (
    <>
      <PageHero
        title="Research Peptides in Ireland"
        subtitle="Explore research compounds from Bio Pulse Ireland, including Retatrutide, BPC-157, TB-500, the Wolverine Stack, GHK-Cu, NAD+, Melanotan II and Oxytocin. All products are for laboratory and research use only."
        breadcrumb={
          <Link to="/" className="hover:text-teal-600">
            Home
          </Link>
        }
      />

      <section className="py-16 lg:py-24 bg-white">

        {/* RETATRUTIDE FEATURED SECTION */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">

          <div className="bg-gradient-to-br from-teal-50 to-white border-2 border-teal-200 rounded-3xl p-8 lg:p-12 shadow-sm">

            <div className="flex items-center gap-3 mb-6">
              <div className="bg-teal-600 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2">
                <Star size={16} />
                FEATURED RESEARCH COMPOUND
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-10 items-center">

              <div>
                <p className="text-teal-600 font-semibold uppercase tracking-wider mb-3">
                  Bio Pulse Ireland
                </p>

                <h2 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-4">
                  Retatrutide
                </h2>

                <p className="text-2xl font-semibold text-teal-600 mb-6">
                  Triple-Receptor Research Peptide
                </p>

                <p className="text-slate-600 text-lg leading-relaxed mb-6">
                  Retatrutide is a research compound investigated for its
                  activity across GLP-1, GIP and glucagon receptor pathways.
                  It has become a significant area of interest in metabolic
                  and multi-receptor scientific research.
                </p>

                <p className="text-slate-600 leading-relaxed">
                  Researchers exploring Retatrutide in Ireland can contact
                  Bio Pulse Ireland for current product information and
                  availability.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-teal-100">

                <div className="flex items-center gap-3 mb-6">
                  <FlaskConical className="text-teal-600" size={32} />
                  <h3 className="text-2xl font-bold text-slate-900">
                    Retatrutide Research
                  </h3>
                </div>

                <div className="space-y-5 text-slate-600">

                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">
                      GLP-1 Research
                    </h4>
                    <p>
                      Investigated for activity involving GLP-1 receptor pathways.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">
                      GIP Research
                    </h4>
                    <p>
                      Studied for its interaction with GIP receptor pathways.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">
                      Glucagon Research
                    </h4>
                    <p>
                      Also investigated for activity involving glucagon receptors.
                    </p>
                  </div>

                  <div className="pt-4 border-t">
                    <p className="font-semibold text-slate-900">
                      Triple-receptor research compound
                    </p>
                    <p className="text-sm mt-2">
                      For laboratory and scientific research use only.
                    </p>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>

        {/* SEO INTRODUCTION */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">

          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
            Research Peptides Ireland
          </h2>

          <div className="space-y-5 text-slate-600 text-lg leading-relaxed">

            <p>
              Bio Pulse Ireland provides research peptides and laboratory
              compounds for scientific investigation. Our range includes
              compounds studied in metabolic research, tissue-related
              processes, cellular biology, peptide research and receptor
              pathways.
            </p>

            <p>
              Our available research compounds include Retatrutide,
              BPC-157, TB-500, the Wolverine Stack, GHK-Cu, NAD+,
              Melanotan II and Oxytocin.
            </p>

            <p>
              Retatrutide is currently one of the main research compounds
              featured by Bio Pulse Ireland. Alongside our wider peptide
              range, we aim to provide clear product information for
              researchers looking for research peptides in Ireland.
            </p>

          </div>
        </div>

        {/* OTHER PRODUCTS */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="mb-16">
            <p className="text-teal-600 font-semibold uppercase tracking-wider mb-3">
              Bio Pulse Ireland
            </p>

            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
              Other Research Peptides Available
            </h2>
          </div>

          <div className="space-y-16">

            {CATEGORIES.map((category, catIdx) => (
              <div key={category.name}>

                <div className="flex items-center gap-4 mb-8">

                  <div className="w-14 h-14 bg-teal-50 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <category.icon
                      size={28}
                      className="text-teal-600"
                    />
                  </div>

                  <div>
                    <p className="text-xs text-teal-600 font-semibold uppercase tracking-wider mb-1">
                      Category {String(catIdx + 1).padStart(2, "0")}
                    </p>

                    <h2 className="text-2xl lg:text-3xl font-bold text-slate-900">
                      {category.name}
                    </h2>
                  </div>

                </div>

                <p className="text-slate-600 leading-relaxed mb-8 max-w-3xl">
                  {category.description}
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

                  {category.compounds.map((compound) => (
                    <div
                      key={compound.name}
                      className="bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:border-teal-300 transition-colors"
                    >
                      <h3 className="font-bold text-slate-900 text-xl mb-3">
                        {compound.name}
                      </h3>

                      <p className="text-sm text-slate-600 leading-relaxed">
                        {compound.info}
                      </p>
                    </div>
                  ))}

                </div>
              </div>
            ))}

          </div>

          {/* FAQ */}
          <div className="mt-24 max-w-4xl mx-auto">

            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-10">
              Research Peptides FAQ
            </h2>

            <div className="space-y-6">

              <div className="bg-slate-50 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  What research peptides are available from Bio Pulse Ireland?
                </h3>
                <p className="text-slate-600">
                  Our current range includes Retatrutide, BPC-157, TB-500,
                  the Wolverine Stack, GHK-Cu, NAD+, Melanotan II and Oxytocin.
                </p>
              </div>

              <div className="bg-slate-50 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  Is Retatrutide available from Bio Pulse Ireland?
                </h3>
                <p className="text-slate-600">
                  Contact Bio Pulse Ireland directly for current product
                  availability and further information regarding Retatrutide.
                </p>
              </div>

              <div className="bg-slate-50 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  Do you stock BPC-157 and TB-500?
                </h3>
                <p className="text-slate-600">
                  Bio Pulse Ireland currently offers BPC-157, TB-500 and
                  the Wolverine Stack, which combines the two compounds
                  for research purposes.
                </p>
              </div>

              <div className="bg-slate-50 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  How can I contact Bio Pulse Ireland?
                </h3>
                <p className="text-slate-600">
                  You can contact our team directly via WhatsApp for
                  current product information and availability.
                </p>
              </div>

              <div className="bg-slate-50 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  Are these products for human consumption?
                </h3>
                <p className="text-slate-600">
                  No. All products supplied by Bio Pulse Ireland are
                  intended strictly for laboratory and scientific research
                  use only and are not for human consumption.
                </p>
              </div>

            </div>
          </div>

          {/* CONTACT */}
          <div className="mt-20 bg-teal-50 border border-teal-200 rounded-3xl p-8 lg:p-12 text-center">

            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Looking for Research Peptides in Ireland?
            </h2>

            <p className="text-slate-600 mb-8 max-w-2xl mx-auto text-lg">
              Contact Bio Pulse Ireland for current information on
              Retatrutide and our available research peptide range.
            </p>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-teal-600 text-white font-semibold px-8 py-4 rounded-xl hover:bg-teal-700 transition-colors"
            >
              <MessageCircle size={22} />
              Contact Bio Pulse Ireland
            </a>

            <p className="text-xs text-slate-500 mt-6">
              All products are strictly for laboratory and research use only.
              Not for human consumption.
            </p>

          </div>

        </div>
      </section>
    </>
  );
}
