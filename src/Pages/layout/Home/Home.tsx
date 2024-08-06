import { Box } from "@chakra-ui/react";
import { Staff } from "../../Staff/Staff";
import { TechStack } from "../../TechStack/TechStack";
import { Hero } from "../../Hero/Hero";

export const Home = () => {
	return (
		<Box className="bg-lightBlack-custom text-white">
			<Hero />
			<div>
				<TechStack />
			</div>
			<div>
				<Box>
					<Staff />
				</Box>
			</div>
		</Box>
	);
};
