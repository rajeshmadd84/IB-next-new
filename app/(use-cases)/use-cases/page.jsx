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
  title: "Use Cases | Autonomous Construction Supply Chain | IntelliByld",
  description:
    "See how IntelliByld coordinates supplier delays, multi-site programmes, and embodied carbon — autonomously, across every project.",
  alternates: { canonical: "https://www.intellibyld.com/use-cases" },
  openGraph: {
    title: "Use Cases | IntelliByld",
    description:
      "See how IntelliByld coordinates supplier delays, multi-site programmes, and embodied carbon — autonomously, across every project.",
    url: "https://www.intellibyld.com/use-cases",
    siteName: "IntelliByld",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    locale: "en_SG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Use Cases | IntelliByld",
    description:
      "See how IntelliByld coordinates supplier delays, multi-site programmes, and embodied carbon — autonomously, across every project.",
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
