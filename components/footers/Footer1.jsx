"use client";
import { imageSources } from "@/data/avaters";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { socialMediaIcons } from "@/data/socials";

import { menuItems, menuItems2, agentMenuItems } from "@/data/footer";
export default function Footer1() {
  return (
    <footer id="footer">
      <Image
        className="item1 block-star"
        src="/assets/images/item-background/ibicon.png"
        width={100}
        height={100}
        alt="image"
      />

      <div className="themesflat-container">
        <div className="row">
          <div className="col-12">
            <div className="footer-top">
              <div className="logo-footer" id="logo-footer">
                <Link href={`/`}>
                  <Image
                    id="logo_footer"
                    src="/assets/images/logo/logo-footer.svg"
                    alt="image"
                    width={166}
                    height={40}

                  />
                </Link>
              </div>

            </div>
          </div>
          <div className="col-md-3">
            <div className="footer-title">About</div>
            <p className="text">
              Our Vision is building the execution layer for construction, turning fragmented site communication into autonomous, real-time decisions.

            </p>
            <ul className="wg-social">
              {socialMediaIcons.map((icon, index) => (
                <li key={index}>
                  <a
                    href={icon.href}
                    className={icon.className}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="IntelliByld on LinkedIn"
                  />
                </li>
              ))}
            </ul>
          </div>
          <div className="col-md-3">
            <div className="footer-title">Platform</div>
            <ul className="wg-menu">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-md-3">
            <div className="footer-title">Use Cases </div>
            <ul className="wg-menu">
              {menuItems2.map((item, index) => (
                <li key={index}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-md-3">
            <div className="footer-title">Agentic AI</div>
            <ul className="wg-menu">
              {agentMenuItems.map((item, index) => (
                <li key={index}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-12">
            <div
              className="footer-bottom"
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 12,
              }}
            >
              <p className="text mb-0">
                Copyright © 2026{" "}
                <a className="ib-color-blue" href="#">
                  IntelliByld
                </a>
                . All Rights Reserved.
              </p>
              <p className="text mb-0">
                <Link href="/glossary" className="ib-color-blue">
                  Glossary
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
