import { Link, Flex } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { COLORS } from "../../../common/colors";

export const IconLinks = () => (
  <Flex
    display={{ base: "none", md: "flex" }}
    alignItems="center"
    justifyContent="flex-end"
  >
    <Link
      href="https://github.com/Rodjxc"
      target="blank"
      data-cursor-text="My Github repos"
      mr="3rem"
      color={COLORS.WHITE}
      fontSize="20px"
    >
      <FontAwesomeIcon icon={faGithub} />
    </Link>
    <Link
      href="https://www.linkedin.com/in/rod-jimeno/"
      target="blank"
      data-cursor-text="LinkedIn"
      mr="3rem"
      color={COLORS.WHITE}
      fontSize="20px"
    >
      <FontAwesomeIcon icon={faLinkedinIn} />
    </Link>
  </Flex>
);
