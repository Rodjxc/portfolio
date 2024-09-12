import { Box } from "@chakra-ui/react";
import { motion, useScroll, useTransform } from "framer-motion";

export const HeroBackgroundText = () => {
	const { scrollY } = useScroll();

	// Side to side scroll effect for the background text
	const backgroundTextX = useTransform(scrollY, [0, 900], [-800, 800]);

	return (
		<Box
			as={motion.div}
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
		</Box>
	);
};
