import React from "react";
export default function LegalLayout({ title, lastUpdated, children }) {
  return (
    <>
      <section className="bg-slate-50 border-b border-slate-200 pt-28 lg:pt-36 pb-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">{title}</h1>
          {lastUpdated && <p className="text-sm text-slate-500 mt-3">Last updated: {lastUpdated}</p>}
        </div>
      </section>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="space-y-6 text-slate-700 leading-relaxed">{children}</div>
      </div>
    </>
  );
}
