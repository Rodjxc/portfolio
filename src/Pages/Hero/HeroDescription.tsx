import { Box, Text, Link } from "@chakra-ui/react";
import { COLORS } from "../../common/colors";

export const HeroDescription = () => {
	return (
		<Box textAlign="left" paddingX={{ base: "0", md: "20%" }}>
			<Text fontSize="lg">
				I've been a front-end developer since 2021 (previously I worked as a{" "}
				<Link
					color={COLORS.PINK}
					href="https://www.beerandcideracademy.org/meet-the-sommeliers/2018/10/10/rodrigo-jimeno"
					data-cursor-text="Wanna know more?"
					target="_blank"
					_hover={{ textDecoration: "none" }}
				>
					beer sommelier
				</Link>{" "}
				for breweries in the UK and Norway). <br />
				<br />
				Back in 2021, one of the tasks for my job back then was building a
				simple website and tumbled head first into the rabbit hole of coding and
				web development. Fast-forward to today, and I've had the pleasure of
				developing for a{" "}
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
					href="https://www.meinbafoeg.de/"
					target="_blank"
					_hover={{ textDecoration: "none" }}
				>
					german students company
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
	);
};
