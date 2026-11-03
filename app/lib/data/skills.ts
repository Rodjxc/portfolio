export type Capability = {
  id: string;
  title: string;
  description: string;
  tools?: string[];
  toolsIntro?: string;
  wide?: boolean;
};

export const capabilities: Capability[] = [
  {
    id: "product",
    title: "Product engineering",
    description:
      "From a rough idea to a shipped feature: planning, demos, and the unglamorous maintenance that keeps products healthy.",
  },
  {
    id: "data",
    title: "Data-heavy interfaces",
    description:
      "Tables, maps, dashboards and complex forms that stay fast and readable when the data gets big.",
    tools: ["React Query", "GraphQL", "Mapbox", "React Hook Form"],
    toolsIntro: "I've worked with",
  },
  {
    id: "systems",
    title: "Design systems",
    description:
      "Shared component libraries that keep several products consistent, built hand in hand with designers and wired to Figma through MCP.",
    tools: ["Tailwind CSS", "shadcn/ui", "Figma MCP"],
  },
  {
    id: "quality",
    title: "Quality & delivery",
    description:
      "Unit and end-to-end tests, CI/CD pipelines with AI bots in the loop for testing and code review, plus careful human reviews, so shipping on a Friday isn't scary.",
    tools: ["Jest", "Playwright", "CI/CD", "AI review bots", "Vercel"],
  },
  {
    id: "ai",
    title: "AI-led development",
    description:
      "I direct AI-assisted development across React and Next.js, orchestrating Claude Code agents and Figma MCP to take features from design to production faster. The tooling shifts daily and my workflow shifts with it, while architecture, product decisions and the quality bar stay firmly in my hands.",
    tools: ["Claude Code", "Figma MCP", "Multi-agent workflows", "Context & prompt design"],
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
