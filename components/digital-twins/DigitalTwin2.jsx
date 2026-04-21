import { counters } from "@/data/facts";
import React from "react";
import Image from "next/image";
import Counter from "@/components/common/Counter";
export default function DigitalTwin2() {
  return (
    <div className="wg-create-design style-3 pb-130 pt-130">
      <div className="themesflat-container">
        <div className="row">
          <div className="col-lg-6">
            <div
              className="image wow fadeInUp"
              style={{
                width: "100%",
                maxWidth: 560,
                marginInline: "auto",
                aspectRatio: "16 / 9",
              }}
            >
              <Image
                className="img-01"
                src="/assets/images/bg-section/dgtwin2.png"
                alt="Supply chain digital twin"
                width={560}
                height={315}
                sizes="(max-width: 991px) 100vw, 560px"
                style={{
                  position: "relative",
                  left: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: 8,
                  display: "block",
                  animation: "none",
                }}
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="content">
              <div className="heading-section wow fadeInUp style-1">
                <h6 style={{ color: "red" }}>What IntelliByld's Digital Twin Actually Is</h6>
                <div className="main-title" style={{ color: "#000" }}>
                  
                  <span className="animation-text tf-color-green">
                    Every material. Every supplier. Every shipment. Live.
                  </span>
                </div>
              </div>
              <h5 style={{ fontStyle: "italic", marginBottom: "20px", color: "#000000" }}>
                
IntelliByld's Supply Chain Digital Twin is a continuously updated virtual model of your project's entire material and supplier ecosystem. 
              </h5>
              <p style={{ color: "#000000", fontSize: "18px", lineHeight: "30px" }}>
                It links every supplier, shipment, delivery, and procurement event to your master project schedule — so you always know which materials are on track, which are at risk, and what the downstream impact will be if something goes wrong.
                <br />
                <br />
                
              </p>
             
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
