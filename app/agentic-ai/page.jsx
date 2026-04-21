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
import Footer2 from "@/components/footers/Footer2";
import Agent1 from "@/components/agentic-ai/Agent1";
export const metadata = {
  title: "Agentic AI || Intellibyld - The OS for Construction Supply Chains",
  description:
    "Discover how Intellibyld's Agentic AI automates procurement, shipment tracking, and bid evaluation for construction supply chains.",
};

export default function page() {
  return (
    <>
      <div id="wrapper">
        <div id="page" className="">
          <Header2 />
          <FlatTitle />
          <Agent1/>
          <Tools />
          <Features />


          <Footer2 />
        </div>
      </div>

      <ScrollTop />
    </>
  );
}
