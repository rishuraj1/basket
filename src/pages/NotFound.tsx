import { Box, Heading, Text, Button, VStack, Link } from "@chakra-ui/react";
import { Logo } from "../components";

const NotFound = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      bg="gray.50"
      p="6"
    >
      <VStack spacing="6" textAlign="center">
        <Logo type="notFound" />
        <Heading as="h1" size="2xl" color="gray.800">
          404
        </Heading>
        <Text fontSize="lg" color="gray.600">
          Oops! The page you are looking for does not exist.
        </Text>
        <Button as={Link} colorScheme="teal" size="lg" href="/">
          Go to Home
        </Button>
      </VStack>
    </Box>
  );
};

export default NotFound;
