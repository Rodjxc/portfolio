import { useEffect } from "react";
import {
  Box,
  Flex,
  IconButton,
  Link,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { Logo } from "./Logo";
import { CenterLinks } from "./CenterLinks";
import { IconLinks } from "./IconLinks";
import { COLORS } from "../../../common/colors";
import { NavLink } from "react-router-dom";
import { useCallback } from "react";

export const HeaderNav: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleNavLinkClick = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    onClose();
  }, [onClose]);

  const handleMobileNavToggle = () => {
    if (isOpen) {
      onClose();
    } else {
      onOpen();
    }
  };

  const handleResize = useCallback(() => {
    if (window.innerWidth > 768 && isOpen) {
      onClose();
    }
  }, [isOpen, onClose]);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  return (
    <Box
      as="header"
      bg="black"
      color={COLORS.WHITE}
      position="fixed"
      top="0"
      width="100%"
      zIndex="200"
      py="4"
    >
      <Flex alignItems="center" justifyContent="space-between" px="8">
        <Logo handleNavLinkClick={handleNavLinkClick} />

        <CenterLinks handleNavLinkClick={handleNavLinkClick} />

        <IconLinks />

        <IconButton
          display={{ base: "block", md: "none" }}
          onClick={handleMobileNavToggle}
          icon={<FontAwesomeIcon icon={isOpen ? faTimes : faBars} />}
          variant="ghost"
          color={COLORS.WHITE}
          aria-label="Toggle Navigation"
        />
      </Flex>

      <Flex
        as="nav"
        display={{ base: isOpen ? "flex" : "none", md: "none" }}
        flexDirection="column"
        position="fixed"
        left="0"
        width="100%"
        bg="black"
        zIndex="199"
        pt="90px"
      >
        <VStack spacing="4">
          <NavLink
            to="/portfolio"
            onClick={handleNavLinkClick}
            style={({ isActive }) => ({
              color: isActive ? COLORS.PINK : COLORS.WHITE,
              borderBottom: isActive ? `3px solid ${COLORS.PINK}` : "none",
              paddingBottom: isActive ? "9px" : "none",
              fontFamily: "'Jura', sans-serif",
              fontWeight: "bold",
              fontSize: "18px",
              textDecoration: "none",
            })}
          >
            Portfolio
          </NavLink>
          <NavLink
            to="/cv"
            onClick={handleNavLinkClick}
            style={({ isActive }) => ({
              color: isActive ? COLORS.PINK : COLORS.WHITE,
              borderBottom: isActive ? `3px solid ${COLORS.PINK}` : "none",
              paddingBottom: isActive ? "9px" : "none",
              fontFamily: "'Jura', sans-serif",
              fontWeight: "bold",
              fontSize: "18px",
              textDecoration: "none",
            })}
          >
            CV
          </NavLink>
          <Link
            href="https://github.com/Rodjxc"
            target="blank"
            data-cursor-text="My Github repos"
            color={COLORS.WHITE}
            fontSize="20px"
          >
            <FontAwesomeIcon icon={faGithub} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/rod-jimeno/"
            target="blank"
            data-cursor-text="LinkedIn"
            color={COLORS.WHITE}
            fontSize="20px"
          >
            <FontAwesomeIcon icon={faLinkedinIn} />
          </Link>
        </VStack>
      </Flex>
    </Box>
  );
};
