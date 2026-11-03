import { Link, useParams } from "react-router-dom";
import { ArrowLeft, FileCheck2, FlaskConical, MessageCircle } from "lucide-react";
import { getProduct, getCategory, PRODUCTS } from "../data/catalogue";
import { WHATSAPP_URL } from "../data/site";
import { PageHero, ProductCard, CTA } from "../components/UI";

export default function Product() {
  const { slug } = useParams();
  const product = getProduct(slug);
  if (!product) return <PageHero title="Product not found" text="The requested research product could not be found."><Link className="button button-dark" to="/peptides">Return to catalogue</Link></PageHero>;
  const category = getCategory(product.category);
  const related = PRODUCTS.filter(p => p.slug !== product.slug && p.category === product.category).slice(0,3);
  return <>
    <PageHero eyebrow={category?.name || "Research product"} title={product.name} text={product.tagline}><div className="breadcrumb"><Link to="/peptides">Research Peptides</Link> / <Link to={`/peptides/category/${product.category}`}>{category?.name}</Link> / {product.name}</div></PageHero>
    <section className="section"><div className="container product-layout">
      <article className="product-main">
        <div className="product-badge"><FlaskConical size={20}/> Research product</div>
        <h2>Research overview</h2><p className="lead-text">{product.overview}</p>
        <div className="notice"><FileCheck2 size={20}/><div><b>Batch documentation</b><p>Relevant documentation can be requested for the applicable product/batch. Documentation should be reviewed in the context of the exact material supplied.</p></div></div>
        <h2>Research areas</h2><div className="pill-list">{product.areas.map(x=><span key={x}>{x}</span>)}</div>
        <h2>Research notes</h2><p>{product.notes}</p>
        <div className="research-only"><b>Research use only</b><p>This product is supplied for legitimate laboratory and scientific research only. It is not intended for human consumption, diagnosis, treatment, cure or prevention of disease.</p></div>
        <div className="actions"><a className="button button-dark" href={WHATSAPP_URL} target="_blank" rel="noreferrer"><MessageCircle size={18}/> Request current information</a><Link className="button button-outline" to="/quality">Quality & Documentation</Link></div>
      </article>
      <aside className="side-card"><span className="tag">Catalogue</span><h3>{category?.name}</h3><p>{category?.description}</p><Link className="text-link" to={`/peptides/category/${product.category}`}>View category →</Link></aside>
    </div></section>
    {related.length>0 && <section className="section section-muted"><div className="container"><h2 className="small-section-title">Related research products</h2><div className="product-grid">{related.map(p=><ProductCard product={p} key={p.slug}/>)}</div></div></section>}
    <CTA/>
  </>
}
