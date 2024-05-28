import {
  Box,
  Flex,
  Image,
  Text,
  Heading,
  Badge,
  Skeleton,
  Link,
} from "@chakra-ui/react";
import { Product } from "../types";

interface ProductCardProps {
  data: Product;
  isLoading?: boolean;
}

const ProductCard = ({ data, isLoading = false }: ProductCardProps) => {
  const {
    id,
    type,
    original_price,
    discounted_price,
    availability,
    title,
    main_image,
    new_arrival,
    offer,
    rating,
  } = data;

  return (
    <Link
      href={`/${type}/${id}`}
      _hover={{ textDecoration: "none" }}
      target="_blank"
      bgColor="white"
      p={6}
      m={4}
      borderRadius="md"
      boxShadow="lg"
      flexDirection="column"
      alignItems="center"
      color="gray.800"
      maxW="sm"
      justifyContent={"space-between"}
      display={"flex"}
    >
      {new_arrival && (
        <Skeleton isLoaded={!isLoading}>
          <Badge colorScheme="blue" mb={2}>
            New Arrival
          </Badge>
        </Skeleton>
      )}
      {offer && (
        <Skeleton isLoaded={!isLoading}>
          <Badge colorScheme="purple" mb={2}>
            {offer}
          </Badge>
        </Skeleton>
      )}
      <Skeleton isLoaded={!isLoading}>
        <Image
          src={main_image}
          alt={title}
          borderRadius="md"
          mb={4}
          height={64}
          objectFit="cover"
        />
      </Skeleton>
      <Box textAlign="center">
        <Heading size="md" mb={2}>
          <Skeleton isLoaded={!isLoading}>{title}</Skeleton>
        </Heading>
        <Text fontSize="sm" color="gray.500" mb={4}>
          <Skeleton isLoaded={!isLoading}>{type}</Skeleton>
        </Text>

        <Flex justifyContent="center" mb={4}>
          <Badge colorScheme={availability === "In Stock" ? "green" : "red"}>
            <Skeleton isLoaded={!isLoading}>{availability}</Skeleton>
          </Badge>
          {rating && (
            <Badge colorScheme="yellow" rounded="md" ml={2}>
              <Skeleton isLoaded={!isLoading}>{rating} ★</Skeleton>
            </Badge>
          )}
        </Flex>

        <Flex justifyContent="center" alignItems="baseline">
          <Text as="s" color="gray.500" mr={2}>
            <Skeleton isLoaded={!isLoading}>
              ${original_price.toFixed(2)}
            </Skeleton>
          </Text>
          <Text fontSize="xl" fontWeight="bold">
            <Skeleton isLoaded={!isLoading}>
              ${discounted_price.toFixed(2)}
            </Skeleton>
          </Text>
        </Flex>
      </Box>
    </Link>
  );
};

export default ProductCard;
