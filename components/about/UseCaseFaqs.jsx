import React from "react";
import Accordion from "../common/Accordion";
import {
  delaysFaqs,
  multisiteFaqs,
  carbonFaqs,
} from "@/data/useCasesFaq";

const SECTIONS = [
  { title: "Supplier Delay Neutralization", faqs: delaysFaqs },
  { title: "Multi-Site Supply Chain Coordination", faqs: multisiteFaqs },
  { title: "Embodied Carbon Management", faqs: carbonFaqs },
];

const toAccordionData = (items) =>
  items.map(({ question, answer, ...rest }) => ({
    ...rest,
    title: question,
    content: answer,
  }));

export default function UseCaseFaqs() {
  return (
    <div className="faqs-wrap-1 type-1 use-case-faqs pb-130">
      <div className="themesflat-container">
        {SECTIONS.map((section) => (
          <div key={section.title} className="use-case-faq-section">
            <div className="row justify-center">
              <div className="col-md-10">
                <div className="heading-section wow fadeInUp text-center">
                  <div className="main-title">{section.title}</div>
                </div>
                <div className="flat-accordion">
                  <Accordion faqData={toAccordionData(section.faqs)} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .use-case-faqs .use-case-faq-section {
          margin-bottom: 64px;
        }
        .use-case-faqs .use-case-faq-section:last-child {
          margin-bottom: 0;
        }
        .use-case-faqs .heading-section {
          margin-bottom: 32px;
        }
      `}</style>
    </div>
  );
}
