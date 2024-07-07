import { Box, Heading, Text, Link, Flex } from "@chakra-ui/react";

export const AboutMe = () => {
  return (
    <Box
      fontFamily="'Uncut-Sans', sans-serif"
      padding={{ base: "4% 10% 5% 10%", md: "4% 15% 5% 15%" }}
    >
      <Flex direction="column" textAlign="center" className="about-me hidden">
        <Heading as="h3" fontSize="3xl" mb="4">
          ABOUT ME
        </Heading>
        <Text as="h4" fontSize="15px" lineHeight="25px">
          Since I was 5 I’ve been surrounded by computers and videogames which
          probably laid the foundations of an interest for technology. This
          interest took me to a pivotal decision, shifting from a 10+ years
          working in the craft beer industry and being a{" "}
          <Link
            href="https://www.beerandcideracademy.org/meet-the-sommeliers/2018/10/10/rodrigo-jimeno"
            data-cursor-text="Wanna know more?"
            target="_blank"
            color="#f6c5b7"
            _hover={{ textDecoration: "none" }}
          >
            beer sommelier
          </Link>
          , to changing my career to become a developer.
          <br />
          <br />
          I believe that my brain naturally works exactly the way a developer
          thinks, with the logic and synchronous (or async.) side of programming
          as well as being fulfilled by the creative side of building a website.
          Before I used my creativity to make original and tasty beers and now I
          use it to create web applications. I really enjoy minimalist designs
          inspired by the likes of Next JS and Vercel.
          <br />
          <br />
          When I see a project built with frameworks I'm not familiar with, I
          instantly get an “I want to learn this” feeling, and I already have on
          sight learning Remix, ThreeJS and Python. Now I’m looking to be part
          of a bigger team and contribute to wider projects with my skills and
          personality.
          <br />
          <br />
          Oh, and I also have{" "}
          <Link
            href="https://www.youtube.com/sendaplays"
            data-cursor-text="A weird hobby"
            target="_blank"
            color="#f6c5b7"
            _hover={{ textDecoration: "none" }}
          >
            a YouTube channel
          </Link>{" "}
          where I make guides for videogames!
        </Text>
      </Flex>
    </Box>
  );
};
