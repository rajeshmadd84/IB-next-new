const ROWS = [
  {
    feature: "Detection lag",
    without: "Hours to days",
    with: "Minutes",
  },
  {
    feature: "Response trigger",
    without: "Truck fails to arrive",
    with: "Projected ETA shifts",
  },
  {
    feature: "Impact analysis",
    without: "Manual, after the fact",
    with: "Automatic, on detection",
  },
  {
    feature: "Action taken",
    without: "Phone calls and scrambling",
    with: "Pre-evaluated alternatives ready",
  },
  {
    feature: "Stakeholder updates",
    without: "Sequential email chains",
    with: "All parties, one pass",
  },
  {
    feature: "Site downtime risk",
    without: "High",
    with: "Materially reduced",
  },
];

export default function Comparison() {
  return (
    <div className="wg-comparison pb-130">
      <div className="themesflat-container">
        <div className="row">
          <div className="col-12">
            <div className="heading-section wow fadeInUp text-center">
              <h6>Why the Predictive Scheduling Agent</h6>
              <div className="main-title">
                Manual tracing versus <span className="animation-text ib-color-blue">automated tracking</span>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="comparison-table-wrap">
              <table className="comparison-table">
                <thead>
                  <tr>
                    <th />
                    <th>Manual process</th>
                    <th className="highlight">With Shipment Agent</th>
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
