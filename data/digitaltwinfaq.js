// FAQs surfaced on use-case pages (supplier delay neutralization, etc.)
export const digitalTwinFaqs = [
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

