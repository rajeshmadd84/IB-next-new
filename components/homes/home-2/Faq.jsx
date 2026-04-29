import Accordion from "@/components/common/Accordion";
import React from "react";

export default function Faq() {
  return (
    <div className="faqs-wrap-1">
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
              IntelliByld helps construction teams orchestrate supply <br />
              chain decisions with Agentic AI and Digital Twins <br />
              for faster execution, lower risk, and full visibility
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
