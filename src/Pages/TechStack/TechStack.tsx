import {
	Box,
	Heading,
	List,
	ListItem,
	Image,
	useMediaQuery,
} from "@chakra-ui/react";

export const TechStack = () => {
	const [isLargerThan890px] = useMediaQuery("(min-width: 890px)");

	return (
		<Box
			className="skills "
			bg="white"
			color="black"
			display="flex"
			alignItems="center"
			justifyContent="center"
			paddingY="3%"
			flexDirection={isLargerThan890px ? "row" : "column"}
			textAlign={isLargerThan890px ? "left" : "center"}
		>
			<Heading
				fontFamily="'Work Sans', sans-serif"
				paddingRight="2%"
				fontSize="4vh"
				borderRight={isLargerThan890px ? "2px solid black" : "none"}
				borderBottom={isLargerThan890px ? "none" : "2px solid black"}
				marginBottom={isLargerThan890px ? "0" : "3rem"}
				paddingBottom={isLargerThan890px ? "0" : "1rem"}
			>
				Tech Stack
			</Heading>
			<List
				listStyleType="none"
				display="flex"
				flexDirection={isLargerThan890px ? "row" : "column"}
				alignItems="center"
				justifyContent="center"
				marginLeft={isLargerThan890px ? "2%" : "0"}
			>
				<ListItem
					className="skill "
					marginRight="10px"
					marginBottom={isLargerThan890px ? "0" : "10px"}
					cursor="pointer"
				>
					<Image
						src="https://skillicons.dev/icons?i=html,css"
						alt="HTML and CSS"
						_hover={{
							transform: "translateY(-1rem)",
							transition: "all 0.5s ease-in-out",
						}}
					/>
				</ListItem>
				<ListItem
					className="skill "
					marginRight="10px"
					marginBottom={isLargerThan890px ? "0" : "10px"}
					cursor="pointer"
					transitionDelay="200ms"
				>
					<Image
						src="https://skillicons.dev/icons?i=js,ts"
						alt="JavaScript and TypeScript"
						_hover={{
							transform: "translateY(-1rem)",
							transition: "all 0.5s ease-in-out",
						}}
					/>
				</ListItem>
				<ListItem
					className="skill "
					marginRight="10px"
					marginBottom={isLargerThan890px ? "0" : "10px"}
					cursor="pointer"
					transitionDelay="400ms"
				>
					<Image
						src="https://skillicons.dev/icons?i=figma,ps"
						alt="Figma and Photoshop"
						_hover={{
							transform: "translateY(-1rem)",
							transition: "all 0.5s ease-in-out",
						}}
					/>
				</ListItem>
				<ListItem
					className="skill "
					marginRight="10px"
					marginBottom={isLargerThan890px ? "0" : "10px"}
					cursor="pointer"
					transitionDelay="600ms"
				>
					<Image
						src="https://skillicons.dev/icons?i=react,vite"
						alt="React and Vite"
						_hover={{
							transform: "translateY(-1rem)",
							transition: "all 0.5s ease-in-out",
						}}
					/>
				</ListItem>
				<ListItem
					className="skill"
					marginRight="10px"
					marginBottom={isLargerThan890px ? "0" : "10px"}
					cursor="pointer"
					transitionDelay="800ms"
				>
					<Image
						src="https://skillicons.dev/icons?i=bootstrap,tailwind,scss"
						alt="Bootstrap, Tailwind, and SCSS"
						_hover={{
							transform: "translateY(-1rem)",
							transition: "all 0.5s ease-in-out",
						}}
					/>
				</ListItem>
			</List>
		</Box>
	);
};
