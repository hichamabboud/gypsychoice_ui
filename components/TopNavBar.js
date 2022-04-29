import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button, HStack, Text } from "@chakra-ui/react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const breadCrumbs = [
    { name: "Home", url : "/" }, { name: "Apartments", url : "/" }, { name: "Utica", url : "/" }, { name: "NY", url : "/" }
];

const TopNavBar = () => {

  return (
    <HStack as='nav' justifyContent='space-between'>
        <Button fontSize={{ base : 'sm', md : 'md', lg : 'lg'}} variant='outline' rounded='full' leftIcon={<IoIosArrowBack />} > Go Home </Button>

        <Breadcrumb separator={<IoIosArrowForward />} fontWeight="medium">
              {breadCrumbs.map((bread, index) => {

                const current = index === breadCrumbs.length - 1;

                  return (
                  <BreadcrumbItem fontSize={{ base : 12, md : 20, lg : 20}} key={bread.name} isCurrentPage={current ? "brand.500" : "brand.200"}>
                      <BreadcrumbLink href={bread.url} color={ current ? "brand.500" : "gray.700" }>
                          {bread.name}
                      </BreadcrumbLink>
                  </BreadcrumbItem>
              )})
            }
        </Breadcrumb>
    </HStack>
  )
}

export default TopNavBar
