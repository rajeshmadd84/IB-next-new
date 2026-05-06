import React from "react";
import Image from "next/image";

const STEPS = [
  {
    n: 1,
    title: "Monitors — Material flows, every site",
    desc: [
      "Live carbon data per delivery",
      "EPDs pulled from supplier records",
      "No manual kgCO₂e entry",
    ],
  },
  {
    n: 2,
    title: "Detects — Where carbon accumulates",
    desc: [
      "High-impact materials flagged early",
      "Hotspots across structure, envelope, MEP",
      "Targets vs actuals, in real time",
    ],
  },
  {
    n: 3,
    title: "Consolidates — Portfolio carbon view",
    desc: [
      "Whole-life carbon, all projects",
      "Low-carbon swaps surfaced by volume",
      "Benchmarks drawn from live data",
    ],
  },
  {
    n: 4,
    title: "Briefs — RIBA Stage 5 ready",
    desc: [
      "GLA, BREEAM, LETI aligned reports",
      "One export, not four spreadsheets",
      "Audit trail from pour to sign-off",
    ],
  },
];

export default function Steps() {
  return (
    <div className="wg-steps wg-steps-stack pb-130">
      <div className="themesflat-container">
        <div className="row">
          <div className="col-12">
            <div className="heading-section wow fadeInUp text-center">
              <h6>How IntelliByld Coordinates Across Sites</h6>
              <div className="main-title">
              One view. Every site. <br />
              <span className="animation-text">No blind spots.</span>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="stack-wrap">
              <div className="stack-image">
                <div className="stack-image-inner">
                  <Image
                    src="/assets/images/steps/step-01.jpg"
                    alt="Working process"
                    width={560}
                    height={620}
                  />
                </div>
              </div>
              <div className="stack-cards">
                {STEPS.map((s, i) => (
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
