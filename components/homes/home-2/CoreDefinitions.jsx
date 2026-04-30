import React from "react";

const definitions = [
  {
    term: "Agentic AI",
    definition:
      "A class of artificial intelligence that operates autonomously to complete multi-step tasks. Unlike traditional AI that only provides recommendations, Agentic AI takes action — re-routing shipments, issuing RFQs, and updating schedules — without waiting for human input.",
  },
  {
    term: "Digital Twin (Construction)",
    definition:
      "A real-time virtual replica of a physical construction supply chain. It mirrors every material movement, delivery schedule, and site event so project teams can simulate scenarios, predict disruptions, and validate plans before execution.",
  },
  {
    term: "Integrated Digital Delivery (IDD)",
    definition:
      "A Singapore BCA framework that mandates end-to-end digital collaboration across design, procurement, fabrication, and construction. IntelliByld is fully aligned with IDD by linking BIM, ERP, and site execution data into a single ground-truth workflow.",
  },
  {
    term: "BCA Site Management Data Standards",
    definition:
      "Singapore's Building and Construction Authority (BCA) requirements for how construction site data must be captured, structured, and audited. IntelliByld automates documentation to achieve Level 3 Fully Digital compliance.",
  },
  {
    term: "Construction Supply Chain Orchestration",
    definition:
      "The coordinated management of all procurement, logistics, and material delivery activities within a construction project. IntelliByld orchestrates these activities autonomously using AI agents that respond to live site data.",
  },
  {
    term: "Ground-Truth Data",
    definition:
      "Verified, real-time operational data collected from IoT sensors, site logs, and workflow events. IntelliByld uses ground-truth data to ensure all AI decisions are based on actual site conditions, not stale estimates.",
  },
];

export default function CoreDefinitions() {
  return (
    <section
      className="home2-banner-bg"
      style={{ padding: "80px 0" }}
      aria-label="IntelliByld Key Definitions"
      itemScope
      itemType="https://schema.org/DefinedTermSet"
    >
      <div className="bg-item">
        <div className="item-1" />
        <div className="item-2" />
      </div>
      <div className="themesflat-container">
        <div className="row">
          <div className="col-12">
            <div className="heading-section wow fadeInUp style-1 text-center" style={{ marginBottom: 48 }}>
              <h6 className="tf-color-green">Key Concepts</h6>
              <div className="main-title">
                What Does <span className="tf-color-green">IntelliByld</span> Mean?
              </div>
              <p style={{ color: "#b0b8c1", marginTop: 16, maxWidth: 680, marginLeft: "auto", marginRight: "auto" }}>
                Precise definitions of the technology and frameworks that power IntelliByld's platform — written for clarity, not marketing.
              </p>
            </div>
          </div>
        </div>

        <dl
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "24px",
          }}
        >
          {definitions.map((item, index) => (
            <div
              key={index}
              itemScope
              itemType="https://schema.org/DefinedTerm"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 12,
                padding: "28px 24px",
                transition: "border-color 0.3s ease",
              }}
              className="wow fadeInUp core-def-card"
            >
              <dt
                itemProp="name"
                style={{
                  color: "#4ade80",
                  fontWeight: 700,
                  fontSize: "1rem",
                  marginBottom: 10,
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <span
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: "#4ade80",
                    display: "inline-block",
                    flexShrink: 0,
                  }}
                />
                {item.term}
              </dt>
              <dd
                itemProp="description"
                style={{
                  color: "#b0b8c1",
                  fontSize: "0.92rem",
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                {item.definition}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
