import { Image, Skeleton } from "@chakra-ui/react";
import { products } from "../assets";

interface Product {
  id: number;
  main_image: string;
  other_images: string[];
}

interface ProductImagesProps {
  id: number;
  isLoading: boolean;
  setProduct: React.Dispatch<React.SetStateAction<Product | null>>;
}

const ProductImages = ({ id, isLoading, setProduct }: ProductImagesProps) => {
  // Find the product by id
  const product = products.find((product) => product.id === id);

  const changeImage = (image: string, index: number) => {
    setProduct((prev) => {
      if (!prev) return prev;

      // Swap the main image with the selected other image
      const newOtherImages = prev.other_images.map((img, i) =>
        i === index ? prev.main_image : img,
      );
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
