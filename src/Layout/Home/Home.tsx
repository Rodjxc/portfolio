import { BackgroundBeams } from "@/Components/BackgroundBeams/BackgroundBeams";
import { Hero } from "@/Pages/Hero/Hero";
import { Staff } from "@/Pages/Staff/Staff";
import { TechStack } from "@/Pages/TechStack/TechStack";
import { Box } from "@chakra-ui/react";

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
