import { sustainabilityTools } from "@/data/sustainability";
import Image from "next/image";
import React from "react";

export default function Tools() {
  return (
    <div className="list-tool">
      <div className="themesflat-container">
        <div className="row justify-center">
          <div className="col-12">
            <div className="heading-section wow fadeInUp text-center">
              <h6>Green Construction</h6>
              <div className="main-title">
                Build Greener With
                <br />
                <span className="tf-color-green">Carbon Intelligence</span>
              </div>
            </div>
          </div>
          {sustainabilityTools.map((tool, index) => (
            <div className="col-md-5" key={index}>
              <div className="wg-tool wow fadeInUp">
                <div className="icon" style={{ lineHeight: 0 }}>
                  <Image
                    src={tool.iconSrc}
                    alt={tool.iconAlt}
                    width={70}
                    height={70}
                    style={{ display: "block", objectFit: "contain" }}
                  />
                </div>
                <h3>{tool.title}</h3>
                <p>{tool.description}</p>
                <div className="order">{tool.order}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
