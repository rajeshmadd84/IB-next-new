import { digitalTwinsFeatures } from "@/data/digital-twins";
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
                  A Live Virtual Mirror
                  <br />
                  Of Your Entire
                  <br />
                  <span className="tf-color-green">Supply Chain</span>
                </div>
              </div>
              <p className="">
                Track every material from factory to site in real time.
                <br />
                Spot threats and simulate alternatives before they hit your schedule.
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="row">
              {digitalTwinsFeatures.map((item, index) => (
                <div className="col-xl-4 col-6" key={index}>
                  <div className="wg-helpful text-center mb-30 wow fadeInUp">
                    <div className="image">
                      <span className={item.icon} />
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
