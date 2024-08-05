import { Box, Flex, Heading, Text, Image } from "@chakra-ui/react";

export const Hero = () => {
	return (
		<Box
			display="flex"
			marginTop="55px"
			height="90vh"
			width="100%"
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
						a FrontEnd developer from Spain (but living in Oslo 📍) with a love
						for all things web. I've worked as a frontend developer for several
						companies, building apps and websites alike. I'm passionate about
						using my skills and experience to contribute to wider projects and
						work with amazing teams.
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
