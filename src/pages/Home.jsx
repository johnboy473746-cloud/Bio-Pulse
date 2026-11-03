import { Link } from "react-router-dom";
import { ArrowRight, FileCheck2, FlaskConical, BookOpen, ShieldCheck, Search, MessageCircle } from "lucide-react";
import { CATEGORIES, PRODUCTS } from "../data/catalogue";
import { FAQS, WHATSAPP_URL } from "../data/site";
import { ProductCard, SectionTitle, Feature, GuideCard } from "../components/UI";

export default function Home() {
  return <>
    <section className="hero">
      <div className="container hero-grid">
        <div>
          <div className="eyebrow">🇮🇪 Ireland · Scientific research</div>
          <h1>Research Peptides & Laboratory Products in Ireland</h1>
          <p className="hero-lead">Explore a research-focused catalogue of peptide and laboratory products, with clear product information, research resources and batch documentation.</p>
          <div className="actions"><Link className="button button-dark" to="/peptides">Browse Research Peptides <ArrowRight size={18}/></Link><Link className="button button-outline" to="/quality">Quality & Documentation</Link></div>
          <div className="hero-note"><ShieldCheck size={17}/> Laboratory and research use only · 18+</div>
        </div>
        <div className="science-card">
          <div className="science-head"><span className="brand-mark"><FlaskConical size={22}/></span><div><strong>Bio Pulse</strong><small>Research catalogue</small></div></div>
          <div className="science-row"><span>01</span><div><b>Research catalogue</b><small>Compound and category information</small></div></div>
          <div className="science-row"><span>02</span><div><b>Batch documentation</b><small>Documentation can be requested for relevant products</small></div></div>
          <div className="science-row"><span>03</span><div><b>Research hub</b><small>Plain-language scientific explainers</small></div></div>
          <div className="science-row"><span>04</span><div><b>Ireland & Europe</b><small>Contact us for current availability</small></div></div>
        </div>
      </div>
    </section>

    <section className="trust-strip"><div className="container trust-grid"><div><b>Research use only</b><span>Clear intended-use positioning</span></div><div><b>Batch documentation</b><span>Ask for relevant records</span></div><div><b>Research information</b><span>Product and educational resources</span></div><div><b>Ireland based</b><span>Local contact and support</span></div></div></section>

    <section className="section"><div className="container"><SectionTitle eyebrow="Why Bio Pulse" title="A clearer research catalogue" text="Designed around information first: what the compound is, how it is studied, and where documentation fits."/><div className="feature-grid"><Feature icon={Search} title="Clear product information" text="Research-focused descriptions without confusing medical or treatment claims."/><Feature icon={FileCheck2} title="Documentation matters" text="Use batch identifiers and analytical documentation to support traceability."/><Feature icon={BookOpen} title="Research resources" text="Plain-language guides covering peptides, analytical terms and laboratory documentation."/><Feature icon={MessageCircle} title="Direct support" text="Contact Bio Pulse for current product information and availability." /></div></div></section>

    <section className="section section-muted"><div className="container"><SectionTitle eyebrow="Catalogue" title="Explore research categories" text="Browse the catalogue by research area."/><div className="category-grid">{CATEGORIES.map(c => <Link className="category-card" key={c.slug} to={`/peptides/category/${c.slug}`}><span className="category-number">{String(CATEGORIES.indexOf(c)+1).padStart(2,"0")}</span><h3>{c.name}</h3><p>{c.description}</p><span className="read-more">View category <ArrowRight size={16}/></span></Link>)}</div></div></section>

    <section className="section"><div className="container"><SectionTitle eyebrow="Featured compounds" title="Research products" text="Product pages provide research context and a place to request current information."/><div className="product-grid">{PRODUCTS.slice(0,8).map(p => <ProductCard key={p.slug} product={p}/>)}</div><div className="center-action"><Link className="text-link" to="/peptides">View full catalogue <ArrowRight size={17}/></Link></div></div></section>

    <section className="section section-muted"><div className="container"><SectionTitle eyebrow="Research hub" title="Learn before you order" text="Understand the terminology around research peptides and analytical documentation."/><div className="guide-grid"><GuideCard to="/research/what-are-research-peptides" category="Foundations" title="What Are Research Peptides?" text="An introduction to peptides and how they are discussed in laboratory research."/><GuideCard to="/research/peptide-purity" category="Analysis" title="Understanding Peptide Purity" text="What a reported purity figure means and why method and batch context matter."/><GuideCard to="/research/hplc-analysis" category="Quality" title="What Is HPLC Analysis?" text="A plain-language explanation of a common analytical technique."/><GuideCard to="/research/certificates-of-analysis" category="Documentation" title="Understanding COAs" text="How certificates of analysis fit into research material documentation."/></div></div></section>

    <section className="section"><div className="container"><SectionTitle eyebrow="FAQ" title="Common research questions"/><div className="faq-grid">{FAQS.slice(0,6).map(([q,a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div><div className="center-action"><Link className="text-link" to="/faq">See all FAQs <ArrowRight size={17}/></Link></div></div></section>

    <section className="cta-section"><div className="container cta"><div><div className="eyebrow">Bio Pulse Ireland</div><h2>Looking for a specific research compound?</h2><p>Browse the catalogue or contact us for current product information, availability and relevant documentation.</p></div><div className="actions"><Link className="button button-light" to="/peptides">Browse Catalogue</Link><a className="button button-ghost" href={WHATSAPP_URL} target="_blank" rel="noreferrer"><MessageCircle size={18}/> WhatsApp</a></div></div></section>
  </>
}
