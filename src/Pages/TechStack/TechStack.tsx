import { Grid, GridItem, Divider, Box } from "@chakra-ui/react";
import { Coding } from "./Coding";
import { Languages } from "./Languages";
import { WorkingTools } from "./WorkingTools";
import { COLORS } from "../../common/colors";
import { motion, useScroll, useTransform } from "framer-motion";

const MotionBox = motion(Box);

export const TechStack = () => {
	const { scrollY } = useScroll();

	// Scroll effects for heading and text
	const headingX = useTransform(scrollY, [0, 1000], [0, -700]);
	const textX = useTransform(scrollY, [0, 600], [0, 100]);

	return (
		<Box pt={{ base: "10%", md: "5%" }}>
			<MotionBox
				style={{ x: headingX }}
				fontWeight="bold"
				fontSize={{ base: "40px", md: "60px" }}
				textAlign="center"
				color={COLORS.PINK}
			>
				Skills
			</MotionBox>
			<MotionBox
				style={{ x: textX }}
				fontWeight="normal"
				fontSize={{ base: "16px", md: "20px" }}
				textAlign="left"
				px={{ base: "4", md: "20" }}
				my={20}
			>
				Here is a summary of my most important skills and abilities as a
				Creative Front-end Developer. You can have a detailed view of where I've
				put them to use in the Experience section :)
			</MotionBox>
			<Grid
				templateColumns={{ base: "1fr", lg: "1fr 1fr" }}
				gap={10}
				alignItems="start"
			>
				<GridItem>
					<Coding />
				</GridItem>
				<GridItem>
					<Languages />
					<WorkingTools />
				</GridItem>
			</Grid>
		</Box>
	);
};
