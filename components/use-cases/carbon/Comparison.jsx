import React from "react";

const ROWS = [
  {
    feature: "Carbon data capture",
    without: "Manual entry per material",
    with: "Automatic from every delivery",
  },
  {
    feature: "EPD sourcing",
    without: "Chased from suppliers manually",
    with: "Pulled and matched in real time",
  },
  {
    feature: "Hotspot detection",
    without: "Found in post-project review",
    with: "Flagged before pour",
  },
  {
    feature: "Portfolio carbon view",
    without: "One spreadsheet per site",
    with: "All projects, one live dashboard",
  },
  {
    feature: "Compliance reporting",
    without: "Assembled at handover",
    with: "GLA, BREEAM, LETI ready always",
  },
];

export default function Comparison() {
  return (
    <div className="wg-comparison pb-130">
      <div className="themesflat-container">
        <div className="row">
          <div className="col-12">
            <div className="heading-section wow fadeInUp text-center">
              <h6>Why IntelliByld</h6>
              <div className="main-title">
                The difference, <span className="animation-text ib-color-blue">side by side</span>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="comparison-table-wrap">
              <table className="comparison-table">
                <thead>
                  <tr>
                    <th />
                    <th>Without IntelliByld</th>
                    <th className="highlight">With IntelliByld</th>
                  </tr>
                </thead>
                <tbody>
                  {ROWS.map((r) => (
                    <tr key={r.feature}>
                      <th scope="row">{r.feature}</th>
                      <td>{r.without}</td>
                      <td className="highlight">{r.with}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
