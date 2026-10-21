export type WorkExperience = {
  id: string;
  company: string;
  role: string;
  url?: string;
  logo?: string;
  start: string;
  end: string;
  location: string;
  summary: string;
  highlights?: string[];
  stack?: string[];
};

export const workExperience: WorkExperience[] = [
  {
    id: "plot",
    company: "Plot.ai",
    role: "Frontend Engineer",
    url: "https://plot.ai/",
    start: "Mar 2025",
    end: "Present",
    location: "Oslo · Hybrid",
    summary:
      "Built Eiendom.no from the ground up: a platform designed to become Norway's leading data-driven tool for evaluating property purchases, powered by an in-house value-estimation model and direct integrations with real estate brokers.",
    highlights: [
      "Maintain and develop features across other platforms in the Vergence ecosystem's Homekey branch, including B2B property-insights products",
      "Work spans architecture, performance optimization, UI implementation and API integration",
      "Keep the user experience consistent and high quality across products",
    ],
    stack: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "React Query",
      "Mapbox",
    ],
  },
  {
    id: "marketer",
    company: "Marketer",
    role: "Frontend Developer",
    url: "https://www.marketer.tech/",
    logo: "/img/marketer.png",
    start: "Dec 2024",
    end: "Mar 2025",
    location: "Oslo · On-site",
    summary:
      "Worked on Marketer's real estate products for marketing existing and newly built homes, including SmartSale, Property Picker and the flagship M360, alongside a fully remote team of eight other developers.",
    highlights: [
      "Involved in every phase of the development lifecycle, from planning and design to daily standups and bi-weekly demos",
      "Worked across several codebases sharing custom component libraries",
    ],
    stack: [
      "React",
      "TypeScript",
      "React Query",
      "TanStack Router",
      "GraphQL",
      "Tailwind CSS",
    ],
  },
  {
    id: "estatelab",
    company: "EstateLab",
    role: "Frontend Developer",
    url: "https://www.estatelab.no/",
    logo: "/img/estatelab.png",
    start: "Mar 2024",
    end: "Sep 2024",
    location: "Oslo · Hybrid",
    summary:
      "Joined during the start-up phase and built a multi-tenant real estate management application almost from scratch.",
    highlights: [
      "Heavy REST API-based CRUD: tables, complex forms and authentication",
      "Worked closely with sales, design and engineering to make the interface accessible and friendly",
    ],
    stack: [
      "React",
      "TypeScript",
      "React Query",
      "TanStack Router",
      "React Hook Form",
      "Chakra UI",
      "Docker",
      "Vite",
    ],
  },
  {
    id: "meinbafog",
    company: "meinBafög.de",
    role: "Front-end Developer & Web Designer",
    url: "https://www.meinbafoeg.de/",
    logo: "/img/meinbafog.png",
    start: "Nov 2023",
    end: "Dec 2023",
    location: "Germany · Remote",
    summary:
      "Designed and restructured the website that helps German students apply for scholarships to study abroad.",
    stack: ["Figma", "WordPress", "React", "SCSS"],
  },
  {
    id: "freelance",
    company: "Freelance",
    role: "Front-end Developer & Web Designer",
    start: "Jul 2023",
    end: "Nov 2023",
    location: "Oslo",
    summary:
      "Took websites from Figma designs to production with React, Next.js and Webflow. Several projects in my portfolio started here.",
    stack: ["React", "Next.js", "TypeScript", "Webflow", "Tailwind CSS"],
  },
];

export type PreviousRole = {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
};

export const previousLife: PreviousRole[] = [
  {
    id: "macondo",
    title: "Key Account Manager · Macondo AS",
    date: "2022 — 2023",
    location: "Oslo",
    description:
      "Sourced beers from around the world for Oslo's best bars (some made it to Vinmonopolet), negotiated with venue managers, and designed the company's logo and website. That website is where the coding started.",
  },
  {
    id: "content",
    title: "Digital Content Creator · YouTube",
    date: "2019 — Present",
    location: "Remote",
    description:
      "50k+ subscribers across my channels: the biggest Spanish creator for Raid: Shadow Legends (@sendaplays) and, lately, travel stories (@elrodtrip). It taught me editing, SEO and a sharp eye for UI.",
  },
  {
    id: "hospitality",
    title: "Brewing & hospitality",
    date: "2012 — 2019",
    location: "London · Oslo",
    description:
      "Bartender, manager and certified beer sommelier. Helped open Gipsy Hill Brewery's taproom in London and led teams of 10+ before moving to Amundsen Bryggeri in Oslo.",
  },
];
