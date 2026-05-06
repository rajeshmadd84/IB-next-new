import React from "react";

const ROWS = [
  {
    label: "When delay is detected",
    without: "After crew mobilises",
    with: "Up to 72hrs before delivery",
  },
  {
    label: "Programme re-sequencing",
    without: "Manual, takes hours",
    with: "Automatic, within minutes",
  },
  {
    label: "Procurement response",
    without: "Team starts from scratch",
    with: "Shortlist and RFQ pre-prepared",
  },
  {
    label: "Team notified",
    without: "When it’s already a crisis",
    with: "When it’s still manageable",
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
