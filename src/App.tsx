import { ChakraProvider, Box } from "@chakra-ui/react";
import { MyRoutes } from "./Router/MyRoutes";
import { Cursor } from "./Components/Cursor/Cursor";

export const App = () => {
  return (
    <ChakraProvider>
      <Box>
        <MyRoutes />
        <Cursor />
      </Box>
    </ChakraProvider>
  );
};
