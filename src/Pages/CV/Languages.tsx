import { Heading, List, ListItem } from "@chakra-ui/react";

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
		<div className="flex flex-col  items-center py-6">
			<Heading
				className="text-pink-custom"
				fontWeight="400"
				fontSize="40px"
				textTransform="uppercase"
				mb="20"
				textAlign="center" // Aligns heading to the left
			>
				Languages
			</Heading>
			<List>
				{languages.map((language) => (
					<ListItem key={language.name} mb="5px">
						{language.name} - {language.proficiency}
					</ListItem>
				))}
			</List>
		</div>
	);
};
