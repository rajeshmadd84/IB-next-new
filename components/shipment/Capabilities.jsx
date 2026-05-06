import React from "react";
import Image from "next/image";

const CAPABILITIES = [
  {
    n: 1,
    title: "Monitors — Every active shipment",
    desc: [
      "Carrier feeds, GPS, port data",
      "Weather alerts factored in",
      "Road, rail, ocean, and air",
    ],
  },
  {
    n: 2,
    title: "Analyzes — Schedule impact, instantly",
    desc: [
      "Reads project schedule and BIM",
      "Identifies affected crew and milestone",
      "Risk quantified, not guessed",
    ],
  },
  {
    n: 3,
    title: "Pivots — With pre-costed options",
    desc: [
      "Alternative carriers ready",
      "Regional warehouses identified",
      "Partial expedited loads available",
    ],
  },
  {
    n: 4,
    title: "Syncs — Everyone, in one pass",
    desc: [
      "Schedule updated automatically",
      "Site, carrier, vendor notified",
      "No three rounds of phone calls",
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
              <h6>What the Shipment Orchestration Agent Does</h6>
              <div className="main-title">
                Detect, analyze, pivot, sync. <br />
                <span className="animation-text">Before delays reach the site.</span>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="stack-wrap">
              <div className="stack-image">
                <div className="stack-image-inner">
                  <Image
                    src="/assets/images/steps/step-01.jpg"
                    alt="Shipment Orchestration Agent capabilities"
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
