// One-shot OG image generator (1200x630). Run: node scripts/make-og.mjs
import sharp from "sharp";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="gold" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#f2bf45"/>
      <stop offset="1" stop-color="#c8860d"/>
    </linearGradient>
    <radialGradient id="glow" cx="82%" cy="0%" r="70%">
      <stop offset="0" stop-color="#e0a82e" stop-opacity="0.20"/>
      <stop offset="1" stop-color="#e0a82e" stop-opacity="0"/>
    </radialGradient>
    <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
      <path d="M48 0H0V48" fill="none" stroke="#ffffff" stroke-opacity="0.03" stroke-width="1"/>
    </pattern>
  </defs>

  <rect width="1200" height="630" fill="#0e0f11"/>
  <rect width="1200" height="630" fill="url(#grid)"/>
  <rect width="1200" height="630" fill="url(#glow)"/>
  <rect x="0" y="0" width="1200" height="6" fill="url(#gold)"/>

  <text x="80" y="150" font-family="JetBrains Mono, monospace" font-size="22" letter-spacing="6"
        fill="#e0a82e">SENIOR SOFTWARE ENGINEER</text>

  <text x="76" y="290" font-family="Georgia, 'Times New Roman', serif" font-size="104" font-weight="700"
        fill="#f5f5f4">Emmanuel</text>
  <text x="76" y="410" font-family="Georgia, 'Times New Roman', serif" font-size="104" font-weight="700"
        fill="url(#gold)" font-style="italic">Umukoro</text>

  <text x="80" y="500" font-family="Hanken Grotesk, Arial, sans-serif" font-size="34"
        fill="#a1a1aa">Web3 · AI/LLM Agents · Scalable Microservices</text>

  <text x="80" y="572" font-family="JetBrains Mono, monospace" font-size="20"
        fill="#71717a">Lagos, Nigeria — 5+ years shipping production systems</text>

  <rect x="1010" y="70" width="120" height="120" rx="28" fill="#16181c" stroke="#2a2e36"/>
  <text x="1070" y="148" font-family="Georgia, serif" font-size="78" font-weight="700"
        fill="url(#gold)" text-anchor="middle">E</text>
</svg>`;

await sharp(Buffer.from(svg)).png().toFile(join(__dirname, "..", "public", "og.png"));
console.log("✓ public/og.png generated");
