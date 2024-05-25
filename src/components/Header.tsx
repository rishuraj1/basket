import { Flex, Link } from "@chakra-ui/react";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import { Navitems } from "../assets";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <Flex
      as="header"
      bg="gray.800"
      color="white"
      p="3"
      alignItems="center"
      justifyContent="space-between"
    >
      <Logo />
      <SearchBar />

      {/* Navitems */}
      <Flex gap={4} display={{ base: "none", md: "flex" }}>
        {Navitems.map((item, index) => (
          <Link key={index} href={item.url} _hover={{ textDecoration: "none" }}>
            {item.title}
          </Link>
        ))}
      </Flex>

      {/* For Mobile devices */}
      <MobileNav />
    </Flex>
  );
};

export default Header;
