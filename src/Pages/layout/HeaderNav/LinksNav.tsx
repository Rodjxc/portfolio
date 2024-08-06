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
import { COLORS } from "../../../common/colors";

interface LinksNavProps {
	isOpen: boolean;
	onClose: () => void;
}

export const LinksNav: React.FC<LinksNavProps> = ({ isOpen, onClose }) => {
	return (
		<Box
			display={{ base: isOpen ? "block" : "none", md: "flex" }}
			mt={{ base: 4, md: 0 }}
			className="bg-lightBlack-custom px-8 py-8 w-full"
		>
			<VStack
				spacing={4}
				display={{ base: "block", md: "none" }}
				divider={<StackDivider borderColor="gray.700" />}
				width="100%"
			>
				<ChakraLink
					as={NavLink}
					to="/home"
					className="no-underline font-bold text-lg pb-2 text-white"
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
					Hey!
				</ChakraLink>
				<ChakraLink
					as={NavLink}
					to="/portfolio"
					className="no-underline font-bold text-lg pb-2 text-white"
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
					Portfolio
				</ChakraLink>
				<ChakraLink
					as={NavLink}
					to="/cv"
					className="no-underline font-bold text-lg pb-2 text-white"
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
					CV
				</ChakraLink>
				<ChakraLink
					as={NavLink}
					to="/about-me"
					className="no-underline font-bold text-lg pb-2 text-white"
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
					About Me
				</ChakraLink>
				<ChakraLink
					href="https://github.com/Rodjxc"
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
						<Text className="mr-2">Github</Text>
						<FontAwesomeIcon icon={faGithub} className="size-6" />
					</div>
				</ChakraLink>

				<ChakraLink
					href="https://www.linkedin.com/in/rod-jimeno/"
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
						<Text className="mr-2">LinkedIn</Text>
						<FontAwesomeIcon icon={faLinkedinIn} className="size-6" />
					</div>
				</ChakraLink>
			</VStack>

			<Box
				className="flex items-center space-x-20 bg-lightBlack-custom w-full"
				display={{ base: "none", md: "flex" }}
			>
				<ChakraLink
					as={NavLink}
					to="/home"
					className="no-underline font-bold text-lg pb-2 text-white"
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
					Hey!
				</ChakraLink>
				<ChakraLink
					as={NavLink}
					to="/cv"
					className="no-underline font-bold text-lg pb-2 text-white"
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
					Experience
				</ChakraLink>
				<ChakraLink
					as={NavLink}
					to="/portfolio"
					className="no-underline font-bold text-lg pb-2 text-white"
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
					Projects
				</ChakraLink>
				<ChakraLink
					as={NavLink}
					to="/about-me"
					className="no-underline font-bold text-lg pb-2 text-white"
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
					About Me
				</ChakraLink>
				<ChakraLink
					href="https://github.com/Rodjxc"
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
						<Text className="mr-2">Github</Text>
						<FontAwesomeIcon icon={faGithub} className="size-6" />
					</div>
				</ChakraLink>

				<ChakraLink
					href="https://www.linkedin.com/in/rod-jimeno/"
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
						<Text className="mr-2">LinkedIn</Text>
						<FontAwesomeIcon icon={faLinkedinIn} className="size-6" />
					</div>
				</ChakraLink>
			</Box>
		</Box>
	);
};
