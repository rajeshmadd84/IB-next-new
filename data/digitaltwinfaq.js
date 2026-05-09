// FAQs surfaced on use-case pages (supplier delay neutralization, etc.)
export const digitalTwinFaqs = [
  {
    id: 1,
    question: "What is a Supply Chain Digital Twin in construction?",
    answer:
      "A Supply Chain Digital Twin is a continuously updated virtual model of everything that feeds a construction site — materials in transit, workforce on the ground, equipment on site, and the communications that connect them. It links every supplier, shipment, delivery, and procurement event to the master project schedule, so the project team can see in real time which materials are on track, which are at risk, and what the downstream impact will be if something goes wrong. Unlike static models, it updates itself as execution reality changes.",
    active: true,
  },
  {
    id: 2,
    question: "How is a Digital Twin different from a BIM model?",
    answer:
      "A BIM model captures design intent — the geometry, specifications, and quantities of what is being built — and freezes the moment construction begins. A Digital Twin captures execution reality and keeps updating as that reality changes. BIM tells you what should be built. The Digital Twin tells you what is actually happening: which steel has cleared the port, which crew is mobilised, which delivery is statistically overdue. The two work together — IntelliByld's Digital Twin reads BIM takeoffs as one of its inputs, then layers live operational data on top.",
    active: false,
  },
  {
    id: 3,
    question: "How is a Digital Twin different from a construction dashboard?",
    answer:
      "A dashboard shows what has already happened — yesterday's deliveries, last week's progress, the budget burn to date. A Digital Twin watches what is about to happen, because it is monitoring every signal across the supply chain, the site, and the schedule simultaneously. The difference is between reading a report and looking through a windshield. Dashboards are passive views. The Digital Twin is an active model that agents can reason against and act on.",
    active: false,
  },
  {
    id: 4,
    question: "What data sources feed IntelliByld's Digital Twin?",
    answer:
      "The twin ingests data continuously from BIM models (Revit, Navisworks, IFC), ERPs (SAP, Oracle), construction management platforms (Procore), supplier emails and WhatsApp messages parsed by the Construction-Trained SLM, live shipping feeds and vessel tracking, port clearance data, last-mile GPS, IoT sensors on site, and the master project schedule. All of these update in real time, so the twin reflects current operational reality rather than a periodic snapshot.",
    active: false,
  },
  {
    id: 5,
    question: "Does the Digital Twin replace our existing BIM, ERP, or scheduling tools?",
    answer:
      "No. The Digital Twin sits above the systems already in use and coordinates between them. BIM remains the source of truth for design. The ERP remains the system of record for procurement and finance. The scheduler remains the master plan. The Digital Twin connects them, fills the gaps between them, and gives the agents a single coherent operational model to reason against.",
    active: false,
  },
  {
    id: 6,
    question: "How accurate is the Digital Twin compared to actual site conditions?",
    answer:
      "Accuracy depends on the quality of connected data sources, but the twin is designed to be self-correcting. When a sensor reading, a supplier confirmation, and a GPS feed disagree, the system flags the discrepancy and prioritises the most reliable signal based on historical accuracy. Anomalies that would normally take days to surface in a manual reconciliation appear within minutes, and the twin's confidence level on every data point is exposed so the project team knows what to trust.",
    active: false,
  },
  {
    id: 7,
    question: "Does using a Digital Twin require restructuring our project workflows?",
    answer:
      "No. The Digital Twin is designed to onboard alongside an in-flight project rather than requiring a new way of working. It reads from systems your team already uses and produces outputs — situation reports, re-sequenced schedules, RFQ shortlists — that fit existing workflows. Teams typically see value within the first delivery cycle without retraining or re-tooling.",
    active: false,
  },
];

