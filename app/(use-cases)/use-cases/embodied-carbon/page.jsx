import Cta from "@/components/common/Cta";

import Mouse from "@/components/common/Mouse";
import ScrollTop from "@/components/common/ScrollTop";
import Footer2 from "@/components/footers/Footer2";
import Header2 from "@/components/headers/Header2";
import Faq from "@/components/carbon/Faq";
import Features2 from "@/components/carbon/Features2";
import Comparison from "@/components/carbon/Comparison";
import FlatTitle from "@/components/carbon/FlatTitle";
import Steps from "@/components/carbon/Steps";
import Testimonials from "@/components/carbon/Testimonials";
import { useCases } from "@/data/features";
export const metadata = {
  title: 'Use Case | The OS for Autonomous Construction Supply Chains',
  description: 'IntelliByld uses Agentic AI and Digital Twins to transform construction logistics into autonomous, data-driven operations. Headquartered in Singapore.',
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

          

          <Footer2 />
        </div>
      </div>
      
      <ScrollTop />
    </>
  );
}
