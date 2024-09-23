import { Box } from "@chakra-ui/react";
import { BackgroundBeams } from "src/Components/BackgroundBeams/BackgroundBeams";
import { Hero } from "src/Pages/Hero/Hero";
import { Staff } from "src/Pages/Staff/Staff";
import { TechStack } from "src/Pages/TechStack/TechStack";

export const Home = () => {
	return (
		<div className="bg-lightBlack-custom text-white">
			<Hero />
			<Box mt={{ base: "10%", md: "5%" }}>
				<TechStack />
			</Box>
			<BackgroundBeams />
			<Staff />
		</div>
	);
};
