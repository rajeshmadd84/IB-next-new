import Accordion from "@/components/common/Accordion";
import React from "react";

export default function Faq() {
  return (
    <div className="faqs-wrap-1 home2-banner-bg">
      <div className="bg-item">
        <div className="item-1" />
        <div className="item-2" />
      </div>
      <div className="themesflat-container">
        <div className="row">
          <div className="col-md-5">
            <div className="heading-section wow fadeInUp style-1">
              <h6 className="tf-color-green">FAQs</h6>
              <div className="main-title">
                Know more about {" "}
                <span className="animation-text tf-color-green">IntelliByld</span>
              </div>
            </div>
            <p className="text">
              <strong>IntelliByld helps construction teams orchestrate supply chain decisions</strong> with Agentic AI and Digital Twins.
              It enables faster execution, lower risk, and full visibility across the project lifecycle.
            </p>
           
          </div>
          <div className="col-md-7">
            <div className="flat-accordion">
              <Accordion />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
