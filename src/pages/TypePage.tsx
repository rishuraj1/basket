import { useParams, Navigate } from "react-router-dom";
import { products } from "../assets";
import { types } from "../assets/constants";
import { useEffect, useState } from "react";
import { ProductCard, ProductNotFound } from "../components";
import { Flex, SimpleGrid } from "@chakra-ui/react";
import { Product } from "../types";

const TypePage = () => {
  const { type = "" } = useParams<{ type?: string }>();

  if (!types.includes(type.toLowerCase() as string)) {
    return <Navigate to="/not-found" />;
  }

  const [typeProducts, setTypeProducts] = useState<Product[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const productsOfType = () => {
    const data = products.filter(
      (product) => product.type.toLowerCase() === type.toLowerCase(),
    );
    setTypeProducts(data as Product[] | null);
  };

  useEffect(() => {
    productsOfType();
  }, [type]);

  useEffect(() => {
    if (typeProducts) {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }
  }, [typeProducts]);

  if (typeProducts === null || typeProducts.length === 0) {
    return <ProductNotFound isLoading={isLoading} />;
  }

  return (
    <Flex direction="column" align="center" height={"100%"} marginBottom={2}>
      <SimpleGrid
        columns={{ base: 1, sm: 2, md: 3, lg: 3, xl: 4 }}
        spacing={6}
        mt={8}
        mb={8}
      >
        {typeProducts.map((product) => (
          <ProductCard key={product?.id} data={product} isLoading={isLoading} />
        ))}
      </SimpleGrid>
    </Flex>
  );
};

export default TypePage;
