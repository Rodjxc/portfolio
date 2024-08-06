import { Heading, List, ListItem } from "@chakra-ui/react";

const workingTools = [
	"HTML5, CSS3",
	"Javascript with Typescript",
	"Tailwind & Bootstrap",
	"React JS with Vite",
	"React Router and Tanstack Router",
	"RESTful Api management",
	"Tanstack Query",
	"Adobe Photoshop and Adobe Illustrator",
	"Figma",
	"Webflow",
	"Linear",
	"Spotify",
	"and Google :)",
];

export const WorkingTools = () => {
	return (
		<div className="flex flex-col items-center py-6">
			<Heading
				className="text-pink-custom"
				fontWeight="400"
				fontSize="40px"
				textTransform="uppercase"
				mb="20"
				textAlign="center"
			>
				Working Tools
			</Heading>
			<List>
				{workingTools.map((tool, index) => (
					<ListItem key={index} mb="5px">
						{tool}
					</ListItem>
				))}
			</List>
		</div>
	);
};
