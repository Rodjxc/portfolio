import { Box, Flex, useMediaQuery } from "@chakra-ui/react";
import { HeroTitle } from "./HeroTitle";
import { HeroDescription } from "./HeroDescription";
import { HeroBackgroundText } from "./HeroBackgroundText"; // Import the new component

export const Hero = () => {
	const [isLargerThanMd] = useMediaQuery("(min-width: 48em)");

	const topPadding = isLargerThanMd ? "9%" : "20%";

	return (
		<Box
			position="relative"
			overflow="hidden"
			className="bg-lightBlack-custom px-8 mb-2"
			py={topPadding}
		>
			<HeroBackgroundText />

			<Flex
				direction="column"
				alignItems={{ base: "center", md: "flex-start" }}
				justifyContent="left"
				paddingX={{ base: "2%", md: "5%" }}
				paddingY={{ base: "0%", md: "2%" }}
				position="relative"
				zIndex={1}
			>
				<HeroTitle />
				<HeroDescription />
			</Flex>
		</Box>
	);
};
