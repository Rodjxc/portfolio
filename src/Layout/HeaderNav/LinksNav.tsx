import {
	Link as ChakraLink,
	Text,
	VStack,
	Box,
	StackDivider,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { COLORS } from "@/common/colors";

interface LinksNavProps {
	isOpen: boolean;
	onClose: () => void;
}

export const LinksNav: React.FC<LinksNavProps> = ({ isOpen, onClose }) => {
	const links = [
		{ to: "/home", label: "Hey!" },
		{ to: "/portfolio", label: "Portfolio" },
		{ to: "/experience", label: "Experience" },
		{ to: "/about-me", label: "About Me" },
	];

	const externalLinks = [
		{ href: "https://github.com/Rodjxc", label: "Github", icon: faGithub },
		{
			href: "https://www.linkedin.com/in/rod-jimeno/",
			label: "LinkedIn",
			icon: faLinkedinIn,
		},
	];

	return (
		<Box
			display={{ base: isOpen ? "block" : "none", md: "flex" }}
			mt={{ base: 4, md: 0 }}
			className="bg-lightBlack-custom px-8 w-full"
		>
			<VStack
				spacing={4}
				display={{ base: "block", md: "none" }}
				divider={<StackDivider borderColor="gray.700" />}
				width="100%"
			>
				{links.map((link) => (
					<ChakraLink
						key={link.to}
						as={NavLink}
						to={link.to}
						className="no-underline text-lg pb-2 text-white"
						onClick={onClose}
						position="relative"
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
						{link.label}
					</ChakraLink>
				))}
				{externalLinks.map((link) => (
					<ChakraLink
						key={link.href}
						href={link.href}
						target="_blank"
						className="text-lg pb-2 text-white"
						onClick={onClose}
						position="relative"
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
						<div className="flex items-center">
							<Text className="mr-2">{link.label}</Text>
							<FontAwesomeIcon icon={link.icon} className="size-6" />
						</div>
					</ChakraLink>
				))}
			</VStack>

			<Box
				className="flex items-center space-x-20 bg-lightBlack-custom w-full"
				display={{ base: "none", md: "flex" }}
			>
				{links.map((link) => (
					<ChakraLink
						key={link.to}
						as={NavLink}
						to={link.to}
						className="no-underline text-lg pb-2 text-white"
						onClick={onClose}
						position="relative"
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
						{link.label}
					</ChakraLink>
				))}
				{externalLinks.map((link) => (
					<ChakraLink
						key={link.href}
						href={link.href}
						target="_blank"
						className="text-lg mx-3 pb-2 text-white"
						position="relative"
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
						<div className="flex items-center">
							<Text className="mr-2">{link.label}</Text>
							<FontAwesomeIcon icon={link.icon} className="size-6" />
						</div>
					</ChakraLink>
				))}
			</Box>
		</Box>
	);
};
