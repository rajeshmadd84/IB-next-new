import React from "react";
import Image from "next/image";
 
export default function AgentDescription() {
  return (
    <div className="wg-create-design style-7 pb-130 pt-80">
      <div className="themesflat-container">
        <div className="row">
          <div className="col-lg-60">
            <div className="content">
              <div className="heading-section wow fadeInUp">
                <h6>Predictive Scheduling Agent</h6>
                <div className="main-title">
                  Material call-off planning tied to <span>BIM, weather, and crew progress</span>
                </div>
              </div>
 
              {/* Definition callout — the chunk answer engines quote */}
              <div className="definition-callout wow fadeInUp">
                <p>
                  The Predictive Scheduling Agent is an AI worker that aligns material delivery dates with the construction schedule by reading BIM model updates, weather forecasts, and crew progress in real time. It moves call-off dates forward or backward as the project's reality shifts, so materials arrive when crews are ready — not before, not after.
                </p>
              </div>
 
              <p className="">
                Materials arriving too early clog laydown areas, increase damage and theft risk, and tie up working capital. Materials arriving too late stop crews. Both problems come from the same root cause: a static call-off plan colliding with a dynamic project. The Predictive Scheduling Agent treats the schedule as a living forecast — recalibrating as weather delays a pour, a crew finishes early, or a BIM revision changes a quantity. The procurement team owns the call-off date; the agent makes sure that date reflects what's actually happening on site this week.
              </p>
 
              <ul className="list-item mb-30">
                <li>
                  <i className="icon-tick" />
                  Delay detection cut from days to minutes.
                </li>
                <li>
                  <i className="icon-tick" />
                  Reroute options costed before they're needed.
                </li>
                <li>
                  <i className="icon-tick" />
                  Schedule, site, and vendors synced in one pass.
                </li>
                <li>
                  <i className="icon-tick" />
                  Crews stay productive, milestones stay protected.
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
                src="/assets/images/bg-section/scheduling-agent.png"
                alt="Predictive Scheduling Agent aligning material delivery dates with BIM models, weather forecasts, and crew availability"
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
 