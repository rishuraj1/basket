import { Box, Button, Text } from "@chakra-ui/react";
import { useToast } from "@chakra-ui/toast";

const ProductNotFound = () => {
  const toast = useToast();
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      gap={4}
    >
      <Text fontSize="xl" color="red.500" fontWeight="bold">
        Product not found!
      </Text>
      <Button
        colorScheme="blue"
        onClick={() => {
          toast({
            title: "Redirecting to Home Page",
            description: "Please wait...",
            status: "info",
            duration: 2000,
            isClosable: true,
          });
          setTimeout(() => {
            window.location.href = "/";
          }, 2000);
        }}
      >
        Go to Home Page
      </Button>
    </Box>
  );
};

export default ProductNotFound;
