import { Box, Heading, List, ListItem, Image } from "@chakra-ui/react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const languages = [
	{ id: "English", name: "English", proficiency: "(Daily use)" },
	{ id: "Spanish", name: "Spanish", proficiency: "(Mother tongue)" },
	{ id: "Catalan", name: "Catalan", proficiency: "(Mother tongue)" },
	{ id: "French", name: "French", proficiency: "(Je parle un peu)" },
	{ id: "Norwegian", name: "Norwegian", proficiency: "(Survivable)" },
];

export const Languages = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	return (
		<Box
			position="relative"
			overflow="hidden"
			maxW={{ base: "90%", md: "70%" }}
			mx="auto"
			my="8"
			height="300px"
		>
			<Image
				src="/img/languages.webp"
				alt="Languages"
				width="100%"
				objectFit="cover"
				position="absolute"
				top="0"
				left="0"
				zIndex="1"
				height="100%"
				opacity="0.5"
			/>
			<Box
				as={motion.div} // Use `as={motion.div}` for motion support
				ref={ref}
				bg="rgba(255, 255, 255, 0.9)"
				borderRadius="md"
				p="6"
				position="relative"
				zIndex="2"
				mx="auto"
				my="10%"
				boxShadow="md"
				textAlign="center"
				maxWidth={{ base: "90%", md: "60%" }}
				initial={{ opacity: 0, x: -50 }}
				animate={isInView ? { opacity: 1, x: 0 } : {}}
			>
				<Heading
					fontWeight="700"
					fontSize={{ base: "18px", md: "24px" }}
					mb="4"
					color="black"
					fontFamily="'Montserrat', sans-serif"
				>
					Languages
				</Heading>
				<List color="black" fontSize="sm">
					<Box justifyItems="center">
						{languages.map((language) => (
							<ListItem
								as={motion.li} // Use `as={motion.li}` for motion support
								key={language.id}
								initial={{ opacity: 0, y: 20 }}
								animate={isInView ? { opacity: 1, y: 0 } : {}}
								textAlign="center"
							>
								{language.name} - {language.proficiency}
							</ListItem>
						))}
					</Box>
				</List>
			</Box>
		</Box>
	);
};
