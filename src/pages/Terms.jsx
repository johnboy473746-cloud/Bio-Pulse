import React from "react";
import LegalLayout from "@/components/LegalLayout";
export default function Terms() {
  return (
    <LegalLayout title="Terms & Conditions" lastUpdated="August 2026">
      <p>These Terms and Conditions govern your use of the Bio Pulse website and the purchase of research products from Bio Pulse.</p>
      <h2 className="text-xl font-bold text-slate-900 pt-4">1. Research Use Only</h2>
      <p>All peptides sold by Bio Pulse Ireland are intended strictly for research purposes. Products are NOT FOR HUMAN CONSUMPTION. By purchasing from Bio Pulse Ireland, you confirm that products will be used exclusively for legitimate research purposes.</p>
      <h2 className="text-xl font-bold text-slate-900 pt-4">2. Age Requirement</h2>
      <p>You must be 18 years of age or older to access this website and to purchase products from Bio Pulse.</p>
      <h2 className="text-xl font-bold text-slate-900 pt-4">3. Shipping Areas</h2>
      <p>Bio Pulse ships across Ireland and Europe, including Northern Ireland and all EU countries.</p>
      <h2 className="text-xl font-bold text-slate-900 pt-4">4. Ordering and Payment</h2>
      <p>Orders are placed directly via WhatsApp. Payment must be received in full before dispatch. We accept bank transfer and other secure payment methods as agreed during the ordering process.</p>
      <h2 className="text-xl font-bold text-slate-900 pt-4">5. Contact</h2>
      <p>If you have any questions, please contact us via WhatsApp at 085 204 3438 or email at biopulsesupport@protonmail.com.</p>
    </LegalLayout>
  );
}
