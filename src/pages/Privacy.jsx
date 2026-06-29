import React from "react";
import LegalLayout from "@/components/LegalLayout";
export default function Privacy() {
  return (
    <LegalLayout title="Privacy Policy" lastUpdated="January 2025">
      <p>At Bio Pulse, we take your privacy seriously. This Privacy Policy explains how we collect, use, and protect your personal information.</p>
      <h2 className="text-xl font-bold text-slate-900 pt-4">1. Information We Collect</h2>
      <p>We may collect contact information such as your name, email address, and phone number when you place an order or contact us, along with order details and delivery address.</p>
      <h2 className="text-xl font-bold text-slate-900 pt-4">2. How We Use Your Information</h2>
      <p>We use your personal information to process and fulfil your orders, communicate with you about your order, and provide customer support.</p>
      <h2 className="text-xl font-bold text-slate-900 pt-4">3. Data Sharing</h2>
      <p>We do not sell or rent your personal information to third parties. We may share your information with trusted delivery companies only as necessary to fulfil your order.</p>
      <h2 className="text-xl font-bold text-slate-900 pt-4">4. Your Rights</h2>
      <p>Under GDPR, you have the right to access, correct, or request deletion of your personal data. Contact us via WhatsApp or email to exercise these rights.</p>
      <h2 className="text-xl font-bold text-slate-900 pt-4">5. Contact</h2>
      <p>If you have any questions about this Privacy Policy, please contact us via WhatsApp at 085 204 3438 or email at biopulsesupport@protonmail.com.</p>
    </LegalLayout>
  );
}
