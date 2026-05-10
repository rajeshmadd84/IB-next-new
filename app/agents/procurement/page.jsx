import Cta from "@/components/common/Cta";

import Mouse from "@/components/common/Mouse";
import ScrollTop from "@/components/common/ScrollTop";
import Footer1 from "@/components/footers/Footer1";
import Header2 from "@/components/headers/Header2";
import Faq from "@/components/agents/procurement/Faq";
import Features2 from "@/components/agents/procurement/Features2";
import Comparison from "@/components/agents/procurement/Comparison";
import FlatTitle from "@/components/agents/procurement/FlatTitle";
import Steps from "@/components/agents/procurement/Steps";
import Testimonials from "@/components/agents/procurement/Testimonials";
import { useCases } from "@/data/features";
export const metadata = {
  title:
    "Procurement Dispatch Agent | Automated RFQ Generation for Construction | IntelliByld",
  description:
    "AI agent that turns BIM takeoffs into RFQs and dispatches them to ranked vendors. Cuts construction sourcing cycles from days to hours.",
  alternates: {
    canonical: "https://www.intellibyld.com/agents/procurement",
  },
  openGraph: {
    title: "Procurement Dispatch Agent | IntelliByld",
    description:
      "AI agent that turns BIM takeoffs into RFQs and dispatches them to ranked vendors. Cuts construction sourcing cycles from days to hours.",
    url: "https://www.intellibyld.com/agents/procurement",
    siteName: "IntelliByld",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    locale: "en_SG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Procurement Dispatch Agent | IntelliByld",
    description:
      "AI agent that turns BIM takeoffs into RFQs and dispatches them to ranked vendors. Cuts construction sourcing cycles from days to hours.",
    images: ["/og-image.png"],
  },
};
import React from "react";
import Capabilities from "@/components/agents/procurement/Capabilities";
import UseCase from "@/components/agents/procurement/UseCase";



export default function page() {

  return (
    <>
      <div id="wrapper">
        <div id="page" className="">
          <Header2 />
          <FlatTitle />
          <Features2 />
          <Capabilities />
          <Comparison />
          {/*<UseCase />*/}
          <Faq />
          <Footer1 />
        </div>
      </div>
      
      <ScrollTop />
    </>
  );
}
