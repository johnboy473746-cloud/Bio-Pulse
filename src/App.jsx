import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Peptides from "./pages/Peptides";
import Category from "./pages/Category";
import Product from "./pages/Product";
import { About, HowToOrder, Quality, FAQ, Contact, Shipping, Terms, Privacy, Refund, Cookie } from "./pages/InfoPages";
import { ResearchHub, Guide, Blog, BlogPost } from "./pages/Research";
import NotFound from "./pages/NotFound";

export default function App(){
  return <Layout><Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/peptides" element={<Peptides/>}/>
    <Route path="/peptides/category/:slug" element={<Category/>}/>
    <Route path="/peptides/:slug" element={<Product/>}/>
    <Route path="/how-to-order" element={<HowToOrder/>}/>
    <Route path="/quality" element={<Quality/>}/>
    <Route path="/faq" element={<FAQ/>}/>
    <Route path="/blog" element={<Blog/>}/>
    <Route path="/blog/:slug" element={<BlogPost/>}/>
    <Route path="/research" element={<ResearchHub/>}/>
    <Route path="/research/:slug" element={<Guide/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/shipping" element={<Shipping/>}/>
    <Route path="/terms" element={<Terms/>}/>
    <Route path="/privacy" element={<Privacy/>}/>
    <Route path="/refund" element={<Refund/>}/>
    <Route path="/cookie" element={<Cookie/>}/>
    <Route path="*" element={<NotFound/>}/>
  </Routes></Layout>
}
