import { Heading, List, ListItem, Box, Image, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";

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

export const WorkingTools = () => {
	return (
		<Box
			bg="white"
			borderRadius="md"
			boxShadow="md"
			_hover={{ boxShadow: "lg", transform: "translateY(-4px)" }}
			transition="all 0.3s ease"
		>
			<Flex direction={{ base: "column", md: "row" }}>
				<Box flex={{ base: "1", md: "1.5" }}>
					<Image
						src="/img/tools.jpg"
						alt="Working Tools"
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
						Working Tools
					</Heading>
					<List spacing={2} color="black">
						{workingTools.map((tool, index) => (
							<MotionListItem
								key={index}
								initial={{ opacity: 0, x: -20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ delay: index * 0.1 }}
							>
								{tool}
							</MotionListItem>
						))}
					</List>
				</Box>
			</Flex>
		</Box>
	);
};
