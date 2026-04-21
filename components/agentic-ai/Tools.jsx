import { agenticAiTools } from "@/data/agentic-ai";
import React from "react";

export default function Tools() {
  return (
    <div className="list-tool">
      <div className="themesflat-container">
        <div className="row justify-center">
          <div className="col-12">
            <div className="heading-section wow fadeInUp text-center">
              <h6>Autonomous Execution</h6>
              <div className="main-title">
                Why Choose Intellibyld
                <br />
                <span className="tf-color-green">Agentic AI</span>
              </div>
            </div>
          </div>
          {agenticAiTools.map((tool, index) => (
            <div className="col-md-5" key={index}>
              <div className="wg-tool wow fadeInUp">
                <div className="icon">
                  <img src={tool.icon} alt={tool.title} width={48} height={48} />
                </div>
                <h3>{tool.title}</h3>
                <p>{tool.description}</p>
                <div className="order">{tool.order}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
