import React from "react";
import Image from "next/image";

const CAPABILITIES = [
  {
    n: 1,
    title: "Reads — BIM, schedules, takeoffs",
    desc: [
      "Direct ingest from Revit and Tekla",
      "Navisworks and IFC supported",
      "Zero rekeying, zero spec drift",
    ],
  },
  {
    n: 2,
    title: "Matches — The right vendors, ranked",
    desc: [
      "Filtered by category and region",
      "Scored on past performance",
      "Only qualified suppliers receive RFQs",
    ],
  },
  {
    n: 3,
    title: "Dispatches — In every vendor's format",
    desc: [
      "Email, PDF, Excel, or portal upload",
      "Direct API where supported",
      "One trigger, all channels at once",
    ],
  },
  {
    n: 4,
    title: "Logs — Every send, every reply",
    desc: [
      "Timestamped record per RFQ",
      "Acknowledgements and revisions tracked",
      "Audit-ready for claims and compliance",
    ],
  },
];

export default function Capabilities() {
  return (
    <div className="wg-steps wg-steps-stack pb-130">
      <div className="themesflat-container">
        <div className="row">
          <div className="col-12">
            <div className="heading-section wow fadeInUp text-center">
              <h6>What the Procurement Dispatch Agent Does</h6>
              <div className="main-title">
                Four capabilities. <br />
                <span className="animation-text">One sourcing cycle, automated.</span>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="stack-wrap">
              <div className="stack-image">
                <div className="stack-image-inner">
                  <Image
                    src="/assets/images/steps/step-01.jpg"
                    alt="Procurement Dispatch Agent capabilities"
                    width={560}
                    height={620}
                  />
                </div>
              </div>
              <div className="stack-cards">
                {CAPABILITIES.map((s, i) => (
                  <div
                    key={s.n}
                    className="stack-card"
                    style={{ top: `${100 + i * 28}px`, zIndex: i + 1 }}
                  >
                    <div className="title">
                      <a href="#">{s.title}</a>
                    </div>
                    <ul>
                      {s.desc.map((d, j) => (
                        <li key={j}>{d}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
