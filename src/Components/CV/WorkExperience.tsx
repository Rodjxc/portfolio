import { Box, Heading, Text, Flex } from "@chakra-ui/react";
import { COLORS } from "../../common/colors";

const workExperiences = [
  {
    title: "FrontEnd Developer | EstateLab (Feb. 2024 - Present) | 📍 Oslo",
    description: `I joined EstateLab in its start-up phase and I was tasked with building from almost
        scratch an app to manage real estate property. I decided to go for a SPA built with React and Typescript and leveraging the 
        magic of React Query for a very heavy API solution.`,
  },
  {
    title:
      "FrontEnd Developer - Web Designer | meinBafög.de (Dec. 2023 - Feb. 2024) | 📍 Germany - Remote",
    description: `Helped with the design and organization of the meinbafoeg.de website, which helps German students to apply for scholarships to study abroad. Worked mainly with WordPress and design tools like Figma and different plugins.`,
  },
  {
    title:
      "FrontEnd Developer - Web Designer | Freelance (Nov. 2022 - Present) | 📍 Oslo",
    description: `During the time of my studies I've been able to partake in all the
      projects and works shown in my portfolio and it's been an assurance
      that development has been the right career path for me. Beyond coding,
      I brought concepts to life and coded websites with React, Vite and
      NodeJS or Webflow from Figma designs. It's not just about writing
      code; it's a creative journey, much like brewing beer—from an idea to
      a tangible product and a user experience. And not only is it a
      fulfilling job but also I have fun alongside it.`,
  },
  {
    title:
      "Macondo AS | Key Account Manager (Jan. 2022 - March 2023) | 📍 Oslo",
    description: `My role here was quite varied - not just helping with beer production
      of Schouskjelleren Bryggeri but also connecting with some of the
      managers of the best bars in Oslo. I listened to what they craved and
      sourced unique beers from around the globe. Some of those selections
      even made their way to Vinmonopolet! This role wasn't just about beer,
      but also selling and negotiating prices with managers, curating
      customer relationships and keeping up and understanding the trends and
      needs of the market. This relations led me to close and friendly
      relationships with bar owners leading to an increase in sales for the
      company and good reputation as a supplier. I also designed the logo
      and website of the company.`,
  },
  {
    title: "Content Creator for Youtube & Twitch (July 2019 - Present)",
    description: `I started my Content Creation journey in 2019 by starting a YouTube
      channel where I made game guides for various video games, which laid
      part of the groundwork for my transition into the development world.
      Beyond technical skills, this experience taught me valuable skills
      like discipline, commitment, keeping up to date with technology. Also
      other valuable skills like web SEO and picture/video editing to
      enhance the channel's quality, with allowed me to have a good eye for
      good UX / UI design and accessibility which have proven of great use
      in my developer career. All of this have resulted in a growing channel
      that recently passed the 40k mark.`,
  },
  {
    title:
      "Various roles within brewing and hospitality (July 2012 - 2019) | 📍 Oslo - London (UK)",
    description: `A year after I finished my university I decided to move out of my
      comfort zone and I moved to London, UK, where I worked for several
      years. I worked in hospitality both as a bartender and as a manager (I
      even helped opening and organizing Gipsy Hill's Brewery's Taproom in
      the heart of London), lead teams of 10+ people in a very fast-paced
      and stressful environment as working in the center of a big city with
      people of all sorts. Thanks to my network and contacts I got a job for
      Amundsen Bryggeri in Oslo, which led me to move to Norway and start
      anew, and since I'm always willing to learn I embraced the change and
      new opportunities to grow.`,
  },
];

export const WorkExperience = () => {
  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      minH="100vh"
      padding="20px"
    >
      <Heading
        as="h2"
        fontWeight="400"
        fontSize="70px"
        textTransform="uppercase"
        mb="4"
        textAlign="center" // Center the heading text
      >
        Work Experience
      </Heading>
      {workExperiences.map((experience, index) => (
        <Box key={index} maxW="60%" mx="auto" textAlign="left" mb="8">
          <Text
            as="h4"
            fontWeight="bold"
            fontFamily="Gruppo"
            fontSize="larger"
            textTransform="uppercase"
            mb="4"
          >
            {experience.title}
          </Text>
          <Text
            borderLeft={`1px solid ${COLORS.PINK}`}
            pl="5%"
            lineHeight="2rem"
          >
            {experience.description}
          </Text>
        </Box>
      ))}
    </Flex>
  );
};
