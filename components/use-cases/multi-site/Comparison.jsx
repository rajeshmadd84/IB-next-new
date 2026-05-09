import React from "react";

const ROWS = [
  {
    label: "Supplier risk visibility",
    without: "Per site only",
    with: "Across all sites simultaneously",
  },
  {
    label: "Cross-site delay detection",
    without: "Three separate site reports",
    with: "One alert, full portfolio impact",
  },
  {
    label: "Procurement coordination",
    without: "Each site orders independently",
    with: "Consolidation opportunities identified automatically",
  },
  {
    label: "Supplier capacity conflicts",
    without: "Discovered when delivery fails",
    with: "Flagged before orders are placed",
  },
  {
    label: "Portfolio reporting",
    without: "Aggregated spreadsheets, always delayed",
    with: "Live view, always current",
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
                    <tr key={r.label}>
                      <th scope="row">{r.label}</th>
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
