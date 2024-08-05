import { AboutMe } from "./AboutMe/AboutMe";
import { Box } from "@chakra-ui/react";
import { Hero } from "./Hero/Hero";
import { Staff } from "./Staff/Staff";
import { TechStack } from "./TechStack/TechStack";

export const Home = () => {
	return (
		<Box className="bg-lightBlack-custom text-white">
			<Hero />

			<div id="second-section">
				<TechStack />

				<AboutMe />
			</div>

			<div id="team-heading">
				<Box className="staff-cards">
					<Staff />
				</Box>
			</div>
		</Box>
	);
};
