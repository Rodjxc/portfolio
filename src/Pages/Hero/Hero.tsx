import { useMediaQuery } from "@chakra-ui/react";
import { HeroTitle } from "./HeroTitle";
import { HeroDescription } from "./HeroDescription";
import { HeroBackgroundText } from "./HeroBackgroundText";

export const Hero = () => {
	const [isLargerThanMd] = useMediaQuery("(min-width: 48em)");

	return (
		<div
			className={`relative overflow-hidden bg-lightBlack-custom px-8 mb-2 ${
				isLargerThanMd ? "py-[9%]" : "py-[20%]"
			}`}
		>
			<HeroBackgroundText />

			<div
				className={`flex flex-col relative z-10 ${
					isLargerThanMd
						? "items-start px-[5%] py-[2%]"
						: "items-center px-[2%] py-0"
				}`}
			>
				<HeroTitle />
				<HeroDescription />
			</div>
		</div>
	);
};
