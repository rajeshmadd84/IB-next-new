import Cta from "@/components/common/Cta";
import Mouse from "@/components/common/Mouse";
import ScrollTop from "@/components/common/ScrollTop";
import Footer1 from "@/components/footers/Footer1";
import Header2 from "@/components/headers/Header2";
import Faq from "@/components/digital-twins/Faq";
import DigitalTwin1 from "@/components/digital-twins/DigitalTwin1";
import DigitalTwin2 from "@/components/digital-twins/DigitalTwin2";
import Features1 from "@/components/digital-twins/Features1";
import FlatTitle from "@/components/digital-twins/FlatTitle";
import Tools from "@/components/digital-twins/Tools";
import LastUpdated from "@/components/common/LastUpdated";
import React from "react";

const LAST_UPDATED = "2026-05-10";

export const metadata = {
  title:
    "Digital Twins || IntelliByld - The Agentic AI for Construction Supply Chains",
  description:
    "See how IntelliByld's Digital Twins give you real-time visibility across every material, shipment, and site in your construction project.",
  alternates: { canonical: "https://www.intellibyld.com/digital-twins" },
  openGraph: {
    title: "Digital Twins | IntelliByld",
    description:
      "See how IntelliByld's Digital Twins give you real-time visibility across every material, shipment, and site in your construction project.",
    url: "https://www.intellibyld.com/digital-twins",
    siteName: "IntelliByld",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    locale: "en_SG",
    type: "article",
    publishedTime: "2026-04-01T00:00:00.000Z",
    modifiedTime: "2026-05-10T00:00:00.000Z",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Twins | IntelliByld",
    description:
      "See how IntelliByld's Digital Twins give you real-time visibility across every material, shipment, and site in your construction project.",
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
          <div className="lavender-line-bg">
            <DigitalTwin1 />
            <DigitalTwin2 />
            <Features1 />
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
