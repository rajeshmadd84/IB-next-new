import { imageSources } from "@/data/avaters";
import React from "react";
import Image from "next/image";
export default function Banner() {
  return (
    <div className="wg-banner-2">
      <div className="bg-item">
        <div className="item-1" />
        <div className="item-2" />
      </div>
      <div className="themesflat-container w1420">
        <div className="row">
          <div className="col-xl-6 col-12">
            <div className="content">
              <div className="title">
                The OS for <br /> Construciton <br />
                {" "}
                <span className="tf-color-green">Supply Chains</span>
              </div>
              <p>
                Stop managing spreadsheets and start orchestrating your site. Intellibyld uses a <strong>Construction-Trained SLM</strong> to turn fragmented logistics into Autonomous Execution, keeping your project on schedule and your carbon footprint on target.
              </p>
              <div className="grid-button flex gap20 items-center mb-50">
                <a href="/pilot" className="tf-button style-2">
                  <span>Request Free Demo</span>
                  <i className="icon-arrow-right2" />
                </a>
               
              </div>
              
            </div>
          </div>
          <div className="col-xl-6 col-12">
            <div className="image relative w-full h-full">
              <div className="item-3" />
              <div className="item-4" />
              <Image
                src="/assets/images/bg-section/ib-hero1.jpg"
                alt="image"
                width={800}
                height={549}
                className="item-1"
              />
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
