"use client";

import Image from "next/image";
import Link from "next/link";
export default function Footer2() {
  return (
    <footer
      id="footer"
      className="style-1"
      style={{
        background: "linear-gradient(180deg, #0a1a17 0%, #0d0d0d 100%)",
        marginBottom: "20px",
        paddingTop: "20px",
        paddingBottom: "10px",
      }}
    >
      <div className="item-1" />
      <div className="item-2" />
      <div className="themesflat-container">
        <div className="row" style={{ alignItems: "center" }}>
          <div className="col-sm-4 col-lg-4">
            <div className="logo-footer" id="logo-footer">
              <Link href={`/`}>
                <Image
                  id="logo_footer"
                  src="/assets/images/logo/logo.svg"
                  width={166}
                  alt="image"
                  height={40}
                  data-retina="/assets/images/logo/logo.svg"
                />
              </Link>
            </div>
          </div>
          <div className="col-sm-4 col-lg-4 text-start text-sm-center">
            <p className="text mb-0">
              Copyright @{new Date().getFullYear()},{" "}
              <a className="tf-color-green" href="#">
                Intellibyld
              </a>{" "}
              |{" "}
              <Link className="tf-color-green" href="/glossary">
                Glossary
              </Link>{" "}
              All Rights Reserved
            </p>
          </div>
          <div className="col-sm-4 col-lg-4 text-start text-sm-end">
            <a
              href="https://www.linkedin.com/company/intellibyld"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: "24px", color: "#fff" }}
            >
              <i className="icon-linkedin2" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
