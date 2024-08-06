import { Heading, List, ListItem, Box } from "@chakra-ui/react";
import { motion } from "framer-motion";

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

const MotionListItem = motion(ListItem);

export const Languages = () => {
	return (
		<Box
			bg="white"
			borderRadius="md"
			p="6"
			boxShadow="md"
			mb="6"
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
				Languages
			</Heading>
			<List spacing={2} color="black">
				{languages.map((language, index) => (
					<MotionListItem
						key={language.id}
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ delay: index * 0.1 }}
					>
						{language.name} - {language.proficiency}
					</MotionListItem>
				))}
			</List>
		</Box>
	);
};
