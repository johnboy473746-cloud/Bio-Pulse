import React from "react";
export default function PageHero({ title, subtitle, breadcrumb }) {
  return (
    <section className="bg-slate-50 border-b border-slate-200 pt-28 lg:pt-36 pb-12 lg:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {breadcrumb && <p className="text-sm text-slate-500 mb-3">{breadcrumb}</p>}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">{title}</h1>
        {subtitle && <p className="text-lg text-slate-600 mt-4 max-w-2xl leading-relaxed">{subtitle}</p>}
      </div>
    </section>
  );
}
