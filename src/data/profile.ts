// ───────────────────────────────────────────────────────────────────────────
// SINGLE SOURCE OF TRUTH — top-level profile / identity.
// Edit this file to update the hero, about section, contact and meta tags.
// ───────────────────────────────────────────────────────────────────────────

export interface SocialLink {
  label: string;
  href: string;
  handle: string;
  /** lucide-style key used to pick an inline SVG in components/Icon.astro */
  icon: "github" | "linkedin" | "twitter" | "devto" | "mail";
}

export const profile = {
  name: "Emmanuel Umukoro",
  fullName: "Umukoro Emmanuel Oghenerukevwe",
  // Short role label used in the hero rotator
  roles: [
    "Senior Software Engineer",
    "Web3 Engineer",
    "AI / LLM Systems Builder",
    "Backend & Microservices Architect",
  ],
  title: "Senior Software Engineer",
  tagline: "Web3 · AI/LLM Agents · Scalable Microservices",
  location: "Lagos, Nigeria",
  availability: "Open to remote roles & relocation",
  email: "Emmanuel.umukoro22@gmail.com",
  cv: "/cv/UmukoroEmmanuel.pdf",

  // The canonical professional summary (verbatim from the CV).
  bio: "Senior Software Engineer with 5+ years architecting production-grade systems at the intersection of Web3, AI/LLM agents, and scalable microservices. I lead end-to-end delivery of complex platforms — from a multi-tenant music royalty engine processing 50K+ daily events to blockchain-backed identity verification with zero-knowledge proofs — and ship AI agent frameworks (MCP, LangChain, Vercel AI SDK) in production.",

  // A few headline narrative paragraphs for the About section.
  about: [
    "I build the systems behind the product. Over the last five years I've architected and shipped production platforms across fintech, identity verification, real-time communication, music royalties and AI agents — usually owning the backend end-to-end and frequently the full stack, mobile and admin surfaces too.",
    "My sweet spot is the intersection of three demanding domains: scalable microservices (event-driven pipelines, multi-tenant SaaS, horizontal real-time messaging), Web3 (Solidity, ZK-SNARKs, account abstraction, on-chain settlement), and AI/LLM agents (MCP servers, RAG infrastructure, LLM-powered automation). I care about API-first design, observability, and code that survives contact with real traffic.",
    "I'm currently the Founding Backend Engineer at Synquanta, building an AI-driven lead-research-to-sales pipeline, while open-sourcing developer tooling like DeployX and expo-shipkit.",
  ],

  // Headline metrics surfaced near the hero / about.
  stats: [
    { value: "5+", label: "Years shipping production systems" },
    { value: "10", label: "Engineering roles delivered" },
    { value: "400K+", label: "Lines in a single platform" },
    { value: "50K+", label: "Daily events processed" },
  ],

  // The strengths the user explicitly wants outlined clearly.
  strengths: [
    {
      title: "Scalable Microservices",
      blurb:
        "Event-driven backends, multi-tenant SaaS, BullMQ/Kafka pipelines, and horizontally-scalable real-time messaging with Socket.io + Redis pub/sub.",
      icon: "layers",
    },
    {
      title: "Web3 & Blockchain",
      blurb:
        "Solidity smart contracts, ZK-SNARK proofs (Circom + SnarkJS), account abstraction, gasless transactions, on-chain settlement and IPFS-anchored identity.",
      icon: "blocks",
    },
    {
      title: "AI / LLM Agents",
      blurb:
        "Production MCP servers (123+ typed tools), multi-tenant RAG infrastructure, Anthropic/OpenAI/Gemini integrations, and AI-driven automation with the Vercel AI SDK & LangChain.",
      icon: "sparkles",
    },
    {
      title: "Full-Stack & Mobile",
      blurb:
        "Next.js/React/SvelteKit web, React Native + Expo cross-platform apps with native auth, IAP and OTA updates, plus admin dashboards — shipped across web, iOS and Android.",
      icon: "smartphone",
    },
  ],

  socials: [
    {
      label: "GitHub",
      href: "https://github.com/iEmmanuel104",
      handle: "iEmmanuel104",
      icon: "github",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/iEmmanuel104",
      handle: "iEmmanuel104",
      icon: "linkedin",
    },
    {
      label: "X / Twitter",
      href: "https://twitter.com/EmmanuelUmukor0",
      handle: "@EmmanuelUmukor0",
      icon: "twitter",
    },
    {
      label: "dev.to",
      href: "https://dev.to/iEmmanuel104",
      handle: "iEmmanuel104",
      icon: "devto",
    },
  ] satisfies SocialLink[],
} as const;

export type Profile = typeof profile;
