import { useParams } from "react-router-dom";
import { products } from "../assets";
import { useEffect, useState } from "react";
import { ProductCard, ProductNotFound } from "../components";
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

const TypePage = () => {
  const { type } = useParams<{ type: string }>();
  console.log(type);

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
    return <ProductNotFound />;
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
