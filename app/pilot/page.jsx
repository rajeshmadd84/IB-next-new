"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default function PilotPage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_KEY);
    formData.append("subject", "New Pilot Program Application - Intellibyld");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        setIsSuccess(true);
        setTimeout(() => {
          router.push("/");
        }, 3000);
      } else {
        setError("Failed to submit application. Please try again.");
      }
    } catch (err) {
      setError("Failed to submit application. Please try again.");
    }

    setIsSubmitting(false);
  };

  return (
    <div className="pilot-page">
      <div className="pilot-bg">
        <img
          src="/assets/images/bg-section/ib-hero1.jpg"
          alt=""
          className="pilot-bg-image"
        />
        <div className="pilot-bg-overlay" />
      </div>

      <div className="pilot-container">
        <Link href="/" className="pilot-back-btn">
          <i className="icon-arrow-left2" />
          Back to Home
        </Link>

        <div className="pilot-logo">
          <Image
            src="/assets/images/logo/logo-white.svg"
            alt="Intellibyld"
            width={150}
            height={40}
          />
        </div>

        {!isSuccess ? (
          <div className="pilot-form-wrapper">
            <h1 className="pilot-title">Join the Pilot Program</h1>
            <p className="pilot-subtitle">
              Be among the first to experience the future of construction supply
              chain management. Limited spots available for early adopters.
            </p>

            <form onSubmit={handleSubmit} className="pilot-form">
              <div className="pilot-form-group">
                <label>Full Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="John Smith"
                />
              </div>

              <div className="pilot-form-group">
                <label>Work Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="john@company.com"
                />
              </div>

              <div className="pilot-form-group">
                <label>Company Name</label>
                <input
                  type="text"
                  name="company"
                  required
                  placeholder="Construction Co."
                />
              </div>

              <div className="pilot-form-group">
                <label>Type of Company</label>
                <select name="companyType" required>
                  <option value="">Select type</option>
                  <option value="Real Estate Developer">
                    Real Estate Developer
                  </option>
                  <option value="General Contractor">General Contractor</option>
                  <option value="Equipment Vendor">Equipment Vendor</option>
                  <option value="Others">Others</option>
                </select>
              </div>

              <div className="pilot-form-group">
                <label>Company Size</label>
                <select name="companySize" required>
                  <option value="">Select size</option>
                  <option value="1-10">1-10 employees</option>
                  <option value="11-50">11-50 employees</option>
                  <option value="51-200">51-200 employees</option>
                  <option value="201-500">201-500 employees</option>
                  <option value="500+">500+ employees</option>
                </select>
              </div>

              <div className="pilot-form-group">
                <label>Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="+65 1234 5678"
                />
              </div>

              <div className="pilot-form-group">
                <label>What challenges are you facing? (Optional)</label>
                <textarea
                  name="challenges"
                  rows={4}
                  placeholder="Tell us about your supply chain challenges..."
                />
              </div>

              {error && <div className="pilot-error">{error}</div>}

              <button
                type="submit"
                disabled={isSubmitting}
                className="tf-button style-green pilot-submit-btn"
              >
                <span>
                  {isSubmitting ? "Submitting..." : "Submit Application"}
                </span>
                <i className="icon-arrow-right2" />
              </button>
            </form>
          </div>
        ) : (
          <div className="pilot-success">
            <div className="pilot-success-icon">
              <i className="icon-tick" />
            </div>
            <h2>Thank you for your interest</h2>
            <p>
              We've received your application. Our team will reach out within 24
              hours to discuss next steps.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
