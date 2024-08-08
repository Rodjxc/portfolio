import { Box, Text, Wrap, WrapItem, Button } from "@chakra-ui/react";
import { COLORS } from "../../common/colors";
import { workExperienceData } from "./workExperienceData";
import { motion, useScroll, useTransform } from "framer-motion";
import { useMediaQuery } from "@chakra-ui/react";

const MotionBox = motion(Box);

export const WorkExperience = () => {
	const { scrollY } = useScroll();
	const [isLargerThanMd] = useMediaQuery("(min-width: 48em)");

	const headingX = useTransform(
		scrollY,
		[0, 1000],
		isLargerThanMd ? [0, -700] : [0, -100],
	);

	return (
		<Box
			className="flex flex-col items-center py-6"
			px={{ base: "4", md: "20" }}
		>
			<MotionBox
				style={{ x: headingX }}
				fontWeight="bold"
				fontSize={{ base: "40px", md: "90px" }}
				textAlign="center"
				color={COLORS.PINK}
				fontFamily="'Montserrat', sans-serif"
			>
				Work Experience
			</MotionBox>
			<MotionBox
				fontWeight="normal"
				fontSize={{ base: "16px", md: "20px" }}
				textAlign="left"
				px={{ base: "4", md: "20" }}
				my="10"
				mb="16"
			>
				Here is a summary of my work experience as a Creative Front-end
				Developer.
			</MotionBox>

			{workExperienceData.map((experience) => (
				<Box
					key={experience.title}
					maxW="80%"
					mx="auto"
					textAlign="left"
					mb="12"
				>
					<Text fontWeight="bold" fontFamily="Montserrat" fontSize="xl" mb="4">
						{experience.title}
					</Text>
					<Text
						borderLeft={`4px solid ${COLORS.PINK}`}
						pl="5%"
						lineHeight="2rem"
					>
						{experience.description}
					</Text>
					{experience.stack && (
						<Wrap justify="start" mt="6" spacing="2">
							{experience.stack.map((tech) => (
								<WrapItem key={tech}>
									<Button
										variant="outline"
										borderColor={COLORS.PINK}
										color="white"
										_hover={{ borderColor: COLORS.PINK, color: COLORS.PINK }}
										size="sm"
										fontSize="sm"
									>
										{tech}
									</Button>
								</WrapItem>
							))}
						</Wrap>
					)}
				</Box>
			))}
		</Box>
	);
};
