// FAQs surfaced on use-case pages (supplier delay neutralization, etc.)
export const agenticaiFaqs = [
  {
    id: 1,
    question: "What is Agentic AI in construction?",
    answer:
      "Agentic AI in construction is software that doesn't wait for human input — it monitors supply chain signals, makes decisions within defined boundaries, and executes routine actions on its own. Unlike a dashboard or a chatbot, an agent can read a delayed shipment notification, check the project's Digital Twin, re-sequence affected tasks, and notify the right stakeholders without anyone opening an app. IntelliByld runs four specialised agents — Procurement Dispatch, Predictive Scheduling, Shipment Orchestration, and Exception Handling — coordinated through a single Digital Twin.",
    active: true,
  },
  {
    id: 2,
    question: "How is Agentic AI different from traditional construction software?",
    answer:
      "Traditional construction software is reactive: it stores data and waits for someone to act on it. Agentic AI is proactive — it watches live signals (shipping feeds, supplier emails, WhatsApp messages, IoT sensors), reasons about impact against the Digital Twin, and takes pre-approved actions autonomously. The difference is the same as between a logbook and a co-pilot. Project teams stop spending hours chasing updates and only get involved when a decision needs human judgement.",
    active: false,
  },
  {
    id: 3,
    question: "What does IntelliByld's Agentic AI actually automate?",
    answer:
      "Six core workflows: autonomous RFQ generation from BIM takeoffs, intelligent bid evaluation against project specs and historical pricing, end-to-end shipment orchestration with automatic rerouting, predictive scheduling that aligns material delivery with crew availability, exception handling when things go wrong, and continuous learning that improves performance with each project. Together these replace the manual coordination that typically consumes 30 to 40 percent of a project manager's day.",
    active: false,
  },
  {
    id: 4,
    question: "What systems does IntelliByld integrate with?",
    answer:
      "IntelliByld is designed to sit above the systems you already use, not replace them. It integrates with BIM platforms (Revit, Navisworks, IFC), ERPs (SAP, Oracle), construction management platforms (Procore), logistics and shipping providers, and IoT sensor feeds. All connected systems feed into a single Digital Twin that the agents reason against.",
    active: false,
  },
  {
    id: 5,
    question: "Is human oversight built into Agentic AI decisions?",
    answer:
      "Yes. Every agent operates within boundaries your team defines. Routine actions — generating RFQs, re-sequencing crews to unaffected tasks, sending notifications — happen autonomously. Higher-stakes actions — awarding contracts, accepting substitutes, escalating commercial decisions — are surfaced to the right person with a full briefing pack. The system is designed to remove busy work, not human accountability.",
    active: false,
  },
  {
    id: 6,
    question: "What is a Construction-Trained SLM and why does it matter?",
    answer:
      "An SLM (Small Language Model) is a focused AI model trained on construction-specific language, documents, and workflows — supplier emails, RFQs, BoQs, dispatch notes, BIM annotations, programme schedules. It matters because general-purpose LLMs misread construction terminology, miss the difference between a delivery confirmation and a dispatch confirmation, and don't understand how a Tier-1 contractor's procurement language differs from a fabricator's. A Construction-Trained SLM extracts signal accurately from messy field communication, which is what makes autonomous action safe.",
    active: false,
  },
  {
    id: 7,
    question: "How long does it take to deploy Agentic AI on a live project?",
    answer:
      "Deployment timelines depend on the systems being connected and the scope of automation enabled, but most pilots run on a single active project and target value within the first delivery cycle. The platform is designed to onboard alongside an in-flight programme rather than requiring a greenfield project. The Pilot programme on the IntelliByld site is the fastest way to scope a deployment.",
    active: false,
  },
];

