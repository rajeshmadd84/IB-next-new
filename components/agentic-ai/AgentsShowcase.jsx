"use client";

import React from "react";
import Link from "next/link";

const AGENTS = [
  {
    slug: "procurement",
    name: "Procurement Dispatch Agent",
    blurb:
      "Turns BIM takeoffs into RFQs and dispatches them to ranked vendors — cutting sourcing cycles from days to hours.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 6h18l-2 12H5L3 6Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="M8 6V4a4 4 0 0 1 8 0v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    slug: "scheduling",
    name: "Predictive Scheduling Agent",
    blurb:
      "Aligns material delivery dates with BIM models, weather, and crew availability — materials arrive when crews are ready.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="5" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="2" />
        <path d="M3 10h18M8 3v4M16 3v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    slug: "shipment",
    name: "Shipment Orchestration Agent",
    blurb:
      "Monitors live shipments and reroutes before delays hit the site. Detect, analyze, pivot, sync — built for construction logistics.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 7h11v10H3z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="M14 10h5l2 3v4h-7" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <circle cx="7" cy="18" r="2" stroke="currentColor" strokeWidth="2" />
        <circle cx="17" cy="18" r="2" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
];

export default function AgentsShowcase() {
  return (
    <div className="agents-showcase pt-130 pb-130 lavender-line-bg">
      <div className="themesflat-container">
        <div className="heading-section wow fadeInUp text-center" style={{ marginBottom: 42 }}>
          <h6 className="ib-color-blue">The Agents</h6>
          <div className="main-title" style={{ color: "#000" }}>
            Meet your{" "}
            <span className="ib-color-blue">Digital Workforce</span>
          </div>
          <p
            style={{
              color: "#696969",
              margin: "18px auto 0",
              maxWidth: 760,
              lineHeight: "24px",
            }}
          >
            Four specialised agents working in concert — each handling a distinct
            slice of the supply chain, all coordinated through the same Digital
            Twin.
          </p>
        </div>

        <div className="agents-grid">
          {AGENTS.map((a) => (
            <Link
              href={`/agents/${a.slug}`}
              key={a.slug}
              className="agent-card wow fadeInUp"
            >
              <div className="agent-card-icon">{a.icon}</div>
              <h4 className="agent-card-title">{a.name}</h4>
              <p className="agent-card-blurb">{a.blurb}</p>
              <span className="agent-card-cta">
                Explore
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M5 12h14M13 5l7 7-7 7"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </div>

      <style jsx>{`
        .agents-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 24px;
          max-width: 1100px;
          margin: 0 auto;
        }
        .agent-card {
          display: flex;
          flex-direction: column;
          padding: 32px 28px;
          background: #fff;
          border: 2px solid #2563EB;
          border-radius: 16px;
          box-shadow: 0 8px 24px rgba(37, 99, 235, 0.08);
          color: inherit;
          text-decoration: none;
          transition: transform 0.25s ease, box-shadow 0.25s ease,
            border-color 0.25s ease;
        }
        .agent-card:hover {
          transform: translateY(-3px);
          border-color: #1D4FBE;
          box-shadow: 0 16px 36px rgba(37, 99, 235, 0.18);
        }
        .agent-card-icon {
          width: 52px;
          height: 52px;
          border-radius: 12px;
          background: linear-gradient(135deg, #2563EB, #1D4FBE);
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 18px;
        }
        .agent-card-title {
          font-size: 20px;
          font-weight: 700;
          color: #14142b;
          margin: 0 0 10px 0;
          line-height: 1.3;
        }
        .agent-card-blurb {
          color: #4a4a68;
          font-size: 15px;
          line-height: 1.6;
          margin: 0 0 22px 0;
          flex: 1 1 auto;
        }
        .agent-card-cta {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: #2563EB;
          font-weight: 600;
          font-size: 15px;
          margin-top: auto;
        }
        .agent-card:hover .agent-card-cta {
          color: #1D4FBE;
        }
        @media (max-width: 768px) {
          .agents-grid {
            grid-template-columns: 1fr;
          }
          .agent-card {
            padding: 26px 22px;
          }
          .agent-card-title {
            font-size: 18px;
          }
        }
      `}</style>
    </div>
  );
}
