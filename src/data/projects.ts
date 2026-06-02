// Projects — open-source work + shipped client products.
// Screenshots are imported so Astro can optimize them (WebP/AVIF, srcset).
// OSS tools without a screenshot render a code-motif card instead (image: null).

import type { ImageMetadata } from "astro";
import blkat from "../assets/projects/blkat.png";
import byinks from "../assets/projects/byinksmarketing.png";
import podx from "../assets/projects/podx.png";
import royalti from "../assets/projects/royalti.png";
import shortlet from "../assets/projects/shortlet.png";
import sportboo from "../assets/projects/sportboo.png";

export interface ProjectLink {
  label: string;
  href: string;
  kind: "repo" | "demo" | "npm";
}

export interface Project {
  slug: string;
  name: string;
  type: "oss" | "product";
  tag: string;
  period: string;
  summary: string;
  description: string;
  stack: string[];
  image: ImageMetadata | null;
  links: ProjectLink[];
  featured: boolean;
}

export const projects: Project[] = [
  // ── Open source ──────────────────────────────────────────────────────────
  {
    slug: "deployx",
    name: "DeployX",
    type: "oss",
    tag: "Self-hosted PaaS",
    period: "2026 — Present",
    summary: "A Railway-like self-hosted platform-as-a-service, built secure by design.",
    description:
      "A self-hosted PaaS with automated TLS, container hardening and per-project AES-256-GCM secret encryption. A secure build pipeline (Nixpacks, parameterized exec, Zod gates, JWT auth, IP rate-limiting) prevents 7 of 11 known Coolify CVE classes. Unified CLI + web dashboard + Fastify API across 11 packages and 42 routes.",
    stack: ["Turborepo", "Fastify", "SvelteKit 5", "Drizzle", "SQLite WAL", "Docker", "Traefik v3", "Commander.js"],
    image: null,
    links: [{ label: "GitHub", href: "https://github.com/iEmmanuel104/deployx", kind: "repo" }],
    featured: true,
  },
  {
    slug: "ragcontext",
    name: "RAGContext",
    type: "oss",
    tag: "Multi-tenant RAG · \"Stripe for RAG\"",
    period: "2026",
    summary: "Multi-tenant RAG infrastructure that lets businesses build AI search on their data.",
    description:
      "A multi-tenant RAG platform with pgvector + Qdrant dual vector backends and Drizzle ORM + Postgres RLS enforcing tenant isolation across 28+ TypeScript packages. Semantic chunking, pluggable connectors, circuit breakers (opossum), BullMQ ingestion workers, reranking, and an MCP server app for Claude integration.",
    stack: ["Drizzle", "PostgreSQL", "pgvector", "Qdrant", "BullMQ", "MCP", "Opossum"],
    image: null,
    links: [{ label: "GitHub", href: "https://github.com/iEmmanuel104/ragcontext", kind: "repo" }],
    featured: true,
  },
  {
    slug: "podx",
    name: "PodX",
    type: "oss",
    tag: "On-chain video meetings",
    period: "2025",
    summary: "Web3 video conferencing with token-gated calls and on-chain monetization.",
    description:
      "A Web3 video-conferencing platform (Next.js + Express, dual Postgres/MongoDB) integrating Privy smart wallets, Coinbase OnchainKit, the Stream.io video SDK and Alchemy Account Abstraction for gasless, token-gated calls. Monetization layer with on-chain tipping (Viem/Ethers), POAP ERC-1155 minting for attendees, user-streak gamification and paymaster-subsidized transactions.",
    stack: ["Next.js", "Express", "Privy", "Coinbase OnchainKit", "Stream.io", "Alchemy AA", "Viem", "Solidity"],
    image: podx,
    links: [
      { label: "Live demo", href: "https://www.podx.fun", kind: "demo" },
      { label: "GitHub", href: "https://github.com/iEmmanuel104/PODX", kind: "repo" },
    ],
    featured: true,
  },
  {
    slug: "expo-shipkit",
    name: "expo-shipkit",
    type: "oss",
    tag: "Expo deployment CLI · npm",
    period: "2026",
    summary: "Open-source CLI automating Expo/EAS builds and App Store / Play Store submission.",
    description:
      "A published TypeScript CLI (npm v2.1.0, MIT) that automates the Expo/EAS build process and App Store / Play Store submission, with version tracking, SDK change detection and interactive credential management.",
    stack: ["TypeScript", "Expo", "EAS Build", "Commander.js", "npm"],
    image: null,
    links: [
      { label: "npm", href: "https://www.npmjs.com/package/expo-shipkit", kind: "npm" },
      { label: "GitHub", href: "https://github.com/iEmmanuel104/expo-shipkit", kind: "repo" },
    ],
    featured: true,
  },
  {
    slug: "autovidit",
    name: "AutoVidit",
    type: "oss",
    tag: "AI video generation",
    period: "2026",
    summary: "Serverless pipeline that generates TikTok-ready videos with AI.",
    description:
      "A serverless video pipeline (Node API + Python worker, BullMQ) chaining LLM script generation (Gemini 1.5 → Groq fallback), image generation (Leonardo/Ideogram) and edge-tts voice synthesis, with Supabase auth and a quota-aware job dispatcher.",
    stack: ["Node.js", "Python", "BullMQ", "Gemini 1.5", "Groq", "edge-tts", "Supabase"],
    image: null,
    links: [{ label: "GitHub", href: "https://github.com/iEmmanuel104/autovidit", kind: "repo" }],
    featured: false,
  },

  // ── Shipped products (client work) ─────────────────────────────────────────
  {
    slug: "royalti",
    name: "Royalti.io",
    type: "product",
    tag: "Music royalty platform",
    period: "Shipped",
    summary: "Multi-tenant music royalty engine — DDEX distribution + BigQuery analytics.",
    description:
      "A multi-tenant music royalty platform processing 50K+ daily events: DDEX distribution across 200+ DSP providers, a BigQuery analytics pipeline and a Claude-powered MCP analytics layer.",
    stack: ["TypeScript", "Express", "PostgreSQL", "BigQuery", "GCP", "Stripe"],
    image: royalti,
    links: [{ label: "Visit site", href: "https://royalti.io", kind: "demo" }],
    featured: false,
  },
  {
    slug: "blkat",
    name: "Blkat",
    type: "product",
    tag: "Social + events platform",
    period: "Shipped · iOS · Android",
    summary: "LinkedIn-style professional social + events network across web and mobile.",
    description:
      "A professional social + events platform spanning web, iOS, Android and admin — real-time chat, multi-platform payments and ticketing integrations, live on the App Store and Play Store.",
    stack: ["React", "Expo", "Express", "Socket.io", "Prisma", "Stripe"],
    image: blkat,
    links: [{ label: "Visit site", href: "https://blkat.org", kind: "demo" }],
    featured: false,
  },
  {
    slug: "shortlet-lagos",
    name: "Shortlet Lagos",
    type: "product",
    tag: "Web3 real estate",
    period: "Shipped",
    summary: "Blockchain real-estate investment platform with fractional ownership.",
    description:
      "A blockchain-based real-estate investment platform with smart-contract portfolio tracking, listing tokenization and on-chain settlement paired with off-chain compliance.",
    stack: ["Solidity", "Web3", "Node.js", "Smart Contracts"],
    image: shortlet,
    links: [{ label: "Visit site", href: "https://www.shortlet-lagos.com", kind: "demo" }],
    featured: false,
  },
  {
    slug: "sportboo",
    name: "Sportboo",
    type: "product",
    tag: "Real-time sports chat",
    period: "Shipped",
    summary: "Multi-sport live-chat platform with sub-100ms message latency.",
    description:
      "A real-time multi-sport live-chat platform built on a NestJS + Socket.io gateway with match-indexed threads, Redis pub/sub and resilient reconnection for mobile networks.",
    stack: ["NestJS", "Socket.io", "TypeORM", "PostgreSQL", "Redis"],
    image: sportboo,
    links: [{ label: "Visit site", href: "https://www.sportboo.app/", kind: "demo" }],
    featured: false,
  },
  {
    slug: "byinks",
    name: "Byinks Marketing",
    type: "product",
    tag: "Digital marketing site",
    period: "Shipped",
    summary: "Responsive marketing platform delivered as project coordinator.",
    description:
      "A responsive, mobile-first digital-marketing web platform delivered end-to-end leading a 3-person agile team, increasing site reach by 20%.",
    stack: ["JavaScript", "Mobile-first", "Hosting"],
    image: byinks,
    links: [{ label: "Visit site", href: "https://byinksfoundation.org/", kind: "demo" }],
    featured: false,
  },
];
