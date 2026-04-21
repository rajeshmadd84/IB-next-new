import Cta from "@/components/common/Cta";
import ScrollTop from "@/components/common/ScrollTop";
import ContactInfo from "@/components/contact/ContactInfo";
import FlatTitle from "@/components/contact/FlatTitle";
import Footer2 from "@/components/footers/Footer2";
import Header2 from "@/components/headers/Header2";
import React from "react";

export const metadata = {
  title: "Contact Us || Intellibyld - The OS for Construction Supply Chains",
  description: "Intellibyld - The OS for Construction Supply Chains",
};

export default function page() {
  return (
    <>
      <div id="wrapper">
        <div id="page" className="">
          <Header2 />
          <FlatTitle />
          <ContactInfo />
          <Cta overlapFollowingSection={false} />
          <Footer2 />
        </div>
      </div>
      
      <ScrollTop />
    </>
  );
}
