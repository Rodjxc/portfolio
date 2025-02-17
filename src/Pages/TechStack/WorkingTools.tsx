import { Box, Heading, List, ListItem, Image } from "@chakra-ui/react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const workingTools = [
  "Github",
  "Jira",
  "Figma",
  "Webflow",
  "Linear",
  "Spotify",
  "Adobe Photoshop",
];

export const WorkingTools = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <Box
      position="relative"
      overflow="hidden"
      maxW={{ base: "90%", md: "70%" }}
      mx="auto"
      my="8"
      height="300px"
    >
      <Image
        src="/img/tools.jpg"
        alt="Working Tools"
        width="100%"
        objectFit="cover"
        position="absolute"
        top="0"
        left="0"
        zIndex="1"
        height="100%"
        opacity="0.5"
      />
      <Box
        as={motion.div}
        ref={ref}
        bg="rgba(255, 255, 255, 0.9)"
        borderRadius="md"
        p="6"
        position="relative"
        zIndex="2"
        mx="auto"
        my="5%"
        boxShadow="md"
        textAlign="center"
        maxWidth={{ base: "90%", md: "60%" }}
        initial={{ opacity: 0, x: -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
      >
        <Heading
          fontWeight="700"
          fontSize={{ base: "18px", md: "24px" }}
          mb="4"
          color="black"
          fontFamily="'Montserrat', sans-serif"
        >
          Working Tools
        </Heading>
        <List color="black" fontSize="sm">
          <Box justifyItems="center">
            {workingTools.map((tool, index) => (
              <ListItem
                as={motion.li}
                // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                textAlign="center"
              >
                {tool}
              </ListItem>
            ))}
          </Box>
        </List>
      </Box>
    </Box>
  );
};
