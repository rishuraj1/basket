import { Box, Flex, Image, Text, Link } from "@chakra-ui/react";

const Logo = () => {
  return (
    <Link href="/" _hover={{ textDecoration: "none" }}>
      <Flex as="header" bg="gray.800" color="white" p="3">
        <Box display="flex" alignItems={"center"} gap={2}>
          <Image
            src="/src/assets/logo.svg"
            alt="Logo"
            boxSize={{ base: "40px", md: "50px" }}
            bgColor={"Black"}
            borderRadius="full"
            padding={0.5}
            fallbackSrc="https://via.placeholder.com/50"
          />
          <Text
            fontSize="xx-large"
            color={"yellowgreen"}
            fontWeight="bold"
            display={"flex"}
          >
            b
            <Text fontSize="xx-large" color={"white"} fontWeight="bold">
              asket
            </Text>
            <Text fontSize="xx-large" color={"yellowgreen"} fontWeight="bold">
              .
            </Text>
          </Text>
        </Box>
      </Flex>
    </Link>
  );
};

export default Logo;
