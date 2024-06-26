import { Box, Image, Text, Link } from "@chakra-ui/react";
import { logo } from "../assets";

interface LogoProps {
  type?: "notFound";
}

const Logo = ({ type }: LogoProps) => {
  return (
    <Link href="/" _hover={{ textDecoration: "none" }}>
      <Box display="flex" alignItems={"center"} gap={2}>
        <Image
          src={logo}
          alt="Logo"
          boxSize={type === "notFound" ? 20 : { base: "40px", md: "50px" }}
          bgColor={"Black"}
          borderRadius="full"
          padding={0.5}
          fallbackSrc="https://via.placeholder.com/50"
        />
        {type !== "notFound" && (
          <Text
            fontSize={{
              base: "large",
              md: "x-large",
            }}
            color={"yellowgreen"}
            fontWeight="bold"
            display={"flex"}
          >
            b
            <Text color={"white"} fontWeight="bold">
              asket
            </Text>
            <Text color={"yellowgreen"} fontWeight="bold">
              .
            </Text>
          </Text>
        )}
      </Box>
    </Link>
  );
};

export default Logo;
