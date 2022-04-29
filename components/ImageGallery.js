import { AspectRatio, Box, Grid, GridItem, Image, Text } from "@chakra-ui/react";

const ImageGallery = () => {
    const images = 4;
  return (
      <Grid as="section" templateColumns={{ base: "repeat(3, 1fr)", md: "repeat(4, 1fr)" }} templateRows={{ base : "repeat(4, 1fr)", md : "repeat(3, 1fr)"}} gap={3} w="full">

          <GridItem colSpan={{ base: 3, md : 3 }} rowSpan={{ base : 3}}>
          <AspectRatio ratio={1}>
            <Image _hover={{ rounded : "xl", opacity : "0.90", transform : "scale(1.05)"}} src="/images/pic1.png" alt="pic1" objectFit="cover" rounded="3xl"  />  
          </AspectRatio>
        </GridItem>
          
          <GridItem colStart={{ base: 1, md : 4 }} rowStart={{ base : 4, md : 1}} >
          <AspectRatio ratio={1}>
            <Image _hover={{ rounded : "xl", opacity : "0.90", transform : "scale(1.05)"}} src="/images/pic2.png" alt="pic1" objectFit="cover" rounded="3xl"  />  
          </AspectRatio>
        </GridItem>
          
          <GridItem colStart={{ base: 2, md : 4 }} rowStart={{ base : 4, md : 2 }} >
          <AspectRatio ratio={1}>
            <Image _hover={{ rounded : "xl", opacity : "0.90", transform : "scale(1.05)"}} src="/images/pic3.png" alt="pic1" objectFit="cover" rounded="3xl"  />  
          </AspectRatio>
        </GridItem>
          
          <GridItem colStart={{ base: 3, md: 4 }} rowStart={{ base : 4, md : 3}} >
          <AspectRatio ratio={1}>
            <Image _hover={{ rounded : "xl", opacity : "0.90", transform : "scale(1.05)"}} src="/images/pic4.png" alt="pic1" objectFit="cover" rounded="3xl"  />  
          </AspectRatio>
        </GridItem>
    </Grid>
  )
}

export default ImageGallery;
