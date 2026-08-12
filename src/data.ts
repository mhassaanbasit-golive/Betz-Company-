import { Project, BrokerageParcel, ServicePillar } from "./types";

export const PROJECTS: Project[] = [
  {
    id: "leander-crossing",
    title: "Leander Crossing",
    acres: 162,
    location: "Leander, TX",
    status: "Active",
    type: "Mixed-Use Development",
    isd: "Leander ISD",
    description: "Mixed-Use Development along 183A Tollway under design in Central Texas.",
    imageUrl: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "seguin-crossing",
    title: "Seguin Crossing",
    acres: 155,
    location: "Seguin, TX",
    status: "Active",
    type: "Mixed-Use Development",
    isd: "Seguin ISD",
    description: "Mixed-Use Development along Interstate 10 and SH 123.",
    imageUrl: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "murphy-crossing",
    title: "Murphy Crossing",
    acres: 14,
    location: "Murphy, TX",
    status: "Active",
    type: "Single-Family Development",
    isd: "Plano ISD",
    description: "Single-Family Development along FM 544.",
    imageUrl: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "the-trails",
    title: "The Trails",
    acres: 42,
    location: "Lucas, TX",
    status: "Active",
    type: "Single-Family Development",
    isd: "Lovejoy ISD",
    description: "Single-Family Development in the highly-coveted Lovejoy ISD.",
    imageUrl: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&w=1200&q=80"
  }
];

export const BROKERAGE_PARCELS: BrokerageParcel[] = [
  { title: "Campbell Property", location: "Fairview, TX" },
  { title: "Turner Property", location: "McKinney, TX" },
  { title: "Laservash", location: "Leander, TX", status: "Under Contract" },
  { title: "NWC Bagdad and Vista Ridge", location: "Leander, TX" },
  { title: "NFQ of Lakeline and New Hope", location: "Cedar Park, TX" },
  { title: "480 Ashwood", location: "Fairview, TX" },
  { title: "122 Collin Ct", location: "Prosper, TX" }
];

export const SERVICE_PILLARS: ServicePillar[] = [
  {
    title: "Entitlement & Zoning",
    description: "Navigating complex municipal regulations to secure the necessary approvals and zoning changes for residential, commercial, and mixed-use projects.",
    bulletPoints: [
      "Municipal Coordination",
      "Rezoning Approvals",
      "Zoning Strategy & Representation",
      "Land Use Planning"
    ]
  },
  {
    title: "Utility & Infrastructure Integration",
    description: "Positioning property for development by securing crucial utility access and planning for infrastructure requirements.",
    bulletPoints: [
      "Water & Wastewater Coordination",
      "Infrastructure Feasibility",
      "Regulatory Compliance",
      "Utility Capacity Planning"
    ]
  },
  {
    title: "Development Brokerage & Advisory",
    description: "Acting as the seller's broker for strategic land parcels, guiding landowners through the transaction process and maximizing asset value.",
    bulletPoints: [
      "Asset Value Optimization",
      "Strategic Market Positioning",
      "Landowner representation",
      "Transaction Navigation"
    ]
  }
];

export const PREVIOUS_STATS = {
  acresZoned: "1,300+",
  lotsSingleFamily: "3,000+",
  lotsDeveloped: "1,000+"
};

export const CITIES_ENTITLED = [
  "Wylie",
  "Fairview",
  "McKinney",
  "Lucas",
  "Anna",
  "Prosper",
  "Sachse",
  "Allen"
];

export const HISTORICAL_BIO = `Ryan's real estate career began in 2001 as a Development Associate with Skorburg Company in Dallas, Texas. He became a partner in 2005. Projects that Ryan worked on resulted in zoning for more than 1,300 acres, 3,000 single-family lots and development of more than 1,000 lots prior to forming Betz Company in 2007. During 2007, Ryan zoned 84 acres in Georgetown, 162 acres in Leander and 43 acres in Lucas. Prior to entering Real Estate, Ryan worked for commercial printer Consolidated Graphics at the Jarvis Press in Dallas. He is a graduate of Texas A&M University.`;

export const COMPANY_MISSION_BULLETS = [
  "Comprehensive land development and strategic capital integration.",
  "Unlocking maximum utility access and municipal entitlement potential.",
  "Diligent market research across North and Central Texas growth corridors.",
  "Expert seller's brokerage and landowner representation with maximum asset yields."
];

export const CONTACT_INFO = {
  address: "5707 Willow Lane, Dallas, TX 75230",
  phone: "469-682-2212",
  fax: "972-503-2212",
  email: "ryan@betzcompany.com"
};
