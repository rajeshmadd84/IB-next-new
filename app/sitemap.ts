import { MetadataRoute } from "next";

const BASE = "https://www.intellibyld.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    // Home — top priority.
    {
      url: `${BASE}`,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },

    // Top-level product pages.
    {
      url: `${BASE}/agentic-ai`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE}/digital-twins`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE}/sustainability`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },

    // Use-case overview + the 3 detail pages.
    {
      url: `${BASE}/use-cases`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE}/use-cases/supplier-delay-neutralization`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE}/use-cases/multi-site-coordination`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE}/use-cases/embodied-carbon`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    // Agent overview + 3 detail pages.
    {
      url: `${BASE}/agents`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE}/agents/procurement`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE}/agents/scheduling`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE}/agents/shipment`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    // Supporting pages.
    {
      url: `${BASE}/faqs`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${BASE}/glossary`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${BASE}/contact-us`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${BASE}/pilot`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}
