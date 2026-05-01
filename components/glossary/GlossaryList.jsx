import Accordion from "@/components/common/Accordion";
import React from "react";
import { glossaryTerms } from "@/data/glossary";

export default function GlossaryList() {
  const glossaryFaqData = glossaryTerms.map((term) => ({
    title: term.term,
    content: term.definition,
  }));

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
              <h6 className="tf-color-green">Glossary</h6>
              <div className="main-title">
                Understand the {" "}
                <span className="animation-text tf-color-green">Terminology</span>
              </div>
            </div>
            <p className="text">
              <strong>Master the language of autonomous construction supply chains.</strong>
              From Agentic AI to Digital Twins, we define the core concepts powering the industry.
            </p>
          </div>
          <div className="col-md-7">
            <div className="flat-accordion">
              <Accordion faqData={glossaryFaqData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
