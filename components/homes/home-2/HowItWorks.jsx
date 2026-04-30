import React from "react";

const steps = [
  {
    step: 1,
    title: "Connect Your Data Sources",
    description:
      "IntelliByld integrates with your existing BIM models, ERP systems, and project management tools via API. No manual migration required. Data flows automatically from day one.",
    detail: [
      "BIM integration (IFC, Revit, Navisworks)",
      "ERP connectors (SAP, Oracle, Procore)",
      "IoT sensor data from site equipment",
      "Supplier portals and logistics platforms",
    ],
  },
  {
    step: 2,
    title: "Build a Live Digital Twin",
    description:
      "The platform constructs a real-time digital replica of your supply chain. Every material, shipment, and delivery milestone is mapped against your master project schedule automatically.",
    detail: [
      "Automatic material tracking from factory to site",
      "Live synchronisation with the master programme",
      "Early warning on schedule deviation risks",
      "Visual dashboard of the full supply chain",
    ],
  },
  {
    step: 3,
    title: "AI Agents Identify and Resolve Risks",
    description:
      "IntelliByld's Agentic AI continuously monitors for risks — supplier delays, transport disruptions, demand shifts — and acts autonomously to resolve them before they impact the site.",
    detail: [
      "Predictive delay detection using historical and live data",
      "Autonomous re-routing of shipments",
      "Automated RFQ generation for alternative suppliers",
      "Real-time notifications to relevant stakeholders",
    ],
  },
  {
    step: 4,
    title: "Execute and Stay Audit-Ready",
    description:
      "Every action taken by the platform is logged with full traceability. Compliance documentation for BCA Level 3 Site Management Data Standards is generated automatically.",
    detail: [
      "Automated audit trail for every supply chain event",
      "BCA Level 3 digital compliance reports",
      "Carbon accountability tracking per material delivery",
      "One-click export for authority submissions",
    ],
  },
];

export default function HowItWorks() {
  return (
    <section
      className="home2-banner-bg"
      style={{ padding: "80px 0" }}
      aria-label="How IntelliByld Works"
      itemScope
      itemType="https://schema.org/HowTo"
    >
      <meta itemProp="name" content="How IntelliByld Automates Construction Supply Chains" />
      <meta
        itemProp="description"
        content="A step-by-step guide to how IntelliByld uses Agentic AI and Digital Twins to autonomously orchestrate construction supply chain operations."
      />
      <div className="bg-item">
        <div className="item-1" />
        <div className="item-2" />
      </div>
      <div className="themesflat-container">
        <div className="row">
          <div className="col-12">
            <div
              className="heading-section wow fadeInUp style-1 text-center"
              style={{ marginBottom: 56 }}
            >
              <h6 className="tf-color-green">How It Works</h6>
              <div className="main-title">
                From Data to{" "}
                <span className="animation-text tf-color-green">
                  Autonomous Execution
                </span>
              </div>
              <p
                style={{
                  color: "#b0b8c1",
                  marginTop: 16,
                  maxWidth: 680,
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              >
                Four steps explain how IntelliByld transforms fragmented
                construction data into autonomous, real-time supply chain
                management.
              </p>
            </div>
          </div>
        </div>

        <ol
          style={{ listStyle: "none", padding: 0, margin: 0 }}
          itemProp="step"
        >
          {steps.map((item, index) => (
            <li
              key={index}
              itemScope
              itemType="https://schema.org/HowToStep"
              className="wow fadeInUp"
              style={{
                display: "grid",
                gridTemplateColumns: "auto 1fr",
                gap: "0 32px",
                marginBottom: index < steps.length - 1 ? 48 : 0,
                alignItems: "start",
              }}
            >
              {/* Step number + connector */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #16a34a, #4ade80)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 800,
                    fontSize: "1.1rem",
                    color: "#0a1a17",
                    flexShrink: 0,
                  }}
                >
                  {item.step}
                </div>
                {index < steps.length - 1 && (
                  <div
                    style={{
                      width: 2,
                      flexGrow: 1,
                      minHeight: 32,
                      background:
                        "linear-gradient(to bottom, #4ade80, transparent)",
                      marginTop: 8,
                    }}
                  />
                )}
              </div>

              {/* Content */}
              <div style={{ paddingBottom: 16 }}>
                <h3
                  itemProp="name"
                  style={{
                    color: "#fff",
                    fontSize: "1.2rem",
                    fontWeight: 700,
                    marginBottom: 10,
                    marginTop: 12,
                  }}
                >
                  {item.title}
                </h3>
                <p
                  itemProp="text"
                  style={{
                    color: "#b0b8c1",
                    fontSize: "0.95rem",
                    lineHeight: 1.7,
                    marginBottom: 14,
                  }}
                >
                  {item.description}
                </p>
                <ul
                  style={{
                    padding: 0,
                    margin: 0,
                    listStyle: "none",
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "8px 20px",
                  }}
                >
                  {item.detail.map((point, i) => (
                    <li
                      key={i}
                      style={{
                        color: "#9ca3af",
                        fontSize: "0.85rem",
                        display: "flex",
                        alignItems: "center",
                        gap: 6,
                      }}
                    >
                      <span
                        style={{
                          width: 5,
                          height: 5,
                          borderRadius: "50%",
                          background: "#4ade80",
                          display: "inline-block",
                          flexShrink: 0,
                        }}
                      />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
