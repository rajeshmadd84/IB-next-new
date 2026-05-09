import React from "react";

const ITEMS = [
  {
    title: "Structural steel package on a 22-storey project",
    body: "A general contractor's BIM model is updated with the final steel takeoff for a 22-storey commercial tower. The agent detects 1,840 tonnes of structural steel across four grades, matches the package to seven approved fabricators in the region, and dispatches RFQs within 90 minutes. Bids start arriving the same afternoon. The procurement lead, who would have spent the next three days drafting and sending, instead reviews the incoming bids by Wednesday afternoon — three days ahead of plan.",
  },
  {
    title: "Who uses the Procurement Dispatch Agent?",
    body: "Procurement leads use it to remove the slowest, most repetitive part of their day. Project managers benefit from faster sourcing cycles that protect schedule float. Operations and finance leaders get standardized, audit-ready records of every solicitation — useful for both internal compliance and external claims defense.",
  },
];

export default function UseCase() {
  return (
    <div className="wg-use-case pb-130">
      <div className="themesflat-container">
        <div className="row">
          <div className="col-12">
            <div className="heading-section wow fadeInUp text-center">
              <h6>Use Case</h6>
              <div className="main-title">
                In <span className="animation-text ib-color-blue">practice</span>
              </div>
            </div>
          </div>
        </div>
        <div className="row use-case-row">
          {ITEMS.map((item) => (
            <div key={item.title} className="col-md-6">
              <div className="use-case-item wow fadeInUp">
                <h2 className="use-case-title">{item.title}</h2>
                <p className="use-case-body">{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
