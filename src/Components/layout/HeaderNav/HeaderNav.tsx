import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { useEffect } from "react";
import {
  Box,
  Flex,
  IconButton,
  Link,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";

export const HeaderNav = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleNavLinkClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    onClose();
  };

  const handleMobileNavToggle = () => {
    if (isOpen) {
      onClose();
    } else {
      onOpen();
    }
  };

  const handleResize = () => {
    if (window.innerWidth > 768 && isOpen) {
      onClose();
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isOpen]);

  return (
    <Box
      as="header"
      bg="black"
      color="white"
      position="fixed"
      top="0"
      width="100%"
      zIndex="200"
      paddingY="4"
    >
      <Flex alignItems="center" justifyContent="space-between" paddingX="8">
        <Box className="logo" data-cursor-text="Take me back">
          <NavLink
            to="/home"
            onClick={handleNavLinkClick}
            style={{ textDecoration: "none", color: "white" }}
          >
            &lt; RJ /&gt;
          </NavLink>
        </Box>
        <IconButton
          display={{ base: "block", md: "none" }}
          onClick={handleMobileNavToggle}
          icon={<FontAwesomeIcon icon={isOpen ? faTimes : faBars} />}
          variant="ghost"
          color="white"
          aria-label="Toggle Navigation"
        />
        <Flex
          className="links-navbar"
          display={{ base: "none", md: "flex" }}
          alignItems="center"
        >
          <NavLink
            to="/portfolio"
            onClick={handleNavLinkClick}
            style={({ isActive }) => ({
              color: isActive ? "#f6c5b7" : "white",
              borderBottom: isActive ? "3px solid #f6c5b7" : "none",
              paddingBottom: isActive ? "9px" : "none",
              marginLeft: "15px",
              marginRight: "15px",
              fontFamily: "'Jura', sans-serif",
              fontWeight: "bold",
              fontSize: "18px",
              textDecoration: "none",
            })}
          >
            Portfolio
          </NavLink>
        </Flex>
        <Flex
          className="icons-navbar"
          display={{ base: "none", md: "flex" }}
          alignItems="center"
        >
          <Link
            href="https://github.com/Rodjxc"
            target="blank"
            data-cursor-text="My Github repos"
            marginRight="3rem"
            color="white"
          >
            <FontAwesomeIcon icon={faGithub} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/rod-jimeno/"
            target="blank"
            data-cursor-text="LinkedIn"
            marginRight="3rem"
            color="white"
          >
            <FontAwesomeIcon icon={faLinkedinIn} />
          </Link>
        </Flex>
      </Flex>
      <Flex
        as="nav"
        className="mobile-nav"
        display={{ base: isOpen ? "flex" : "none", md: "none" }}
        flexDirection="column"
        position="fixed"
        left="0"
        width="100%"
        bg="black"
        zIndex="199"
        paddingTop="90px"
      >
        <VStack spacing="4">
          <NavLink
            to="/portfolio"
            onClick={handleNavLinkClick}
            style={({ isActive }) => ({
              color: isActive ? "#f6c5b7" : "white",
              borderBottom: isActive ? "3px solid #f6c5b7" : "none",
              paddingBottom: isActive ? "9px" : "none",
              marginLeft: "15px",
              marginRight: "15px",
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
              color: isActive ? "#f6c5b7" : "white",
              borderBottom: isActive ? "3px solid #f6c5b7" : "none",
              paddingBottom: isActive ? "9px" : "none",
              marginLeft: "15px",
              marginRight: "15px",
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
            color="white"
          >
            <FontAwesomeIcon icon={faGithub} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/rod-jimeno/"
            target="blank"
            data-cursor-text="LinkedIn"
            color="white"
          >
            <FontAwesomeIcon icon={faLinkedinIn} />
          </Link>
        </VStack>
      </Flex>
    </Box>
  );
};
