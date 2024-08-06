import { Heading, List, ListItem, Box } from "@chakra-ui/react";
import { motion } from "framer-motion";

const codingLanguages = [
	{ name: "HTML/5" },
	{ name: "CSS/3" },
	{ name: "Tailwind CSS" },
	{ name: "React" },
	{ name: "JavaScript" },
	{ name: "Typescript" },
	{ name: "i18n Internationalization library" },
	{ name: "JSON / XML" },
	{ name: "Git" },
	{ name: "Component Libraries" },
	{ name: "Bootstrap" },
	{ name: "React Query" },
	{ name: "React Router" },
	{ name: "React Hook Form" },
	{ name: "Wordpress" },
];

const MotionListItem = motion(ListItem);

export const Coding = () => {
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
				textAlign="left"
			>
				Coding
			</Heading>
			<List spacing={2} color="black">
				{codingLanguages.map((language, index) => (
					<MotionListItem
						key={language.name}
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ delay: index * 0.1 }}
					>
						{language.name}
					</MotionListItem>
				))}
			</List>
		</Box>
	);
};
