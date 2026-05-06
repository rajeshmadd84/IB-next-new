import React from "react";
import Image from "next/image";
export default function Features2() {
  return (
    <div className="wg-create-design style-7 pb-130 pt-130">
      <div className="themesflat-container">
        <div className="row">
          <div className="col-lg-60">
            <div className="content">
              <div className="heading-section wow fadeInUp">
                <h6>Embodied carbon Management in Construction</h6>
                <div className="main-title">
                  Your Carbon Report Is Based on Averages.<span>Your Targets Are Not.</span>
                </div>
              </div>
              <p className="">
                IntelliByld replaces carbon estimates with real measurements — logged per delivery, updated in real time, reported automatically.
                <br></br>
                Most construction projects calculate embodied carbon using industry average factors — not actual delivery data. The result is a sustainability report that satisfies compliance requirements but tells you nothing about where carbon is actually being generated, or where it can be reduced. IntelliByld tracks every material movement against its real carbon footprint, so your ESG data reflects what is happening on site — not what a spreadsheet assumes.
              </p>
            <ul className="list-item mb-30">
              <li>
              <i className="icon-tick" />
              Carbon calculated from averages — not real deliveries.
              </li>
              <li>
               <i className="icon-tick" />
               Sustainability data arrives too late to change anything.
              </li>
              <li>
               <i className="icon-tick" />
               No visibility into which suppliers drive the most carbon.
              </li>
              <li>
                 <i className="icon-tick" />
               Green Mark compliance starts at handover — not day one.
              </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-40">
            <div className="image wow fadeInUp">
              <Image
                className="w-full"
                src="/assets/images/bg-section/image-18.png"
                alt="image"
                width={530}
                height={350}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
