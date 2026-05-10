import FlatTitle2 from "@/components/about/FlatTitle2";
import Footer2 from "@/components/footers/Footer2";
import Header2 from "@/components/headers/Header2";
import React from "react";
import ScrollTop from "@/components/common/ScrollTop";
import Faq3 from "@/components/about/Faq3";
import UseCaseFaqs from "@/components/about/UseCaseFaqs";
import { faqs4 } from "@/data/faq";
import { delaysFaqs, multisiteFaqs, carbonFaqs } from "@/data/useCasesFaq";

export const metadata = {
  title: "IntelliByld FAQs — Construction Supply Chain AI Questions Answered",
  description:
    "Answers to common questions about IntelliByld — Agentic AI, Digital Twins, BCA compliance, Singapore IDD, and autonomous construction supply chain management.",
  alternates: { canonical: "https://www.intellibyld.com/faqs" },
  openGraph: {
    title: "IntelliByld FAQs",
    description:
      "Answers to common questions about IntelliByld — Agentic AI, Digital Twins, BCA compliance, Singapore IDD, and autonomous construction supply chain management.",
    url: "https://www.intellibyld.com/faqs",
    siteName: "IntelliByld",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    locale: "en_SG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "IntelliByld FAQs",
    description:
      "Answers to common questions about IntelliByld — Agentic AI, Digital Twins, BCA compliance, Singapore IDD, and autonomous construction supply chain management.",
    images: ["/og-image.png"],
  },
};

export default function FAQsPage() {

  const generalEntries = faqs4.map((faq) => ({
    "@type": "Question",
    "name": faq.title,
    "acceptedAnswer": { "@type": "Answer", "text": faq.content },
  }));

  const useCaseEntries = [...delaysFaqs, ...multisiteFaqs, ...carbonFaqs].map(
    (faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": { "@type": "Answer", "text": faq.answer },
    })
  );

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [...generalEntries, ...useCaseEntries],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div id="wrapper">
        <div id="page" className="faqs-page">
          <Header2 />
          <FlatTitle2 />

          <Faq3 />
          <UseCaseFaqs />

          <Footer2 />
        </div>
      </div>

      <ScrollTop />
    </>
  );
}
