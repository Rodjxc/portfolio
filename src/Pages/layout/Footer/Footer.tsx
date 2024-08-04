import { Flex, Text, Link } from "@chakra-ui/react";
import { COLORS } from "../../../common/colors";

export const Footer = () => {
  return (
    <Flex
      as="footer"
      fontFamily="'Jura', sans-serif"
      justifyContent="space-between"
      marginY="5%"
      marginX="8%"
      direction={{ base: "column", md: "row" }}
      alignItems={{ base: "flex-start", md: "center" }}
      gap={{ base: "40px", md: "0" }}
    >
      <Text>&copy; 2024 Rod Jimeno, Web Dev</Text>
      <Text>
        <span>say hi — &nbsp;</span>
        <Link
          href="mailto:rodrysxc@gmail.com"
          color={COLORS.GRAY}
          position="relative"
          textDecoration="none"
          _before={{
            content: '""',
            position: "absolute",
            bottom: 0,
            left: 0,
            width: 0,
            height: "1px",
            backgroundColor: COLORS.PINK,
            transition: "width 0.5s ease",
          }}
          _hover={{
            color: COLORS.PINK,
            _before: {
              width: "100%",
            },
          }}
        >
          rodrysxc@gmail.com
        </Link>
      </Text>
    </Flex>
  );
};
