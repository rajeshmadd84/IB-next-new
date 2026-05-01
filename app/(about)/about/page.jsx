import Cta from "@/components/common/Cta";
import Features from "@/components/about/Features";
import FlatTitle from "@/components/about/FlatTitle";
import Partners from "@/components/about/Partners";
import Team from "@/components/about/Team";
import Testimonials from "@/components/about/Testimonials";
import Tools from "@/components/about/Tools";
import VideoSection from "@/components/about/VideoSection";

import Footer2 from "@/components/footers/Footer2";
import Header2 from "@/components/headers/Header2";
import React from "react";
import ScrollTop from "@/components/common/ScrollTop";
export const metadata = {
  title: "IntelliByld - The OS for contruction supply chians.",
  description: "IntelliByld uses Agentic AI and Digital Twins to transform construction logistics into autonomous, data-driven operations. Headquartered in Singapore.",
};
export default function page() {
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "IntelliByld",
    applicationCategory: "ConstructionTechnologySoftware",
    operatingSystem: "Cloud",
    url: "https://intellibyld.com",
    description: "IntelliByld is the OS for autonomous construction supply chains. It uses a Construction-Trained SLM, Agentic AI agents, and Real-Time Digital Twins to coordinate procurement, shipping, and bid evaluation — autonomously.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      description: "Free pilot available"
    },
    creator: {
      "@type": "Organization",
      name: "IntelliByld",
      url: "https://intellibyld.com",
      foundingDate: "2024",
      sameAs: [
        "https://www.linkedin.com/company/intellibyld",
        "https://twitter.com/intellibyld",
        "https://www.facebook.com/intellibyld",
        "https://www.instagram.com/intellibyld"
      ],
      founders: [
        { "@type": "Person", name: "Rajesh Maddineni", jobTitle: "CEO & Co-Founder" },
        { "@type": "Person", name: "Thaun S Kalimili", jobTitle: "CTO & Co-Founder" },
        { "@type": "Person", name: "Hari Sagaran", jobTitle: "CGO & Co-Founder" }
      ]
    },
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
    keywords: "construction supply chain AI, agentic AI construction, digital twin construction, autonomous procurement, BCA compliance, Singapore IDD, RFQ automation"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <div id="wrapper">
        <div id="page" className="">
          <Header2 />
          <FlatTitle />
          <Features />
          <Tools />
          <Team />
          <Partners />
          <VideoSection />
          <Testimonials />
          <Cta />

          <Footer2 />
        </div>
      </div>

      <ScrollTop />
    </>
  );
}
