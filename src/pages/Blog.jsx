import React from "react";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import { blogPosts } from "@/data/blogPosts";

export default function Blog() {
  return (
    <>
      <PageHero title="Research Peptide Blog | Bio Pulse Ireland" subtitle="Insights and information about research peptides, peptide science and research compounds." breadcrumb={<Link to="/" className="hover:text-teal-600">Home</Link>} />
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link key={post.slug} to={`/blog/${post.slug}`} className="group bg-white rounded-2xl border border-slate-100 overflow-hidden hover:shadow-lg hover:border-teal-100 transition-all duration-300">
                <div className="aspect-[16/10] bg-gradient-to-br from-teal-50 to-slate-100 flex items-center justify-center">
                  <div className="text-center px-6">
                    <p className="text-teal-600 font-semibold text-xs uppercase tracking-wider mb-2">{post.category}</p>
                    <p className="text-slate-400 text-sm">{post.readTime}</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-slate-500 mb-3">
                    <span className="flex items-center gap-1"><Calendar size={13} />{new Date(post.date).toLocaleDateString("en-IE", { day: "numeric", month: "short", year: "numeric" })}</span>
                    <span className="flex items-center gap-1"><Clock size={13} />{post.readTime}</span>
                  </div>
                  <h2 className="font-bold text-slate-900 text-lg leading-snug mb-3 group-hover:text-teal-600 transition-colors">{post.title}</h2>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">{post.excerpt}</p>
                  <span className="inline-flex items-center gap-1.5 text-teal-600 font-semibold text-sm group-hover:gap-2.5 transition-all">Read more <ArrowRight size={16} /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
