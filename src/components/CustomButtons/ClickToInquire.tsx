import { Button, Icon, Skeleton } from "@chakra-ui/react";
import { MessageCirclePlus } from "lucide-react";

interface ClickToInquireProps {
  title: string;
  price: number;
  isLoading: boolean;
}

const ClickToInquire = ({ isLoading, title, price }: ClickToInquireProps) => {
  const handleClick = () => {
    window.open(
      `https://wa.me/918787878787?text=Hey,%20I%20am%20interested%20in%20buying%20${title}%20for%20$${price}`,
      "_blank",
    );
  };

  return (
    <Skeleton isLoaded={!isLoading}>
      <Button
        colorScheme="green"
        onClick={handleClick}
        display="flex"
        alignItems="center"
        size="md"
        gap={2}
      >
        <Icon as={MessageCirclePlus} />
        Inquire on Whatsapp
      </Button>
    </Skeleton>
  );
};

export default ClickToInquire;
