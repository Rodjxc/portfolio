import { Link, Text, VStack, Box } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

interface LinksNavProps {
	isOpen: boolean;
}

export const LinksNav: React.FC<LinksNavProps> = ({ isOpen }) => {
	return (
		<Box
			display={{ base: isOpen ? "block" : "none", md: "flex" }}
			mt={{ base: 4, md: 8 }}
			px={8}
		>
			<VStack spacing={4} display={{ base: "block", md: "none" }}>
				<NavLink
					to="/portfolio"
					className={({ isActive }) =>
						`no-underline font-bold text-lg pb-2 border-b-2 ${
							isActive
								? "text-pink-custom  border-pink-custom "
								: "text-white border-transparent hover:border-pink-custom"
						}`
					}
				>
					Portfolio
				</NavLink>
				<NavLink
					to="/cv"
					className={({ isActive }) =>
						`no-underline font-bold text-lg pb-2 border-b-2 ${
							isActive
								? "text-pink-custom  border-pink-custom "
								: "text-white border-transparent hover:border-pink-custom"
						}`
					}
				>
					CV
				</NavLink>
				<Link
					href="https://github.com/Rodjxc"
					target="_blank"
					className="text-lg mx-3 pb-2 text-white border-b-2 border-transparent hover:text-pink-custom hover:border-pink-custom"
				>
					<div className="flex items-center">
						<Text className="mr-2">Github</Text>
						<FontAwesomeIcon icon={faGithub} className="size-6" />
					</div>
				</Link>

				<Link
					href="https://www.linkedin.com/in/rod-jimeno/"
					target="_blank"
					className="text-lg mx-3 pb-2 text-white border-b-2 border-transparent hover:text-pink-custom hover:border-pink-custom"
				>
					<div className="flex items-center">
						<Text className="mr-2">LinkedIn</Text>
						<FontAwesomeIcon icon={faLinkedinIn} className="size-6" />
					</div>
				</Link>
			</VStack>

			<Box
				className="flex items-center space-x-20"
				display={{ base: "none", md: "flex" }}
			>
				<NavLink
					to="/portfolio"
					className={({ isActive }) =>
						`no-underline font-bold text-lg pb-2 border-b-2 ${
							isActive
								? "text-pink-custom  border-pink-custom "
								: "text-white border-transparent hover:border-pink-custom"
						}`
					}
				>
					Portfolio
				</NavLink>
				<NavLink
					to="/cv"
					className={({ isActive }) =>
						`no-underline font-bold text-lg pb-2 border-b-2 ${
							isActive
								? "text-pink-custom  border-pink-custom "
								: "text-white border-transparent hover:border-pink-custom"
						}`
					}
				>
					CV
				</NavLink>
				<Link
					href="https://github.com/Rodjxc"
					target="_blank"
					className="text-lg mx-3 pb-2 text-white border-b-2 border-transparent hover:text-pink-custom hover:border-pink-custom"
				>
					<div className="flex items-center">
						<Text className="mr-2">Github</Text>
						<FontAwesomeIcon icon={faGithub} className="size-6" />
					</div>
				</Link>

				<Link
					href="https://www.linkedin.com/in/rod-jimeno/"
					target="_blank"
					className="text-lg mx-3 pb-2 text-white border-b-2 border-transparent hover:text-pink-custom hover:border-pink-custom"
				>
					<div className="flex items-center">
						<Text className="mr-2">LinkedIn</Text>
						<FontAwesomeIcon icon={faLinkedinIn} className="size-6" />
					</div>
				</Link>
			</Box>
		</Box>
	);
};