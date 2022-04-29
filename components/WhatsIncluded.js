import { AspectRatio, GridItem, Heading, HStack, SimpleGrid, Icon, Text, VStack, Box, Grid } from "@chakra-ui/react";
import { AiFillCar } from "react-icons/ai";


const WhatsIncluded = () => {
  return (
    <VStack w='full'>
          <Grid templateColumns="repeat(4, 1fr)" w='full' >
            <GridItem colSpan={1}>
                <AspectRatio ratio={{ md : 1, base : 16/9 }}>
                    <VStack justifyContent='space-between' bg='green.400' rounded='xl' p={4} >
                        <HStack justifyContent='flex-start' w='full'>
                            <AiFillCar />      
                        </HStack>

                        <VStack alignItems='flex-start' >
                            <Text> Parking </Text>
                            <Text> sDFsdfsdfsdfg gfg dzgf dzf zdfh </Text>  
                        </VStack>  
                    </VStack>
                </AspectRatio>      
            </GridItem>
          </Grid>  
    </VStack>
  )
}

export default WhatsIncluded;