import Footer2 from "@/components/footers/Footer2";
import Header2 from "@/components/headers/Header2";
import Banner from "@/components/home/Banner";
import Cta from "@/components/home/Cta";
import DigitalTwin from "@/components/home/DigitalTwin";
import AgenticAi from "@/components/home/AgenticAi";
import Features from "@/components/home/Features";
import EditorLanguages from "@/components/home/EditorLanguages";
import Faq from "@/components/home/Faq";
import Partners from "@/components/home/Partners";
import Pricing from "@/components/home/Pricing";
import Team from "@/components/home/Team";
import Testimonials from "@/components/home/Testimonials";
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
    "@id": "https://intellibyld.com/#software",
    url: "https://intellibyld.com",
    name: "IntelliByld",
    applicationCategory: "ConstructionTechnologySoftware",
    "applicationSubCategory": [
      "Agentic AI",
      "Digital Twin",
      "Construction Logistics",
      "Supply Chain Management",
      "Autonomous Procurement",
      "Embodied Carbon Tracking"
    ],
    operatingSystem: "Web-based / Cloud",
    keywords:
      "construction supply chain AI, agentic AI construction, digital twin construction, autonomous procurement, BCA compliance, Singapore IDD, RFQ automation, Agentic AI, Digital Twin, Supply chain automation, Construction logistics",
    description:
      "IntelliByld is the OS for autonomous construction supply chains. It uses a Construction-Trained SLM, Agentic AI agents, and Real-Time Digital Twins to coordinate procurement, shipping, and bid evaluation — autonomously.",
    featureList: [
      "Construction-Trained Small Language Model (SLM)",
      "Real-Time Digital Twin of construction supply chain",
      "Agentic AI for autonomous RFQ generation",
      "Autonomous shipment re-routing",
      "BCA Level 3 Site Management Data Standards compliance",
      "Singapore IDD (Integrated Digital Delivery) framework alignment",
      "BIM integration (IFC, Revit, Navisworks)",
      "ERP connectors (SAP, Oracle, Procore)",
      "Embodied carbon tracking per delivery"
    ],
    offers: {
      "@type": "Offer",
      price: "0",
      description: "Free pilot available",
      url: "https://intellibyld.com/pilot"
    },
    "creator": {                                          // ✅ Fixed: author → creator
      "@type": "Organization",
      "@id": "https://intellibyld.com/#org",
      name: "IntelliByld",
      url: "https://intellibyld.com",
      founder: [                                        // ✅ Fixed: founders → founder
        { "@type": "Person", name: "Rajesh Maddineni", jobTitle: "CEO & Co-Founder" },
        { "@type": "Person", name: "Thaun S Kalimili", jobTitle: "CTO & Co-Founder" },
        { "@type": "Person", name: "Hari Sagaran", jobTitle: "CGO & Co-Founder" },
        { "@type": "Person", name: "Jidesh Kambil", jobTitle: "CBDO & Founding Advisor" }
      ],
      foundingDate: "2026",
      sameAs: ["https://www.linkedin.com/company/intellibyld"],
      address: {
        "@type": "PostalAddress",
        "streetAddress": "21 Pandan Avenue #04-A Senkee Logistics Hub,",
        "addressLocality": "Singapore",
        "postalCode": "609388",
        "addressCountry": "SG",
      },
    },
    author: {
      "@type": "Organization",
      name: "IntelliByld",
      url: "https://intellibyld.com",
      sameAs: ["https://www.linkedin.com/company/intellibyld"],
      address: {
        "@type": "PostalAddress",
        streetAddress: "21 Pandan Avenue #04-A Senkee Logistics Hub,",
        addressLocality: "Singapore",
        postalCode: "609388",
        addressCountry: "SG",
      },
      "foundingDate": "2024",

    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",

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
    "@type": "Organization",
    "@id": "https://intellibyld.com/#org",
    name: "IntelliByld",
    knowsAbout: [
      "Agentic AI", "Construction Supply Chain",
      "Digital Twins", "BCA compliance", "Singapore IDD"
    ],
    image: "https://intellibyld.com/logo.svg",
    "sameAs": [
      "https://www.linkedin.com/company/intellibyld"
    ],
    "url": "https://intellibyld.com",
    telephone: "+6590413331",
    address: {
      "@type": "PostalAddress",
      streetAddress: "21 Pandan Avenue #04-A Senkee Logistics Hub,",
      addressLocality: "Singapore",
      postalCode: "609388",
      addressCountry: "SG",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 1.29027,
      longitude: 103.851959,
    },
    "description": "IntelliByld builds the operating system for autonomous construction supply chains using Agentic AI and Digital Twins.",
    "areaServed": ["Singapore", "Global"],
    "industry": "Construction Technology"
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
          <div id="page" className="home">
            <Header2 />
            <Banner />
            <Features />
            <DigitalTwin />
            <AgenticAi />
            <Team />
            <Faq />

            <Footer2 />



          </div>
        </div>{" "}
        <ScrollTop />
      </div>
    </>
  );
}
