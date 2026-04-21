import { contactLinks } from "@/data/contactLinks";
import Image from "next/image";
import React from "react";

export default function ContactInfo() {
  return (
    <div className="contact-info pt-130">
      <div className="themesflat-container">
        <div className="row">
          {contactLinks.map((item) => (
            <div className="col-lg-6 col-md-12 col-12" key={item.id}>
              <div
                className="wg-helpful style-1 contact-info-card wow fadeInUp"
                data-wow-delay={item.delay}
              >
                <div className="image">
                  <div className="icon">
                    <Image
                      src={item.iconSrc}
                      alt={item.iconAlt ?? ""}
                      width={40}
                      height={40}
                    />
                  </div>
                </div>
                <h6>
                  {item.link ? (
                    <a href={item.link}>{item.title}</a>
                  ) : (
                    item.title
                  )}
                </h6>
                <p>
                  {item.descriptionBold ? (
                    <strong>
                      {item.description.split("\n").map((line, i) => (
                        <React.Fragment key={i}>
                          {line}
                          <br />
                        </React.Fragment>
                      ))}
                    </strong>
                  ) : (
                    item.description.split("\n").map((line, i) => (
                      <React.Fragment key={i}>
                        {line}
                        <br />
                      </React.Fragment>
                    ))
                  )}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
