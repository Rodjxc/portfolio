import { Heading, List, ListItem, Box } from "@chakra-ui/react";

const workingTools = [
	"Github",
	"Adobe Photoshop and Adobe Illustrator",
	"Figma",
	"Webflow",
	"Linear",
	"Spotify",
	"and Google :)",
];

export const WorkingTools = () => {
	return (
		<Box
			bg="white"
			borderRadius="md"
			p="6"
			boxShadow="md"
			border="1px solid #dcdcdc"
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
					<ListItem key={index}>{tool}</ListItem>
				))}
			</List>
		</Box>
	);
};
