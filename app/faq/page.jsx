import Link from "next/link";

export const metadata = {
  title: "FAQ | IntelliByld - Construction Supply Chain Intelligence",
  description:
    "Frequently asked questions about IntelliByld, Agentic AI for construction, BCA Singapore IDD compliance, and Digital Twin logistics.",
};

const faqs = [
  {
    q: "What is IntelliByld?",
    a: "IntelliByld is an AI-powered operating system for construction supply chains that automates material tracking and logistics using Agentic AI and Digital Twins.",
  },
  {
    q: "How does IntelliByld support BCA Singapore IDD?",
    a: "IntelliByld aligns with the Building and Construction Authority (BCA) Integrated Digital Delivery (IDD) framework by ensuring seamless data flow between BIM models, site logistics, and project management systems.",
  },
];

export default function FaqPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <main style={{ maxWidth: "800px", margin: "0 auto", padding: "2rem" }}>
        <Link href="/" style={{ color: "#1d4ed8", textDecoration: "none" }}>
          ← Back to Home
        </Link>
        <h1 style={{ fontSize: "2rem", fontWeight: "bold", marginTop: "1.5rem", marginBottom: "1.5rem" }}>
          Frequently Asked Questions
        </h1>
        <div>
          {faqs.map((faq, index) => (
            <div
              key={index}
              style={{
                borderBottom: "1px solid #e2e8f0",
                paddingBottom: "1.25rem",
                marginBottom: "1.25rem",
              }}
            >
              <h3 style={{ fontWeight: "600", color: "#1d4ed8", fontSize: "1.1rem", marginBottom: "0.5rem" }}>
                {faq.q}
              </h3>
              <p style={{ color: "#475569", lineHeight: "1.65" }}>{faq.a}</p>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
