// FAQs surfaced on use-case pages (supplier delay neutralization, etc.)
export const procurementFaqs = [
  {
    id: 1,
    question: "Can the Procurement Dispatch Agent handle non-standard items?",
    answer:
      "Yes. For materials without a pre-mapped vendor list, the agent flags the item and asks the procurement lead to approve a vendor set before sending.",
    active: true,
  },
  {
    id: 2,
    question: "Does it respect our approved vendor list?",
    answer:
      "Yes. The agent only sends to vendors on your approved list. Adding a new vendor to the list always requires a human approval step.",
    active: false,
  },
  {
    id: 3,
    question: "What file formats does the RFQ go out in?",
    answer:
      "PDF, Excel, your ERP's native export format, or direct entry into a vendor portal. The agent matches each vendor's preferred channel.",
    active: false,
  },
  {
    id: 4,
    question: "Can we still send manual RFQs alongside the agent?",
    answer:
      "Yes. The agent runs in parallel with your existing process. Procurement leads can override, supplement, or pause any automated send.",
    active: false,
  },
  {
    id: 5,
    question: "How does it handle confidential pricing or NDAs?",
    answer:
      "RFQs are sent only to vendors with the appropriate NDAs on file. Confidential project metadata is redacted from the outbound RFQ unless explicitly required.",
    active: false,
  },
];

export const shipmentFaqs = [
  {
    id: 1,
    question: "Can the agent act on its own or does it always ask first?",
    answer:
      "Configurable. Below a defined cost threshold and within a list of approved alternative carriers, it acts and reports. Above that threshold, it recommends and waits for approval.",
    active: true,
  },
  {
    id: 2,
    question: "Does it work for international shipments?",
    answer:
      "Yes. Customs status, port congestion data, and ocean freight tracking are part of the standard feed.",
    active: false,
  },
  {
    id: 3,
    question: "How does it know what the site actually needs by when?",
    answer:
      "It reads the project schedule and BIM model directly, so it knows which materials feed which activities and what the consequence of a delay is for each.",
    active: false,
  },
  {
    id: 4,
    question: "What happens if a reroute also fails?",
    answer:
      "The agent escalates to Exception Triage, which routes the problem to a named human owner with the full deviation history attached.",
    active: false,
  },
  
];

export const schedulingFaqs = [
  {
    id: 1,
    question: "What BIM tools does the agent integrate with?",
    answer:
      "We are currently building integrations with Revit, Navisworks, Tekla, and IFC models on case by case basis. We will also build integrations to read schedule data from Primavera and MS Project. If your team uses a different tool, we can build a custom integration or use a file-based approach.",
    active: true,
  },
  {
    id: 2,
    question: "How far ahead does the agent forecast?",
    answer:
      "Up to the full project duration, with confidence intervals that widen further out. Near-term forecasts (two to four weeks) drive immediate action; long-term forecasts inform supplier capacity planning.",
    active: false,
  },
  {
    id: 3,
    question: "Does it work without BIM?",
    answer:
      "Yes, with reduced precision. A detailed Primavera or MS Project schedule plus material takeoffs is the minimum viable input. BIM adds geometric and sequencing detail that improves accuracy.",
    active: false,
  },
  {
    id: 4,
    question: "Can the procurement team override its recommendations?",
    answer:
      "Yes, always. The agent's role is to surface the recommendation; the call-off date is owned by the procurement team.",
    active: false,
  },
  {
    id: 5,
    question: "What weather data sources does it use?",
    answer:
      "Multiple commercial and government feeds, blended for accuracy. The agent uses ensemble forecasts rather than relying on a single source.",
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
