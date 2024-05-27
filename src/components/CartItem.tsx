import { Box, Image, Link } from "@chakra-ui/react";

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

interface CartItem {
  id: number;
  qty: number;
}

interface CartItemProps {
  product: Product;
  cartItems: CartItem[];
}

const CartItem = ({ product, cartItems }: CartItemProps) => {
  return (
    <Box
      display={"flex"}
      gap={3}
      p={4}
      bgColor={"gray.700"}
      borderRadius={"md"}
      mb={2}
    >
      <Image
        src={product?.main_image}
        alt={product?.title}
        width={100}
        height={100}
        objectFit={"cover"}
        borderRadius={"md"}
      />
      <Box>
        <Box>
          <Link
            href={`/${product?.type}/${product?.id}`}
            _hover={{ textDecoration: "none" }}
          >
            <Box
              as={"h4"}
              fontSize={"lg"}
              fontWeight={"semibold"}
              color={"gray.100"}
            >
              {product?.title}
            </Box>
          </Link>
          <Box as={"p"} fontSize={"sm"} color={"gray.400"}>
            {product?.type}
          </Box>
        </Box>
        <Box as={"p"} fontSize={"lg"} color={"gray.100"}>
          $ {product?.discounted_price}
        </Box>
        <Box as={"p"} fontSize={"sm"} color={"gray.400"}>
          Qty: {cartItems.find((item) => item.id === product.id)?.qty}
        </Box>
      </Box>
    </Box>
  );
};

export default CartItem;
