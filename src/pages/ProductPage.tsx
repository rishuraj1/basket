import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  Box,
  Flex,
  Image,
  Text,
  Heading,
  VStack,
  HStack,
  Skeleton,
  Badge,
} from "@chakra-ui/react";
import { products } from "../assets";
import {
  CartButton,
  ClickToInquire,
  ProductImages,
  ProductNotFound,
  ShowLink,
  WishlistButton,
} from "../components";
import { Product } from "../types";

const ProductPage: React.FC = () => {
  const { id, type } = useParams<Record<string, string>>();
  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const findProduct = (type: string, id: string) => {
      const foundProduct = products.find(
        (product) => product.type === type && product.id === Number(id),
      );
      setProduct((foundProduct as Product) ?? null);
    };

    if (type && id) {
      findProduct(type, id);
    }
  }, [id, type]);

  useEffect(() => {
    if (product) {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }
  }, [product]);

  return (
    <>
      <Skeleton isLoaded={!isLoading}>
        <ShowLink title={product?.title ?? ""} type={type ?? ""} />
      </Skeleton>
      <Flex
        w="100%"
        minH="100vh"
        justifyContent="center"
        alignItems="center"
        p={4}
        bg="gray.100"
      >
        {product ? (
          <Flex
            w={{ base: "100%", md: "80%", lg: "70%" }}
            bg="white"
            borderRadius="md"
            boxShadow="lg"
            overflow="hidden"
            flexDirection={{ base: "column", md: "row" }}
          >
            <Box
              w={{ base: "100%", md: "50%" }}
              h={{ base: "300px", md: "600px" }}
              p={4}
            >
              <Skeleton
                height="100%"
                isLoaded={!isLoading}
                display="flex"
                justifyContent="center"
                alignItems="center"
                flexDirection="column"
                gap={2}
              >
                <Image
                  src={product.main_image}
                  alt={product.title}
                  objectFit="contain"
                  w="100%"
                  h="90%"
                />
                <WishlistButton id={product.id} />
              </Skeleton>
            </Box>
            <Flex
              w={{ base: "100%", md: "50%" }}
              p={6}
              direction="column"
              justifyContent="space-between"
            >
              <VStack align="start" spacing={4}>
                <Skeleton isLoaded={!isLoading}>
                  <Heading as="h1" size="lg">
                    {product.title}
                  </Heading>
                </Skeleton>
                <Skeleton isLoaded={!isLoading}>
                  <Text fontWeight="bold">Type: {product.type}</Text>
                </Skeleton>
                <Skeleton isLoaded={!isLoading}>
                  <Text>{product.description}</Text>
                </Skeleton>
                <Skeleton isLoaded={!isLoading} display="flex" gap={2}>
                  {product.new_arrival && (
                    <Badge colorScheme="green">New Arrival</Badge>
                  )}
                  {product.offer && (
                    <Badge colorScheme="blue">{product.offer}</Badge>
                  )}
                </Skeleton>
                <Skeleton isLoaded={!isLoading}>
                  <Text fontWeight="bold" color="green.500">
                    Availability: {product.availability}
                  </Text>
                  <Text fontWeight="bold" textDecoration="line-through">
                    Original Price: ${product.original_price}
                  </Text>
                  <Text fontWeight="bold" color="red.500">
                    Discounted Price: ${product.discounted_price}
                  </Text>
                </Skeleton>
              </VStack>
              {product?.rating && (
                <Skeleton isLoaded={!isLoading}>
                  <Text as="span" fontWeight="bold">
                    Rating:{" "}
                  </Text>
                  <Badge colorScheme="yellow" rounded="md">
                    <Skeleton isLoaded={!isLoading}>
                      {product?.rating} ★
                    </Skeleton>
                  </Badge>
                </Skeleton>
              )}
              <HStack mt={4} spacing={4}>
                <ProductImages
                  id={product.id}
                  isLoading={isLoading}
                  setProduct={setProduct}
                />
              </HStack>
              <HStack spacing={4} mt={8}>
                <CartButton id={product.id} isLoading={isLoading} />
                <ClickToInquire
                  isLoading={isLoading}
                  title={product.title}
                  price={product.discounted_price}
                />
              </HStack>
            </Flex>
          </Flex>
        ) : (
          <ProductNotFound isLoading={isLoading} />
        )}
      </Flex>
    </>
  );
};

export default ProductPage;
