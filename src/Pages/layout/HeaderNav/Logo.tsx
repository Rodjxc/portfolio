import { NavLink } from "react-router-dom";
import { Text } from "@chakra-ui/react";

export const Logo = () => {
	return (
		<NavLink to="/home" className="text-white no-underline mb-8">
			<Text className="text-xl">
				Rod <br />
				Jimeno
			</Text>
		</NavLink>
	);
};
