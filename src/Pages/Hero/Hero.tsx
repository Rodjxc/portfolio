import { Box, Flex, Heading, Text, Image, Link } from "@chakra-ui/react";
import { COLORS } from "../../common/colors";

export const Hero = () => {
	return (
		<Box
			className="pt-16"
			display="flex"
			flexDirection={{ base: "column-reverse", md: "row" }}
			textAlign={{ base: "center", md: "left" }}
			justifyContent={{ base: "center", md: "flex-start" }}
		>
			<Flex
				direction="column"
				alignItems={{ base: "center", md: "flex-start" }}
				justifyContent="center"
				paddingX={{ base: "2%", md: "5%" }}
				paddingY={{ base: "4%", md: "0" }}
			>
				<Box
					fontFamily="'Uncut-Sans', sans-serif"
					fontSize="20px"
					lineHeight="30px"
					paddingX={{ base: "0", md: "20%" }}
				>
					<Heading mb="6">Hey, I'm Rod!</Heading>
					<Text>
						Hey! I'm Rod. I've been a front-end developer since 2021 (previously
						I worked as a{" "}
						<Link
							color={COLORS.PINK}
							href="https://www.beerandcideracademy.org/meet-the-sommeliers/2018/10/10/rodrigo-jimeno"
							data-cursor-text="Wanna know more?"
							target="_blank"
							_hover={{ textDecoration: "none" }}
						>
							beer sommelier
						</Link>{" "}
						for breweries in UK and Norway). <br />
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
				</Box>
			</Flex>

			<Box
				className="hero-img-section hidden"
				display="flex"
				justifyContent="center"
				alignItems="center"
			>
				<Image
					src="/img/snd-back2.png"
					alt="profile pic for Rod"
					className="hero-img"
					maxWidth={{ base: "80%", md: "100%" }}
					data-cursor-text="Hey! That's me!"
				/>
			</Box>
		</Box>
	);
};
