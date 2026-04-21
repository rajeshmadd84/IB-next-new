import { teamMembers } from "@/data/team";
import React from "react";
import Image from "next/image";

export default function Team() {
  return (
    <div className="wg-members pt-130 pb-130">
      <div className="themesflat-container">
        <div className="row items-center">
          <div className="col-12">
            <div className="heading-section wow fadeInUp text-center">
              
              <div className="main-title" style={{ color: "#fff" }}>
                Meet our core 
                {" "}
                <span className="animation-text">Team</span>
              </div>
            </div>
          </div>
          {teamMembers.map((member, index) => {
            const linkedInSocial = member.socials.find(
              (social) => social.platform === "linkedin"
            );

            return (
              <div className="col-lg-3 col-md-6 z-5" key={index}>
                <div className="member-item">
                <div className="image">
                  <Image
                    src={member.image}
                    width={300}
                    height={285}
                    alt={member.name}
                  />
                </div>
                <div className="content">
                  <h4>
                    <a href="#">{member.name}</a>
                  </h4>
                  <p>{member.role}</p>
                  {linkedInSocial && (
                    <div style={{ marginTop: "24px" }}>
                      <a
                        href={linkedInSocial.url || "#"}
                        className={`${linkedInSocial.icon} tf-color-green`}
                        aria-label={`${member.name} LinkedIn`}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ fontSize: "24px" }}
                      />
                    </div>
                  )}
                </div>
              </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
