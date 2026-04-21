import Link from "next/link";
import React from "react";

/**
 * Theme CSS pulls the next section up under the CTA (margin-bottom: -138px).
 * Set overlapFollowingSection={false} when the next sibling is a full footer so it is not covered.
 */
export default function Cta({ overlapFollowingSection = true }) {
  return (
    <div
      className="cta"
      style={
        overlapFollowingSection
          ? undefined
          : { marginTop: "50px", marginBottom: "50px", zIndex: "auto" }
      }
    >
      <div className="themesflat-container">
        <div className="row">
          <div className="col-12">
            <div className="cta-wrapper cta-split-cols" style={{ paddingTop: 48 }}>
              <div className="cta-title">
                <h2
                  style={{
                    fontFamily: '"Space Grotesk", sans-serif',
                    marginTop: 0,
                    marginBottom: 0,
                  }}
                >
                  Stop Pricing in <br />
                  <span
                    className="animation-text"
                    style={{
                      fontFamily: '"Space Grotesk", sans-serif',
                      fontStyle: "normal",
                    }}
                  >
                    Uncertainty!
                  </span>
                </h2>
                <h6 style={{ marginTop: 19, marginBottom: 0 }}>Secure your margins with Ground-Truth Data.</h6>
              </div>
              <div className="cta-content">
                <p>
                The standard 5%–10% contingency buffer is no longer competitive in Singapore’s 2026 landscape. 
                IntelliByld eliminates the guesswork by solving the 'just-in-case' storage costs and idle machinery delays that inflate your Tender Price Index (TPI).
                </p>
                <div className="flex gap20">
                  <Link href="/pilot" className="tf-button style-1">
                    Get Started <i className="icon-arrow-right2" />
                  </Link>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
