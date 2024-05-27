import { useParams } from "react-router-dom";
import { products } from "../assets";
import { ProductCard, ProductNotFound } from "../components";
import { useEffect, useState } from "react";
import { Flex, SimpleGrid } from "@chakra-ui/react";

interface Product {
  id: number;
  type: string;
  title: string;
  description: string;
  availability: string;
  original_price: number;
  discounted_price: number;
  main_image: string;
  other_images: string[];
  offer: string;
  new_arrival: boolean;
}

const SearchedProduct = () => {
  const { search = "" } = useParams<{ search: string }>();
  console.log(search);

  const [searchProducts, setSearchProducts] = useState<Product[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const searchedProducts = () => {
    const data = products.filter(
      (product) =>
        product.title.toLowerCase().includes(search.toLowerCase()) ||
        product.description.toLowerCase().includes(search.toLowerCase()) ||
        product.type.toLowerCase().includes(search.toLowerCase()),
    );
    setSearchProducts(data as Product[] | null);
  };

  useEffect(() => {
    searchedProducts();
  }, [search]);

  useEffect(() => {
    if (searchProducts) {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }
  }, [searchProducts]);

  if (searchProducts === null || searchProducts.length === 0) {
    return (
      <Flex direction="column" align="center" height={"100%"} marginBottom={2}>
        <ProductNotFound isLoading={isLoading} />
      </Flex>
    );
  }

  return (
    <Flex direction="column" align="center" height={"100%"} marginBottom={2}>
      <SimpleGrid
        columns={{ base: 1, sm: 2, md: 3, lg: 3, xl: 4 }}
        spacing={6}
        mt={8}
        mb={8}
      >
        {searchProducts.map((product) => (
          <ProductCard key={product?.id} data={product} isLoading={isLoading} />
        ))}
      </SimpleGrid>
    </Flex>
  );
};

export default SearchedProduct;
