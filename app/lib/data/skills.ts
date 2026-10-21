export type Capability = {
  id: string;
  title: string;
  description: string;
  tools: string[];
  wide?: boolean;
};

export const capabilities: Capability[] = [
  {
    id: "product",
    title: "Product engineering",
    description:
      "From a rough idea to a shipped feature: planning, demos, and the unglamorous maintenance that keeps products healthy.",
    tools: ["React", "Next.js", "TypeScript"],
  },
  {
    id: "data",
    title: "Data-heavy interfaces",
    description:
      "Tables, maps, dashboards and complex forms that stay fast and readable when the data gets big.",
    tools: ["React Query", "GraphQL", "Mapbox", "React Hook Form"],
  },
  {
    id: "systems",
    title: "Design systems",
    description:
      "Shared component libraries that keep several products consistent, built hand in hand with designers.",
    tools: ["Tailwind CSS", "shadcn/ui", "Figma"],
  },
  {
    id: "quality",
    title: "Quality & delivery",
    description:
      "Unit and end-to-end tests, CI/CD and careful reviews, so shipping on a Friday isn't scary.",
    tools: ["Jest", "Playwright", "CI/CD", "Vercel"],
  },
  {
    id: "ai",
    title: "AI & multi-agent development",
    description:
      "I work with AI coding agents every day, running several in parallel for research, implementation and review, while the architecture, product decisions and quality bar stay firmly in my hands.",
    tools: ["AI coding agents", "Multi-agent workflows", "Context & prompt design"],
    wide: true,
  },
];

export const languages = [
  { name: "Spanish", proficiency: "Native" },
  { name: "Catalan", proficiency: "Native" },
  { name: "English", proficiency: "Daily use" },
  { name: "Norwegian", proficiency: "Survivable" },
  { name: "French", proficiency: "Je parle un peu" },
];
