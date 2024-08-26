import { Box, SimpleGrid } from "@chakra-ui/react";
import { Coding } from "./Coding";
import { Languages } from "./Languages";
import { WorkingTools } from "./WorkingTools";
import { COLORS } from "../../common/colors";
import { motion, useScroll, useTransform } from "framer-motion";
import { useMediaQuery } from "@chakra-ui/react";

const MotionBox = motion(Box);

export const TechStack = () => {
	const { scrollY } = useScroll();

	const [isLargerThanMd] = useMediaQuery("(min-width: 48em)");

	// Adjust the transform values to ensure smooth motion without jumping
	const headingX = useTransform(
		scrollY,
		[0, 1000],
		isLargerThanMd ? [0, -400] : [0, -100], // Moves left instead of right
	);
	const textX = useTransform(
		scrollY,
		[500, 1200],
		isLargerThanMd ? [0, -100] : [0, -30], // Moves left instead of right
	);

	return (
		<Box pt={{ base: "10%", md: "5%" }} overflowX="hidden">
			<MotionBox
				style={{ x: headingX }}
				fontWeight="bold"
				fontSize={{ base: "40px", md: "100px" }}
				textAlign="center"
				color={COLORS.PINK}
				my={{ base: 10, md: 20 }}
				maxWidth="100vw"
				initial={{ x: 0 }} // Ensure the initial position matches
			>
				Skills
			</MotionBox>
			<MotionBox
				style={{ x: textX }}
				fontWeight="normal"
				fontSize={{ base: "16px", md: "20px" }}
				textAlign="left"
				px={{ base: "4", md: "20" }}
				my={10}
				maxWidth="100vw"
				initial={{ x: 0 }} // Ensure the initial position matches
			>
				Here is a summary of my most important skills and abilities as a
				Front-end Developer. You can have a detailed view of where I've put them
				to use in the Experience section :)
			</MotionBox>

			<Box px={{ base: "2%", md: "5%" }}>
				<Box mb={10}>
					<Coding />
				</Box>
				<SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 5, md: 5 }}>
					<Box>
						<Languages />
					</Box>
					<Box mt={{ base: "4", md: "0" }}>
						<WorkingTools />
					</Box>
				</SimpleGrid>
			</Box>
		</Box>
	);
};
