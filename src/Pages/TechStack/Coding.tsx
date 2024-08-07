import {
	Box,
	Heading,
	List,
	ListItem,
	Image,
	SimpleGrid,
} from "@chakra-ui/react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

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
	{ name: "Framer Motion" },

	{ name: "Bootstrap" },
	{ name: "React Query" },
	{ name: "React Router" },
	{ name: "React Hook Form" },
	{ name: "Wordpress" },
];

const MotionListItem = motion(ListItem);
const MotionBox = motion(Box);

export const Coding = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	return (
		<Box
			position="relative"
			overflow="hidden"
			maxW={{ base: "90%", md: "70%" }}
			mx="auto"
			my="8"
			height="400px"
		>
			<Image
				src="/img/coding.jpg"
				alt="Coding"
				width="100%"
				objectFit="cover"
				position="absolute"
				top="0"
				left="0"
				zIndex="1"
				height="100%"
				opacity="0.5"
			/>
			<MotionBox
				ref={ref}
				bg="rgba(255, 255, 255, 0.9)"
				borderRadius="md"
				p="6"
				position="relative"
				zIndex="2"
				mx="auto"
				my="5%"
				boxShadow="md"
				textAlign="center"
				maxWidth={{ base: "90%", md: "60%" }}
				initial={{ opacity: 0, x: -50 }}
				animate={isInView ? { opacity: 1, x: 0 } : {}}
				transition={{ duration: 0.6 }}
			>
				<Heading
					fontWeight="700"
					fontSize={{ base: "18px", md: "24px" }}
					mb="4"
					color="black"
					fontFamily="'Montserrat', sans-serif"
				>
					Coding
				</Heading>
				<List color="black" fontSize="sm">
					<SimpleGrid columns={2} spacing={2}>
						{codingLanguages.map((language, index) => (
							<MotionListItem
								key={language.name}
								initial={{ opacity: 0, y: 20 }}
								animate={isInView ? { opacity: 1, y: 0 } : {}}
								transition={{ delay: index * 0.1 }}
							>
								{language.name}
							</MotionListItem>
						))}
					</SimpleGrid>
				</List>
			</MotionBox>
		</Box>
	);
};
