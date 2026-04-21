import { counters } from "@/data/facts";
import React from "react";
import Image from "next/image";
import Counter from "@/components/common/Counter";
export default function DigitalTwin1() {
  return (
    <div className="wg-create-design style-3 pb-130 pt-130 digital-twin1-mobile-tight">
      <div className="themesflat-container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="content">
              <div className="heading-section wow fadeInUp style-1">
                <h6 className="tf-color-green">What is it?</h6>
                <div className="main-title" style={{ color: "#000", fontSize: "36px", lineHeight: "52px" }}>
                   Not a BIM model. Not a dashboard.{" "}<br />
                  <span className="animation-text tf-color-green">
                   A living replica of your project's operational reality.
                  </span>
                </div>
              </div>
              <p style={{ color: "#000000", fontSize: "18px", lineHeight: "30px" }}>
               A Supply Chain Digital Twin is a continuously updated virtual model of everything that feeds your construction site materials in transit, workforce on the ground, equipment on site, and the communications that connect them all.
              <br /><br />
               Unlike a BIM model, which captures design intent and freezes the moment construction begins, IntelliByld's Digital Twin captures execution reality and updates itself in real time as that reality changes.
               <br /><br />
               Unlike a dashboard, which shows you what has already happened, the Digital Twin knows what is about to happen — because it is watching every signal across your supply chain, your site communications, and your operational schedule simultaneously.
              </p>
              
              
            </div>
          </div>
          <div className="col-lg-6">
            <div className="image wow fadeInUp">
              <Image
                className="img-01"
                src="/assets/images/bg-section/agenticai.jpg"
                alt="image"
                width={558}
                height={522}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
