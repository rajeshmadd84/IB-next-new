import Cta from "@/components/common/Cta";

import Mouse from "@/components/common/Mouse";
import ScrollTop from "@/components/common/ScrollTop";
import Footer1 from "@/components/footers/Footer1";
import Header2 from "@/components/headers/Header2";
import Faq from "@/components/agents/scheduling/Faq";
import Features2 from "@/components/agents/scheduling/Features2";
import Comparison from "@/components/agents/scheduling/Comparison";
import FlatTitle from "@/components/agents/scheduling/FlatTitle";
import Steps from "@/components/agents/scheduling/Steps";
import Testimonials from "@/components/agents/scheduling/Testimonials";
import { useCases } from "@/data/features";
import React from "react";
import Capabilities from "@/components/agents/scheduling/Capabilities";
import UseCase from "@/components/agents/scheduling/UseCase";
import WorksWith from "@/components/agents/scheduling/WorksWith";
export const metadata = {
  title:
    "Predictive Scheduling Agent | BIM-Linked Material Call-Off Planning | IntelliByld",
  description:
    "AI agent that aligns material delivery with BIM, weather, and crew progress — so materials arrive exactly when crews are ready.",
  alternates: {
    canonical: "https://www.intellibyld.com/agents/scheduling",
  },
  openGraph: {
    title: "Predictive Scheduling Agent | IntelliByld",
    description:
      "AI agent that aligns material delivery with BIM, weather, and crew progress — so materials arrive exactly when crews are ready.",
    url: "https://www.intellibyld.com/agents/scheduling",
    siteName: "IntelliByld",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    locale: "en_SG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Predictive Scheduling Agent | IntelliByld",
    description:
      "AI agent that aligns material delivery with BIM, weather, and crew progress — so materials arrive exactly when crews are ready.",
    images: ["/og-image.png"],
  },
};




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
