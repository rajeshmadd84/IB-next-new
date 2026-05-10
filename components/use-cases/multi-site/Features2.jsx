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
                  One Supplier Problem Shouldn't <span>Derail Three Projects.</span>
                </div>
              </div>
              <p className="">
                IntelliByld monitors every active delivery in real time - detecting disruption signals hours before they reach your site, and giving your team everything they need to respond fast.
                <br></br>
                Tier-1 contractors running multiple sites share suppliers, logistics capacity, and procurement windows — but manage them in silos. IntelliByld connects every site into one operational picture, so a risk detected on one project is resolved across all of them.
              </p>
              <ul className="list-item mb-30">
                <li>
                  <i className="icon-tick" />
                  Same supplier, three sites — nobody knows until one misses.
                </li>
                <li>
                  <i className="icon-tick" />
                  Each site orders independently — volume leverage lost.
                </li>
                <li>
                  <i className="icon-tick" />
                  Site A delay cascades to Site B — caught too late.
                </li>
                <li>
                  <i className="icon-tick" />
                  Project directors always one step behind.
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-40">
            <div
              className="image wow fadeInUp"
              style={{
                padding: "4px 5px",
                background: "transparent",
                border: "1px solid var(--color-primary)",
                borderRadius: "8px",
                overflow: "hidden",
              }}
            >
              <Image
                className="w-full"
                src="/assets/images/bg-section/multisite.png"
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
