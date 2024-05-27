import {
  Box,
  IconButton,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  VStack,
  HStack,
  Icon,
  Link,
} from "@chakra-ui/react";
import { Heart, MenuIcon, User } from "lucide-react";
import { Navitems } from "../assets";
import Cart from "./Cart";

const MobileNav = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box display={{ base: "block", md: "none" }}>
      <IconButton
        aria-label="Open Menu"
        icon={<MenuIcon />}
        onClick={onOpen}
        bgColor={"transparent"}
        color={"white"}
        _hover={{ color: "gray.300" }}
        _active={{ bgColor: "gray.800" }}
      />
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bgColor={"gray.800"} color={"white"}>
          <DrawerCloseButton top={4} />
          <DrawerHeader borderBottomWidth="1px">Menu</DrawerHeader>
          <DrawerBody
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
          >
            <VStack align="center" spacing={4}>
              {Navitems.map((item, index) => (
                <Box
                  key={index}
                  _hover={{ color: "gray.300" }}
                  _active={{ bgColor: "gray.800" }}
                  display={{ base: "flex", md: "none" }}
                  flexDirection={{ base: "column", md: "row" }}
                  alignItems="center"
                  justifyContent="center"
                  w="full"
                  p={2}
                >
                  <Link href={item?.url}>{item?.title}</Link>
                </Box>
              ))}
              <HStack spacing={4} marginTop={5}>
                <Cart />
                <IconButton
                  aria-label="Wishlist"
                  icon={<Icon as={Heart} />}
                  bgColor="transparent"
                  color="white"
                  _hover={{ color: "gray.300", transform: "scale(1.1)" }}
                  _active={{ bgColor: "gray.800" }}
                />
                <IconButton
                  aria-label="Profile"
                  icon={<Icon as={User} />}
                  bgColor="transparent"
                  color="white"
                  _hover={{ color: "gray.300", transform: "scale(1.1)" }}
                  _active={{ bgColor: "gray.800" }}
                />
              </HStack>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default MobileNav;
