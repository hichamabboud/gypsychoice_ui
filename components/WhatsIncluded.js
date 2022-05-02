import { Divider, GridItem, Heading, SimpleGrid, Text, VStack, Box, Image } from "@chakra-ui/react";
import { AiFillCar, AiOutlineWifi } from "react-icons/ai"; 
import { MdOutlinePets } from "react-icons/md";


const WhatsIncluded = () => {
  return (
      <VStack w='full' spacing={6} px={2}>
          
        <Heading as='h2' alignSelf='flex-start' fontSize='xl' fontWeight='normal' > What is included? </Heading>

          <SimpleGrid columns={4} gap={2}>
              <GridItem colSpan={{ base : 2, md : 2, lg : 1}} borderRadius="2xl" borderWidth={1} bg="rgb(255,255,0, 0.13)" h={{ base : "160px", md : "180px"}} justifyContent="space-between" p={2}>
                  <VStack alignItems="flex-start" justifyContent="space-between" h="100%">
                      <Box> <AiFillCar size="30px" /></Box>
                      <VStack alignItems="flex-start">
                          <Heading as="h3" size={{ base : "sm", md : "md", lg : "md", xl : "md"}} color="gray.600"> Parking </Heading>
                          <Text color="gray.500"> Street and garage parking available </Text>
                      </VStack>
                  </VStack>  
              </GridItem>

              <GridItem colSpan={{ base : 2, md : 2, lg : 1}} borderRadius="2xl" borderWidth={1} bg="rgb(0,255,255, 0.13)" h={{ base : "160px", md : "180px"}} justifyContent="space-between" p={2}>
                  <VStack alignItems="flex-start" justifyContent="space-between" h="100%">
                      <Box> <AiOutlineWifi size="30px" /></Box>
                      <VStack alignItems="flex-start">
                          <Heading as="h3" size={{ base : "sm", md : "md", lg : "md", xl : "md"}} color="gray.600"> WIFI </Heading>
                          <Text color="gray.500"> Available throughout the property </Text>
                      </VStack>
                  </VStack>  
              </GridItem>

              <GridItem colSpan={{ base : 2, md : 2, lg : 1}} borderRadius="2xl" borderWidth={1}  bg="rgba(245, 0, 147, 0.13)" h={{ base : "160px", md : "180px"}} justifyContent="space-between" p={2}>
                  <VStack alignItems="flex-start" justifyContent="space-between" h="100%">
                      <Box> <MdOutlinePets size="30px" /></Box>
                      <VStack alignItems="flex-start">
                          <Heading as="h3" size={{ base : "sm", md : "md", lg : "md", xl : "md"}} color="gray.600"> Pet friendly </Heading>
                          <Text color="gray.500"> furry friends are welcome. (see house rules) </Text>
                      </VStack>
                  </VStack>  
              </GridItem>

              <GridItem colSpan={{ base : 2, md : 2, lg : 1}} borderRadius="2xl" borderWidth={1} bg="rgb(0, 125, 180, 0.13)"  h={{ base : "160px", md : "180px"}} justifyContent="space-between" p={2}>
                  <VStack alignItems="flex-start" justifyContent="space-between" h="100%">
                      <Box> <Image src="/images/laundry-machine.png" alt="washer & dryer" h="30px" /></Box>
                      <VStack alignItems="flex-start">
                          <Heading as="h3" size={{ base : "sm", md : "md", lg : "md", xl : "md"}} color="gray.600"> Washer & Dryer </Heading>
                          <Text color="gray.500"> Available for your convenience. </Text>
                      </VStack>
                  </VStack>  
              </GridItem>
              
          </SimpleGrid>
    </VStack>
  )
}

export default WhatsIncluded;