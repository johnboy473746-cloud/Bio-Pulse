import { Link, useParams } from "react-router-dom";
import { CATEGORIES, PRODUCTS, getCategory } from "../data/catalogue";
import { PageHero, SectionTitle, ProductCard, CTA } from "../components/UI";

export default function Category() {
  const { slug } = useParams();
  const category = getCategory(slug);
  if (!category) return <NotFound />;
  const products = PRODUCTS.filter(p => category.products.includes(p.slug));
  return <>
    <PageHero eyebrow="Research category" title={category.name} text={category.description}><div className="breadcrumb"><Link to="/peptides">Research Peptides</Link> / {category.name}</div></PageHero>
    <section className="section"><div className="container"><SectionTitle eyebrow={category.short} title={`${category.name} research products`} text="Select a product for its research overview, areas of study and documentation information."/><div className="product-grid">{products.map(p=><ProductCard product={p} key={p.slug}/>)}</div></div></section>
    <CTA/>
  </>
}
function NotFound(){return <PageHero title="Category not found" text="The requested research category could not be found."><Link className="button button-dark" to="/peptides">Return to catalogue</Link></PageHero>}
