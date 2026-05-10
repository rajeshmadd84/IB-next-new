import Cta from "@/components/common/Cta";
import ScrollTop from "@/components/common/ScrollTop";
import ContactInfo from "@/components/contact/ContactInfo";
import FlatTitle from "@/components/contact/FlatTitle";
import Footer1 from "@/components/footers/Footer1";
import Header2 from "@/components/headers/Header2";
import React from "react";

export const metadata = {
  title:
    "Contact Us || IntelliByld - The Agentic AI for Construction Supply Chains",
  description:
    "Get in touch with IntelliByld — book a pilot, ask questions about Agentic AI for construction, or speak to the team in Singapore.",
  alternates: { canonical: "https://www.intellibyld.com/contact-us" },
  openGraph: {
    title: "Contact Us | IntelliByld",
    description:
      "Get in touch with IntelliByld — book a pilot, ask questions about Agentic AI for construction, or speak to the team in Singapore.",
    url: "https://www.intellibyld.com/contact-us",
    siteName: "IntelliByld",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    locale: "en_SG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | IntelliByld",
    description:
      "Get in touch with IntelliByld — book a pilot, ask questions about Agentic AI for construction, or speak to the team in Singapore.",
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
          <ContactInfo />
          
          <Footer1 />
        </div>
      </div>
      
      <ScrollTop />
    </>
  );
}
