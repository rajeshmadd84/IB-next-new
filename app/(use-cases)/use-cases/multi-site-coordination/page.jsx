import Cta from "@/components/common/Cta";

import Mouse from "@/components/common/Mouse";
import ScrollTop from "@/components/common/ScrollTop";
import Footer1 from "@/components/footers/Footer1";
import Header2 from "@/components/headers/Header2";
import Faq from "@/components/use-cases/multi-site/Faq";
import Features2 from "@/components/use-cases/multi-site/Features2";
import Comparison from "@/components/use-cases/multi-site/Comparison";
import FlatTitle from "@/components/use-cases/multi-site/FlatTitle";
import Steps from "@/components/use-cases/multi-site/Steps";
import Testimonials from "@/components/use-cases/multi-site/Testimonials";
import LastUpdated from "@/components/common/LastUpdated";
import { useCases } from "@/data/features";

const LAST_UPDATED = "2026-05-10";
export const metadata = {
  title: "Multi-Site Supply Chain Coordination | IntelliByld",
  description:
    "One Digital Twin across every project. IntelliByld surfaces cross-site supplier risk and consolidation opportunities in real time.",
  alternates: {
    canonical:
      "https://www.intellibyld.com/use-cases/multi-site-coordination",
  },
  openGraph: {
    title: "Multi-Site Supply Chain Coordination | IntelliByld",
    description:
      "One Digital Twin across every project. IntelliByld surfaces cross-site supplier risk and consolidation opportunities in real time.",
    url: "https://www.intellibyld.com/use-cases/multi-site-coordination",
    siteName: "IntelliByld",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    locale: "en_SG",
    type: "article",
    publishedTime: "2026-04-01T00:00:00.000Z",
    modifiedTime: "2026-05-10T00:00:00.000Z",
  },
  twitter: {
    card: "summary_large_image",
    title: "Multi-Site Supply Chain Coordination | IntelliByld",
    description:
      "One Digital Twin across every project. IntelliByld surfaces cross-site supplier risk and consolidation opportunities in real time.",
    images: ["/og-image.png"],
  },
};
import React from "react";



export default function page() {

  return (
    <>
      <div id="wrapper">
        <div id="page" className="">
          <Header2 />
          <FlatTitle />
          <Features2 />
          <Steps />
          <Comparison />
          

          <Faq />
          <LastUpdated date={LAST_UPDATED} />

          <Footer1 />
        </div>
      </div>
      
      <ScrollTop />
    </>
  );
}
