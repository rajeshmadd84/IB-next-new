"use client";

import React from "react";
import Image from "next/image";

const CARDS = [
  {
    title: "No Integration Required",
    body: "We start without touching your ERP, PM software, or BIM model. Phase 1 is pure observation and action — no IT tickets, no procurement battles, no architecture reviews.",
    icon: "/assets/images/item-background/stop.png",
    alt: "Stop sign — no integration required",
  },
  {
    title: "No Change Management",
    body: "Foremen stay on WhatsApp. Suppliers keep emailing. Procurement keeps using the PO system. Our agents listen and act in the channels your people already use.",
    icon: "/assets/images/item-background/change.png",
    alt: "Change icon — no change management needed",
  },
  {
    title: "Results in 14 Days",
    body: "First live coordination dashboard in 7 days. First disruption caught and acted on within 14 days. No six-month rollout. No consulting bill.",
    icon: "/assets/images/item-background/lightning.png",
    alt: "Lightning bolt — fast results",
  },
];

export default function ZeroIntegration() {
  return (
    <div className="zero-integration pt-130 pb-130">
      <div className="themesflat-container">
        <div className="heading-section wow fadeInUp text-center" style={{ marginBottom: 42 }}>
          <h6 className="ib-color-blue">No Rip-and-Replace</h6>
          <div className="main-title" style={{ color: "#000" }}>
            Zero Integration. Zero Disruption.{" "}
            <span className="ib-color-blue">Live in 7 Days.</span>
          </div>
          <p
            style={{
              color: "#4a4a68",
              margin: "18px auto 0",
              maxWidth: 760,
              lineHeight: "26px",
              fontSize: 17,
            }}
          >
            We sit on top of your existing tools. Your team changes nothing.
          </p>
        </div>

        <div className="zi-grid">
          {CARDS.map((c) => (
            <div key={c.title} className="zi-card wow fadeInUp">
              <div className="zi-card-icon">
                <Image
                  src={c.icon}
                  alt={c.alt}
                  width={64}
                  height={64}
                  style={{ width: "100%", height: "100%", objectFit: "contain" }}
                />
              </div>
              <h4 className="zi-card-title">{c.title}</h4>
              <p className="zi-card-body">{c.body}</p>
            </div>
          ))}
        </div>

        <div className="zi-closing wow fadeInUp">
          The only thing that changes is that your supply chain becomes{" "}
          <span className="ib-color-blue">visible.</span>
        </div>
      </div>

      <style jsx>{`
        .zi-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 24px;
          max-width: 1100px;
          margin: 0 auto;
        }
        .zi-card {
          display: flex;
          flex-direction: column;
          padding: 32px 28px;
          background: #fff;
          border: 2px solid var(--color-primary);
          border-radius: 16px;
          box-shadow: 0 8px 24px rgba(37, 99, 235, 0.08);
          transition: transform 0.25s ease, box-shadow 0.25s ease,
            border-color 0.25s ease;
        }
        .zi-card:hover {
          transform: translateY(-3px);
          border-color: var(--color-primary-700);
          box-shadow: 0 16px 36px rgba(37, 99, 235, 0.18);
        }
        .zi-card-icon {
          width: 64px;
          height: 64px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 18px;
        }
        .zi-card-title {
          font-size: 22px;
          font-weight: 700;
          color: #14142b;
          margin: 0 0 12px 0;
          line-height: 1.3;
        }
        .zi-card-body {
          color: #4a4a68;
          font-size: 15px;
          line-height: 1.65;
          margin: 0;
        }
        .zi-closing {
          text-align: center;
          max-width: 820px;
          margin: 50px auto 0;
          font-size: 22px;
          font-weight: 600;
          line-height: 1.4;
          color: #14142b;
        }
        @media (max-width: 991px) {
          .zi-grid {
            grid-template-columns: 1fr;
          }
        }
        @media (max-width: 600px) {
          .zi-card {
            padding: 26px 22px;
          }
          .zi-card-title {
            font-size: 19px;
          }
          .zi-closing {
            font-size: 18px;
            margin-top: 36px;
          }
        }
      `}</style>
    </div>
  );
}
