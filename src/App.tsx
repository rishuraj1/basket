import { Outlet } from "react-router-dom";
import { Box, Flex } from "@chakra-ui/react";
import { Footer, Header } from "./components";

function App() {
  return (
    <Flex direction="column" minH="100vh">
      <Header />
      <Box as="main" flex="1">
        <Outlet />
      </Box>
      <Footer />
    </Flex>
  );
}

export default App;
