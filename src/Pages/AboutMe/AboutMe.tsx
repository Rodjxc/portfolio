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
import {
	faGithub,
	faInstagram,
	faLinkedinIn,
	faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MotionBox = motion(Box);

export const AboutMe = () => {
	const { scrollY } = useScroll();

	// Define media queries
	const [isLargerThanMd] = useMediaQuery("(min-width: 48em)");

	// Side to side scroll effect for the background text
	const backgroundTextX = useTransform(scrollY, [0, 500], [-300, 800]);

	// Translate left effect for the "About Me" title (only on larger screens)
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
			pt={{ base: "20%", md: "10%" }} // Increased top padding for mobile
			mb={{ base: "10%", md: "5%" }} // Increased bottom margin
		>
			<MotionBox
				style={{ x: backgroundTextX }}
				fontSize={{ base: "50px", md: "180px" }}
				fontWeight="bold"
				color="rgba(255, 255, 255, 0.1)"
				position="absolute"
				top={{ base: "50%", md: "70%" }}
				left={{ base: "50%", md: "20%" }}
				transform="translate(-50%, -50%)"
				whiteSpace="nowrap"
				zIndex={0}
				pointerEvents="none"
			>
				About Me
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
						About Me
					</Heading>
					<Text className="text-white">
						Since I was 5 I've been surrounded by computers and videogames,
						which probably laid the foundations of an interest in technology.
						This interest took me to a pivotal decision, shifting from a 10+
						years working in the craft beer industry and being a beer sommelier,
						to changing my career to become a developer.
					</Text>
					<br />
					<Text className="text-white">
						I believe that my brain naturally works exactly the way a developer
						thinks, with the logic side of programming and believing that
						there's always more than one solution to a problem. Before I used my
						creativity to make original and tasty beers and now I use it to
						create web applications. I really enjoy minimalist designs inspired
						by the likes of Next JS and Vercel. When I see a project built with
						frameworks I'm not familiar with, I instantly get an “I want to
						learn this” feeling.
					</Text>
					<br />
					<Text className="text-white">
						When I'm not at the computer I'm usually in the gym practicing
						Brazilian Jiu Jitsu, travelling, or spending time with my wife and
						dog.
					</Text>
					<br />
					<Text className="text-white">
						Oh, and I also have a YouTube channel where I make guides for
						videogames!
					</Text>
					<div className="mt-20">
						<Link
							href="https://github.com/Rodjxc"
							target="_blank"
							className="text-lg mx-3 pb-2 text-white  hover:text-pink-custom hover:border-pink-custom"
						>
							<FontAwesomeIcon icon={faGithub} className="size-6 text-white" />
						</Link>
						<Link
							href="https://www.linkedin.com/in/rod-jimeno/"
							target="_blank"
							className="text-lg mx-3 pb-2 text-white  hover:text-pink-custom hover:border-pink-custom"
						>
							<FontAwesomeIcon
								icon={faLinkedinIn}
								className="size-6 text-white"
							/>
						</Link>
						<Link
							href="https://www.instagram.com/sendaplays/"
							target="_blank"
							className="text-lg mx-3 pb-2 text-white  hover:text-pink-custom hover:border-pink-custom"
						>
							<FontAwesomeIcon
								icon={faInstagram}
								className="size-6 text-white"
							/>
						</Link>
						<Link
							href="https://www.youtube.com/@SendaPlays"
							target="_blank"
							className="text-lg mx-3 pb-2 text-white  hover:text-pink-custom hover:border-pink-custom"
						>
							<FontAwesomeIcon icon={faYoutube} className="size-6 text-white" />
						</Link>
					</div>
				</MotionBox>
			</Flex>
		</Box>
	);
};
