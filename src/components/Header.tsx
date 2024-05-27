import {
  Flex,
  Link,
  useMediaQuery,
  IconButton,
  Icon,
  Skeleton,
  Tooltip,
} from "@chakra-ui/react";
import { Heart, User } from "lucide-react";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import { Navitems } from "../assets";
import MobileNav from "./MobileNav";
import { Cart } from ".";
import { useEffect, useState } from "react";

const Header = () => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <Skeleton isLoaded={!isLoading}>
      <Flex
        as="header"
        bg="gray.800"
        color="white"
        p={{ base: "3", md: "4" }}
        alignItems="center"
        justifyContent="space-between"
        flexWrap="wrap"
        flexDirection="column"
      >
        <Flex
          w="full"
          justifyContent="space-between"
          alignItems="center"
          mb={{ base: "4", md: "0" }}
        >
          {/* Logo */}
          <Logo />

          {!isMobile && <SearchBar />}

          <Flex gap={4} display={{ base: "none", md: "flex" }}>
            <Cart />
            <Tooltip label="Wishlist" aria-label="Wishlist" placement="bottom">
              <IconButton
                aria-label="Wishlist"
                icon={<Icon as={Heart} />}
                bgColor="transparent"
                color="white"
                _hover={{ color: "gray.300", transform: "scale(1.1)" }}
                _active={{ bgColor: "gray.800" }}
              />
            </Tooltip>
            <Tooltip label="Profile" aria-label="Profile" placement="bottom">
              <IconButton
                aria-label="Profile"
                icon={<Icon as={User} />}
                bgColor="transparent"
                color="white"
                _hover={{ color: "gray.300", transform: "scale(1.1)" }}
                _active={{ bgColor: "gray.800" }}
              />
            </Tooltip>
          </Flex>

          {/* MobileNav (Show on Mobile) */}
          {isMobile && <MobileNav />}
        </Flex>

        {/* Nav Links */}
        {!isMobile && (
          <Flex
            w="full"
            display={{ base: "none", md: "flex" }}
            justifyContent="center"
            alignItems="center"
            gap={10}
          >
            {Navitems.map((item, index) => (
              <Link
                key={index}
                href={item.url}
                p={2}
                _hover={{
                  borderRadius: "md",
                  transition: "all 0.3s",
                  transform: "scale(1.1)",
                }}
              >
                {item?.title}
              </Link>
            ))}
          </Flex>
        )}
      </Flex>
    </Skeleton>
  );
};

export default Header;
