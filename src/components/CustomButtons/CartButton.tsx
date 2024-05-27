import { Button, Icon, Skeleton, useToast } from "@chakra-ui/react";
import { products } from "../../assets";
import { useState, useEffect } from "react";
import { Minus, Plus } from "lucide-react";

interface Product {
  id: number;
  availability: string;
}

interface CartItem {
  id: number;
  qty: number;
}

interface CartButtonProps {
  id: number;
  isLoading: boolean;
}

const CartButton = ({ id, isLoading }: CartButtonProps) => {
  const product = products.find((product: Product) => product.id === id);
  const availability = product?.availability === "In Stock";

  const toast = useToast();

  const [qty, setQty] = useState<number>(0);
  const [inCart, setInCart] = useState<boolean>(false);

  useEffect(() => {
    const cart = localStorage.getItem("cart");
    if (!cart) return;
    const parsedCart: CartItem[] = JSON.parse(cart);
    const itemInCart = parsedCart.find((item) => item.id === id);
    if (itemInCart) {
      setInCart(true);
      setQty(itemInCart.qty);
    }
  }, [id]);

  const updateCart = (updatedCart: CartItem[]) => {
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handleCart = (id: number) => {
    const cart = localStorage.getItem("cart");
    if (!cart) {
      const newCart: CartItem[] = [{ id, qty: qty || 1 }];
      updateCart(newCart);
    } else {
      const parsedCart: CartItem[] = JSON.parse(cart);
      const itemIndex = parsedCart.findIndex((item) => item.id === id);
      if (itemIndex > -1) {
        parsedCart[itemIndex].qty = qty;
      } else {
        parsedCart.push({ id, qty: qty || 1 });
      }
      updateCart(parsedCart);
    }
    setInCart(true);
  };

  const handleReduceQty = () => {
    if (qty > 0) {
      setQty((prevQty) => {
        const newQty = prevQty - 1;
        if (newQty === 0) {
          setInCart(false);
          const cart = JSON.parse(localStorage.getItem("cart") || "[]");
          const updatedCart = cart.filter((item: CartItem) => item.id !== id);
          updateCart(updatedCart);
        } else {
          const cart = JSON.parse(localStorage.getItem("cart") || "[]");
          const updatedCart = cart.map((item: CartItem) =>
            item.id === id ? { ...item, qty: newQty } : item,
          );
          updateCart(updatedCart);
        }
        return newQty;
      });
    }
  };

  const handleIncreaseQty = () => {
    if (qty < 6) {
      setQty((prevQty) => {
        const newQty = prevQty + 1;
        const cart = JSON.parse(localStorage.getItem("cart") || "[]");
        const updatedCart = cart.map((item: CartItem) =>
          item.id === id ? { ...item, qty: newQty } : item,
        );
        updateCart(updatedCart);
        return newQty;
      });
    } else {
      toast({
        title: "You can't add more than 6 items",
        status: "error",
        duration: 2000,
        isClosable: true,
        position: "top-right",
      });
    }
  };

  return (
    <Skeleton isLoaded={!isLoading}>
      <Button
        colorScheme={"blue"}
        variant="solid"
        size="md"
        onClick={() => {
          if (qty === 0) setQty(1);
          handleCart(id);
        }}
        cursor={availability ? "pointer" : "not-allowed"}
        disabled={!availability}
        leftIcon={
          availability && inCart && qty > 0 ? (
            <Icon
              as={Minus}
              onClick={(e) => {
                e.stopPropagation();
                handleReduceQty();
              }}
            />
          ) : (
            <></>
          )
        }
        rightIcon={
          availability && inCart && qty > 0 ? (
            <Icon
              as={Plus}
              onClick={(e) => {
                e.stopPropagation();
                handleIncreaseQty();
              }}
            />
          ) : (
            <></>
          )
        }
      >
        {availability ? (qty > 0 ? `${qty}` : `Add to Cart`) : "Out of Stock"}
      </Button>
    </Skeleton>
  );
};

export default CartButton;
