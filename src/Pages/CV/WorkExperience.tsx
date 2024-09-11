import { Box, Text, Wrap, WrapItem, Button } from "@chakra-ui/react";
import { COLORS } from "../../common/colors";
import { workExperienceData } from "./workExperienceData";
import { motion, useScroll, useTransform } from "framer-motion";
import { useMediaQuery } from "@chakra-ui/react";
import { useRef, useState, useEffect } from "react";

export const WorkExperience = () => {
	const { scrollYProgress } = useScroll();
	const [isLargerThanMd] = useMediaQuery("(min-width: 48em)");

	// For scroll-based animations
	const ref = useRef<HTMLDivElement>(null);
	const containerRef = useRef<HTMLDivElement>(null);
	const [height, setHeight] = useState(0);

	// Corrected useEffect to calculate the height of the timeline
	useEffect(() => {
		if (ref.current) {
			const rect = ref.current.getBoundingClientRect();
			setHeight(rect.height);
		}
	}, []); // Removed ref dependency to fix the warning

	// Control timeline animations based on scroll position
	const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
	const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

	// Title animation
	const headingX = useTransform(
		scrollYProgress,
		[0, 1],
		isLargerThanMd ? [0, -200] : [0, -50],
	);

	return (
		<Box
			className="relative flex flex-col items-center py-6"
			px={{ base: "4", md: "20" }}
			ref={containerRef}
		>
			{/* Animated Title */}
			<Box
				as={motion.div}
				style={{ x: headingX }}
				fontWeight="bold"
				fontSize={{ base: "40px", md: "90px" }}
				textAlign="center"
				color={COLORS.PINK}
				fontFamily="'Montserrat', sans-serif"
			>
				Work Experience
			</Box>

			<Box
				fontWeight="normal"
				fontSize={{ base: "16px", md: "20px" }}
				textAlign="left"
				px={{ base: "4", md: "20" }}
				my="10"
				mb="16"
			>
				Here is a summary of my work experience as a Creative Front-end
				Developer.
			</Box>

			{/* Timeline container */}
			<Box
				ref={ref}
				className="relative w-full max-w-7xl mx-auto"
				py={10}
				position="relative"
			>
				{/* Timeline Line */}
				<Box
					style={{
						height: `${height}px`,
					}}
					className="absolute left-[4%] md:left-[1%] w-[2px] bg-gradient-to-b from-purple-500 via-blue-500 to-transparent"
				>
					{/* Pink scrolling line */}
					<motion.div
						style={{
							height: heightTransform,
							opacity: opacityTransform,
						}}
						className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent"
					/>
				</Box>

				{/* Work experience entries */}
				{workExperienceData.map((experience) => (
					<Box
						key={experience.title}
						className="flex justify-start pt-10 md:pt-40 gap-6"
					>
						{/* Sticky Timeline Dots and Titles */}
						<Box className="sticky flex flex-col items-center top-40 self-start max-w-xs md:max-w-sm md:w-full">
							{/* Marker: Grey circle with a black center, centered on the line */}
							<Box
								className="h-10 w-10 rounded-full bg-black dark:bg-black flex items-center justify-center"
								style={{
									position: "absolute",
									left: "2%", // Aligned with the line
									transform: "translateX(-50%)", // Center the marker on the line
								}}
							>
								{/* Inner Grey Dot */}
								<Box className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700" />
							</Box>

							{/* Title at the top */}
							<Text
								className="text-xl font-bold text-neutral-500 dark:text-neutral-400"
								ml={isLargerThanMd ? "10" : "8"} // Margin-left for spacing from the line
							>
								{experience.title}
							</Text>

							{/* Date below the title */}
							<Text
								className="text-sm font-semibold text-neutral-500 dark:text-neutral-400"
								ml={isLargerThanMd ? "10" : "8"} // Margin-left for spacing from the line
							>
								{experience.date}
							</Text>

							{/* Location below the date */}
							<Text
								className="text-sm font-normal text-neutral-500 dark:text-neutral-400"
								ml={isLargerThanMd ? "10" : "8"} // Margin-left for spacing from the line
							>
								{experience.location}
							</Text>
						</Box>

						{/* Description */}
						<Box className="relative pl-20 pr-4 md:pl-10 w-full">
							{/* Title for mobile */}
							<Text className="md:hidden text-2xl mb-4 text-left font-bold">
								{experience.title}
							</Text>

							<Text
								borderLeft={`4px solid ${COLORS.PINK}`}
								pl="5%"
								lineHeight="2rem"
							>
								{experience.description}
							</Text>

							{/* Tech Stack */}
							{experience.stack && (
								<Wrap justify="start" mt="6" spacing="2">
									{experience.stack.map((tech) => (
										<WrapItem key={tech}>
											<Button
												variant="outline"
												borderColor={COLORS.PINK}
												color={COLORS.WHITE}
												_hover={{
													borderColor: COLORS.PINK,
													color: COLORS.PINK,
												}}
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
					</Box>
				))}
			</Box>
		</Box>
	);
};
