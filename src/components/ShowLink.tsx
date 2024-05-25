import {
  Badge,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Text,
} from "@chakra-ui/react";

interface ShowLinkProps {
  title: string;
  type: string;
}

const ShowLink = ({ title, type }: ShowLinkProps) => {
  console.log(title, type);
  return (
    <Breadcrumb separator="-" p={2} bgColor={"gray.100"}>
      <BreadcrumbItem>
        <BreadcrumbLink href="/">
          <Text fontSize={"xs"} fontWeight={"bold"}>
            Home
          </Text>
        </BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink href={`/${type}`} fontSize={"small"}>
          <Text fontSize={"xs"} fontWeight={"bold"}>
            {type}
          </Text>
        </BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem isCurrentPage>
        <BreadcrumbLink href="#" fontSize={"small"}>
          <Text fontSize={"xs"}>{title}</Text>
        </BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  );
};

export default ShowLink;
