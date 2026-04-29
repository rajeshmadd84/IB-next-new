import React from "react";
import Accordion from "../common/Accordion";

export default function Faq() {
  return (
    <div className="faqs-wrap-1 type-1">
      <div className="themesflat-container">
        <div className="row">
          <div className="col-lg-5">
            <div className="heading-section wow fadeInUp">
              <h6 className="">FAQs</h6>
              <div className="main-title">
                Frequently Asked{" "}
                <span className="tf-color-green">Questions</span>
              </div>
            </div>
            <p className="text">
              <strong>IntelliByld’s Agentic AI predicts delays, recommends decisions, and triggers the next logistics action automatically.</strong>
              <br />
              Below are common questions about how it automates construction supply chain workflows and delivers autonomous execution.
            </p>
          </div>
          <div className="col-lg-7">
            <div className="flat-accordion">
              <Accordion />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
