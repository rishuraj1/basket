import {
  Icon,
  IconButton,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerHeader,
  DrawerContent,
  DrawerOverlay,
  useDisclosure,
  Box,
  Flex,
  Text,
  Button,
  Tooltip,
} from "@chakra-ui/react";
import { ShoppingBag } from "lucide-react";
import { useEffect, useState } from "react";
import { products } from "../assets";
import { Product } from "../types";
import CartItem from "./CartItem";

interface cartItem {
  id: number;
  qty: number;
}

const Cart = () => {
  const [cartItems, setCartItems] = useState<cartItem[]>([]);
  const [cartProducts, setCartProducts] = useState<Product[]>([]);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const getCartItems = () => {
    const items = localStorage.getItem("cart");
    if (items) {
      setCartItems(JSON.parse(items));
    }
  };

  const getCartProducts = () => {
    const productsInCart = products.filter((product) => {
      return cartItems.some((item) => item.id === product.id);
    });
    setCartProducts(productsInCart);
  };

  useEffect(() => {
    getCartItems();
  }, []);

  useEffect(() => {
    getCartProducts();
  }, [cartItems]);

  return (
    <Tooltip
      label="Cart"
      aria-label="Cart"
      placement="bottom"
      display={{ base: "none", md: "flex" }}
    >
      <Box display={{ base: "block", md: "flex" }}>
        <IconButton
          aria-label="Cart"
          icon={<Icon as={ShoppingBag} />}
          bgColor="transparent"
          color="white"
          _hover={{ color: "gray.300", transform: "scale(1.1)" }}
          _active={{ bgColor: "gray.800" }}
          onClick={() => {
            getCartItems();
            getCartProducts();
            onOpen();
          }}
        />
        <Drawer isOpen={isOpen} placement="right" onClose={onClose} size={"xl"}>
          <DrawerOverlay />
          <DrawerContent bgColor="gray.800" color="white">
            <DrawerCloseButton />
            <DrawerHeader
              borderBottomWidth="1px"
              display={"flex"}
              gap={3}
              alignItems={"center"}
            >
              Cart <Icon as={ShoppingBag} />
            </DrawerHeader>
            <DrawerBody>
              {cartProducts &&
                cartProducts?.map((product) => (
                  <CartItem
                    key={product.id}
                    product={product}
                    cartItems={cartItems}
                  />
                ))}
              {cartProducts.length > 0 && (
                <Button
                  colorScheme={"blue"}
                  onClick={() => {
                    localStorage.removeItem("cart");
                    setCartItems([]);
                    setCartProducts([]);
                  }}
                  mr={2}
                >
                  Clear Cart
                </Button>
              )}

              {cartProducts.length > 0 && (
                <Button colorScheme={"green"}>Checkout</Button>
              )}
              {cartProducts.length === 0 && (
                <Flex
                  justifyContent={"center"}
                  gap={2}
                  alignItems={"center"}
                  height={"100%"}
                  flexDirection={"column"}
                >
                  <Icon as={ShoppingBag} boxSize={16} />
                  <Text
                    fontSize={"lg"}
                    fontWeight={"bold"}
                    textAlign={"center"}
                  >
                    Your cart is empty
                  </Text>
                  <Button colorScheme={"blue"} onClick={onClose}>
                    Continue Shopping
                  </Button>
                </Flex>
              )}
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Box>
    </Tooltip>
  );
};

export default Cart;
