import { Link, NavLink } from "react-router-dom";
import { Menu, X, MessageCircle, FlaskConical } from "lucide-react";
import { useState } from "react";
import { WHATSAPP_URL, EMAIL } from "../data/site";

export default function Layout({ children }) {
  const [open, setOpen] = useState(false);
  const nav = [
    ["/peptides", "Research Peptides"],
    ["/quality", "Quality"],
    ["/research", "Research Hub"],
    ["/about", "About"],
    ["/faq", "FAQ"],
    ["/blog", "Blog"]
  ];
  return <div className="site-shell">
    <div className="topbar"><div className="container topbar-inner"><span>🇮🇪 Ireland-based · Research & laboratory products</span><span>Research use only</span></div></div>
    <header className="header">
      <div className="container nav-wrap">
        <Link to="/" className="brand" onClick={() => setOpen(false)}>
          <span className="brand-mark"><FlaskConical size={22}/></span>
          <span><strong>Bio Pulse</strong><small>Research & Laboratory</small></span>
        </Link>
        <button className="mobile-menu" onClick={() => setOpen(!open)} aria-label="Menu">{open ? <X/> : <Menu/>}</button>
        <nav className={open ? "nav open" : "nav"}>
          {nav.map(([to,label]) => <NavLink key={to} to={to} onClick={() => setOpen(false)}>{label}</NavLink>)}
          <a className="nav-cta" href={WHATSAPP_URL} target="_blank" rel="noreferrer"><MessageCircle size={17}/> Contact</a>
        </nav>
      </div>
    </header>
    <main>{children}</main>
    <footer className="footer">
      <div className="container footer-grid">
        <div><Link to="/" className="brand footer-brand"><span className="brand-mark"><FlaskConical size={22}/></span><span><strong>Bio Pulse</strong><small>Research & Laboratory</small></span></Link><p>Research-focused peptide and laboratory product information for legitimate scientific research.</p></div>
        <div><h4>Explore</h4><Link to="/peptides">Research Peptides</Link><Link to="/quality">Quality & Documentation</Link><Link to="/research">Research Hub</Link><Link to="/blog">Research Blog</Link></div>
        <div><h4>Information</h4><Link to="/how-to-order">How to Order</Link><Link to="/shipping">Shipping</Link><Link to="/faq">FAQ</Link><Link to="/terms">Terms</Link><Link to="/privacy">Privacy</Link></div>
        <div><h4>Contact</h4><a href={WHATSAPP_URL} target="_blank" rel="noreferrer">WhatsApp</a><a href={`mailto:${EMAIL}`}>{EMAIL}</a><Link to="/contact">Contact page</Link></div>
      </div>
      <div className="container footer-bottom"><span>© {new Date().getFullYear()} Bio Pulse Ireland</span><span>All products supplied for laboratory and research use only. Not for human consumption.</span></div>
    </footer>
  </div>
}
