import React from "react";
import Accordion from "../common/Accordion";
import { faqs4 } from "@/data/faq";
import Image from "next/image";

export default function Faq3() {
  return (
    <div className="faqs-wrap wrap-faqs-3">
      <div className="item1" />
      <div className="item2" />
      <Image
        className="item3"
        src="/assets/images/avatar/user-01.png"
        width={215}
        height={215}
        alt="image"
      />
      <Image
        className="item4"
        src="/assets/images/avatar/user-04.png"
        width={240}
        height={240}
        alt="image"
      />
      <div className="themesflat-container">
        <div className="row justify-center">
          <div className="col-md-8">
            <div className="heading-section wow fadeInUp text-center">
              <div className="main-title">
                Know More about{" "}
                <span className="animation-text">Intellibyld</span>
              </div>
              <div className="text">
                IntelliByld helps construction teams orchestrate supply chain decisions with Agentic AI and Digital Twins.
                It enables faster execution, lower risk, and full visibility across the project lifecycle.
              </div>
            </div>
            <div className="flat-accordion2">
              <Accordion faqData={faqs4} toggleClass="flat-toggle2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
