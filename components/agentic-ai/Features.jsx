import { agenticAiFlowchart } from "@/data/agentic-ai";
import React from "react";

export default function Features() {
  return (
    <div className="wg-flowchart pt-130 pb-130">
      <div className="themesflat-container">
        <div className="heading-section wow fadeInUp text-center" style={{ marginBottom: 42 }}>
          <h6 className="tf-color-green">How It Works</h6>
          <div className="main-title" style={{ color: "#000" }}>
            Autonomous Delay {" "}
            <span className="tf-color-green">Neutralization</span>
          </div>
          <p style={{ color: "#696969", margin: "18px auto 0", maxWidth: 760, lineHeight: "24px" }}>
            Intellibyld’s Agentic AI neutralizes autonomous delays by detecting and flagging exceptions from live shipping and communications, analyzing impact in the digital twin, pivoting schedules, and syncing stakeholders until the project is back in sync.
          </p>
        </div>
        <div className="flowchart-row">
          {agenticAiFlowchart.map((item, index) => (
            <React.Fragment key={item.step}>
              <div className="flowchart-card wow fadeInUp">
                <div className="flowchart-step">{`0${item.step}`}</div>
                <h4 className="flowchart-title">{item.title}</h4>
                <p className="flowchart-desc">{item.description}</p>
              </div>
              {index < agenticAiFlowchart.length - 1 && (
                <div className="flowchart-arrow">
                  <i className="icon-arrow-right2" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
