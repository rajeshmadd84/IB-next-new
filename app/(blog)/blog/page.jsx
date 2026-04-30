import Blog from "@/components/blog/Blog";
import FlatTitle from "@/components/blog/FlatTitle";
import Cta from "@/components/common/Cta";

import Mouse from "@/components/common/Mouse";
import ScrollTop from "@/components/common/ScrollTop";
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";

import React from "react";
export const metadata = {
  title: "IntelliByld - The OS for contruction supply chians.",
  description: "IntelliByld uses Agentic AI and Digital Twins to transform construction logistics into autonomous, data-driven operations. Headquartered in Singapore.",
};
export default function page() {
  return (
    <>
      <div id="wrapper">
        <div id="page" className="">
          <Header2 />
          <FlatTitle />
          <Blog />

          <Cta />

          <Footer2 />
        </div>
      </div>
      <Mouse />
      <ScrollTop />
    </>
  );
}
