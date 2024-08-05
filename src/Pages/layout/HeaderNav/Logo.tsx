import { NavLink } from "react-router-dom";
import { Text } from "@chakra-ui/react";

export const Logo = () => {
	return (
		<NavLink to="/home" className="text-white no-underline">
			<Text className="text-2xl">&lt; Rod Jimeno /&gt;</Text>
		</NavLink>
	);
};
