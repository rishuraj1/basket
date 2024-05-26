import { Flex, Link, useMediaQuery, IconButton, Icon } from "@chakra-ui/react";
import { ShoppingBag, Heart, User } from "lucide-react";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import { Navitems } from "../assets";
import MobileNav from "./MobileNav";
import { Cart } from ".";
import { useEffect, useState } from "react";

const Header = () => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  return (
    <Flex
      as="header"
      bg="gray.800"
      color="white"
      p={{ base: "3", md: "4" }}
      alignItems="center"
      justifyContent="space-between"
      flexWrap="wrap"
      flexDirection={"column"}
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
          <IconButton
            aria-label="Wishlist"
            icon={<Icon as={Heart} />}
            bgColor="transparent"
            color="white"
            _hover={{ color: "gray.300" }}
            _active={{ bgColor: "gray.800" }}
          />
          <IconButton
            aria-label="Profile"
            icon={<Icon as={User} />}
            bgColor="transparent"
            color="white"
            _hover={{ color: "gray.300" }}
            _active={{ bgColor: "gray.800" }}
          />
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
              _hover={{ bgColor: "gray.700", borderRadius: "md" }}
            >
              {item.title}
            </Link>
          ))}
        </Flex>
      )}
    </Flex>
  );
};

export default Header;
