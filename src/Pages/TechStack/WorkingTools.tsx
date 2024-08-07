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

const workingTools = [
	"Github",
	"Adobe Photoshop and Adobe Illustrator",
	"Figma",
	"Webflow",
	"Linear",
	"Spotify",
	"and Google :)",
];

const MotionListItem = motion(ListItem);
const MotionBox = motion(Box);

export const WorkingTools = () => {
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
				src="/img/tools.jpg"
				alt="Working Tools"
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
				my="10%"
				boxShadow="md"
				textAlign="center"
				maxWidth={{ base: "90%", md: "60%" }}
				initial={{ opacity: 0, x: -50 }}
				animate={isInView ? { opacity: 1, x: 0 } : {}}
				transition={{ duration: 0.6 }}
			>
				<Heading
					fontWeight="400"
					fontSize={{ base: "18px", md: "24px" }}
					textTransform="uppercase"
					mb="4"
					color="black"
					fontFamily="'Neue Montreal', sans-serif"
				>
					Working Tools
				</Heading>
				<List color="black" fontSize="sm">
					<SimpleGrid columns={2} spacing={2} justifyItems="center">
						{workingTools.map((tool, index) => (
							<MotionListItem
								key={index}
								initial={{ opacity: 0, y: 20 }}
								animate={isInView ? { opacity: 1, y: 0 } : {}}
								transition={{ delay: index * 0.1 }}
								textAlign="center"
							>
								{tool}
							</MotionListItem>
						))}
					</SimpleGrid>
				</List>
			</MotionBox>
		</Box>
	);
};
