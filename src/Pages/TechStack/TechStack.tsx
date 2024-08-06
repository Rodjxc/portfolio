import { Box, Grid, GridItem, Heading, Text, Divider } from "@chakra-ui/react";
import { Coding } from "./Coding";
import { Languages } from "./Languages";
import { WorkingTools } from "./WorkingTools";

export const TechStack = () => {
	return (
		<Box
			bg="white"
			color="black"
			py={{ base: "6", md: "20" }}
			px={{ base: "4", md: "10" }}
		>
			<Heading
				fontWeight="400"
				fontSize={{ base: "30px", md: "40px" }}
				textTransform="uppercase"
				mb="8"
				textAlign="center"
			>
				Skills
			</Heading>
			<Text
				fontWeight="semibold"
				textAlign="center"
				px={{ base: "4", md: "20" }}
				mb="12"
			>
				Here is a summary of my most important skills and abilities as a
				Creative Front-end Developer. You can have a detailed view of where I've
				put them to use in the Experience section :)
			</Text>
			<Divider mb="12" />
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
