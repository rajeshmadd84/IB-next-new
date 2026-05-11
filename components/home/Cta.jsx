import React from "react";
import Image from "next/image";
export default function Cta() {
  return (
    <div className="cta style-1 pb-130">
      <div className="themesflat-container">
        <div className="row">
          <div className="col-12">
            <div className="cta-wrapper-1">
              <div className="item1" />
              <Image
                className="item2"
                src="/assets/images/item-background/ibicon.png"
                alt="image"
                width={158}
                height={194}
              />
              
              <div className="cta-title">
                <h2>Run It on a Live Project</h2>
              </div>
              <p>
                Free pilot for select developers, GCs, and EPC teams. 
                Connect one site, see autonomous coordination in your own data within 3 weeks.
              </p>
              <div className="flex gap20 justify-center flex-wrap">
                <a
                  href="/pilot"
                  className="tf-button type-3 h45"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Apply for Pilot <i className="icon-arrow-right2" />
                </a>
                <a href="/contact-us" className="tf-button type-3 h45">
                  Contact Us <i className="icon-arrow-right2" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
