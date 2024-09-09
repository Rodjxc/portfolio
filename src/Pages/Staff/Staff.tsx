import {
	Box,
	Flex,
	Grid,
	Heading,
	Image,
	useMediaQuery,
} from "@chakra-ui/react";
import { StaffData } from "./StaffData";
import { motion, useScroll, useTransform } from "framer-motion";
import { COLORS } from "../../common/colors";

export const Staff = () => {
	const { scrollY } = useScroll();
	const [isLargerThanMd] = useMediaQuery("(min-width: 48em)");

	// Adjust the transform values for larger screens only
	const headingX = useTransform(
		scrollY,
		[0, 5000],
		isLargerThanMd ? [0, -400] : [0, 0], // Disable animation on smaller screens
	);
	const textX = useTransform(
		scrollY,
		[0, 5000],
		isLargerThanMd ? [0, 100] : [0, 0], // Disable animation on smaller screens
	);

	return (
		<Box
			className="bg-lightBlack-custom text-white py-8"
			style={{ width: "100%", padding: "4rem" }}
			overflowX="hidden"
		>
			<Flex direction="column" alignItems="center" mb="20px">
				<Box
					as={motion.div}
					style={{ x: headingX }}
					fontWeight="bold"
					fontSize={{ base: "40px", md: "70px" }} // Adjust font size for smaller screens
					fontFamily="'Montserrat', sans-serif"
					color={COLORS.PINK}
					mb="6"
				>
					The Oslo Team 💭
				</Box>
				<Box
					as={motion.div}
					style={{ x: textX }}
					fontSize={{ base: "16px", md: "20px" }}
					mb="6"
				>
					I wear a lot of hats around here.
				</Box>
			</Flex>

			<Grid
				templateColumns={{
					base: "repeat(1, 1fr)",
					md: "repeat(2, 1fr)",
					lg: "repeat(3, 1fr)",
				}}
				gap="20px"
				px="4%"
			>
				{StaffData.map((staff) => (
					<Box
						key={staff.id}
						maxW="320px"
						borderBottom="1px solid white"
						className="card"
					>
						<Flex direction="column" as="article">
							<Image
								src={`/img/${staff.id}.jpg`}
								alt={`Image of ${staff.name}`}
								className="card-image"
								width="100%"
								height="auto"
							/>
							<Box className="card-text" pt="10px" mb="25px">
								<Flex
									direction="column"
									alignItems="flex-end"
									className="position-name"
								>
									<Heading as="h3" fontSize="20px" m="0">
										{staff.position}
									</Heading>
									<Heading as="h4" fontSize="16px" m="0">
										{staff.name}
									</Heading>
								</Flex>
							</Box>
						</Flex>
					</Box>
				))}
			</Grid>
		</Box>
	);
};
