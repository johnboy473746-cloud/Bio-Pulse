import { Link } from "react-router-dom";
import { ArrowRight, FlaskConical, FileCheck2, BookOpen, MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "../data/site";

export function PageHero({ eyebrow="Bio Pulse Ireland", title, text, children }) {
  return <section className="page-hero"><div className="container"><div className="eyebrow">{eyebrow}</div><h1>{title}</h1>{text && <p>{text}</p>}{children}</div></section>
}
export function SectionTitle({ eyebrow, title, text, center=false }) {
  return <div className={center ? "section-title center" : "section-title"}>{eyebrow && <div className="eyebrow">{eyebrow}</div>}<h2>{title}</h2>{text && <p>{text}</p>}</div>
}
export function CTA({ title="Need current product information?", text="Contact Bio Pulse for current availability and relevant research documentation.", button="Contact Bio Pulse" }) {
  return <section className="cta-section"><div className="container cta"><div><div className="eyebrow">Research support</div><h2>{title}</h2><p>{text}</p></div><a className="button button-light" href={WHATSAPP_URL} target="_blank" rel="noreferrer"><MessageCircle size={18}/>{button}</a></div></section>
}
export function Feature({ icon:Icon, title, text }) { return <div className="feature"><div className="feature-icon"><Icon size={22}/></div><div><h3>{title}</h3><p>{text}</p></div></div> }
export function ProductCard({ product }) { return <Link className="product-card" to={`/peptides/${product.slug}`}><div className="product-icon"><FlaskConical size={20}/></div><div><span className="tag">Research product</span><h3>{product.name}</h3><p>{product.tagline}</p></div><ArrowRight size={18} className="card-arrow"/></Link> }
export function GuideCard({ to, title, text, category }) { return <Link className="guide-card" to={to}><span className="tag">{category}</span><h3>{title}</h3><p>{text}</p><span className="read-more">Read guide <ArrowRight size={16}/></span></Link> }
