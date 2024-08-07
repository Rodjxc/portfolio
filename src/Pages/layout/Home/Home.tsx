import { Staff } from "../../Staff/Staff";
import { TechStack } from "../../TechStack/TechStack";
import { Hero } from "../../Hero/Hero";
import { Box } from "@chakra-ui/react";

export const Home = () => {
	return (
		<Box className="bg-lightBlack-custom text-white">
			<Hero />
			<Box mt={{ base: "10%", md: "5%" }}>
				<TechStack />
			</Box>
			<Staff />
		</Box>
	);
};
