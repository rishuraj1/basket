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

interface Product {
  id: number;
  type: string;
  original_price: number;
  discounted_price: number;
  availability: string;
  title: string;
  description?: string;
  main_image: string;
  other_images: string[];
  offer?: string;
  new_arrival?: boolean;
}

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
        <Badge colorScheme="blue" mb={2}>
          New Arrival
        </Badge>
      )}
      {offer && (
        <Badge colorScheme="purple" mb={2}>
          {offer}
        </Badge>
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
        <Badge
          colorScheme={availability === "In Stock" ? "green" : "red"}
          mb={4}
        >
          <Skeleton isLoaded={!isLoading}>{availability}</Skeleton>
        </Badge>
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