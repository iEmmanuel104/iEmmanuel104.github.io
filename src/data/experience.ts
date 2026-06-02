// Work history — reverse-chronological. Drives the Experience timeline.
// To add a role, prepend an object. `current: true` shows the "Now" badge.

export interface ExperienceLink {
  label: string;
  href: string;
}

export interface Experience {
  company: string;
  role: string;
  start: string;
  end: string;
  current?: boolean;
  location: string;
  /** one-line framing of the engagement */
  summary: string;
  highlights: string[];
  stack: string[];
  links: ExperienceLink[];
}

export const experience: Experience[] = [
  {
    company: "Synquanta",
    role: "Founding Backend Engineer",
    start: "Dec 2025",
    end: "Present",
    current: true,
    location: "Remote / Lagos, Nigeria",
    summary:
      "Founding engineer on an AI-driven SMB lead-research-to-sales pipeline.",
    highlights: [
      "Architected an AI lead-research-to-sales pipeline (Fastify + Prisma + BullMQ) processing 500+ businesses nightly: Google Maps/Yelp ingestion → Claude-powered lead scoring → Retell AI voice agent with DNC compliance.",
      "Built a reusable Claude system-prompt framework that dynamically injects business context (website health, SEO, reviews, phone behaviour) and syncs HubSpot CRM deals to outbound-call outcomes and Stripe usage metering.",
      "Designed a React + TanStack Query dashboard with real-time auto-polling for call logs, research reports and a human-review queue — delivered MVP in a 4-week sprint.",
    ],
    stack: ["Fastify", "Prisma", "BullMQ", "Anthropic Claude", "Retell AI", "HubSpot", "Stripe", "React", "TanStack Query"],
    links: [{ label: "synquanta.com", href: "https://synquanta.com" }],
  },
  {
    company: "Royalti.io",
    role: "Senior Backend Engineer",
    start: "Feb 2022",
    end: "Apr 2026",
    location: "Maryland, Lagos State",
    summary:
      "Architected a multi-tenant music royalty platform at scale (406K LOC).",
    highlights: [
      "Architected a multi-tenant music royalty platform (Royalti Server v2.6 — 406K LOC, TypeScript/Express/Sequelize/PostgreSQL) processing 50K+ daily events on GCP App Engine with BullMQ queues, Redis caching and Stripe usage-based billing.",
      "Built a DDEX engine (ERN/MEAD/PIE) + BigQuery analytics pipeline integrating 200+ DSP providers (Spotify, Apple Music, Tidal, YouTube) via SFTP/API adapters; intelligent CSV/Excel pattern recognition cut manual data curation by ~80%.",
      "Engineered a Royalti MCP server exposing 123+ typed tools across 14 royalty domains with Zod validation, circuit breakers and tenant-scoped caching — powering Claude-driven analytics for enterprise clients.",
      "Designed Godmin (Next.js 15 + Vercel AI SDK) super-admin dashboard and nso.to (Hono + Drizzle + Payload CMS, 67+ collections) for music marketing smart links.",
    ],
    stack: ["TypeScript", "Express", "Sequelize", "PostgreSQL", "BigQuery", "GCP App Engine", "BullMQ", "Redis", "Stripe", "Next.js 15", "Vercel AI SDK", "Hono", "Drizzle"],
    links: [
      { label: "royalti.io", href: "https://royalti.io" },
      { label: "nso.to", href: "https://nso.to" },
    ],
  },
  {
    company: "Blkat.io",
    role: "Software Engineering Lead",
    start: "Dec 2023",
    end: "May 2026",
    location: "United States (Remote)",
    summary:
      "Led a LinkedIn-style social + events platform across 5 client surfaces.",
    highlights: [
      "Led full-stack architecture of a professional social + events platform across 5 surfaces (React/Vite web, Express API, Socket.io chat microservice, Expo mobile app, Vite admin) — 650+ TypeScript files, 75 Prisma models, 22 API modules.",
      "Shipped a cross-platform iOS + Android app with Expo Router 6, native auth (Apple/Google Sign-In), OneSignal push, Apple + Google Play IAP, OTA updates via EAS, and code-sharing with the web monorepo (Zustand, Zod, shared API client).",
      "Engineered multi-platform payments (Stripe Checkout + Connect vendor payouts, Apple/Google IAP) with reconciliation audits and webhooks across 4+ ticketing partners (Eventbrite, Humanitix, EventNoir).",
      "Built a decoupled Socket.io chat microservice (Redis pub/sub) for horizontally-scalable messaging, a hybrid media pipeline (Cloudinary CDN + Cloudflare R2 presigned URLs), and a Card Generator (Next.js 15 + Canvas) rendering attendee passes across 4+ concurrent events.",
    ],
    stack: ["React", "Vite", "Express", "Socket.io", "Expo", "Next.js 15", "Prisma", "Redis", "MongoDB", "Stripe", "Cloudflare R2", "Cloudinary"],
    links: [
      { label: "blkat.org", href: "https://blkat.org" },
      { label: "App Store", href: "https://apps.apple.com/ng/app/blackat/id6762496377" },
      { label: "Play Store", href: "https://play.google.com/store/apps/details?id=org.blkat.app" },
    ],
  },
  {
    company: "HH-Holdings · ID-Certify",
    role: "Backend / Blockchain Engineer",
    start: "Feb 2025",
    end: "Aug 2025",
    location: "Ikoyi, Lagos State",
    summary:
      "Built a blockchain-backed identity-verification platform with ZK proofs.",
    highlights: [
      "Architected a NestJS identity-verification platform with multi-tier KYC/AML (BVN, NIN, CAC, liveness), a 20-factor trust-scoring engine and a verification marketplace across 152 RESTful endpoints.",
      "Developed a Solidity smart contract + Zero-Knowledge Proof microservice (Circom + SnarkJS) for privacy-preserving attestation, with DID identity, IPFS-anchored encrypted documents (Pinata) and on-chain logging via Ethers.js v6.",
      "Engineered a Domestic Staff marketplace backend (NestJS + Prisma, 307 endpoints, 54 models) and a Next.js 15 frontend with a hire-process state machine, Stripe payments, Firebase auth and a Cloudinary media pipeline.",
      "Delivered 2FA (Speakeasy), Redis caching, Helmet security, i18n, role-based access and Bull job queues across 4 interconnected services.",
    ],
    stack: ["NestJS", "Solidity", "Circom", "SnarkJS", "Ethers.js v6", "Pinata (IPFS)", "Prisma", "PostgreSQL", "MongoDB", "Firebase", "Stripe", "Next.js 15"],
    links: [{ label: "idcertify.ai", href: "https://idcertify.ai/" }],
  },
  {
    company: "Shortlet Lagos",
    role: "Software Engineering Lead (Contract)",
    start: "Sep 2024",
    end: "Nov 2024",
    location: "Victoria Island, Lagos State",
    summary:
      "Architected a blockchain real-estate investment platform in an 8-week sprint.",
    highlights: [
      "Architected a blockchain-based real-estate investment platform with smart-contract-backed portfolio tracking for transparent, automated investor accounting.",
      "Built asset-management features letting owners tokenize listings and investors manage fractional ownership via Web3 wallets; integrated on-chain settlement with off-chain KYC/AML compliance within an 8-week sprint.",
    ],
    stack: ["Solidity", "Web3 Wallets", "Smart Contracts", "Node.js", "KYC/AML"],
    links: [{ label: "shortlet-lagos.com", href: "https://www.shortlet-lagos.com" }],
  },
  {
    company: "Busy2Shop",
    role: "Backend Engineer (Contract)",
    start: "Aug 2024",
    end: "Mar 2025",
    location: "Lagos, Nigeria",
    summary:
      "Engineered a real-time shopper marketplace with delivery logistics.",
    highlights: [
      "Engineered a Nigerian shopper marketplace backend (Express + Sequelize, 20+ models, 29 routes) with Paystack/Stripe payments, BullMQ queues, OneSignal push and WebRTC shopper-agent calling.",
      "Built real-time delivery logistics: agent location tracking (Google Maps geospatial), ShipBubble integration, agent KYC ranking, and a Socket.io order trail across 25+ business services.",
      "Co-architected a Next.js storefront and a Next.js 15 admin dashboard with 15+ analytics views for a 3-tier shopper-agent-merchant ecosystem.",
    ],
    stack: ["Express", "Sequelize", "PostgreSQL", "Socket.io", "WebRTC", "Google Maps", "ShipBubble", "Paystack", "Stripe", "Next.js 15"],
    links: [{ label: "busy2shop.com", href: "https://busy2shop.com" }],
  },
  {
    company: "Sportboo · ChatNow",
    role: "Backend Engineer (Contract)",
    start: "Nov 2024",
    end: "Apr 2025",
    location: "Lagos, Nigeria",
    summary:
      "Designed a real-time multi-sport live-chat gateway with <100ms latency.",
    highlights: [
      "Designed a NestJS + Socket.io WebSocket gateway for real-time multi-sport live chat across match-indexed threads with sub-100ms message latency.",
      "Built TypeORM + PostgreSQL persistence with Redis pub/sub for distributed messaging, Firebase Admin SDK OAuth federation, and connection-monitoring + auto-reconnect with exponential backoff for unstable mobile networks.",
    ],
    stack: ["NestJS", "Socket.io", "TypeORM", "PostgreSQL", "Redis", "Firebase Admin SDK"],
    links: [{ label: "sportboo.app", href: "https://www.sportboo.app/" }],
  },
  {
    company: "Proudly Named Africa",
    role: "Backend Engineer (Contract)",
    start: "Apr 2024",
    end: "Jul 2024",
    location: "Lagos, Nigeria",
    summary:
      "Built a cultural-naming platform with moderation, search & 3D content.",
    highlights: [
      "Built a NestJS modular monolith (78K LOC, 10 modules, 12+ Prisma entities) for an African cultural-naming platform with admin moderation, content-approval pipelines and full-text search.",
      "Integrated Google Analytics, OneSignal push, reCAPTCHA v3, Bull async jobs and Supabase auth; shipped video/3D content with Remotion, Three.js and D3-geo cartography.",
    ],
    stack: ["NestJS", "Prisma", "PostgreSQL", "Supabase", "Remotion", "Three.js", "D3-geo", "OneSignal"],
    links: [{ label: "proudlynamed.africa", href: "https://www.proudlynamed.africa/" }],
  },
  {
    company: "Mariblock",
    role: "Frontend Engineer",
    start: "Feb 2023",
    end: "Mar 2023",
    location: "Victoria Island, Lagos State",
    summary: "Built a blockchain-news publication on Ghost with custom theming.",
    highlights: [
      "Built a Ghost-templated blockchain-news blog with custom themes, responsive design and SEO-optimized loading.",
      "Maintained an editorial publishing pipeline with polished components and A/B-testable analytics integration.",
    ],
    stack: ["Ghost CMS", "Custom Theming", "SEO", "Analytics"],
    links: [{ label: "mariblock.com", href: "https://www.mariblock.com/" }],
  },
  {
    company: "Byinks Marketing Consulting",
    role: "Software Engineer (Contract)",
    start: "Aug 2022",
    end: "Jan 2023",
    location: "Ikeja, Lagos State",
    summary:
      "Led a 3-person team delivering a digital-marketing web platform.",
    highlights: [
      "Developed a responsive digital-marketing webpage with mobile-first design; led a 3-person agile team as project coordinator from design through deployment.",
      "Increased site reach by 20% via domain configuration, hosting optimization and client communication.",
    ],
    stack: ["JavaScript", "Mobile-first Design", "Hosting", "Agile"],
    links: [{ label: "byinksfoundation.org", href: "https://byinksfoundation.org/" }],
  },
];
