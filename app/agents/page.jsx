import Cta from "@/components/common/Cta";

import Mouse from "@/components/common/Mouse";
import ScrollTop from "@/components/common/ScrollTop";
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import Faq from "@/components/use-cases/Faq";
import Features from "@/components/use-cases/Features";
import FlatTitle from "@/components/use-cases/FlatTitle";
import Pricing from "@/components/use-cases/Pricing";
import Tools from "@/components/use-cases/Tools";
import React from "react";
export const metadata = {
  title: "AI Agents for Construction Supply Chain | IntelliByld",
  description:
    "Meet IntelliByld's autonomous agents for procurement, scheduling, and shipment — coordinating construction supply chains in real time.",
  alternates: { canonical: "https://www.intellibyld.com/agents" },
  openGraph: {
    title: "AI Agents for Construction Supply Chain | IntelliByld",
    description:
      "Meet IntelliByld's autonomous agents for procurement, scheduling, and shipment — coordinating construction supply chains in real time.",
    url: "https://www.intellibyld.com/agents",
    siteName: "IntelliByld",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    locale: "en_SG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Agents for Construction Supply Chain | IntelliByld",
    description:
      "Meet IntelliByld's autonomous agents for procurement, scheduling, and shipment — coordinating construction supply chains in real time.",
    images: ["/og-image.png"],
  },
};
export default function page() {
  return (
    <>
      <div id="wrapper">
        <div id="page" className="">
          <Header1 />
          <FlatTitle />
          <Tools />
          <Features />
          <Pricing />
          <Faq />

          <Cta />

          <Footer1 />
        </div>
      </div>
      <Mouse />
      <ScrollTop />
    </>
  );
}
