import { Heading, List, ListItem, Box, Image, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";

const languages = [
	{ id: "English", name: "English", proficiency: "(Daily use)" },
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
			boxShadow="md"
			_hover={{ boxShadow: "lg", transform: "translateY(-4px)" }}
			transition="all 0.3s ease"
		>
			<Flex direction={{ base: "column", md: "row-reverse" }}>
				<Box flex={{ base: "1", md: "1.5" }}>
					<Image
						src="/img/languages.webp"
						alt="Languages"
						height="100%"
						objectFit="cover"
						borderRadius={{ base: "md md 0 0", md: "md 0 0 md" }}
					/>
				</Box>
				<Box flex="2" p="6">
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
			</Flex>
		</Box>
	);
};
