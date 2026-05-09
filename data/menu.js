export const menuItems = [
  {
    id: 1,
    text: "Home",
    url: "/",
    isActive: true,
  },
  {
    id: 4,
    text: "Agentic AI",
    url: "/agentic-ai",
  },
  {
    id: 5,
    text: "Digital Twins",
    url: "/digital-twins",
  },
  {
    id: 6,
    text: "Sustainability",
    url: "/sustainability",
  },
  {
    id: 8,
    text: "Use Cases",
    url: "/use-cases",
    hasChildren: true,
    subMenu: [
      {
        id: 81,
        text: "Supplier Delay Neutralization",
        url: "/use-cases/supplier-delay-neutralization",
      },
      {
        id: 82,
        text: "Multi-Site Coordination",
        url: "/use-cases/multi-site-coordination",
      },
      {
        id: 83,
        text: "Embodied Carbon",
        url: "/use-cases/embodied-carbon",
      },
    ],
  },
  {
    id: 7,
    text: "Contact",
    url: "/contact-us",
  },
];
