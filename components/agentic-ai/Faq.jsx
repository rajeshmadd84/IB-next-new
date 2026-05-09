import React from "react";
import Accordion from "../common/Accordion";
import { agenticaiFaqs } from "@/data/agenticAiFaq";

export default function Faq() {
  const faqData = agenticaiFaqs.map(({ question, answer, ...rest }) => ({
    ...rest,
    title: question,
    content: answer,
  }));

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: agenticaiFaqs.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  };

  return (
    <div className="faqs-wrap-1 type-1">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="themesflat-container">
        <div className="row">
          <div className="col-lg-5">
            <div className="heading-section wow fadeInUp">
              <h6 className="">FAQs</h6>
              <div className="main-title">
                Frequently Asked{" "}
                <span className="ib-color-blue">Questions</span>
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
              <Accordion faqData={faqData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
