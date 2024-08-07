import { Box, Link, List, ListItem } from "@chakra-ui/react";
import { COLORS } from "../../common/colors";
import { educationItems } from "./educationData";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

export const Education = () => {
	return (
		<Box
			className="flex flex-col items-center py-6"
			px={{ base: "4", md: "20" }}
		>
			<MotionBox
				fontWeight="bold"
				fontSize={{ base: "40px", md: "90px" }}
				textAlign="center"
				color={COLORS.PINK}
				my={{ base: 10, md: 20 }}
				fontFamily="'Montserrat', sans-serif"
			>
				Education
			</MotionBox>

			<MotionBox
				fontSize={{ base: "80px", md: "200px" }}
				fontWeight="bold"
				color="rgba(255, 255, 255, 0.1)"
				position="absolute"
				top="50%"
				left="50%"
				transform="translate(-50%, -50%)"
				whiteSpace="nowrap"
				pointerEvents="none"
				zIndex={-1}
				fontFamily="'Montserrat', sans-serif"
			>
				Education
			</MotionBox>

			<List>
				{educationItems.map((item, index) => (
					<ListItem key={index} mb="15px">
						<Link
							href={item.href}
							color={COLORS.WHITE}
							_hover={{ color: COLORS.PINK }}
							textDecoration="none"
						>
							{item.text}
						</Link>
					</ListItem>
				))}
			</List>
		</Box>
	);
};
