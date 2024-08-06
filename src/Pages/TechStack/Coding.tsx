import { Heading, List, ListItem, Box } from "@chakra-ui/react";

const codingLanguages = [
	{ name: "HTML/5" },
	{ name: "CSS/3" },
	{ name: "Tailwind CSS" },
	{ name: "React" },
	{ name: "JavaScript" },
	{ name: "Typescript" },
	{ name: "JSON / XML" },
	{ name: "Git" },
	{ name: "i18n Internationalization library" },
	{ name: "Component Libraries" },
	{ name: "Bootstrap" },
	{ name: "React Query" },
	{ name: "React Router" },
	{ name: "React Hook Form" },
	{ name: "Wordpress" },
];

export const Coding = () => {
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
				textAlign="left"
			>
				Coding
			</Heading>
			<List spacing={2} color="black">
				{codingLanguages.map((language) => (
					<ListItem key={language.name}>{language.name}</ListItem>
				))}
			</List>
		</Box>
	);
};
