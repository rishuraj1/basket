import { Button, Icon, useToast } from "@chakra-ui/react";
import { Heart } from "lucide-react";
import { useEffect, useState } from "react";

const WishlistButton = ({ id }: { id: number }) => {
  const [wishlist, setWishlist] = useState(false);

  const toast = useToast();

  const showToast = (message: string) => {
    toast({
      title: message,
      status: "success",
      duration: 2000,
      isClosable: true,
      containerStyle: {
        top: 80,
        right: 20,
      },
      colorScheme: "green",
      position: "top-right",
    });
  };

  const checkIfInWishlist = (id: number) => {
    const wishlist = localStorage.getItem("wishlist");
    if (!wishlist) return false;
    const parsedWishlist = JSON.parse(wishlist);
    return parsedWishlist.includes(id);
  };

  const handleWishlist = (id: number) => {
    const wishlist = localStorage.getItem("wishlist");
    if (!wishlist) {
      localStorage.setItem("wishlist", JSON.stringify([id]));
    } else {
      const parsedWishlist = JSON.parse(wishlist);
      if (parsedWishlist.includes(id)) {
        const filteredWishlist = parsedWishlist.filter(
          (wishlistId: number) => wishlistId !== id,
        );
        localStorage.setItem("wishlist", JSON.stringify(filteredWishlist));
      } else {
        localStorage.setItem(
          "wishlist",
          JSON.stringify([...parsedWishlist, id]),
        );
      }
    }
  };

  useEffect(() => {
    const inWishlist = checkIfInWishlist(id);
    if (inWishlist) {
      setWishlist(true);
    } else {
      setWishlist(false);
    }
  }, [id]);

  return (
    <Button
      colorScheme="pink"
      variant="outline"
      size={{ base: "lg", md: "md" }}
      p={2}
      onClick={() => {
        handleWishlist(id);
        setWishlist(!wishlist);
        if (wishlist) {
          showToast("Removed from Wishlist");
        } else {
          showToast("Added to Wishlist");
        }
      }}
      display={"flex"}
      alignItems={"center"}
      gap={1}
      justifyItems={"center"}
    >
      <Icon
        as={Heart}
        size={4}
        fill={`${wishlist ? "red.500" : "transparent"}`}
      />
      {wishlist ? "Remove from Wishlist" : "Add to Wishlist"}
    </Button>
  );
};

export default WishlistButton;
