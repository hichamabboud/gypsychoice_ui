import { AspectRatio, GridItem, Heading, HStack, SimpleGrid, Icon, Text, VStack, Box, Grid } from "@chakra-ui/react";
import { AiFillCar } from "react-icons/ai";


const WhatsIncluded = () => {
  return (
    <VStack w='full' spacing={6}>
          <Heading as='h2' alignSelf='flex-start' fontSize='xl' fontWeight='normal' > What is included? </Heading>
      <Grid templateColumns="repeat(4, 1fr)" w='full' gap={4} mt={ 10}>
        <GridItem colSpan={{ base : 4, md : 1}} bg="#72FED6" rounded={16} h="100%" p={3}>
                <AspectRatio ratio={{ md : 1, base : 16/9 }}>
                    <VStack justifyContent='space-between' rounded='xl' >
                        <HStack justifyContent='flex-start' w='full'>
                            <AiFillCar />      
                        </HStack>

                        <VStack flex="1" justifyContent="flex-end" alignItems="flex-start" >
                            <Heading as='h3' size='sm'> Parking </Heading>
                            <Text> There are 3 parking spots in the shared compus parking lof available fir the guests </Text>  
                        </VStack>  
                    </VStack>
               </AspectRatio>      
                  </GridItem>
        
        <GridItem colSpan={{ base : 4, md : 1}} bg="#00FF77" rounded={16} h="100%" p={3}>
                <AspectRatio ratio={{ md : 1, base : 16/9 }}>
                    <VStack justifyContent='space-between' rounded='xl' >
                        <HStack justifyContent='flex-start' w='full'>
                            <AiFillCar />      
                        </HStack>

                        <VStack flex="1" justifyContent="flex-end" alignItems="flex-start" >
                            <Heading as='h3' size='sm'> Parking </Heading>
                            <Text> There are 3 parking spots in the shared compus parking lof available fir the guests </Text>  
                        </VStack>  
                    </VStack>
                </AspectRatio>      
        </GridItem>
        
        <GridItem colSpan={{ base : 4, md : 1}} bg="#EFA3F0" rounded={16} h="100%" p={3}>
                <AspectRatio ratio={{ md : 1, base : 16/9 }}>
                    <VStack justifyContent='space-between' rounded='xl' >
                        <HStack justifyContent='flex-start' w='full'>
                            <AiFillCar />      
                        </HStack>

                        <VStack flex="1" justifyContent="flex-end" alignItems="flex-start" >
                            <Heading as='h3' size='sm'> Parking </Heading>
                            <Text> There are 3 parking spots in the shared compus parking lof available fir the guests </Text>  
                        </VStack>  
                    </VStack>
                </AspectRatio>      
        </GridItem>
        
        <GridItem colSpan={{ base : 4, md : 1}} bg="#EFA3F0" rounded={16} h="100%" p={3}>
                <AspectRatio ratio={{ md : 1, base : 16/9 }}>
                    <VStack justifyContent='space-between' rounded='xl' >
                        <HStack justifyContent='flex-start' w='full'>
                <AiFillCar />      
                        </HStack>

                        <VStack flex="1" justifyContent="flex-end" alignItems="flex-start" >
                            <Heading as='h3' size='sm'> Parking </Heading>
                            <Text> There are 3 parking spots in the shared compus parking lof available fir the guests </Text>  
                        </VStack>  
                    </VStack>
                </AspectRatio>      
            </GridItem>
          </Grid>  
    </VStack>
  )
}

export default WhatsIncluded;