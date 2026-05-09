import Cta from "@/components/common/Cta";

import Mouse from "@/components/common/Mouse";
import ScrollTop from "@/components/common/ScrollTop";
import Footer1 from "@/components/footers/Footer1";
import Header2 from "@/components/headers/Header2";
import Faq from "@/components/agents/shipment/Faq";
import Features2 from "@/components/agents/shipment/Features2";
import Comparison from "@/components/agents/shipment/Comparison";
import FlatTitle from "@/components/agents/shipment/FlatTitle";
import Steps from "@/components/agents/shipment/Steps";
import Testimonials from "@/components/agents/shipment/Testimonials";
import { useCases } from "@/data/features";
export const metadata = {
  title: 'Shipment Orchestration Agent | Live Construction Logistics tracking, planning & Rerouting| Intellibyld',
  description: 'AI agent that monitors live construction shipments and reroutes before delays hit the site. Detect, analyze, pivot, sync — built for construction logistics.',
};
import React from "react";
import Capabilities from "@/components/agents/shipment/Capabilities";
import WorksWith from "@/components/agents/shipment/WorksWith";



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
          <WorksWith />
          <Faq />
          <Footer1 />
        </div>
      </div>
      
      <ScrollTop />
    </>
  );
}
