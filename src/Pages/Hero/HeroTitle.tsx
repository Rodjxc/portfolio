import { Box, Heading } from "@chakra-ui/react";
import { motion, useTransform, useScroll } from "framer-motion";
import { COLORS } from "../../common/colors";
import { useMediaQuery } from "@chakra-ui/react";

export const HeroTitle = () => {
	const { scrollY } = useScroll();
	const [isLargerThanMd] = useMediaQuery("(min-width: 48em)");

	// Translate left effect for the "Hey, I'm Rod!" title (only on larger screens)
	const titleTextX = useTransform(
		scrollY,
		[0, 500],
		isLargerThanMd ? [0, -150] : [0, 0],
	);

	return (
		<Box
			as={motion.div}
			style={{ x: titleTextX }}
			fontSize={{ base: "16px", md: "20px" }}
			lineHeight="30px"
			paddingX={{ base: "0", md: "20%" }}
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
		</Box>
	);
};
