import Cta from "@/components/common/Cta";

import Mouse from "@/components/common/Mouse";
import ScrollTop from "@/components/common/ScrollTop";
import Footer2 from "@/components/footers/Footer2";
import Header2 from "@/components/headers/Header2";
import Faq from "@/components/procurement/Faq";
import Features2 from "@/components/procurement/Features2";
import Comparison from "@/components/procurement/Comparison";
import FlatTitle from "@/components/procurement/FlatTitle";
import Steps from "@/components/procurement/Steps";
import Testimonials from "@/components/procurement/Testimonials";
import { useCases } from "@/data/features";
export const metadata = {
  title: 'Procurement Dispatch Agent | Automated RFQ Generation for Construction | Intellibyld',
  description: 'AI agent that turns BIM takeoffs into RFQs and dispatches them to ranked vendors automatically. Cuts construction sourcing cycles from days to hours.',
};
import React from "react";
import Capabilities from "@/components/procurement/Capabilities";
import UseCase from "@/components/procurement/UseCase";



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
          <UseCase />
          <Faq />
          <Footer2 />
        </div>
      </div>
      
      <ScrollTop />
    </>
  );
}
