export const metadata = {
  title: "Free Pilot | IntelliByld",
  description:
    "Apply for a free IntelliByld pilot — autonomous construction supply chain on a single live project. Singapore-based team.",
  alternates: { canonical: "https://www.intellibyld.com/pilot" },
  openGraph: {
    title: "Free Pilot | IntelliByld",
    description:
      "Apply for a free IntelliByld pilot — autonomous construction supply chain on a single live project. Singapore-based team.",
    url: "https://www.intellibyld.com/pilot",
    siteName: "IntelliByld",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    locale: "en_SG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Pilot | IntelliByld",
    description:
      "Apply for a free IntelliByld pilot — autonomous construction supply chain on a single live project. Singapore-based team.",
    images: ["/og-image.png"],
  },
};

export default function PilotLayout({ children }) {
  return children;
}
