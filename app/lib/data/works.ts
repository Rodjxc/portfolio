export type Project = {
  id: string;
  name: string;
  image: string;
  url?: string;
  technologies: string;
  categories: string;
  description: string;
  figma?: string;
  github?: string;
};

export const works: Project[] = [

  {
    id: "eiendom.no",
    name: "Eiendom.no",
    image: "/img/eiendom.png",
    url: "https://eiendom.no/",
    technologies: "NextJS 14, React 19, Tailwind CSS & TypeScript. React Query for data fetching and Mapbox for the map.",
    categories: "Website - App",
    description:
       "Eiendom.no is designed to become Norway's leading data-driven tool for evaluating property purchases, powered by our in-house value-estimation model and direct integrations with real-estate brokers. I built the app from scratch and had further developed it with the team.",
  },
  {
    id: "plot",
    name: "Plot.ai",
    image: "/img/plot.png",
    url: "https://plot.ai/",
    technologies: "NextJS 14, React 19, Shadcn UI, Tailwind CSS, TypeScript",
    categories: "Website with backend integration",
    description: "Plot.ai is an advanced Norwegian proptech platform and market analysis tool designed to help real estate developers, investors, and consumers make data-driven property decisions. This website and their integrations are the entrance to the paid platform for broker of Plot.ai",
  },
  {
    id: "Sendaplays",
    name: "Sendaplays.com",
    image: "/img/sendaplays.png",
    url: "https://sendaplays.com/",
    technologies: "NextJS 14, React 19, Shadcn UI, Tailwind CSS, TypeScript, Supabase",
    categories: "Website with Backend in the cloud. Receives thousands of users monthly",
    description:
      "Personal project, I created (and currently maintain) about guides for the videogame Raid Shadow Legends. It's the reference in Spanish language for the game Raid Shadow Legends videogame. Built with the NextJS 14 and hosting a Backend (BaaS) with Supabase.",
  },
  {
    id: "weather",
    name: "Weather App",
    image: "/img/weather.jpg",
    url: "https://weather-app-rodjxcs-projects.vercel.app/",
    technologies: "React, Typescript, React Query",
    categories: "Simple Web App",
    description:
      "A weather app that uses the OpenWeather API to fetch the weather data and displays it in a beautiful way. It shows the weather for the current location and has a feature for recent searches. Built using React, Typescript and React Query",
    github: "https://github.com/Rodjxc/weather-app-marketer",
  },
  {
    id: "HystarF",
    name: "Hystar",
    image: "/img/HystarF.jpg",
    url: "https://hystar.webflow.io/",
    technologies: "Webflow",
    categories: "Web Design, built using Webflow",
    description:
      "Another version of Hystar's website, a Norwegian hydrogen company that builds electrolysers to produce green energy. My wife happens to work there and I wanted to give another look to their website just for fun and play with different elements. It includes a blog application (news) with different posts that map the data from a database",
    figma:
      "https://www.figma.com/file/cGNBmCqdqdLmtNw74KuZ25/Wireframe-Kit-(Copy)?type=design&node-id=6286%3A504&mode=design&t=Ncx7Xhg7GePyOwoG-1",
  },
  {
    id: "PortF",
    name: "Portfolio",
    image: "/img/PortF.jpg",
    url: "https://rodj.dev",
    technologies: "Next.js, React, TypeScript & Tailwind CSS",
    categories: "Website, Web Design",
    description:
      "This same website, rebuilt with Next.js and Tailwind. A place to play with layout, motion, and the work I want to show.",
    github: "https://github.com/Rodjxc/portfolio",
  },
  {
    id: "CommuF",
    name: "CommuniLink",
    image: "/img/CommuF.jpg",
    url: "https://communilinkrodjdev.webflow.io/",
    technologies: "Webflow",
    categories: "Web Design, built using Webflow",
    description:
      "A simple landing page for a website of a fake chat and video calls app, fully responsive. Designed in Figma and built using WebFlow",
    figma:
      "https://www.figma.com/file/gpUYxGbCorvTaXlqGYHxmE/Practice%3A-Chat-App-Homepage-Design-(Copy)?type=design&node-id=107%3A17&mode=design&t=zf1RNJpPckd9Z4oB-1",
  }
];

export function getProjectById(id: string) {
  return works.find((work) => work.id === id);
}
