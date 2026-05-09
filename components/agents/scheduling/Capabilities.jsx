import React from "react";
import Image from "next/image";

const CAPABILITIES = [
  
     {
    n: 1,
    title: "Reads — BIM and schedule, live",
    desc: [
      "Revit, Navisworks, Tekla, IFC",
      "Primavera and MS Project synced",
      "Every revision triggers recalc",
    ],
  },
  {
    n: 2,
    title: "Forecasts — With weather built in",
    desc: [
      "Multiple weather feeds blended",
      "Ensemble forecasts, not single source",
      "Weather-sensitive activities flagged",
    ],
  },
  {
    n: 3,
    title: "Adjusts — As crews progress",
    desc: [
      "Daily field reports feed back",
      "Crews ahead trigger earlier call-offs",
      "Crews behind push dates out",
    ],
  },
  {
    n: 4,
    title: "Recommends — With confidence bands",
    desc: [
      "Tight bands for near-term dates",
      "Wider bands further out",
      "Procurement team owns the call",
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
