import React from "react";
import { Image, Skeleton } from "@chakra-ui/react";
import { products } from "../assets";
import { Product } from "../types";

interface ProductImagesProps {
  id: number;
  isLoading: boolean;
  setProduct: React.Dispatch<React.SetStateAction<Product | null>>;
}

const ProductImages: React.FC<ProductImagesProps> = ({
  id,
  isLoading,
  setProduct,
}) => {
  const product = products.find((product) => product.id === id);

  const changeImage = (image: string, index: number) => {
    setProduct((prev) => {
      if (!prev) return null;

      const newOtherImages = [...prev.other_images];
      newOtherImages[index] = prev.main_image;

      return {
        ...prev,
        other_images: newOtherImages,
        main_image: image,
      };
    });
  };

  return (
    <>
      {product?.other_images.map((image, index) => (
        <Skeleton key={index} isLoaded={!isLoading}>
          <Image
            src={image}
            alt={`other-image-${index}`}
            boxSize="100px"
            objectFit="cover"
            borderRadius="md"
            onClick={() => changeImage(image, index)}
            cursor="pointer"
            _hover={{
              opacity: 0.8,
              transform: "scale(1.05)",
              transition: "all 0.3s ease",
            }}
          />
        </Skeleton>
      ))}
    </>
  );
};

export default ProductImages;
