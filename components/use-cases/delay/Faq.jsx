import React from "react";
import Accordion from "@/components/common/Accordion";
import { delaysFaqs } from "@/data/useCasesFaq";

export default function Faq() {
  const faqData = delaysFaqs.map(({ question, answer, ...rest }) => ({
    ...rest,
    title: question,
    content: answer,
  }));
  return (
    <div className="faqs-wrap-1 type-1">
      <div className="themesflat-container">
        <div className="row">
          <div className="col-lg-5">
            <div className="heading-section wow fadeInUp">
              <h6 className="">FAQs</h6>
              <div className="main-title">
                Frequently Asked{" "}
                <span className="animation-text" style={{ color: "#2563EB" }}>questions</span>
              </div>
            </div>
            <p className="text">
              Supplier delays cost projects weeks before anyone speaks up. Here's how IntelliByld detects, analyses, and contains them — without waiting for an email.
            </p>
            <a href="/faqs" className="tf-button type-1 mb-20">
              <span>Learn More</span>
              <i className="icon-arrow-right2"></i>
            </a>
          </div>
          <div className="col-lg-7">
            <div className="flat-accordion">
              <Accordion faqData={faqData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
