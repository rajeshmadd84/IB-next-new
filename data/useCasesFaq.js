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
    question: "How does IntelliByld measure embodied carbon per delivery instead of using industry averages?",
    answer:
      "Most projects calculate embodied carbon by multiplying material quantities by generic factors from industry databases — averages that don't reflect which supplier produced the material, how it was manufactured, or how far it travelled. IntelliByld captures the actual delivery: the specific supplier, the EPD attached to that batch, the transport mode, and the route. Carbon is then logged per delivery rather than estimated per quantity, so the project's reported footprint reflects what was actually built into the structure, not what a spreadsheet assumed.",
    active: true,
  },
  {
    id: 2,
    question: "What is an EPD and how does IntelliByld source them automatically?",
    answer:
      "An EPD (Environmental Product Declaration) is a verified document published by a manufacturer that quantifies the environmental impact of a specific product — including embodied carbon per unit. Traditionally, sustainability consultants chase EPDs from suppliers manually at project closeout, often months after the material was poured. IntelliByld pulls EPDs from supplier records as deliveries are confirmed, matches them to the right line item in the Digital Twin, and flags any material that arrives without one. No manual kgCO₂e entry, no Stage 5 reconciliation.",
    active: false,
  },
  {
    id: 3,
    question: "Which carbon reporting frameworks does IntelliByld support?",
    answer:
      "IntelliByld produces reports aligned to the GLA (Greater London Authority) Whole Life-Cycle Carbon Assessment guidance, BREEAM, and LETI (London Energy Transformation Initiative) targets. Because the underlying carbon data is captured per delivery from day one, the same dataset can be exported to whichever framework a project, lender, or planning authority requires — without rebuilding the assessment for each one. The platform is designed so that adding additional frameworks (such as Singapore Green Mark or RICS Whole Life Carbon Assessment) does not require recapturing data.",
    active: false,
  },
  {
    id: 4,
    question: "Can IntelliByld track embodied carbon across a portfolio, not just a single project?",
    answer:
      "Yes. The platform consolidates carbon data across every project a contractor or developer is delivering, producing a portfolio-level whole-life carbon view. Low-carbon supplier swaps that work on one project become visible as opportunities across others with similar specifications. Benchmarks are drawn from the organisation's own live data rather than external averages, so portfolio targets reflect what is achievable with the supply chain actually being used. This is particularly relevant for developers and Tier-1 contractors with science-based carbon reduction commitments.",
    active: false,
  },
];
