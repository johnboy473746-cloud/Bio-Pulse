import { Toaster } from "@/components/ui/toaster"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Peptides from './pages/Peptides';
import HowToOrder from './pages/HowToOrder';
import FAQ from './pages/FAQ';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Contact from './pages/Contact';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import Shipping from './pages/Shipping';
import Refund from './pages/Refund';
import Cookie from './pages/Cookie';
import Layout from './components/Layout';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { refetchOnWindowFocus: false, retry: 1 },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/peptides" element={<Peptides />} />
            <Route path="/how-to-order" element={<HowToOrder />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/shipping" element={<Shipping />} />
            <Route path="/refund" element={<Refund />} />
            <Route path="/cookie" element={<Cookie />} />
          </Route>
        </Routes>
        <Toaster />
      </Router>
    </QueryClientProvider>
  )
}

export default App
