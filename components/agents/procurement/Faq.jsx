import React from "react";
import Accordion from "@/components/common/Accordion";
import { procurementFaqs } from "@/data/agentsFaq";

export default function Faq() {
  const faqData = procurementFaqs.map(({ question, answer, ...rest }) => ({
    ...rest,
    title: question,
    content: answer,
  }));

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: procurementFaqs.map(({ question, answer }) => ({
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
                <span className="animation-text">questions</span>
              </div>
            </div>
            <p className="text">
              Practical answers about how the Procurement Dispatch Agent fits into your sourcing workflow — what it automates, what it leaves to your team, and how it handles non-standard items.
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
