import { Heading, List, ListItem, Box, Image } from "@chakra-ui/react";
import { motion, useScroll, useTransform } from "framer-motion";

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
const MotionBox = motion(Box);

export const Coding = () => {
	const { scrollY } = useScroll();

	const textX = useTransform(scrollY, [0, 500], [0, 200]);

	return (
		<Box
			position="relative"
			borderRadius="md"
			boxShadow="md"
			overflow="hidden"
			_hover={{ boxShadow: "lg", transform: "translateY(-4px)" }}
			transition="all 0.3s ease"
		>
			<Image
				src="/img/coding.jpg"
				alt="Coding"
				height="100%"
				width="100%"
				objectFit="cover"
				position="absolute"
				top="0"
				left="0"
				zIndex="1"
			/>
			<MotionBox
				bg="white"
				borderRadius="md"
				p="6"
				position="relative"
				zIndex="2"
				style={{ x: textX }}
				mt={{ base: "0", md: "auto" }}
				width={{ base: "100%", md: "70%" }}
				ml={{ base: "0", md: "auto" }}
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
			</MotionBox>
		</Box>
	);
};
