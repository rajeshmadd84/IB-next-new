import { sustainabilityFeatures } from "@/data/sustainability";
import Image from "next/image";
import React from "react";

export default function Features() {
  return (
    <div className="wg-create-design style-6 pt-130">
      <div className="themesflat-container">
        <div className="row">
          <div className="col-lg-6">
            <div className="content">
              <div className="heading-section wow fadeInUp">
                <h6>What We Provide</h6>
                <div className="main-title">
                  Build Greener With
                  <br />
                  AI-Powered Carbon
                  <br />
                  <span className="tf-color-green">Intelligence</span>
                </div>
              </div>
              <p className="">
                Track emissions, score suppliers, and generate ESG reports
                <br />
                — all while keeping your project on schedule and on budget.
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="row">
              {sustainabilityFeatures.map((item, index) => (
                <div className="col-xl-4 col-6" key={index}>
                  <div className="wg-helpful text-center mb-30 wow fadeInUp">
                    <div className="image">
                      <Image
                        src={item.iconSrc}
                        alt={item.iconAlt}
                        width={56}
                        height={56}
                        style={{ objectFit: "contain" }}
                      />
                    </div>
                    <h6>{item.title}</h6>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
