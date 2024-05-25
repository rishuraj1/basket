import {
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Box,
} from "@chakra-ui/react";
import { Navitems } from "../assets";
import { MenuIcon } from "lucide-react";

const MobileNav = () => {
  return (
    <Box display={{ base: "block", md: "none" }}>
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label="Options"
          icon={<MenuIcon />}
          bgColor={"transparent"}
          color={"white"}
          _hover={{ color: "gray.300" }}
          _active={{ bgColor: "gray.800" }}
        />
        <MenuList color={"white"} bgColor={"gray.800"} border={"none"}>
          {Navitems.map((item, index) => (
            <MenuItem key={index} bgColor={"gray.800"}>
              {item.title}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Box>
  );
};

export default MobileNav;
