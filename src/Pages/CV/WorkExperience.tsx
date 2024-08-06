import { Box, Button, Heading, Text, Wrap, WrapItem } from "@chakra-ui/react";
import { COLORS } from "../../common/colors";
import { workExperienceData } from "./workExperienceData";

export const WorkExperience = () => {
	return (
		<div className="flex flex-col items-center py-6">
			<Heading
				className="text-pink-custom"
				fontWeight="400"
				fontSize="60px"
				textTransform="uppercase"
				mb="20"
				textAlign="center"
			>
				Work Experience
			</Heading>
			{workExperienceData.map((experience) => (
				<Box
					key={experience.title}
					maxW="80%"
					mx="auto"
					textAlign="left"
					mb="12"
				>
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
					{experience.stack && (
						<Wrap justify="center" mt="6" spacing="2">
							{experience.stack.map((tech) => (
								<WrapItem key={experience.id}>
									<Button
										variant="outline"
										borderColor={COLORS.PINK}
										color="white"
										_hover={{ borderColor: COLORS.PINK, color: COLORS.PINK }}
									>
										{tech}
									</Button>
								</WrapItem>
							))}
						</Wrap>
					)}
				</Box>
			))}
		</div>
	);
};
