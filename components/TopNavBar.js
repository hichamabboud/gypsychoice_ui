import { Text, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button, HStack, } from "@chakra-ui/react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";


const breadCrumbs = [
    { name: "Home", url : "/" }, { name: "Apartments", url : "/" }, { name: "Utica", url : "/" }, { name: "NY", url : "/" }
];

const TopNavBar = () => {

  return (
    <Breadcrumb alignSelf={{ base : "flex-start", md : "flex-end", lg : "flex-end", xl : "flex-end"}} separator={<IoIosArrowForward />} fontWeight="medium">
              {breadCrumbs.map((bread, index) => {

                const current = index === breadCrumbs.length - 1;

                  return (
                  <BreadcrumbItem  key={bread.name} isCurrentPage={current ? "brand.500" : "brand.200"}>
                      <BreadcrumbLink href={bread.url} color={ current ? "brand.500" : "gray.600" }>
                          <Text fontSize={{ base : "12px", md : "16px", lg : "20px"}}> {bread.name} </Text>
                      </BreadcrumbLink>
                  </BreadcrumbItem>
              )})
            }
        </Breadcrumb>
  )
}

export default TopNavBar
