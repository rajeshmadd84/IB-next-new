const ROWS = [
  {
    feature: "Sourcing cycle time",
    without: "Two to five days per package",
    with: "Sixty to ninety minutes",
  },
  {
    feature: "Spec accuracy",
    without: "Rekeyed from drawings, error-prone",
    with: "Pulled directly from BIM",
  },
  {
    feature: "Vendor reach",
    without: "Three to five from memory",
    with: "Every qualified vendor on list",
  },
  {
    feature: "RFQ format",
    without: "Different per buyer, per package",
    with: "Standardized across every send",
  },
  {
    feature: "Vendor channel",
    without: "Email only",
    with: "Email, portal, or API",
  },
  {
    feature: "Audit trail",
    without: "Email folders and spreadsheets",
    with: "One timestamped log per RFQ",
  },
];

export default function Comparison() {
  return (
    <div className="wg-comparison pb-130">
      <div className="themesflat-container">
        <div className="row">
          <div className="col-12">
            <div className="heading-section wow fadeInUp text-center">
              <h6>Why the Procurement Dispatch Agent</h6>
              <div className="main-title">
                Manual RFQs versus <span className="animation-text ib-color-blue">automated dispatch</span>
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
                    <th className="highlight">With Procurement Dispatch Agent</th>
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
