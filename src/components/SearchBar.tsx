import {
  Box,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import { Search, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (search !== "") {
      navigate(`/search/${search}`);
    } else if (window.location.pathname.includes("/search")) {
      navigate("/");
    }
  }, [search, navigate]);

  return (
    <Box
      display="flex"
      alignItems="center"
      gap={2}
      width={{ md: "50%", lg: "100%" }}
      maxW="600px"
    >
      <InputGroup width="100%">
        <InputLeftElement pointerEvents="none">
          <Icon as={Search} color="gray.500" />
        </InputLeftElement>
        <Input
          placeholder="Search..."
          borderRadius="full"
          bgColor="gray.700"
          color="white"
          size="md"
          width="100%"
          _focus={{
            borderColor: "gray.500",
            boxShadow: "0 0 0 1px gray.500",
          }}
          _placeholder={{ color: "gray.400" }}
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        {search !== "" && (
          <InputRightElement width={{ base: "auto", md: "auto" }}>
            <Icon
              as={X}
              cursor="pointer"
              color="gray.500"
              onClick={() => setSearch("")}
            />
          </InputRightElement>
        )}
      </InputGroup>
    </Box>
  );
};

export default SearchBar;
