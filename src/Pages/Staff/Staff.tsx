import { useState } from "react";
import { Box, Grid, Heading, Flex } from "@chakra-ui/react";
import { StaffData } from "./StaffData";
import { COLORS } from "../../common/colors";
import { cn } from "../../lib/utils";

export const Staff = () => {
	const [hovered, setHovered] = useState<number | null>(null);

	return (
		<Box
			className="bg-lightBlack-custom text-white py-8"
			style={{ width: "100%", padding: "4rem" }}
			overflowX="hidden"
		>
			<Flex direction="column" alignItems="center" mb="20px">
				<Heading
					fontWeight="bold"
					fontSize={{ base: "40px", md: "70px" }}
					fontFamily="'Montserrat', sans-serif"
					color={COLORS.PINK}
					mb="6"
				>
					The Oslo Team 💭
				</Heading>
				<Box fontSize={{ base: "16px", md: "20px" }} mb="6">
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
				{StaffData.map((staff, index) => (
					<Box
						key={staff.id}
						onMouseEnter={() => setHovered(index)}
						onMouseLeave={() => setHovered(null)}
						className={cn(
							"rounded-lg relative bg-gray-100 dark:bg-neutral-900 overflow-hidden h-60 md:h-96 w-full transition-all duration-300 ease-out",
							hovered !== null && hovered !== index && "blur-sm scale-[0.98]",
						)}
					>
						{/* Updated image styling */}
						<img
							src={`/img/${staff.id}.jpg`}
							alt={` ${staff.name}`}
							className="object-cover absolute inset-0 w-full h-full"
						/>
						{/* Text overlay */}
						<Box
							className={cn(
								"absolute inset-0 bg-black/50 flex items-end py-8 px-4 transition-opacity duration-300",
								hovered === index ? "opacity-100" : "opacity-0",
							)}
						>
							<Flex direction="column">
								<Heading as="h3" fontSize="20px" color="white" mb="2">
									{staff.position}
								</Heading>
								<Heading as="h4" fontSize="16px" color="white">
									{staff.name}
								</Heading>
							</Flex>
						</Box>
					</Box>
				))}
			</Grid>
		</Box>
	);
};
