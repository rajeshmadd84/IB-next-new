import { agenticAiFlowchart } from "@/data/agentic-ai";
import React from "react";

export default function Features() {
  return (
    <div className="wg-flowchart pt-130 pb-130">
      <div className="themesflat-container">
        <div className="heading-section wow fadeInUp text-center" style={{ marginBottom: 60 }}>
          <h6 className="tf-color-green">How It Works</h6>
          <div className="main-title" style={{ color: "#000" }}>
            Autonomous Delay {" "}
            <span className="tf-color-green">Neutralization</span>
          </div>
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
