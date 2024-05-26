import { useEffect, useState } from "react";
import { ProductCard } from "../components";
import { products } from "../assets";
import {
  SimpleGrid,
  Button,
  ButtonGroup,
  Flex,
  Icon,
  Text,
} from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import HeroSection from "../components/HeroSection";

const ITEMS_PER_PAGE = 8;

const HomePage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = currentPage * ITEMS_PER_PAGE;
  const currentProducts = products.slice(startIndex, endIndex);
  const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);

  const handlePrevPage = () => {
    setIsLoading(true);
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setIsLoading(true);
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [isLoading]);

  return (
    <Flex direction="column" align="center" height={"100%"} marginBottom={2}>
      <HeroSection isLoading={isLoading} />
      <SimpleGrid
        columns={{ base: 1, sm: 2, md: 3, lg: 3, xl: 4 }}
        spacing={6}
        mt={8}
        mb={8}
      >
        {currentProducts.map((product) => (
          <ProductCard key={product?.id} data={product} isLoading={isLoading} />
        ))}
      </SimpleGrid>
      {totalPages > 1 && (
        <ButtonGroup
          mt={4}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Button onClick={handlePrevPage} disabled={currentPage === 1}>
            <Icon as={ChevronLeftIcon} />
          </Button>
          <Text mr={2}>
            Page {currentPage} of {totalPages}
          </Text>
          <Button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            <Icon as={ChevronRightIcon} />
          </Button>
        </ButtonGroup>
      )}
    </Flex>
  );
};

export default HomePage;
