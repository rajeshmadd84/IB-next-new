import React from "react";
import Link from "next/link";

const AGENTS = [
  {
    name: "Predictive Scheduling Agent",
    body: "Provides the live material need dates the agent monitors against. When the schedule shifts, shipment timing adjusts automatically.",
    href: "/agents/scheduling",
    linkLabel: "Learn about Predictive Scheduling",
  },
  {
    name: "Exception Triage Agent",
    body: "Takes over when a reroute also fails or when a shipment problem requires human resolution — with the full deviation history attached.",
    href: "/agents/exception-triage",
    linkLabel: "Learn about Exception Triage",
  },
  {
    name: "Supplier Comms Agent",
    body: "Surfaces early delay signals from vendor messages on email and WhatsApp, often before the carrier feed shows a problem.",
    href: "/agents/supplier-comms",
    linkLabel: "Learn about Supplier Comms",
  },
];

export default function WorksWith() {
  return (
    <div className="wg-works-with pb-130">
      <div className="themesflat-container">
        <div className="row">
          <div className="col-12">
            <div className="heading-section wow fadeInUp text-center">
              <h6>Works With</h6>
              <div className="main-title">
                Works with these{" "}
                <span className="animation-text ib-color-blue">agents</span>
              </div>
            </div>
          </div>
        </div>
        <div className="row works-with-row">
          {AGENTS.map((a) => (
            <div key={a.name} className="col-md-4">
              <div className="works-with-card wow fadeInUp">
                <h3 className="works-with-title">{a.name}</h3>
                <p className="works-with-body">{a.body}</p>
                <Link href={a.href} className="works-with-link">
                  {a.linkLabel}
                  <i className="icon-arrow-right2" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
