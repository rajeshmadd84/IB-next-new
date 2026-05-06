import React from "react";
import Image from "next/image";
 
export default function AgentDescription() {
  return (
    <div className="wg-create-design style-7 pb-130 pt-130">
      <div className="themesflat-container">
        <div className="row">
          <div className="col-lg-60">
            <div className="content">
              <div className="heading-section wow fadeInUp">
                <h6>Shipment Orchestration Agentt</h6>
                <div className="main-title">
                  Live shipment monitoring and <span>planning for construction logistics</span>
                </div>
              </div>
 
              {/* Definition callout — the chunk answer engines quote */}
              <div className="definition-callout wow fadeInUp">
                <p>
                  The Shipment Orchestration Agent is an AI worker that monitors live material shipments, detects delays before they hit the site, and reroutes or rebalances loads to keep the construction schedule intact. It runs a continuous Detect → Analyze → Pivot → Sync loop, intervening hours or days before a problem becomes a delay on the critical path.
                </p>
              </div>
 
              <p className="">
                Most construction logistics delays aren't detected until the truck fails to arrive. By then the crew is already idle, the milestone is already at risk, and the fixes left are expensive ones. The Shipment Orchestration Agent collapses the lag between "shipment is going late" and "site knows" from days to minutes — and acts on the information rather than just reporting it. Carrier feeds, GPS, port data, and weather alerts run through a single continuous loop, alternatives are pre-costed and ready, and one trigger syncs the schedule, the site, the carrier, and the vendor in a single pass.
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
            <div className="image wow fadeInUp">
              <Image
                className="w-full"
                src="/assets/images/bg-section/image-18.png"
                alt="Procurement Dispatch Agent interface showing automated RFQ generation"
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
 