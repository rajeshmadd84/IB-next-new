// FAQs surfaced on use-case pages (supplier delay neutralization, etc.)
export const delaysFaqs = [
  {
    id: 1,
    question: "How does IntelliByld detect delays the supplier hasn't reported?",
    answer:
      "It monitors shipping feeds, GPS tracking, port clearance data, and IoT sensors independently — not relying on supplier self-reporting. It also flags confirmations that are statistically overdue based on each supplier's historical pattern.",
    active: true,
  },
  {
    id: 2,
    question: "Does IntelliByld automatically select and award a replacement supplier?",
    answer:
      "No. Supplier selection involves contract terms, relationships, and commercial judgement that requires your team. IntelliByld prepares the shortlist and RFQ so your procurement team can engage suppliers and decide fast — cutting the response time significantly without removing human oversight.",
    active: false,
  },
  {
    id: 3,
    question: "What if no pre-qualified alternative is available?",
    answer:
      "IntelliByld escalates immediately with a full impact analysis, a revised programme, and partial mitigation options — accelerating other works, resequencing dependent tasks, or splitting quantities across multiple suppliers.",
    active: false,
  },
  {
    id: 4,
    question: "Does it replace our ERP or logistics platform?",
    answer:
      "No. IntelliByld sits above your existing tools and coordinates between them — BIM, ERP, IoT, and logistics platforms all feed into the Digital Twin automatically.",
    active: false,
  },
];

export const multisiteFaqs = [
  {
    id: 1,
    question: "Does each project still have its own Digital Twin?",
    answer:
      "Yes. Every project has its own live Digital Twin. IntelliByld's multi-site view sits above these — aggregating across all projects without replacing the individual project view that site teams use day to day.",
    active: true,
  },
  {
    id: 2,
    question: "How does IntelliByld identify consolidation opportunities?",
    answer:
      "It analyses material orders being placed independently across projects and flags where the same material, grade, and delivery window overlaps. The consolidation recommendation is presented to your procurement team — the decision to combine orders stays with them.",
    active: false,
  },
  {
    id: 3,
    question: "Does multi-site require a different setup?",
    answer:
      "No. Multi-site visibility is a function of the platform, not a separate product. Once each project is onboarded, cross-project visibility is available automatically for programme-level users.",
    active: false,
  },
  
];
export const carbonFaqs = [
  {
    id: 1,
    question: "How does IntelliByld detect delays the supplier hasn't reported?",
    answer:
      "It monitors shipping feeds, GPS tracking, port clearance data, and IoT sensors independently — not relying on supplier self-reporting. It also flags confirmations that are statistically overdue based on each supplier's historical pattern.",
    active: true,
  },
  {
    id: 2,
    question: "Does IntelliByld automatically select and award a replacement supplier?",
    answer:
      "No. Supplier selection involves contract terms, relationships, and commercial judgement that requires your team. IntelliByld prepares the shortlist and RFQ so your procurement team can engage suppliers and decide fast — cutting the response time significantly without removing human oversight.",
    active: false,
  },
  {
    id: 3,
    question: "What if no pre-qualified alternative is available?",
    answer:
      "IntelliByld escalates immediately with a full impact analysis, a revised programme, and partial mitigation options — accelerating other works, resequencing dependent tasks, or splitting quantities across multiple suppliers.",
    active: false,
  },
  {
    id: 4,
    question: "Does it replace our ERP or logistics platform?",
    answer:
      "No. IntelliByld sits above your existing tools and coordinates between them — BIM, ERP, IoT, and logistics platforms all feed into the Digital Twin automatically.",
    active: false,
  },
];
