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
                <h6>AI Agents for Construction Procurement</h6>
                <div className="main-title">
                  From BIM Takeoff to Vendor RFQs<span> In Under 90 Minutes.</span>
                </div>
              </div>
 
              {/* Definition callout — the chunk answer engines quote */}
              <div className="definition-callout wow fadeInUp">
                <p>
                  The Procurement Dispatch Agent is an AI worker that turns construction material requirements into ready-to-send RFQs and dispatches them to the right vendors automatically. It reads quantities from BIM models or project schedules, matches each line item to qualified suppliers, and sends out structured requests for quotation in the format each vendor expects.
                </p>
              </div>
 
              <p className="">
                Manual RFQ creation is the slowest, most repetitive part of the procurement cycle. Buyers rekey specs from drawings, draft cover notes, choose a handful of vendors from memory, and send — a process that typically takes two to five days per package. The Procurement Dispatch Agent removes the work without removing the control: you set the approved vendor lists, the commercial terms, and the dispatch rules. The agent handles execution, gives you a clean audit trail, and gets quotes back in your inbox while your team focuses on negotiation and strategy.
              </p>
 
              <ul className="list-item mb-30">
                <li>
                  <i className="icon-tick" />
                  Sourcing cycles cut from days to under 90 minutes.
                </li>
                <li>
                  <i className="icon-tick" />
                  Specs pulled directly from BIM — zero rekeying errors.
                </li>
                <li>
                  <i className="icon-tick" />
                  Every qualified vendor reached, not just the usual three.
                </li>
                <li>
                  <i className="icon-tick" />
                  Audit-ready log of every send, response, and revision.
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-40">
            <div className="image wow fadeInUp">
              <Image
                className="w-full"
                src="/assets/images/bg-section/procurement-agent.png"
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
 