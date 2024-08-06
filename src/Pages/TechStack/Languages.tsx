import { Heading, List, ListItem, Box } from "@chakra-ui/react";

const languages = [
	{
		id: "English",
		name: "English",
		proficiency: "(Daily use)",
	},
	{ id: "Spanish", name: "Spanish", proficiency: "(Mother tongue)" },
	{ id: "Catalan", name: "Catalan", proficiency: "(Mother tongue)" },
	{ id: "French", name: "French", proficiency: "(Je parle un peu)" },
	{ id: "Norwegian", name: "Norwegian", proficiency: "(Survivable)" },
];

export const Languages = () => {
	return (
		<Box
			bg="white"
			borderRadius="md"
			p="6"
			boxShadow="md"
			border="1px solid #dcdcdc"
			mb="6"
		>
			<Heading
				fontWeight="400"
				fontSize="30px"
				textTransform="uppercase"
				mb="4"
				color="black"
				textAlign="center"
			>
				Languages
			</Heading>
			<List spacing={2} color="black">
				{languages.map((language) => (
					<ListItem key={language.id}>
						{language.name} - {language.proficiency}
					</ListItem>
				))}
			</List>
		</Box>
	);
};
