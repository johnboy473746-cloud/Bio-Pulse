export const CATEGORIES = [
  {
    slug: "glp-1-multi-receptor-agonists",
    name: "GLP-1 & Multi-Receptor Agonists",
    short: "Receptor-pathway research",
    description: "Research compounds studied across incretin, amylin and related receptor pathways.",
    products: ["retatrutide", "tirzepatide", "cagrilintide"]
  },
  {
    slug: "tissue-repair-recovery",
    name: "Tissue Repair & Recovery Peptides",
    short: "Tissue & cellular research",
    description: "Peptides investigated in laboratory research involving tissue processes, cellular signalling and inflammatory pathways.",
    products: ["bpc-157-tb-500", "kpv", "wolverine-stack"]
  },
  {
    slug: "growth-hormone-secretagogues",
    name: "Growth Hormone Secretagogues",
    short: "Peptide signalling research",
    description: "Compounds studied in research involving growth-hormone-related signalling and receptor activity.",
    products: ["cjc-1295", "ipamorelin"]
  },
  {
    slug: "metabolic-body-composition",
    name: "Metabolic & Body Composition",
    short: "Metabolic pathway research",
    description: "Research compounds used to investigate metabolic signalling and related biological pathways.",
    products: ["5-amino-1mq", "aod-9604", "lipo-c-b12"]
  },
  {
    slug: "skin-aesthetics",
    name: "Skin & Aesthetics Research",
    short: "Skin & melanocortin research",
    description: "Compounds studied in laboratory research involving skin biology, copper-peptide pathways and melanocortin receptors.",
    products: ["ghk-cu", "melanotan-ii"]
  },
  {
    slug: "wellness-vitality",
    name: "Wellness & Vitality Research",
    short: "Biological signalling research",
    description: "Research materials associated with peptide signalling and biological systems.",
    products: ["oxytocin"]
  },
  {
    slug: "cellular-research",
    name: "Cellular Research",
    short: "Cellular biology research",
    description: "Materials used in research involving cellular energy, metabolism and related biochemical processes.",
    products: ["nad-plus"]
  }
];

