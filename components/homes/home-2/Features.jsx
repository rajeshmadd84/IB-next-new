import { features } from "@/data/features";
import React from "react";

export default function Doing() {
  return (
    <div className="wg-doing wg-banner-2 home2-features-show-bg">
      <div className="bg-item">
        <div className="item-1" />
        <div className="item-2" />
      </div>
      <div className="themesflat-container">
        <div className="row">
          <div className="col-12">
            <div className="heading-section wow fadeInUp style-1 text-center">
              <h6 style={{ color: "#fff" }}>What is Intellibyld?</h6>
              <div className="main-title">
                <span className="tf-color-green">Autonomous Execution </span> &nbsp;
                <br /> for Construction Supply Chains. <br />
                
                
              </div>
              <p
                style={{
                  color: "#fff",
                  fontSize: "18px",
                  lineHeight: "30px",
                  marginTop: 22,
                  marginBottom: 0,
                  maxWidth: 900,
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              >
                <strong>Intellibyld is the OS that turns construction supply chain data into Autonomous Execution.</strong>{" "}
                It helps teams coordinate procurement, shipping, and bid evaluation so execution stays on schedule.
              </p>
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
