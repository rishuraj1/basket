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
} from "@chakra-ui/react";
import { MenuIcon } from "lucide-react";
import { Navitems } from "../assets";

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
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">Menu</DrawerHeader>
          <DrawerBody>
            <VStack align="start" spacing={4}>
              {Navitems.map((item, index) => (
                <Box
                  key={index}
                  as="a"
                  href={item.url}
                  w="full"
                  py={2}
                  px={4}
                  _hover={{ bgColor: "gray.700" }}
                >
                  {item.title}
                </Box>
              ))}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default MobileNav;
