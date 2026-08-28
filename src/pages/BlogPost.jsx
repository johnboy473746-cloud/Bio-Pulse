import React from "react";
import { Link, useParams } from "react-router-dom";
import { Calendar, Clock, ArrowLeft, MessageCircle } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { blogPosts } from "@/data/blogPosts";
import { WHATSAPP_URL } from "@/data/site";

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="pt-32 pb-20 text-center">
        <div className="max-w-md mx-auto px-6">
          <h1 className="text-3xl font-bold text-slate-900 mb-4">Article not found</h1>
          <p className="text-slate-600 mb-8">The article you're looking for doesn't exist or has been moved.</p>
          <Link to="/blog" className="inline-flex items-center gap-2 bg-teal-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-teal-700 transition-colors">
            <ArrowLeft size={18} /> Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <section className="bg-slate-50 border-b border-slate-200 pt-28 lg:pt-36 pb-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/blog" className="inline-flex items-center gap-1.5 text-teal-600 font-semibold text-sm mb-6 hover:gap-2.5 transition-all"><ArrowLeft size={16} /> Back to Blog</Link>
          <p className="text-teal-600 font-semibold text-sm uppercase tracking-wider mb-3">{post.category}</p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight tracking-tight mb-5">{post.title}</h1>
          <div className="flex items-center gap-4 text-sm text-slate-500">
            <span className="flex items-center gap-1.5"><Calendar size={15} />{new Date(post.date).toLocaleDateString("en-IE", { day: "numeric", month: "long", year: "numeric" })}</span>
            <span className="flex items-center gap-1.5"><Clock size={15} />{post.readTime}</span>
            <span>By {post.author}</span>
          </div>
        </div>
      </section>
      <article className="py-16 lg:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-slate max-w-none">
            <ReactMarkdown components={{
              h2: ({...props}) => <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4" {...props} />,
              h3: ({...props}) => <h3 className="text-xl font-bold text-slate-900 mt-8 mb-3" {...props} />,
              p: ({...props}) => <p className="text-slate-700 leading-relaxed mb-5" {...props} />,
              ul: ({...props}) => <ul className="list-disc list-inside space-y-2 text-slate-700 mb-5" {...props} />,
              ol: ({...props}) => <ol className="list-decimal list-inside space-y-2 text-slate-700 mb-5" {...props} />,
              strong: ({...props}) => <strong className="font-semibold text-slate-900" {...props} />,
              hr: ({...props}) => <hr className="border-slate-200 my-8" {...props} />,
            }}>{post.content}</ReactMarkdown>
          </div>
          <div className="mt-12 pt-8 border-t border-slate-200">
            <div className="bg-teal-50 rounded-2xl p-8 text-center">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Have questions about our products?</h3>
              <p className="text-slate-600 mb-6">Our team is available via WhatsApp to answer questions about our products and orders.</p>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-teal-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-teal-700 transition-colors">
                <MessageCircle size={20} />Contact Us
              </a>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
