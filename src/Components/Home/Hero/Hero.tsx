import { Box, Flex, Heading, Text, Image } from "@chakra-ui/react";

export const Hero = () => {
  return (
    <Box
      id="container-hero"
      display="flex"
      marginTop="100px"
      height="89vh"
      width="100%"
      flexDirection={{ base: "column-reverse", md: "row" }}
      textAlign={{ base: "center", md: "left" }}
      justifyContent={{ base: "center", md: "flex-start" }}
    >
      <Flex
        direction="column"
        className="text hidden"
        alignItems={{ base: "center", md: "flex-start" }}
        justifyContent="center"
        paddingX={{ base: "2%", md: "5%" }}
        paddingY={{ base: "4%", md: "0" }}
      >
        <Box
          className="hero-text"
          fontFamily="'Uncut-Sans', sans-serif"
          fontSize="20px"
          lineHeight="30px"
          paddingX={{ base: "0", md: "20%" }}
        >
          <Heading as="h2" fontFamily="'Uncut-Sans', sans-serif" mb="4">
            Hey!
          </Heading>
          <Text>
            I'm a FrontEnd developer from Spain (but living in Oslo 📍) with a
            love for all things web. I've worked as a frontend developer for
            several companies, building apps and websites. I'm passionate about
            using my skills and experience to contribute to wider projects and
            work with amazing teams.
          </Text>
        </Box>

        <Box
          className="rod-name"
          fontFamily="'Uncut-Sans', sans-serif"
          letterSpacing="-1px"
          fontSize="20vh"
          marginLeft="-13px"
          marginTop="10%"
          display={{ base: "none", md: "block" }}
        >
          <Heading as="h1">Rod Jimeno</Heading>
        </Box>
      </Flex>

      <Box
        className="hero-img-section hidden"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Image
          src="/img/snd-back2.png"
          alt="profile pic for Rod"
          className="hero-img"
          maxWidth={{ base: "80%", md: "100%" }}
          data-cursor-text="Hey! That's me!"
        />
      </Box>
    </Box>
  );
};
