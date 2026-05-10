import Mouse from "@/components/common/Mouse";
import ScrollTop from "@/components/common/ScrollTop";
import Footer1 from "@/components/footers/Footer1";
import Header2 from "@/components/headers/Header2";
import Sustainability1 from "@/components/sustainability/sustainability1";
import FlatTitle from "@/components/sustainability/FlatTitle";
import Tools from "@/components/sustainability/Tools";
import Faq from "@/components/sustainability/Faq";
import React from "react";

export const metadata = {
  title:
    "Sustainability || Intellibyld - The Agentic AI for Construction Supply Chains",
  description:
    "Track carbon emissions, score suppliers on sustainability, and generate ESG reports with Intellibyld's green construction intelligence.",
  alternates: {
    canonical: "https://www.intellibyld.com/sustainability",
  },
};

export default function page() {
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://www.intellibyld.com/sustainability#webpage",
    url: "https://www.intellibyld.com/sustainability",
    name: "Sustainability — IntelliByld",
    description:
      "How IntelliByld tracks embodied carbon per delivery, surfaces low-carbon supplier swaps, and produces GLA, BREEAM, and LETI-aligned reports from live project data.",
    inLanguage: "en-SG",
    isPartOf: { "@id": "https://intellibyld.com/#org" },
    about: { "@id": "https://intellibyld.com/#org" },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: "https://www.intellibyld.com/og-image.png",
    },
    breadcrumb: {
      "@id": "https://www.intellibyld.com/sustainability#breadcrumb",
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": "https://www.intellibyld.com/sustainability#breadcrumb",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.intellibyld.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Sustainability",
        item: "https://www.intellibyld.com/sustainability",
      },
    ],
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [webPageSchema, breadcrumbSchema],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div id="wrapper">
        <div id="page" className="">
          <Header2 />
          <div className="sustainability-page-bg">
            <FlatTitle />
            <Sustainability1 />
            <Tools />
            <Faq />
          </div>
          <Footer1 />
        </div>
      </div>

      <ScrollTop />
    </>
  );
}
