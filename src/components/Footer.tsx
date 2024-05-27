import { Box, Skeleton, Text, Flex, Link } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Logo from "./Logo";

const links = [
  { name: "Home", href: "#" },
  { name: "About", href: "#" },
  { name: "Services", href: "#" },
  { name: "Contact", href: "#" },
];

const Footer = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);

  return (
    <Skeleton isLoaded={!isLoading}>
      <Box as="footer" bg="gray.800" color="white" py="6" px="3">
        <Flex justify="space-between" align="center" wrap="wrap">
          <Box>
            <Logo />
            <Text fontSize="sm">
              &copy; {new Date().getFullYear()} All rights reserved.
            </Text>
          </Box>
          <Flex>
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                p="2"
                _hover={{ textDecoration: "none" }}
              >
                {link.name}
              </Link>
            ))}
          </Flex>
        </Flex>
      </Box>
    </Skeleton>
  );
};

export default Footer;
