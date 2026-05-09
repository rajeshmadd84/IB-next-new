"use client";

import React from "react";

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
    <div className="wg-steps pb-130">
      <div className="themesflat-container">
        <div className="row">
          <div className="col-12">
            <div className="heading-section wow fadeInUp text-center">
              <h6>How IntelliByld Coordinates Across Sites</h6>
              <div className="main-title">
              One view. Every site. <br />
              <span className="animation-text" style={{ color: "#2563EB" }}>No blind spots.</span>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="steps-flow">
              {STEPS.map((s, i) => (
                <React.Fragment key={s.n}>
                  <div className="steps-flow-card wow fadeInUp">
                    <div className="steps-flow-num">{s.n}</div>
                    <div className="steps-flow-body">
                      <div className="steps-flow-title">{s.title}</div>
                      <ul>
                        {s.desc.map((d, j) => (
                          <li key={j}>
                            <svg
                              className="steps-flow-tick"
                              width="18"
                              height="18"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              aria-hidden="true"
                            >
                              <circle cx="12" cy="12" r="11" fill="#2563EB" />
                              <path
                                d="M7 12.5L10.5 16L17 9"
                                stroke="#fff"
                                strokeWidth="2.4"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                            <span>{d}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  {i < STEPS.length - 1 && (
                    <div className="steps-flow-arrow" aria-hidden="true">
                      <svg width="64" height="88" viewBox="0 0 64 88" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M32 4 V70" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                        <path d="M10 60 L32 84 L54 60" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                      </svg>
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .steps-flow {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0;
          max-width: 620px;
          margin: 50px auto 0;
        }
        .steps-flow-card {
          width: 100%;
          display: flex;
          gap: 22px;
          padding: 28px 32px;
          background: #fff;
          border: 2px solid #2563EB;
          border-radius: 16px;
          box-shadow: 0 8px 24px rgba(37, 99, 235, 0.1);
          transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
        }
        .steps-flow-card:hover {
          transform: translateY(-2px);
          border-color: #1D4FBE;
          box-shadow: 0 14px 32px rgba(37, 99, 235, 0.18);
        }
        .steps-flow-num {
          flex: 0 0 auto;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: linear-gradient(135deg, #2563EB, #1D4FBE);
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 18px;
        }
        .steps-flow-body {
          flex: 1 1 auto;
        }
        .steps-flow-title {
          font-size: 20px;
          font-weight: 700;
          color: #14142b;
          margin-bottom: 10px;
          line-height: 1.3;
        }
        .steps-flow-body ul {
          list-style: none;
          padding-left: 0;
          margin: 0;
        }
        .steps-flow-body ul li {
          color: #4a4a68;
          font-size: 15px;
          line-height: 1.6;
          margin-bottom: 8px;
          display: flex;
          align-items: flex-start;
          gap: 10px;
        }
        .steps-flow-body ul li:last-child {
          margin-bottom: 0;
        }
        .steps-flow-tick {
          flex: 0 0 auto;
          margin-top: 3px;
        }
        .steps-flow-arrow {
          color: #2563EB;
          margin: 10px 0;
          display: flex;
          justify-content: center;
        }
        @media (max-width: 600px) {
          .steps-flow-card {
            padding: 22px 20px;
            gap: 14px;
          }
          .steps-flow-title {
            font-size: 17px;
          }
          .steps-flow-body ul li {
            font-size: 14px;
          }
        }
      `}</style>
    </div>
  );
}
