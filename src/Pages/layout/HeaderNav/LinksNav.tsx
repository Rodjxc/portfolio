import { Link, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

const LinksNav = () => {
	return (
		<div className="flex mt-8 px-8">
			<div className="flex items-center space-x-20">
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
						<FontAwesomeIcon icon={faGithub} />
					</div>
				</Link>

				<Link
					href="https://www.linkedin.com/in/rod-jimeno/"
					target="_blank"
					className="text-lg mx-3 pb-2 text-white border-b-2 border-transparent hover:text-pink-custom hover:border-pink-custom"
				>
					<div className="flex items-center">
						<Text className="mr-2">LinkedIn</Text>
						<FontAwesomeIcon icon={faLinkedinIn} />
					</div>
				</Link>
			</div>
		</div>
	);
};

export default LinksNav;
