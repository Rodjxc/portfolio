import { useEffect } from "react";
import {
  Box,
  Flex,
  Heading,
  Link,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react";
import { COLORS } from "../../common/colors";

export const CV = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    });

    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach((el) => observer.observe(el));
  }, []);

  return (
    <Box padding="8% 5%" minH="500px">
      <Flex direction="column" gap="20px">
        <Box
          className="hidden education"
          fontFamily="Jura, sans-serif"
          textAlign="center"
        >
          <Heading
            as="h2"
            fontWeight="400"
            fontSize="70px"
            textTransform="uppercase"
            mb="4"
          >
            Education
          </Heading>
          <List>
            <ListItem mb="15px">
              <Link
                href=""
                color={COLORS.WHITE}
                _hover={COLORS.PINK}
                textDecoration="none"
              >
                Udemy | Master in React: React JS, Hooks, MERN, NodeJS, JWT
              </Link>
            </ListItem>
            <ListItem mb="15px">
              <Link
                href="https://www.udemy.com/certificate/UC-a51f7d6a-becd-4034-abd3-18b7a31a0a69/"
                color={COLORS.WHITE}
                _hover={COLORS.PINK}
                textDecoration="none"
              >
                Udemy | The Complete 2023 Web Development Bootcamp
              </Link>
            </ListItem>
            <ListItem mb="15px">
              <Link
                href="https://www.udemy.com/certificate/UC-f7fceaa7-e4fc-4062-8b6c-d18583280e75/"
                color={COLORS.WHITE}
                _hover={COLORS.PINK}
                textDecoration="none"
              >
                Udemy | Master in CSS: Responsive design, SASS, LESS, Flexbox,
                Grid & Bootstrap
              </Link>
            </ListItem>
            <ListItem mb="15px">
              <Link
                href="https://www.udemy.com/certificate/UC-f053ab6b-d229-4899-ac50-0b0e42756b66/"
                color={COLORS.WHITE}
                _hover={COLORS.PINK}
                textDecoration="none"
              >
                Udemy | Tailwind CSS - Zero to hero v3 2023
              </Link>
            </ListItem>
            <ListItem mb="15px">
              <Link
                href="https://www.udemy.com/certificate/UC-bd7b711f-a31c-4886-82a3-a9ee376804e2/"
                color={COLORS.WHITE}
                _hover={COLORS.PINK}
                textDecoration="none"
              >
                Udemy | Complete Web Design: From Figma to Webflow to
                Freelancing
              </Link>
            </ListItem>
            <ListItem>IBD Certified Beer Sommelier</ListItem>
            <ListItem>
              UIB - University of Balearic Island (Spain) - Degree in Tourism
              and Leisure Studies
            </ListItem>
          </List>
        </Box>

        <Box
          className="hidden work-experience"
          fontFamily="Jura, sans-serif"
          textAlign="center"
        >
          <Heading
            as="h2"
            fontWeight="400"
            fontSize="70px"
            textTransform="uppercase"
            mb="4"
          >
            Work Experience
          </Heading>

          <Box className="web-dev" maxW="60%" mx="auto" textAlign="left">
            <Text
              as="h4"
              fontWeight="bold"
              fontFamily="Gruppo"
              fontSize="larger"
              textTransform="uppercase"
              mb="4"
            >
              Web Developer | Freelance (Nov. 2022 - Present) | 📍 Oslo
            </Text>
            <Text
              borderLeft={`1px solid ${COLORS.PINK}`}
              pl="5%"
              lineHeight="2rem"
            >
              During the time of my studies I've been able to partake in all the
              projects and works shown in my portfolio and it's been an
              assurance that development has been the right career path for me.
              Beyond coding, I brought concepts to life and coded websites with
              React, Vite and NodeJS or Webflow from Figma designs. It's not
              just about writing code; it's a creative journey, much like
              brewing beer—from an idea to a tangible product and a user
              experience. And not only is it a fulfilling job but also I have
              fun alongside it.
            </Text>
          </Box>

          <Box className="macondo" maxW="60%" mx="auto" textAlign="left">
            <Text
              as="h4"
              fontWeight="bold"
              fontFamily="Gruppo"
              fontSize="larger"
              textTransform="uppercase"
              mb="4"
            >
              Macondo AS | Key Account Manager (Jan. 2022 - March 2023) | 📍
              Oslo
            </Text>
            <Text
              borderLeft={`1px solid ${COLORS.PINK}`}
              pl="5%"
              lineHeight="2rem"
            >
              My role here was quite varied - not just helping with beer
              production of Schouskjelleren Bryggeri but also connecting with
              some of the managers of the best bars in Oslo. I listened to what
              they craved and sourced unique beers from around the globe. Some
              of those selections even made their way to Vinmonopolet! This role
              wasn't just about beer, but also selling and negotiating prices
              with managers, curating customer relationships and keeping up and
              understanding the trends and needs of the market. This relations
              led me to close and friendly relationships with bar owners leading
              to an increase in sales for the company and good reputation as a
              supplier. I also designed the logo and website of the company.
            </Text>
          </Box>

          <Box
            className="content-creator"
            maxW="60%"
            mx="auto"
            textAlign="left"
          >
            <Text
              as="h4"
              fontWeight="bold"
              fontFamily="Gruppo"
              fontSize="larger"
              textTransform="uppercase"
              mb="4"
            >
              Content Creator for Youtube & Twitch (July 2019 - Present)
            </Text>
            <Text
              borderLeft={`1px solid ${COLORS.PINK}`}
              pl="5%"
              lineHeight="2rem"
            >
              I started my Content Creation journey in 2019 by starting a
              YouTube channel where I made game guides for various video games,
              which laid part of the groundwork for my transition into the
              development world. Beyond technical skills, this experience taught
              me valuable skills like discipline, commitment, keeping up to date
              with technology. Also other valuable skills like web SEO and
              picture/video editing to enhance the channel's quality, with
              allowed me to have a good eye for good UX / UI design and
              accessibility which have proven of great use in my developer
              career. All of this have resulted in a growing channel that
              recently passed the 40k mark.
            </Text>
          </Box>

          <Box className="various" maxW="60%" mx="auto" textAlign="left">
            <Text
              as="h4"
              fontWeight="bold"
              fontFamily="Gruppo"
              fontSize="larger"
              textTransform="uppercase"
              mb="4"
            >
              Various roles within brewing and hospitality (July 2012 - 2019) |
              📍 Oslo - London (UK)
            </Text>
            <Text
              borderLeft={`1px solid ${COLORS.PINK}`}
              pl="5%"
              lineHeight="2rem"
            >
              A year after I finished my university I decided to move out of my
              comfort zone and I moved to London, UK, where I worked for several
              years. I worked in hospitality both as a bartender and as a
              manager (I even helped opening and organizing Gipsy Hill's
              Brewery's Taproom in the heart of London), lead teams of 10+
              people in a very fast-paced and stressful environment as working
              in the center of a big city with people of all sorts. Thanks to my
              network and contacts I got a job for Amundsen Bryggeri in Oslo,
              which led me to move to Norway and start anew, and since I'm
              always willing to learn I embraced the change and new
              opportunities to grow.
            </Text>
          </Box>
        </Box>

        <Box
          className="hidden working-tools"
          fontFamily="Jura, sans-serif"
          textAlign="center"
        >
          <Heading
            as="h2"
            fontWeight="400"
            fontSize="70px"
            textTransform="uppercase"
            mb="4"
          >
            Working Tools
          </Heading>
          <List textAlign="left" padding="20px">
            <ListItem mb="5px">HTML5, CSS3</ListItem>
            <ListItem mb="5px">Javascript with Typescript</ListItem>
            <ListItem mb="5px">Tailwind & Bootstrap</ListItem>
            <ListItem mb="5px">React JS with Vite</ListItem>
            <ListItem mb="5px">Adobe Illustrator and Adobe Photoshop</ListItem>
            <ListItem mb="5px">Figma</ListItem>
            <ListItem mb="5px">Building websites with Webflow</ListItem>
            <ListItem mb="5px">Spotify</ListItem>
            <ListItem mb="5px">and Google :)</ListItem>
          </List>
        </Box>

        <Box
          className="hidden other-languages"
          fontFamily="Jura, sans-serif"
          textAlign="center"
        >
          <Heading
            as="h2"
            fontWeight="400"
            fontSize="70px"
            textTransform="uppercase"
            mb="4"
          >
            Other Languages
          </Heading>
          <List textAlign="left" padding="20px">
            <ListItem mb="5px">
              English | Proficient (Non-Native Speaker)
            </ListItem>
            <ListItem mb="5px">Spanish | Native</ListItem>
            <ListItem mb="5px">Catalan | Native</ListItem>
            <ListItem mb="5px">French | Limited Working Proficiency</ListItem>
            <ListItem mb="5px">Norwegian | Elementary Proficiency</ListItem>
          </List>
        </Box>
      </Flex>
    </Box>
  );
};
