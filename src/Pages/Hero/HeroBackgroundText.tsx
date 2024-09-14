import { motion, useScroll, useTransform } from "framer-motion";

export const HeroBackgroundText = () => {
	const { scrollY } = useScroll();

	// Side-to-side scroll effect for the background text
	const backgroundTextX = useTransform(scrollY, [0, 900], [-400, 400]);

	return (
		<motion.div
			style={{ x: backgroundTextX }}
			className="absolute text-[50px] md:text-[180px] font-bold text-white opacity-10 top-[92%] md:top-[74%] left-1/2 md:left-[20%] transform -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none whitespace-nowrap"
		>
			Front-End Dev
		</motion.div>
	);
};
