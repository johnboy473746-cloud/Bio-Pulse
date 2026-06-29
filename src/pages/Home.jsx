import React from "react";
import Hero from "@/components/home/Hero";
import TrustBar from "@/components/home/TrustBar";
import AboutPreview from "@/components/home/AboutPreview";
import WhyChoose from "@/components/home/WhyChoose";
import PeptidesPreview from "@/components/home/PeptidesPreview";
import HowToOrderPreview from "@/components/home/HowToOrderPreview";
import FAQPreview from "@/components/home/FAQPreview";
import FinalCTA from "@/components/home/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <AboutPreview />
      <WhyChoose />
      <PeptidesPreview />
      <HowToOrderPreview />
      <FAQPreview />
      <FinalCTA />
    </>
  );
}
