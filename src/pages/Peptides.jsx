import { Link } from "react-router-dom";
import { CATEGORIES, PRODUCTS } from "../data/catalogue";
import { PageHero, SectionTitle, ProductCard, CTA } from "../components/UI";

export default function Peptides() {
  return <>
    <PageHero title="Research Peptides in Ireland" text="Explore Bio Pulse research products by category. Each product page provides research context, analytical notes and a route to request current information." />
    <section className="section"><div className="container"><SectionTitle eyebrow="Catalogue" title="Research categories"/><div className="category-grid">{CATEGORIES.map(c=><Link className="category-card" to={`/peptides/category/${c.slug}`} key={c.slug}><span className="tag">{c.products.length} products</span><h3>{c.name}</h3><p>{c.description}</p><span className="read-more">Explore category →</span></Link>)}</div></div></section>
    <section className="section section-muted"><div className="container"><SectionTitle eyebrow="All products" title="Full research catalogue"/><div className="product-grid">{PRODUCTS.map(p=><ProductCard product={p} key={p.slug}/>)}</div></div></section>
    <CTA/>
  </>
}
