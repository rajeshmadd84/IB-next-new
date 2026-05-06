import React from "react";
import Image from "next/image";

const STEPS = [
  {
    n: 1,
    title: " Detects — Before your team knows",
    desc: [
      "Monitors live shipping feeds, vessel departures, and last-mile GPS",
      "Reads supplier emails and WhatsApp messages using the Construction-Trained SLM",
      "Flags missing dispatch confirmations that are statistically overdue",
    ],
  },
  {
    n: 2,
    title: "Analyses — Instantly",
    desc: [
      "Cross-references the delay against the live Digital Twin",
      "Maps every affected task, crew, plant allocation, and dependent delivery",
      "Calculates project exposure: days lost, critical path impact, cost exposure",

    ],
  },
  {
    n: 3,
    title: "Acts — Without waiting",
    desc: [
      "Re-sequences the project tasks, shifts crews to unaffected tasks immediately",
      "Redistributes equipment away from the blocked zone",
      "Updates the master schedule across all connected systems in real time",
    ],
  },
  {
    n: 4,
    title: "Notifies — With the full picture",
    desc: [
      "Project director, site manager, and procurement team notified simultaneously",
      "Notification includes: what happened, programme impact, re-sequenced schedule, procurement shortlist ready",
      "Your team receives a situation report — not a problem to solve from scratch",
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
              <h6>How IntelliByld Responds to a Supplier Delay</h6>
              <div className="main-title">
                From first signal to full situation  <br />
               report — <span className="animation-text">autonomously.</span>
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
