import { AspectRatio, GridItem, Heading, HStack, SimpleGrid, Icon, Text, VStack, Box, Grid, IconButton } from "@chakra-ui/react";
import { AiFillCar } from "react-icons/ai"; 
import { IoWifiOutline } from "react-icons/io";


const WhatsIncluded = () => {
  return (
    <VStack w='full' spacing={6}>
        <Heading as='h2' alignSelf='flex-start' fontSize='xl' fontWeight='normal' > What is included? </Heading>

          <SimpleGrid columns={4}>
              <GridItem colSpan={1} borderRadius="2xl" borderWidth={2} bg="#13ec66" h="200px" justifyContent="space-between" p={4}>
                  <VStack alignItems="flex-start" justifyContent="space-between" h="100%">
                      <Box> <AiFillCar /></Box>
                      <VStack alignItems="flex-start">
                          <Heading as="h3" size="md"> Parking </Heading>
                          <Text> Street parking and garage parking available </Text>
                      </VStack>
                  </VStack>  
              </GridItem>

              <GridItem colSpan={1} borderRadius="2xl" borderWidth={2} bg="#13ec66" h="200px" justifyContent="space-between" p={4}>
                  <VStack alignItems="flex-start" justifyContent="space-between" h="100%">
                      <Box> <AiFillCar /></Box>
                      <VStack alignItems="flex-start">
                          <Heading as="h3" size="md"> Parking </Heading>
                          <Text> Street parking and garage parking available </Text>
                      </VStack>
                  </VStack>  
              </GridItem>

              <GridItem colSpan={1} borderRadius="2xl" borderWidth={2} bg="#13ec66" h="200px" justifyContent="space-between" p={4}>
                  <VStack alignItems="flex-start" justifyContent="space-between" h="100%">
                      <Box> <AiFillCar /></Box>
                      <VStack alignItems="flex-start">
                          <Heading as="h3" size="md"> Parking </Heading>
                          <Text> Street parking and garage parking available </Text>
                      </VStack>
                  </VStack>  
              </GridItem>

              <GridItem colSpan={1} borderRadius="2xl" borderWidth={2} bg="#13ec66" h="200px" justifyContent="space-between" p={4}>
                  <VStack alignItems="flex-start" justifyContent="space-between" h="100%">
                      <Box> <AiFillCar /></Box>
                      <VStack alignItems="flex-start">
                          <Heading as="h3" size="md"> Parking </Heading>
                          <Text> Street parking and garage parking available </Text>
                      </VStack>
                  </VStack>  
              </GridItem>
              
          </SimpleGrid>
    </VStack>
  )
}

export default WhatsIncluded;