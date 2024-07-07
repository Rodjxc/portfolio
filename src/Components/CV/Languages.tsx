import { Heading, List, ListItem, Flex } from "@chakra-ui/react";

const languages = [
  { name: "English", proficiency: "Proficient (Non-Native Speaker)" },
  { name: "Spanish", proficiency: "Native" },
  { name: "Catalan", proficiency: "Native" },
  { name: "French", proficiency: "Limited Working Proficiency" },
  { name: "Norwegian", proficiency: "Elementary Proficiency" },
];

export const Languages = () => {
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
        Other Languages
      </Heading>
      <List>
        {languages.map((language, index) => (
          <ListItem key={index} mb="5px">
            {language.name} | {language.proficiency}
          </ListItem>
        ))}
      </List>
    </Flex>
  );
};
