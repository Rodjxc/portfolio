import { Heading, List, ListItem } from "@chakra-ui/react";

const codingLanguages = [
	{ name: "HTML/5" },
	{ name: "CSS/3" },
	{ name: "Tailwind CSS" },
	{ name: "React " },
	{ name: "JavaScript" },
	{ name: "Typescript" },
	{ name: "JSON / XML" },
	{ name: "Git" },
	{ name: "Component Libraries" },
	{ name: "Bootstrap" },
	{ name: "React Query" },
	{ name: "React Router" },
	{ name: "React Hook Form" },
	{ name: "Wordpress" },
];

export const Languages = () => {
	return (
		<div className="flex flex-col py-6">
			<Heading
				className="text-pink-custom"
				fontWeight="400"
				fontSize="40px"
				textTransform="uppercase"
				mb="10"
				textAlign="left"
			>
				Coding
			</Heading>
			<List>
				{codingLanguages.map((language) => (
					<ListItem key={language.name} mb="5px">
						{language.name}
					</ListItem>
				))}
			</List>
		</div>
	);
};
