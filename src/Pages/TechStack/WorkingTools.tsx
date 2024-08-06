import { Heading, List, ListItem, Box } from "@chakra-ui/react";
import { motion } from "framer-motion";

const workingTools = [
	"Github",
	"Adobe Photoshop and Adobe Illustrator",
	"Figma",
	"Webflow",
	"Linear",
	"Spotify",
	"and Google :)",
];

const MotionListItem = motion(ListItem);

export const WorkingTools = () => {
	return (
		<Box
			bg="white"
			borderRadius="md"
			p="6"
			boxShadow="md"
			_hover={{ boxShadow: "lg", transform: "translateY(-4px)" }}
			transition="all 0.3s ease"
		>
			<Heading
				fontWeight="400"
				fontSize="30px"
				textTransform="uppercase"
				mb="4"
				color="black"
				textAlign="center"
			>
				Working Tools
			</Heading>
			<List spacing={2} color="black">
				{workingTools.map((tool, index) => (
					<MotionListItem
						key={index}
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ delay: index * 0.1 }}
					>
						{tool}
					</MotionListItem>
				))}
			</List>
		</Box>
	);
};
