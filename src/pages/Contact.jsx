import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MessageCircle, Mail, Clock, Send, CheckCircle } from "lucide-react";
import PageHero from "@/components/PageHero";
import { WHATSAPP_URL, WHATSAPP_NUMBER, EMAIL, HOURS } from "@/data/site";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`New contact from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`);
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    setSent(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <>
      <PageHero title="Contact Us" subtitle="Get in touch with the Bio Pulse team. The easiest way to reach us is via WhatsApp." breadcrumb={<Link to="/" className="hover:text-teal-600">Home</Link>} />
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-6">Get in touch</h2>
              <p className="text-slate-600 leading-relaxed mb-8">Have a question or want to place an order? We're here to help. Reach out via WhatsApp for the fastest response.</p>
              <div className="space-y-4">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 bg-slate-50 rounded-2xl p-5 hover:bg-teal-50 transition-colors">
                  <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center flex-shrink-0"><MessageCircle size={24} className="text-teal-600" /></div>
                  <div><p className="font-semibold text-slate-900">WhatsApp</p><p className="text-slate-600">{WHATSAPP_NUMBER}</p></div>
                </a>
                <a href={`mailto:${EMAIL}`} className="flex items-center gap-4 bg-slate-50 rounded-2xl p-5 hover:bg-teal-50 transition-colors">
                  <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center flex-shrink-0"><Mail size={24} className="text-teal-600" /></div>
                  <div><p className="font-semibold text-slate-900">Email</p><p className="text-slate-600">{EMAIL}</p></div>
                </a>
                <div className="flex items-center gap-4 bg-slate-50 rounded-2xl p-5">
                  <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center flex-shrink-0"><Clock size={24} className="text-teal-600" /></div>
                  <div><p className="font-semibold text-slate-900">Business Hours</p><p className="text-slate-600">{HOURS}</p></div>
                </div>
              </div>
            </div>
            <div className="bg-slate-50 rounded-2xl p-8">
              {sent ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-5"><CheckCircle size={32} className="text-teal-600" /></div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Message sent!</h3>
                  <p className="text-slate-600 mb-6">Thanks for reaching out. We'll get back to you as soon as possible.</p>
                  <button onClick={() => setSent(false)} className="text-teal-600 font-semibold hover:underline">Send another message</button>
                </div>
              ) : (
                <>
                  <h2 className="text-2xl font-bold text-slate-900 mb-6">Send us a message</h2>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">Name</label>
                      <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent" placeholder="Your name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">Email</label>
                      <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent" placeholder="your@email.com" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">Message</label>
                      <textarea required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-none" placeholder="How can we help?" />
                    </div>
                    <button type="submit" className="w-full inline-flex items-center justify-center gap-2 bg-teal-600 text-white font-semibold py-3.5 rounded-xl hover:bg-teal-700 transition-colors">
                      <Send size={18} />Send Message
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
