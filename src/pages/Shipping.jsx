import React from "react";
import LegalLayout from "@/components/LegalLayout";
export default function Shipping() {
  return (
    <LegalLayout title="Shipping Policy" lastUpdated="January 2025">
      <p>Bio Pulse ships across Ireland and Europe including Northern Ireland and all EU countries. Once your order is dispatched you will receive a tracking number.</p>
      <h2 className="text-xl font-bold text-slate-900 pt-4">Delivery Times</h2>
      <p>Ireland: 2–3 working days. UK &amp; Northern Ireland: 3–5 working days. EU countries: 5–10 working days.</p>
      <h2 className="text-xl font-bold text-slate-900 pt-4">Your Responsibility</h2>
      <p>Please ensure all shipping details including Eircode/postcode and full address are correct when ordering. Bio Pulse will not accept responsibility for delays or lost parcels due to incorrect information provided by the customer.</p>
      <h2 className="text-xl font-bold text-slate-900 pt-4">Missed Deliveries</h2>
      <p>If delivery is missed or a parcel is unclaimed, the recipient must contact the shipping carrier directly. Bio Pulse is not responsible for missed deliveries or unclaimed parcels.</p>
      <h2 className="text-xl font-bold text-slate-900 pt-4">Contact</h2>
      <p>For any shipping queries contact us via WhatsApp or email at biopulsesupport@protonmail.com.</p>
    </LegalLayout>
  );
}
