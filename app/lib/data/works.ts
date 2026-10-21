export type Project = {
  id: string;
  name: string;
  tagline: string;
  image: string;
  url?: string;
  stack: string[];
  category: string;
  description: string;
  featured?: boolean;
  figma?: string;
  github?: string;
};

export const works: Project[] = [
  {
    id: "eiendom.no",
    name: "Eiendom.no",
    tagline: "Data-driven property valuations for Norway",
    image: "/img/eiendom.png",
    url: "https://eiendom.no/",
    stack: ["Next.js", "React 19", "TypeScript", "Tailwind CSS", "React Query", "Mapbox", "Figma MCP"],
    category: "Web app",
    featured: true,
    description:
      "Eiendom.no is designed to become Norway's leading data-driven tool for evaluating property purchases, powered by an in-house value-estimation model and direct integrations with real estate brokers. I built the app from scratch and kept developing it with the team.",
  },
  {
    id: "plot",
    name: "Plot.ai",
    tagline: "Proptech platform and market analysis",
    image: "/img/plot.png",
    url: "https://plot.ai/",
    stack: ["Next.js", "React 19", "TypeScript", "shadcn/ui", "Tailwind CSS", "Sanity", "Storybook"],
    category: "Website + integrations",
    featured: true,
    description:
      "Plot.ai is a Norwegian proptech platform and market analysis tool that helps real estate developers, investors and consumers make data-driven property decisions. This website and its integrations are the entry point to the paid platform for brokers.",
  },
  {
    id: "Sendaplays",
    name: "SendaPlays",
    tagline: "The Spanish reference for guides, tips and tricks for the video game Raid: Shadow Legends",
    image: "/img/sendaplays.png",
    url: "https://sendaplays.com/",
    stack: ["Next.js", "React 19", "TypeScript", "Supabase", "shadcn/ui"],
    category: "Personal product · 5k+ monthly visits",
    featured: true,
    description:
      "A personal project I built and maintain: guides for Raid: Shadow Legends that have become the reference for Spanish-speaking players. Built with Next.js and backed by Supabase.",
  },
  {
    id: "weather",
    name: "Weather App",
    tagline: "Forecasts with recent searches",
    image: "/img/weather.jpg",
    url: "https://weather-app-rodjxcs-projects.vercel.app/",
    stack: ["React", "TypeScript", "React Query"],
    category: "Web app",
    description:
      "A weather app that fetches data from the OpenWeather API and shows the forecast for your current location, with a list of recent searches.",
    github: "https://github.com/Rodjxc/weather-app-marketer",
  },
  {
    id: "HystarF",
    name: "Hystar",
    tagline: "A redesign for a green hydrogen company",
    image: "/img/HystarF.jpg",
    url: "https://hystar.webflow.io/",
    stack: ["Webflow", "Figma"],
    category: "Web design",
    description:
      "An alternative take on the website of Hystar, a Norwegian company that builds electrolysers to produce green hydrogen. Includes a CMS-driven news section.",
    figma:
      "https://www.figma.com/file/cGNBmCqdqdLmtNw74KuZ25/Wireframe-Kit-(Copy)?type=design&node-id=6286%3A504&mode=design&t=Ncx7Xhg7GePyOwoG-1",
  },
  {
    id: "CommuF",
    name: "CommuniLink",
    tagline: "Landing page for a chat and video app",
    image: "/img/CommuF.jpg",
    url: "https://communilinkrodjdev.webflow.io/",
    stack: ["Webflow", "Figma"],
    category: "Web design",
    description:
      "A fully responsive landing page for a concept chat and video-call app, designed in Figma and built in Webflow.",
    figma:
      "https://www.figma.com/file/gpUYxGbCorvTaXlqGYHxmE/Practice%3A-Chat-App-Homepage-Design-(Copy)?type=design&node-id=107%3A17&mode=design&t=zf1RNJpPckd9Z4oB-1",
  },
];

export function getProjectById(id: string) {
  return works.find((work) => work.id === id);
}
