import { Box, Flex, Link, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { COLORS } from "../../../common/colors";

interface HeaderProps {
	handleNavLinkClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ handleNavLinkClick }) => {
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
				{/* Logo */}
				<NavLink
					to="/home"
					onClick={handleNavLinkClick}
					style={{ textDecoration: "none", color: COLORS.WHITE }}
				>
					<Text fontSize="2xl">&lt; RJ /&gt;</Text>
				</NavLink>

				{/* Navigation Links */}
				<Flex alignItems="center">
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
					<Link
						href="https://github.com/Rodjxc"
						target="_blank"
						color={COLORS.WHITE}
						fontSize="20px"
						mx="15px"
					>
						<FontAwesomeIcon icon={faGithub} />
					</Link>
					<Link
						href="https://www.linkedin.com/in/rod-jimeno/"
						target="_blank"
						color={COLORS.WHITE}
						fontSize="20px"
						mx="15px"
					>
						<FontAwesomeIcon icon={faLinkedinIn} />
					</Link>
				</Flex>
			</Flex>
		</Box>
	);
};
