import { NavLink } from "react-router-dom";
import { Box, Text } from "@chakra-ui/react";
import { COLORS } from "../../../common/colors";

interface LogoProps {
  handleNavLinkClick: () => void;
}

export const Logo: React.FC<LogoProps> = ({ handleNavLinkClick }) => (
  <Box className="logo" data-cursor-text="Take me back">
    <NavLink
      to="/home"
      onClick={handleNavLinkClick}
      style={{ textDecoration: "none", color: COLORS.WHITE }}
    >
      <Text fontSize="2xl">&lt; RJ /&gt;</Text>
    </NavLink>
  </Box>
);
