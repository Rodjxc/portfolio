import { Heading, List, ListItem, Flex } from "@chakra-ui/react";

const workingTools = [
  "HTML5, CSS3",
  "Javascript with Typescript",
  "Tailwind & Bootstrap",
  "React JS with Vite",
  "Adobe Illustrator and Adobe Photoshop",
  "Figma",
  "Building websites with Webflow",
  "Spotify",
  "and Google :)",
];

export const WorkingTools = () => {
  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
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
      <List>
        {workingTools.map((tool, index) => (
          <ListItem key={index} mb="5px">
            {tool}
          </ListItem>
        ))}
      </List>
    </Flex>
  );
};
