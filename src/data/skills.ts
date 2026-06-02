// Grouped technical skills — drives the Skills section.
// Each group renders as a cluster of mono-styled tags.

export interface SkillGroup {
  category: string;
  /** short label shown as the group's mono index e.g. 01 */
  hint: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: "Languages",
    hint: "core",
    skills: ["TypeScript", "JavaScript", "Python", "Solidity", "SQL", "Go"],
  },
  {
    category: "Backend & APIs",
    hint: "services",
    skills: [
      "Node.js",
      "NestJS",
      "Express",
      "Fastify",
      "Hono",
      "GraphQL",
      "REST",
      "WebSockets",
      "BullMQ",
    ],
  },
  {
    category: "Frontend & Mobile",
    hint: "clients",
    skills: [
      "Next.js",
      "React",
      "SvelteKit",
      "Vite",
      "Tailwind",
      "shadcn/ui",
      "React Native",
      "Expo",
      "EAS Build",
    ],
  },
  {
    category: "Data & Infrastructure",
    hint: "storage",
    skills: [
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "BigQuery",
      "pgvector",
      "Qdrant",
      "Prisma",
      "Drizzle",
      "Sequelize",
      "TypeORM",
    ],
  },
  {
    category: "Cloud & DevOps",
    hint: "ops",
    skills: [
      "AWS (EC2, S3, Lambda)",
      "GCP (App Engine, BigQuery)",
      "Docker",
      "Traefik",
      "GitHub Actions",
      "CI/CD",
    ],
  },
  {
    category: "Web3 & Blockchain",
    hint: "on-chain",
    skills: [
      "Solidity",
      "Ethers.js v6",
      "Viem",
      "Wagmi",
      "Privy",
      "Coinbase OnchainKit",
      "ZK-SNARKs (Circom, SnarkJS)",
      "Account Abstraction",
      "IPFS / Pinata",
    ],
  },
  {
    category: "AI / LLM",
    hint: "agents",
    skills: [
      "Anthropic Claude",
      "OpenAI",
      "Google Gemini",
      "Vercel AI SDK",
      "LangChain",
      "MCP (Model Context Protocol)",
      "RAG",
      "Retell AI",
    ],
  },
  {
    category: "Messaging & Realtime",
    hint: "streams",
    skills: ["Socket.io", "WebRTC", "Kafka", "RabbitMQ", "Stream.io", "Redis pub/sub"],
  },
  {
    category: "Payments & Observability",
    hint: "money",
    skills: [
      "Stripe (Checkout, Connect)",
      "Paystack",
      "Apple / Google IAP",
      "Sentry",
      "Mixpanel",
      "OpenTelemetry",
    ],
  },
];
