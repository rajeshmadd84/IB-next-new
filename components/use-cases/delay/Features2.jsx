import React from "react";
import Image from "next/image";
export default function Features2() {
  return (
    <div className="wg-create-design style-7 pb-130 pt-80">
      <div className="themesflat-container">
        <div className="row">
          <div className="col-lg-60">
            <div className="content">
              <div className="heading-section wow fadeInUp">
                <h6>Supplier Delay</h6>
                <div className="main-title">
                  Know About the Delay <span>Before Your Crew Does.</span>
                </div>
              </div>
              <p className="">
                IntelliByld monitors every active delivery in real time - detecting disruption signals hours before they reach your site, and giving your team everything they need to respond fast.
              </p>
              <ul className="list-item mb-30">
                <li>
                  <i className="icon-tick" />
                  Delays surface after crews have already mobilised.
                </li>
                <li>
                  <i className="icon-tick" />
                  300 person-hours wasted before anyone acts.
                </li>
                <li>
                  <i className="icon-tick" />
                  50–200 active deliveries — impossible to monitor manually
                </li>
                <li>
                  <i className="icon-tick" />
                  You find out when suppliers decide to tell you
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-40">
            <div
              className="image wow fadeInUp"
              style={{
                padding: 0,
                background: "transparent",
                border: "1px solid #2563EB",
                borderRadius: "12px",
                overflow: "hidden",
              }}
            >
              <Image
                className="w-full"
                src="/assets/images/bg-section/delay-usecase.png"
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
