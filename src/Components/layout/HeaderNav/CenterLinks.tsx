import { NavLink } from "react-router-dom";
import { Flex } from "@chakra-ui/react";
import { COLORS } from "../../../common/colors";

interface CenterLinksProps {
  handleNavLinkClick: () => void;
}

export const CenterLinks: React.FC<CenterLinksProps> = ({
  handleNavLinkClick,
}) => (
  <Flex
    display={{ base: "none", md: "flex" }}
    alignItems="center"
    justifyContent="center"
    flex="1"
  >
    <NavLink
      to="/portfolio"
      onClick={handleNavLinkClick}
      style={({ isActive }) => ({
        color: isActive ? COLORS.PINK : COLORS.WHITE,
        borderBottom: isActive ? `3px solid ${COLORS.PINK}` : "none",
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
        color: isActive ? COLORS.PINK : COLORS.WHITE,
        borderBottom: isActive ? `3px solid ${COLORS.PINK}` : "none",
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
  </Flex>
);
