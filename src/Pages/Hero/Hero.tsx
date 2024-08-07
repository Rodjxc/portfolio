import { Box, Flex, Heading, Text, Link } from "@chakra-ui/react";
import { motion, useScroll, useTransform } from "framer-motion";
import { COLORS } from "../../common/colors";

const MotionBox = motion(Box);

export const Hero = () => {
	const { scrollY } = useScroll();

	const backgroundTextX = useTransform(scrollY, [0, 500], [-300, 800]);
	const titleTextX = useTransform(scrollY, [0, 500], [0, -150]);

	return (
		<Box
			position="relative"
			overflow="hidden"
			className="bg-lightBlack-custom py-2 px-8"
		>
			<MotionBox
				style={{ x: backgroundTextX }}
				fontSize={{ base: "80px", md: "180px" }}
				fontWeight="bold"
				color="rgba(255, 255, 255, 0.1)"
				position="absolute"
				top="70%"
				left="20%"
				transform="translate(-50%, -50%)"
				whiteSpace="nowrap"
				zIndex={0}
				pointerEvents="none" // This ensures the text doesn't interfere with other elements
			>
				Front-End Dev
			</MotionBox>
			<Flex
				direction="column"
				alignItems={{ base: "center", md: "flex-start" }}
				justifyContent="left"
				paddingX={{ base: "2%", md: "5%" }}
				paddingY={{ base: "4%", md: "0" }}
				position="relative"
				zIndex={1}
			>
				<MotionBox
					style={{ x: titleTextX }}
					fontFamily="'Montserrat', sans-serif"
					fontSize={{ base: "16px", md: "20px" }}
					lineHeight="30px"
					paddingX={{ base: "0", md: "20%" }}
					my="28"
					textAlign="left"
				>
					<Heading
						mb="12"
						fontSize={{ base: "60px", md: "100px" }}
						fontWeight="bold"
						color={COLORS.PINK}
						fontFamily="'Montserrat', sans-serif"
						letterSpacing="wide"
					>
						Hey, I'm Rod!
					</Heading>
					<Text>
						I've been a front-end developer since 2021 (previously I worked as a{" "}
						<Link
							color={COLORS.PINK}
							href="https://www.beerandcideracademy.org/meet-the-sommeliers/2018/10/10/rodrigo-jimeno"
							data-cursor-text="Wanna know more?"
							target="_blank"
							_hover={{ textDecoration: "none" }}
						>
							beer sommelier
						</Link>{" "}
						for breweries in the UK and Norway). <br />
						<br />
						Back in 2021, one of the tasks for my job back then was building a
						simple website and tumbled head first into the rabbit hole of coding
						and web development. Fast-forward to today, and I've had the
						privilege of building software for a{" "}
						<Link
							color={COLORS.PINK}
							href="https://www.estatelab.no/"
							target="_blank"
							_hover={{ textDecoration: "none" }}
						>
							real estate management app
						</Link>
						, a{" "}
						<Link
							color={COLORS.PINK}
							href="https://www.macondo.no/"
							target="_blank"
							_hover={{ textDecoration: "none" }}
						>
							beer importer
						</Link>
						, a{" "}
						<Link
							color={COLORS.PINK}
							href="https://www.estatelab.no/"
							target="_blank"
							_hover={{ textDecoration: "none" }}
						>
							start-up
						</Link>
						, and also some{" "}
						<Link
							color={COLORS.PINK}
							href="https://www.lafogataderaid.com/"
							target="_blank"
							_hover={{ textDecoration: "none" }}
						>
							personal projects
						</Link>
						.
					</Text>
				</MotionBox>
			</Flex>
		</Box>
	);
};
