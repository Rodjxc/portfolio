import { Box, Heading, Text, Flex } from "@chakra-ui/react";
import { COLORS } from "../../common/colors";
import { workExperiences } from "./workExperience";

export const WorkExperience = () => {
	return (
		<Flex
			direction="column"
			alignItems="center"
			justifyContent="center"
			minH="100vh"
			padding="20px"
		>
			<Heading
				as="h2"
				fontWeight="400"
				fontSize="70px"
				textTransform="uppercase"
				mb="4"
				textAlign="center"
			>
				Work Experience
			</Heading>
			{workExperiences.map((experience) => (
				<Box key={experience.id} maxW="60%" mx="auto" textAlign="left" mb="8">
					<Text fontWeight="bold" fontFamily="Gruppo" fontSize="xl" mb="4">
						{experience.title}
					</Text>
					<Text
						borderLeft={`1px solid ${COLORS.PINK}`}
						pl="5%"
						lineHeight="2rem"
					>
						{experience.description}
					</Text>
				</Box>
			))}
		</Flex>
	);
};
