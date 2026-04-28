import Footer2 from "@/components/footers/Footer2";
import Header2 from "@/components/headers/Header2";
import Banner from "@/components/homes/home-2/Banner";
import Cta from "@/components/homes/home-2/Cta";
import DigitalTwin from "@/components/homes/home-2/DigitalTwin";
import AgenticAi from "@/components/homes/home-2/AgenticAi";
import Features from "@/components/homes/home-2/Features";
import EditorLanguages from "@/components/homes/home-2/EditorLanguages";
import Faq from "@/components/homes/home-2/Faq";
import Partners from "@/components/homes/home-2/Partners";
import Pricing from "@/components/homes/home-2/Pricing";
import Team from "@/components/homes/home-2/Team";
import Testimonials from "@/components/homes/home-2/Testimonials";
import React from "react";
import ScrollTop from "@/components/common/ScrollTop";
import { faqs } from "@/data/faq";
// 1. Technical SEO: Metadata for Search Engines
export const metadata = {
  title: 'IntelliByld | The OS for Autonomous Construction Supply Chains',
  description: 'IntelliByld uses Agentic AI and Digital Twins to transform construction logistics into autonomous, data-driven operations. Headquartered in Singapore.',
  keywords: ['Construction Supply Chain', 'Agentic AI', 'BIM Integration', 'Singapore BCA IDD', 'Autonomous Logistics'],
  openGraph: {
    title: 'IntelliByld - Construction Supply Chain Intelligence',
    description: 'Transforming fragmented construction data into real-time execution insights.',
    url: 'https://intellibyld.com',
    siteName: 'IntelliByld',
    images: [
      {
        url: '/og-image.png', // Ensure you have an OG image in your public folder
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_SG',
    type: 'website',
  },
};
export default function page() {
  // 2. AEO Strategy: JSON-LD for AI Answer Engines
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "IntelliByld",
    applicationCategory: "Site Management Platform (SMP)",
    operatingSystem: "Web-based / Cloud",
    keywords:
      "Integrated Digital Delivery (IDD), BEITM, SGBuildex API, BCA Site Management Data Standards, ISO 19650",
    description:
      "IntelliByld is a Singapore-based SMP providing Level 3 Fully Digital Audit readiness through Agentic AI and automated compliance with BCA Site Management Data Standards.",
    featureList: [
      "Autonomous logistics rescheduling",
      "Predictive supply chain risk mitigation",
      "BIM-integrated digital twin simulation",
      "Automated BCA Level 3 audit documentation",
    ],
    author: {
      "@type": "Organization",
      name: "IntelliByld",
      url: "https://intellibyld.com",
      sameAs: ["https://www.linkedin.com/company/intellibyld"],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Singapore",
        addressCountry: "SG",
      },
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    publisher: {
      "@type": "Organization",
      name: "IntelliByld",
    },
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.title,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.content,
      },
    })),
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "IntelliByld Technologies",
    image: "https://intellibyld.com/logo.png",
    "@id": "https://intellibyld.com",
    url: "https://intellibyld.com",
    telephone: "+65XXXXXXXX",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Your Office Address",
      addressLocality: "Singapore",
      postalCode: "XXXXXX",
      addressCountry: "SG",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 1.29027,
      longitude: 103.851959,
    },
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [softwareSchema, faqSchema, localBusinessSchema],
  };

  return (
    <>
      {/* Injecting JSON-LD into the head for AEO/SEO bots */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="page-green">
        <div id="wrapper">
          <div id="page" className="home2">
            <Header2 />
            <Banner />
            <Features />
            <DigitalTwin />
            <AgenticAi />
            <Faq />
            <Team />
            <Footer2 />
            


          </div>
        </div>{" "}
        <ScrollTop />
      </div>
    </>
  );
}
