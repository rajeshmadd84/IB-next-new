import Mouse from "@/components/common/Mouse";
import ScrollTop from "@/components/common/ScrollTop";
import Footer2 from "@/components/footers/Footer2";
import Header2 from "@/components/headers/Header2";
import Sustainability1 from "@/components/sustainability/sustainability1";
import FlatTitle from "@/components/sustainability/FlatTitle";
import Tools from "@/components/sustainability/Tools";
import React from "react";

export const metadata = {
  title: "Sustainability || Intellibyld - The OS for Construction Supply Chains",
  description:
    "Track carbon emissions, score suppliers on sustainability, and generate ESG reports with Intellibyld's green construction intelligence.",
};

export default function page() {
  return (
    <>
      <div id="wrapper">
        <div id="page" className="">
          <Header2 />
          <FlatTitle />
          <Sustainability1 />
          <Tools />
          
          <Footer2 />
        </div>
      </div>
      <Mouse />
      <ScrollTop />
    </>
  );
}
