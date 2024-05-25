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
    <Box display="flex" alignItems="center" gap={2}>
      <InputGroup>
        <InputLeftElement>
          <Icon as={Search} />
        </InputLeftElement>
        <Input
          placeholder="Search..."
          borderRadius={"full"}
          bgColor={"gray.900"}
          size={{
            base: "sm",
            md: "md",
          }}
          width={{ base: "150px", md: "400px" }}
          _focus={{
            borderColor: "gray.900",
            outline: "none",
          }}
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        {search !== "" && (
          <InputRightElement>
            <Icon as={X} cursor={"pointer"} onClick={() => setSearch("")} />
          </InputRightElement>
        )}
      </InputGroup>
    </Box>
  );
};

export default SearchBar;
