import { Link, List, ListItem } from "@chakra-ui/react";
import { COLORS } from "../../common/colors";
import { educationItems } from "./educationData";
import { motion } from "framer-motion";

export const Education = () => {
	return (
		<div className="flex flex-col items-center py-6 px-4 md:px-20">
			<motion.div
				className="font-bold text-center text-[40px] md:text-[90px] text-pink my-10 md:my-20"
				style={{ fontFamily: "'Montserrat', sans-serif", color: COLORS.PINK }}
			>
				Education
			</motion.div>

			<motion.div
				className="font-bold text-[80px] md:text-[200px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 whitespace-nowrap pointer-events-none z-[-1]"
				style={{
					color: "rgba(255, 255, 255, 0.1)",
					fontFamily: "'Montserrat', sans-serif",
				}}
			>
				Education
			</motion.div>

			<List>
				{educationItems.map((item, index) => (
					<ListItem key={index} className="mb-4">
						<Link
							href={item.href}
							className="text-white hover:text-pink no-underline"
							style={{ color: COLORS.WHITE }}
						>
							{item.text}
						</Link>
					</ListItem>
				))}
			</List>
		</div>
	);
};
