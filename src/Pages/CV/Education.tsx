import { Heading, Link, List, ListItem, Flex } from "@chakra-ui/react";
import { COLORS } from "../../common/colors";

const educationItems = [
  {
    text: "Udemy | Master in React: React JS, Hooks, MERN, NodeJS, JWT",
    href: "",
  },
  {
    text: "Udemy | The Complete 2023 Web Development Bootcamp",
    href: "https://www.udemy.com/certificate/UC-a51f7d6a-becd-4034-abd3-18b7a31a0a69/",
  },
  {
    text: "Udemy | Master in CSS: Responsive design, SASS, LESS, Flexbox, Grid & Bootstrap",
    href: "https://www.udemy.com/certificate/UC-f7fceaa7-e4fc-4062-8b6c-d18583280e75/",
  },
  {
    text: "Udemy | Tailwind CSS - Zero to hero v3 2023",
    href: "https://www.udemy.com/certificate/UC-f053ab6b-d229-4899-ac50-0b0e42756b66/",
  },
  {
    text: "Udemy | Complete Web Design: From Figma to Webflow to Freelancing",
    href: "https://www.udemy.com/certificate/UC-bd7b711f-a31c-4886-82a3-a9ee376804e2/",
  },
  {
    text: "IBD Certified Beer Sommelier",
    href: "",
  },
  {
    text: "UIB - University of Balearic Island (Spain) - Degree in Tourism and Leisure Studies",
    href: "",
  },
];

export const Education = () => {
  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      padding="20px"
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
        {educationItems.map((item, index) => (
          <ListItem key={index} mb="15px">
            <Link
              href={item.href}
              color={COLORS.WHITE}
              _hover={{ color: COLORS.PINK }}
              textDecoration="none"
            >
              {item.text}
            </Link>
          </ListItem>
        ))}
      </List>
    </Flex>
  );
};
