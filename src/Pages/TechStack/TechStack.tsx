import { Box } from "@chakra-ui/react";
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

	const headingX = useTransform(
		scrollY,
		[0, 1000],
		isLargerThanMd ? [0, -700] : [0, -100],
	);
	const textX = useTransform(
		scrollY,
		[500, 1200],
		isLargerThanMd ? [0, 100] : [0, 30],
	);

	return (
		<Box pt={{ base: "10%", md: "5%" }}>
			<MotionBox
				style={{ x: headingX }}
				fontWeight="bold"
				fontSize={{ base: "40px", md: "90px" }}
				textAlign="center"
				color={COLORS.PINK}
				my={{ base: 10, md: 20 }}
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
			>
				Here is a summary of my most important skills and abilities as a
				Creative Front-end Developer. You can have a detailed view of where I've
				put them to use in the Experience section :)
			</MotionBox>

			<Coding />

			<Languages />
			<WorkingTools />
		</Box>
	);
};
