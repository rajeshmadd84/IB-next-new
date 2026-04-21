import { features } from "@/data/features";
import React from "react";

export default function Doing() {
  return (
    <div className="wg-doing">
      <div className="themesflat-container">
        <div className="row">
          <div className="col-12">
            <div className="heading-section wow fadeInUp style-1 text-center">
              <h6 style={{ color: "#fff" }}>What is Intellibyld?</h6>
              <div className="main-title">
                <span className="tf-color-green">Autonomous Execution </span> &nbsp;
                <br /> for Construction Supply Chains. <br />
                
                
              </div>
            </div>
          </div>
          {features.map((item, index) => (
            <div className="col-md-4 mb-20 mb-md-0" key={index}>
              <div className={`doing-item ${index == 1 ? "active" : ""}`}>
                <div className="icon">
                  <img src={item.icon} alt={item.title} width={48} height={48} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
