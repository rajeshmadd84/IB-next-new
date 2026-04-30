import FlatTitle2 from "@/components/about/FlatTitle2";
import Footer2 from "@/components/footers/Footer2";
import Header2 from "@/components/headers/Header2";
import React from "react";
import ScrollTop from "@/components/common/ScrollTop";
import Faq3 from "@/components/about/Faq3";
import { faqs4 } from "@/data/faq";

export const metadata = {
  title: "FAQs | IntelliByld - Construction Supply Chain Intelligence",
  description: "Frequently Asked Questions about IntelliByld, Agentic AI, Digital Twins, and BCA Site Management Data Standards for construction logistics.",
};

export default function page() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs4.map((faq) => ({
      "@type": "Question",
      name: faq.title,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.content,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div id="wrapper">
        <div id="page" className="faqs-page">
          <Header2 />
          <FlatTitle2 />

          <Faq3 />

          <Footer2 />
        </div>
      </div>

      <ScrollTop />
    </>
  );
}
