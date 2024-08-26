import { Staff } from "../../Staff/Staff";
import { TechStack } from "../../TechStack/TechStack";
import { Hero } from "../../Hero/Hero";

export const Home = () => {
	return (
		<div className="bg-lightBlack-custom text-white">
			<Hero />
			<div mt={{ base: "10%", md: "5%" }}>
				<TechStack />
			</div>
			<Staff />
		</div>
	);
};
