import { Link, useParams } from "react-router-dom";
import { PageHero, GuideCard, SectionTitle } from "../components/UI";
import { BLOGS } from "../data/site";

const guides = [
  ["what-are-research-peptides","What Are Research Peptides?","Foundations","An introduction to peptides, research context and laboratory terminology."],
  ["peptide-purity","Understanding Peptide Purity","Analysis","What a purity figure means and why analytical method matters."],
  ["hplc-analysis","What Is HPLC Analysis?","Analysis","A plain-language explanation of high-performance liquid chromatography."],
  ["certificates-of-analysis","Understanding Certificates of Analysis","Documentation","How COAs and batch identifiers fit into research records."],
  ["batch-documentation","Why Batch Documentation Matters","Documentation","Why traceability matters when recording research materials."],
  ["research-terminology","Research Peptide Terminology","Glossary","A quick guide to common research and laboratory terms."],
  ["peptide-storage","Peptide Storage: Research Considerations","Handling","General research considerations around storage and documentation."],
];

export function ResearchHub(){return <><PageHero title="Peptide Research Hub" text="Original, plain-language research guides covering peptide science, analytical documentation and laboratory terminology."/><section className="section"><div className="container"><SectionTitle eyebrow="Research guides" title="Learn the terminology"/><div className="guide-grid">{guides.map(g=><GuideCard key={g[0]} to={`/research/${g[0]}`} title={g[1]} category={g[2]} text={g[3]}/>)}</div></div></section></>}

export function Guide(){const {slug}=useParams(); const g=guides.find(x=>x[0]===slug); if(!g) return <PageHero title="Guide not found" text="Return to the Research Hub."/>; return <><PageHero eyebrow={g[2]} title={g[1]} text={g[3]}><div className="breadcrumb"><Link to="/research">Research Hub</Link> / {g[1]}</div></PageHero><section className="section"><div className="container narrow prose"><h2>Research context</h2><p>This guide is provided for educational and research-information purposes. It is intended to explain terminology and concepts rather than provide medical advice or human-use instructions.</p><h2>Why the term matters</h2><p>Researchers benefit from understanding the exact meaning and limits of analytical and product terminology. A product name or single number rarely provides the complete experimental context.</p><h2>Documentation</h2><p>Where a specific material is involved, researchers should keep appropriate batch identifiers, analytical documentation and experimental records together.</p><h2>Important distinction</h2><p>Research information should not be interpreted as a claim that a compound is approved, safe or effective for people. Research findings are dependent on the model, methods and conditions used.</p></div></section></>}

export function Blog(){return <><PageHero title="Bio Pulse Research Blog" text="Research-focused articles covering peptide science, documentation and laboratory terminology."/><section className="section"><div className="container"><div className="guide-grid">{BLOGS.map(b=><GuideCard key={b.slug} to={`/blog/${b.slug}`} category={b.category} title={b.title} text={b.excerpt}/>)}</div></div></section></>}

export function BlogPost(){const {slug}=useParams();const b=BLOGS.find(x=>x.slug===slug);if(!b)return <PageHero title="Article not found" text="Return to the Research Blog."/>;return <><PageHero eyebrow={b.category} title={b.title} text={b.excerpt}><div className="breadcrumb"><Link to="/blog">Blog</Link> / {b.title}</div></PageHero><article className="section"><div className="container narrow prose"><p className="meta">{b.date} · Bio Pulse Research</p>{b.sections.map(([h,p])=><section key={h}><h2>{h}</h2><p>{p}</p></section>)}<div className="research-only"><b>Research information only</b><p>This article is educational content. It is not medical advice and does not provide human-use instructions.</p></div></div></article></>}
