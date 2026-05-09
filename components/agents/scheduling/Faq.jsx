import React from "react";
import Accordion from "@/components/common/Accordion";
import { schedulingFaqs } from "@/data/agentsFaq";

export default function Faq() {
  const faqData = schedulingFaqs.map(({ question, answer, ...rest }) => ({
    ...rest,
    title: question,
    content: answer,
  }));

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: schedulingFaqs.map(({ question, answer }) => ({
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
             Common questions about how the Predictive Scheduling Agent reads BIM and schedule data, how far ahead it forecasts, what happens without BIM, and how procurement teams stay in control of call-off dates.
            </p>
            <a href="#" className="tf-button type-1 mb-20">
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
