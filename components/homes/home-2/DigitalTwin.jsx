import { servicesItems } from "@/data/services";
import React from "react";
import Image from "next/image";
export default function DigitalTwin() {
  return (
    <div
      className="wg-create-design style-2 pb-130 pt-130 home2-digitaltwin-mobile-gap"
      style={{ paddingBottom: 90 }}
    >
      <div className="themesflat-container">
        <div className="row">
          <div className="col-lg-5">
            <div className="content">
              <div className="heading-section wow fadeInUp style-1">
                <h6 className="tf-color-green">Digital Twins</h6>
                <div className="main-title">
                  A Living Digital Twin of your entire project{" "}
                  <span className="tf-color-green">Supply Chain</span>
                </div>
              </div>
              <p style={{ color: "#fff" }}>
                Traditional BIM models are static snapshots. Intellibyld creates
                a dynamic, virtual replica of your construction supply chain
                that evolves in real-time. By linking every material movement to
                your master project schedule, we eliminate the
                &ldquo;Integration Trap&rdquo; and ensure your digital model
                perfectly mirrors your physical site reality.
              </p>
              <a href="/digital-twins" className="tf-button style-2 mt-20">
                <span>Learn more</span>
                <i className="icon-arrow-right2" />
              </a>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="image wow fadeInUp">
              <Image
                className="img-01"
                src="/assets/images/bg-section/agenticai.jpg"
                alt="image"
                width={644}
                height={476}
              />
            </div>
          </div>
        </div>
        <div className="mt-50">
          <div className="row">
            {servicesItems.map((item, index) => (
              <div className="col-md-6" key={index}>
                <div className="services-item home2-digital-services-item wow fadeInUp">
                  <div className="content flex-grow">
                    <h4>{item.title}</h4>
                    <p dangerouslySetInnerHTML={{ __html: item.description }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
