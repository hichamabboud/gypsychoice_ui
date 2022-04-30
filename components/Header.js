import { Text, Heading, HStack, IconButton, VStack, Icon, Stack, Box, SimpleGrid, GridItem, Flex } from "@chakra-ui/react"
import { HiOutlineLocationMarker, HiLocationMarker, HiStar } from "react-icons/hi";
import { FiShare2, FiMoreHorizontal } from "react-icons/fi";
import { BsHouseDoorFill } from "react-icons/bs";
import { CgHeart } from "react-icons/cg";
import Iconlabel from "./IconLabel";
import ImageGallery from "./ImageGallery";

const Header = () => {

    const property = { city : "Utica", state : 'NY', rating : 5.9, reviewCount : 5, guestCount : 2, bedroomCount : 3, bedCount : 2, bathCount : 1.5 };
    return (
      <VStack alignItems='stretch' spacing={5}>
            
            <Stack flexDirection={[ "column", "row"]} justifyContent="space-between">
                
                    <Heading as='h1' fontSize={{ base : '2xl', md : '3xl', lg : '5xl'}} w="full"> Beach House Belgrade </Heading>
                
              
                    {/* Buttons horizental with Title */}
                    <HStack spacing={4}>
                        <IconButton size="sm"  variant='pill' icon={<HiOutlineLocationMarker />} aria-label="get location" />

                        <IconButton size="sm"  variant='pill' icon={<FiShare2 />} aria-label="share location" />

                        <IconButton size="sm"  variant='pill' icon={<CgHeart />} aria-label="favorite" />

                        <IconButton size="sm"  variant='pill' icon={<FiMoreHorizontal />} aria-label="more options" />
                    </HStack>
            </Stack>



            <Stack spacing={{ base : 1, md : 4}} direction={['column', 'row']} justifyContent='space-between'>
                <HStack justifyContent='space-between'>
                    <Iconlabel
                        icon={<Icon as={HiStar} color='orange' fontSize={{ base : 16, md : 24, lg : 26}} mr={ -2} />}
                    divider={ 
                        <Text color='gray.500' fontWeight='bold' > . </Text>
                    }
                >
                    <Text> {property.rating } </Text>
                    <Text fontSize={{ base : 14, md : 20, lg : 20}}> review{ property.reviewCount > 1 ? "s" : ""} ({property.reviewCount}) </Text>
                    </Iconlabel>

                    <Iconlabel
                    icon={<Icon as={HiLocationMarker} color='gray.500' fontSize={{ base : 16, md : 24, lg : 26}} mr={ -2} />}
                    divider={ 
                        <Text color='gray.500' pb={2} fontWeight='bold' > . </Text>
                    }
                >
                    <Text fontSize={{ base : 14, md : 20, lg : 20}}> {property.city}, {property.state } </Text>
                </Iconlabel>
                </HStack>

                <Iconlabel
                    icon={<Icon as={BsHouseDoorFill} color='red.400' fontSize={{ base: 14, md: 24, lg: 24 }} mr={{ base : -2}} />}
                    // divider={ 
                    //     <Text color='gray.500' fontWeight='bold' > . </Text>
                    // }
                >
                    <HStack m={0}>
                        <HStack>
                            <Text fontSize={{ base: 14, md: 20, lg: 20 }}> {property.guestCount} </Text>
                            <Text fontSize={{ base : 14, md : 20, lg : 20}} > guest{ property.guestCount > 1 ? "s" : ""}</Text>
                        </HStack>

                        <HStack>
                            <Text fontSize={{ base: 14, md: 20, lg: 20 }}> {property.bedroomCount}</Text>
                            <Text fontSize={{ base : 14, md : 20, lg : 20}}> bedroom{property.bedroomCount > 1 ? "s" : ""} </Text>
                        </HStack>

                        <HStack>
                            <Text fontSize={{ base : 14, md : 20, lg : 20}}> {property.bedCount} </Text> 
                            <Text fontSize={{ base: 14, md: 20, lg: 20 }}> bed{ property.bedCount > 1 ? "s" : ""} </Text>
                        </HStack>
                    
                        <HStack>
                            <Text fontSize={{ base : 14, md : 20, lg : 20}}> {property.bathCount}</Text>
                            <Text fontSize={{ base : 14, md : 20, lg : 20}}> bath{property.bathCount > 1 ? "s" : ""} </Text>
                        </HStack>
                    </HStack>
                    
                </Iconlabel>
            </Stack>

            <ImageGallery />
            
      </VStack>
  )
}

export default Header;







{/* <HStack justifyContent='space-between' w="full">
    {/* Header */}
    <Heading as='h1' fontSize={{ base : 'md', md : '3xl', lg : '5xl'}}> Beach House Belgrade </Heading>

    {/* Buttons horizental with Title */}
    <HStack spacing={4}>
        <IconButton size="sm"  variant='pill' icon={<HiOutlineLocationMarker />} aria-label="get location" />

        <IconButton size="sm"  variant='pill' icon={<FiShare2 />} aria-label="share location" />

        <IconButton size="sm"  variant='pill' icon={<CgHeart />} aria-label="favorite" />

        <IconButton size="sm"  variant='pill' icon={<FiMoreHorizontal />} aria-label="more options" />
        

    </HStack>
// </HStack> */}