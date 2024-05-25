import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  Box,
  Flex,
  Image,
  Text,
  Heading,
  Button,
  VStack,
  HStack,
  Icon,
  Skeleton,
} from "@chakra-ui/react";
import { products } from "../assets";
import { MessageCirclePlus } from "lucide-react";
import { ShowLink } from "../components";

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
}

const ProductPage: React.FC = () => {
  const { id, type } = useParams<Record<string, string>>();
  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const findProduct = (type: string, id: string) => {
    const temp = products.find(
      (product) => product.type === type && product.id === Number(id),
    );
    setProduct(temp ?? null);
  };

  useEffect(() => {
    findProduct(type, id);
  }, [id, type]);

  useEffect(() => {
    if (product) {
      setIsLoading(false);
    }
  }, [product]);

  return (
    <>
      <Skeleton isLoaded={!isLoading}>
        <ShowLink title={product?.title as string} type={type as string} />
      </Skeleton>
      <Flex
        w="100%"
        h="100vh"
        justifyContent="center"
        alignItems="center"
        p={4}
        bg="gray.100"
      >
        {product ? (
          <Flex
            w={{ base: "100%", md: "70%", lg: "90%" }}
            bg="white"
            borderRadius="md"
            boxShadow="lg"
            overflow="hidden"
            direction={{ base: "column", md: "row" }}
          >
            <Box
              w={{ base: "100%", md: "50%" }}
              h={{ base: "300px", md: "500px" }}
              p={4}
            >
              <Skeleton height="100%" isLoaded={!isLoading}>
                <Image
                  src={product?.main_image}
                  alt={product?.title}
                  objectFit="contain"
                  w="100%"
                  h="100%"
                />
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
                    {product?.title}
                  </Heading>
                </Skeleton>
                <Skeleton isLoaded={!isLoading}>
                  <Text fontWeight="bold">Type: {product?.type}</Text>
                </Skeleton>
                <Skeleton isLoaded={!isLoading}>
                  <Text>{product?.description}</Text>
                </Skeleton>
                <Skeleton isLoaded={!isLoading}>
                  <Text fontWeight="bold" color="green.500">
                    Availability: {product?.availability}
                  </Text>
                  <Text fontWeight="bold" textDecoration="line-through">
                    Original Price: ${product?.original_price}
                  </Text>
                  <Text fontWeight="bold" color="red.500">
                    Discounted Price: ${product?.discounted_price}
                  </Text>
                </Skeleton>
              </VStack>
              <HStack mt={4} spacing={4}>
                {product?.other_images.map((image, index) => (
                  <Skeleton key={index} isLoaded={!isLoading}>
                    <Image
                      key={index}
                      src={image}
                      alt={`other-image-${index}`}
                      boxSize="100px"
                      objectFit="cover"
                      borderRadius="md"
                      onClick={() =>
                        setProduct((prev) => {
                          if (!prev) return prev;
                          const newOtherImages = prev.other_images.map(
                            (img, i) => (i === index ? prev.main_image : img),
                          );
                          return {
                            ...prev,
                            other_images: newOtherImages,
                            main_image: image,
                          };
                        })
                      }
                    />
                  </Skeleton>
                ))}
              </HStack>
              <HStack spacing={4} mt={8}>
                {product?.availability === "In Stock" ? (
                  <Skeleton isLoaded={!isLoading}>
                    <Button colorScheme="blue">Add to Cart</Button>
                  </Skeleton>
                ) : (
                  <Skeleton isLoaded={!isLoading}>
                    <Button colorScheme="red" isDisabled>
                      Out of Stock
                    </Button>
                  </Skeleton>
                )}
                <Skeleton isLoaded={!isLoading}>
                  <Button
                    colorScheme="green"
                    onClick={() => {
                      window.open(
                        `https://wa.me/918787878787?text=Hey,%20I%20am%20interested%20in%20buying%20${product?.title}%20for%20$${product?.discounted_price}`,
                        "_blank",
                      );
                    }}
                    display="flex"
                    alignItems="center"
                    gap={2}
                  >
                    <Icon as={MessageCirclePlus} />
                    Inquire on Whatsapp
                  </Button>
                </Skeleton>
              </HStack>
            </Flex>
          </Flex>
        ) : (
          <Heading as="h1">Product not found</Heading>
        )}
      </Flex>
    </>
  );
};

export default ProductPage;
