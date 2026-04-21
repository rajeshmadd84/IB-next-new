import Footer2 from "@/components/footers/Footer2";
import Header2 from "@/components/headers/Header2";
import Banner from "@/components/homes/home-2/Banner";
import Cta from "@/components/homes/home-2/Cta";
import DigitalTwin from "@/components/homes/home-2/DigitalTwin";
import AgenticAi from "@/components/homes/home-2/AgenticAi";
import Features from "@/components/homes/home-2/Features";
import EditorLanguages from "@/components/homes/home-2/EditorLanguages";
import Faq from "@/components/homes/home-2/Faq";
import Partners from "@/components/homes/home-2/Partners";
import Pricing from "@/components/homes/home-2/Pricing";
import Team from "@/components/homes/home-2/Team";
import Testimonials from "@/components/homes/home-2/Testimonials";
import React from "react";
import ScrollTop from "@/components/common/ScrollTop";
export const metadata = {
  title: "IntelliByld || AI platform for construction supply chains",
  description: "IntelliByld is an AI platform for construction supply chains that uses AI to automate the procurement, shipment tracking, and bid evaluation process.",
};
export default function page() {
  return (
    <>
      <div className="page-green">
        <div id="wrapper">
          <div id="page" className="home2">
            <Header2 />
            <Banner />
            <Features />
            <DigitalTwin />
            <AgenticAi />
            <Team />
            <Footer2 />
            
            
            
          </div>
        </div>{" "}
        <ScrollTop />
      </div>
    </>
  );
}
