import { useState, useEffect } from "react";
import { Box, Image, IconButton, Skeleton } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { heroImages } from "../assets/constants";

const images = heroImages;

const HeroSection = ({ isLoading }: { isLoading: boolean }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const index = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    const index = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <Box
      width={"100%"}
      borderRadius="md"
      overflow="hidden"
      position="relative"
      height={["200px", "300px", "400px"]}
      p={4}
    >
      <Skeleton isLoaded={!isLoading}>
        <Image
          src={images[currentIndex]}
          alt={`carousel-${currentIndex}`}
          borderRadius="md"
          width="100%"
          height="100%"
          objectFit={"fill"}
          transition="opacity 0.5s ease-in-out"
          opacity={0.9}
          _hover={{ opacity: 1 }}
          animation={`slide 1s ease-in-out infinite`}
        />
        <IconButton
          icon={<ChevronLeftIcon />}
          onClick={prevSlide}
          aria-label="Previous Slide"
          position="absolute"
          top="50%"
          left="0"
          transform="translateY(-50%)"
          bg="rgba(0, 0, 0, 0.5)"
          color="white"
          _hover={{ bg: "rgba(0, 0, 0, 0.8)" }}
        />
        <IconButton
          icon={<ChevronRightIcon />}
          onClick={nextSlide}
          aria-label="Next Slide"
          position="absolute"
          top="50%"
          right="0"
          transform="translateY(-50%)"
          bg="rgba(0, 0, 0, 0.5)"
          color="white"
          _hover={{ bg: "rgba(0, 0, 0, 0.8)" }}
        />
      </Skeleton>
    </Box>
  );
};

export default HeroSection;
