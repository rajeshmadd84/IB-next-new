import Cta from "@/components/common/Cta";

import Mouse from "@/components/common/Mouse";
import ScrollTop from "@/components/common/ScrollTop";
import Footer2 from "@/components/footers/Footer2";
import Header2 from "@/components/headers/Header2";
import Faq from "@/components/scheduling/Faq";
import Features2 from "@/components/scheduling/Features2";
import Comparison from "@/components/scheduling/Comparison";
import FlatTitle from "@/components/scheduling/FlatTitle";
import Steps from "@/components/scheduling/Steps";
import Testimonials from "@/components/scheduling/Testimonials";
import { useCases } from "@/data/features";
import React from "react";
import Capabilities from "@/components/scheduling/Capabilities";
import UseCase from "@/components/scheduling/UseCase";
import WorksWith from "@/components/scheduling/WorksWith";
export const metadata = {
  title: 'Predictive Scheduling Agent | BIM-Linked Material Call-Off Planning | Intellibyld',
  description: 'AI agent that aligns material delivery dates with BIM models, weather forecasts, and crew availability. Materials arrive when crews are ready — not before, not after.',
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
          <UseCase />
          <Faq />
          <Footer2 />
        </div>
      </div>
      
      <ScrollTop />
    </>
  );
}
