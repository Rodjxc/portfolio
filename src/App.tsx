import { ChakraProvider } from "@chakra-ui/react";
import { MyRoutes } from "./Router/MyRoutes";
import { Cursor } from "./Components/Cursor/Cursor";

export const App = () => {
	return (
		<ChakraProvider>
			<MyRoutes />
			<Cursor />
		</ChakraProvider>
	);
};