export const PRODUCTS = [
  {
    slug: "retatrutide",
    name: "Retatrutide",
    category: "glp-1-multi-receptor-agonists",
    tagline: "Triple-receptor research compound",
    overview: "Retatrutide is studied for activity involving GLP-1, GIP and glucagon receptor pathways. It is a prominent subject of multi-receptor research.",
    areas: ["GLP-1 receptor research", "GIP receptor research", "Glucagon receptor research", "Multi-receptor signalling"],
    notes: "Research literature commonly examines how simultaneous engagement of these pathways differs from single- or dual-receptor approaches."
  },
  {
    slug: "tirzepatide",
    name: "Tirzepatide",
    category: "glp-1-multi-receptor-agonists",
    tagline: "Dual GLP-1 / GIP receptor research compound",
    overview: "Tirzepatide is studied as a dual agonist involving GLP-1 and GIP receptor pathways and is widely discussed in metabolic research.",
    areas: ["GLP-1 research", "GIP research", "Receptor signalling", "Metabolic research"],
    notes: "Research comparisons often examine dual-pathway receptor activity and how it differs from single-receptor compounds."
  },
  {
    slug: "cagrilintide",
    name: "Cagrilintide",
    category: "glp-1-multi-receptor-agonists",
    tagline: "Amylin-pathway research compound",
    overview: "Cagrilintide is studied in relation to the amylin receptor pathway and is useful as a distinct comparison point in receptor research.",
    areas: ["Amylin pathway", "Receptor activity", "Satiety signalling research", "Gastrointestinal research"],
    notes: "Its mechanism is distinct from GLP-1 and GIP receptor agonists, making it relevant to multi-pathway research."
  },
  {
    slug: "bpc-157-tb-500",
    name: "BPC-157 / TB-500",
    category: "tissue-repair-recovery",
    tagline: "Paired tissue and cellular research compounds",
    overview: "BPC-157 and TB-500 are frequently discussed together in laboratory research involving tissue-related processes, cellular migration and inflammatory signalling.",
    areas: ["Tissue research", "Cellular signalling", "Inflammatory pathways", "Angiogenesis research"],
    notes: "The two compounds have different proposed mechanisms and are often compared in research models rather than treated as interchangeable materials."
  },
  {
    slug: "kpv",
    name: "KPV",
    category: "tissue-repair-recovery",
    tagline: "Tripeptide for inflammation-focused research",
    overview: "KPV is a short peptide sequence studied in research involving inflammatory signalling, intestinal models and skin-related pathways.",
    areas: ["Inflammatory signalling", "Intestinal research", "Skin research", "Immune signalling"],
    notes: "Research findings depend on the experimental model, conditions and analytical methods used."
  },
  {
    slug: "wolverine-stack",
    name: "Wolverine Stack",
    category: "tissue-repair-recovery",
    tagline: "BPC-157 / TB-500 research combination",
    overview: "The Wolverine Stack is a research combination built around BPC-157 and TB-500 for studies examining multiple tissue-related and cellular pathways.",
    areas: ["Combined research", "Tissue pathways", "Cellular migration", "Inflammatory research"],
    notes: "This is a research combination, not a medical treatment protocol."
  },
  {
    slug: "cjc-1295",
    name: "CJC-1295",
    category: "growth-hormone-secretagogues",
    tagline: "Growth-hormone-related signalling research",
    overview: "CJC-1295 is studied in laboratory research involving growth-hormone-releasing hormone pathways and peptide signalling.",
    areas: ["GHRH research", "Peptide signalling", "Receptor activity", "Endocrine research"],
    notes: "Different CJC-1295 formulations and experimental designs can have different research characteristics."
  },
  {
    slug: "ipamorelin",
    name: "Ipamorelin",
    category: "growth-hormone-secretagogues",
    tagline: "Growth-hormone secretagogue research",
    overview: "Ipamorelin is a peptide studied for its interaction with pathways associated with growth-hormone secretion and receptor signalling.",
    areas: ["Secretagogue research", "Receptor signalling", "Peptide biology", "Endocrine research"],
    notes: "Laboratory findings should be interpreted in the context of the specific experimental model."
  },
  {
    slug: "5-amino-1mq",
    name: "5-Amino-1MQ",
    category: "metabolic-body-composition",
    tagline: "NNMT-related research compound",
    overview: "5-Amino-1MQ is studied in research involving nicotinamide N-methyltransferase (NNMT) and related cellular metabolic pathways.",
    areas: ["NNMT research", "Cellular metabolism", "Metabolic signalling", "Biochemical research"],
    notes: "It is not a peptide; it is included as a research compound within the catalogue."
  },
  {
    slug: "aod-9604",
    name: "AOD-9604",
    category: "metabolic-body-composition",
    tagline: "Peptide fragment studied in metabolic research",
    overview: "AOD-9604 is a peptide fragment investigated in laboratory research involving metabolic and adipose-related biological pathways.",
    areas: ["Metabolic research", "Adipose biology", "Peptide research", "Cellular pathways"],
    notes: "Experimental findings vary by model and do not establish human-use suitability."
  },
  {
    slug: "lipo-c-b12",
    name: "Lipo-C + B12",
    category: "metabolic-body-composition",
    tagline: "Laboratory research formulation",
    overview: "Lipo-C + B12 is presented as a research formulation for laboratory investigation of its listed components and their biochemical characteristics.",
    areas: ["Formulation research", "Biochemical analysis", "Cellular research", "Analytical comparison"],
    notes: "Composition and documentation should always be checked against the specific batch supplied."
  },
  {
    slug: "ghk-cu",
    name: "GHK-Cu",
    category: "skin-aesthetics",
    tagline: "Copper-peptide research compound",
    overview: "GHK-Cu is a copper-binding peptide studied in research involving skin biology, extracellular matrix processes and cellular activity.",
    areas: ["Copper-peptide research", "Skin biology", "Cellular research", "Protein interactions"],
    notes: "Research terminology should not be interpreted as a claim of cosmetic or therapeutic effectiveness."
  },
  {
    slug: "melanotan-ii",
    name: "Melanotan II",
    category: "skin-aesthetics",
    tagline: "Melanocortin receptor research compound",
    overview: "Melanotan II is studied for its interaction with melanocortin receptor pathways and related biological signalling.",
    areas: ["Melanocortin research", "Receptor activity", "Pigmentation pathways", "Peptide signalling"],
    notes: "Research use does not imply approval or suitability for human use."
  },
  {
    slug: "oxytocin",
    name: "Oxytocin",
    category: "wellness-vitality",
    tagline: "Peptide hormone for receptor research",
    overview: "Oxytocin is a naturally occurring peptide hormone studied in research involving receptor activity and biological signalling.",
    areas: ["Receptor research", "Peptide hormones", "Cellular signalling", "Neuroendocrine research"],
    notes: "This catalogue entry is for research context only and does not provide medical guidance."
  },
  {
    slug: "nad-plus",
    name: "NAD+",
    category: "cellular-research",
    tagline: "Cellular coenzyme research material",
    overview: "NAD+ is a coenzyme involved in cellular redox reactions and energy metabolism and is widely studied in cellular biology.",
    areas: ["Cellular metabolism", "Redox biology", "Energy pathways", "Biochemical research"],
    notes: "NAD+ is a biochemical research material rather than a peptide."
  }
];

export const getProduct = (slug) => PRODUCTS.find(p => p.slug === slug);
export const getCategory = (slug) => CATEGORIES.find(c => c.slug === slug);
