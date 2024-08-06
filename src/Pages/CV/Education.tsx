import { Heading, Link, List, ListItem } from "@chakra-ui/react";
import { COLORS } from "../../common/colors";
import { educationItems } from "./educationData";

export const Education = () => {
	return (
		<div className="flex flex-col items-center py-6">
			<Heading
				className="text-pink-custom"
				fontWeight="400"
				fontSize="40px"
				textTransform="uppercase"
				mb="20"
				textAlign="center"
			>
				Education
			</Heading>
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
		</div>
	);
};
