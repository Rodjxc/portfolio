import { Box, Flex, Grid, Heading, Image, Text } from "@chakra-ui/react";
import { StaffData } from "../../../Data/StaffData";
import { COLORS } from "../../../common/colors";

export const Staff = () => (
	<Box bg={COLORS.WHITE} py="3%">
		<Flex direction="column" alignItems="center" mb="20px">
			<Heading
				as="h2"
				fontFamily="Uncut-Sans, sans-serif"
				color="black"
				fontSize="xx-large"
				my="8"
			>
				The Oslo Team
			</Heading>
			<Text
				fontFamily="Uncut-Sans, sans-serif"
				color="black"
				fontSize="20"
				mb="6"
			>
				I wear a lot of hats and raincoats around here.
			</Text>
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
					borderBottom="1px solid black"
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
								<Heading as="h3" fontSize="20px" color="black" m="0">
									{staff.position}
								</Heading>
								<Heading as="h4" fontSize="16px" color="black" m="0">
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
