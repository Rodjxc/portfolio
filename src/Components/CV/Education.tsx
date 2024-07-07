import { Box, Heading, Link, List, ListItem } from "@chakra-ui/react";
import { COLORS } from "../../common/colors";

export const Education = () => {
  return (
    <Box>
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
            _hover={{ color: COLORS.PINK }}
            textDecoration="none"
          >
            Udemy | Master in React: React JS, Hooks, MERN, NodeJS, JWT
          </Link>
        </ListItem>
        <ListItem mb="15px">
          <Link
            href="https://www.udemy.com/certificate/UC-a51f7d6a-becd-4034-abd3-18b7a31a0a69/"
            color={COLORS.WHITE}
            _hover={{ color: COLORS.PINK }}
            textDecoration="none"
          >
            Udemy | The Complete 2023 Web Development Bootcamp
          </Link>
        </ListItem>
        <ListItem mb="15px">
          <Link
            href="https://www.udemy.com/certificate/UC-f7fceaa7-e4fc-4062-8b6c-d18583280e75/"
            color={COLORS.WHITE}
            _hover={{ color: COLORS.PINK }}
            textDecoration="none"
          >
            Udemy | Master in CSS: Responsive design, SASS, LESS, Flexbox, Grid
            & Bootstrap
          </Link>
        </ListItem>
        <ListItem mb="15px">
          <Link
            href="https://www.udemy.com/certificate/UC-f053ab6b-d229-4899-ac50-0b0e42756b66/"
            color={COLORS.WHITE}
            _hover={{ color: COLORS.PINK }}
            textDecoration="none"
          >
            Udemy | Tailwind CSS - Zero to hero v3 2023
          </Link>
        </ListItem>
        <ListItem mb="15px">
          <Link
            href="https://www.udemy.com/certificate/UC-bd7b711f-a31c-4886-82a3-a9ee376804e2/"
            color={COLORS.WHITE}
            _hover={{ color: COLORS.PINK }}
            textDecoration="none"
          >
            Udemy | Complete Web Design: From Figma to Webflow to Freelancing
          </Link>
        </ListItem>
        <ListItem>IBD Certified Beer Sommelier</ListItem>
        <ListItem>
          UIB - University of Balearic Island (Spain) - Degree in Tourism and
          Leisure Studies
        </ListItem>
      </List>
    </Box>
  );
};
