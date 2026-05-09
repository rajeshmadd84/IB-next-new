import React from "react";

const ITEMS = [
  {
    title: "Use case — finishes package on a hospital project",
    body: "A two-week stretch of unseasonable rain pushes the building's weatherproofing milestone back by 11 days on a 240-bed hospital project. The agent detects the forecast shift, recalculates when interior finishes can begin, and pushes back the call-off dates for tile, drywall, and millwork — notifying each vendor and updating the laydown plan. The contractor avoids paying €165,000 in storage and double-handling fees that would have come from materials sitting on site for nearly two weeks.",
  },
  {
    title: "Who uses the Predictive Scheduling Agent?",
    body: "Procurement teams use it to set call-off dates with confidence. Project planners use it to keep the schedule and the procurement plan in sync. Site managers use it to keep laydown areas clear. Finance teams benefit from reduced inventory tied up on site and lower carrying costs.",
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
