import {
	Box,
	Flex,
	Heading,
	Text,
	Link,
	useMediaQuery,
} from "@chakra-ui/react";
import { motion, useScroll, useTransform } from "framer-motion";
import { COLORS } from "../../common/colors";

const MotionBox = motion(Box);

export const Hero = () => {
	const { scrollY } = useScroll();

	// Define media queries
	const [isLargerThanMd] = useMediaQuery("(min-width: 48em)");

	// Side to side scroll effect for the background text
	const backgroundTextX = useTransform(scrollY, [0, 900], [-800, 800]);

	// Translate left effect for the "Hey, I'm Rod!" title (only on larger screens)
	const titleTextX = useTransform(
		scrollY,
		[0, 500],
		isLargerThanMd ? [0, -150] : [0, 0],
	);

	return (
		<Box
			position="relative"
			overflow="hidden"
			className="bg-lightBlack-custom px-8 mb-2"
			py={{ base: "10%", md: "7%" }} // Increased top padding for mobile
			// mb={{ base: "10%", md: "5%" }} // Increased bottom margin
		>
			<MotionBox
				style={{ x: backgroundTextX }}
				fontSize={{ base: "50px", md: "180px" }}
				fontWeight="bold"
				color="rgba(255, 255, 255, 0.1)"
				position="absolute"
				top={{ base: "50%", md: "74%" }}
				left={{ base: "50%", md: "20%" }}
				transform="translate(-50%, -50%)"
				whiteSpace="nowrap"
				zIndex={0}
				pointerEvents="none"
			>
				Front-End Dev
			</MotionBox>
			<Flex
				direction="column"
				alignItems={{ base: "center", md: "flex-start" }}
				justifyContent="left"
				paddingX={{ base: "2%", md: "5%" }}
				paddingY={{ base: "4%", md: "2%" }}
				position="relative"
				zIndex={1}
			>
				<MotionBox
					style={{ x: titleTextX }}
					fontSize={{ base: "16px", md: "20px" }}
					lineHeight="30px"
					paddingX={{ base: "0", md: "20%" }}
					mb="20"
					textAlign="left"
				>
					<Heading
						mb="12"
						fontSize={{ base: "40px", md: "100px" }}
						fontWeight="bold"
						color={COLORS.PINK}
						fontFamily="'Montserrat', sans-serif"
						letterSpacing="normal"
					>
						Hey, I'm Rod! 👋
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
							href="https://www.meinbafoeg.de/"
							target="_blank"
							_hover={{ textDecoration: "none" }}
						>
							german students company
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
