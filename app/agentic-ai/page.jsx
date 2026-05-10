import Cta from "@/components/common/Cta";
import Mouse from "@/components/common/Mouse";
import ScrollTop from "@/components/common/ScrollTop";
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import Faq from "@/components/agentic-ai/Faq";
import Features from "@/components/agentic-ai/Features";
import FlatTitle from "@/components/agentic-ai/FlatTitle";
import Tools from "@/components/agentic-ai/Tools";
import React from "react";
import Header2 from "@/components/headers/Header2";
import Agent1 from "@/components/agentic-ai/Agent1";
import AgentsShowcase from "@/components/agentic-ai/AgentsShowcase";
import LastUpdated from "@/components/common/LastUpdated";

const LAST_UPDATED = "2026-05-10";
export const metadata = {
  title:
    "Agentic AI || IntelliByld - The Agentic AI for Construction Supply Chains",
  description:
    "Discover how IntelliByld's Agentic AI automates procurement, shipment tracking, and bid evaluation for construction supply chains.",
  alternates: { canonical: "https://www.intellibyld.com/agentic-ai" },
  openGraph: {
    title: "Agentic AI | IntelliByld",
    description:
      "Discover how IntelliByld's Agentic AI automates procurement, shipment tracking, and bid evaluation for construction supply chains.",
    url: "https://www.intellibyld.com/agentic-ai",
    siteName: "IntelliByld",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    locale: "en_SG",
    type: "article",
    publishedTime: "2026-04-01T00:00:00.000Z",
    modifiedTime: "2026-05-10T00:00:00.000Z",
  },
  twitter: {
    card: "summary_large_image",
    title: "Agentic AI | IntelliByld",
    description:
      "Discover how IntelliByld's Agentic AI automates procurement, shipment tracking, and bid evaluation for construction supply chains.",
    images: ["/og-image.png"],
  },
};

export default function page() {
  return (
    <>
      <div id="wrapper">
        <div id="page" className="">
          <Header2 />
          <div className="agentic-ai-page-bg">
            <FlatTitle />
            <Agent1 />
            <AgentsShowcase />
            <Tools />
            <Features />
            <Faq />
          </div>
          <LastUpdated date={LAST_UPDATED} />
          <Footer1 />
        </div>
      </div>

      <ScrollTop />
    </>
  );
}
