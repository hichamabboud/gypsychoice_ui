import { Heading, Stack, HStack, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Image, Button, Text, VStack, IconButton, GridItem, Grid, Link } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import NextLink from "next/link";

const PropertyHost = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <VStack alignItems="flex-start">
      <Grid templateColumns="repeat(9, 1fr)" templateRows="repeat(3, 0.5fr)" justifyContent="space-between" alignItems="center" w="full" columnGap={4}>
          {/* Grid # 1 */}
        <GridItem colSpan={{ base : 7, md : 4, lg : 5, xl : 5 }} colStart={{ base : 1, md : 1, lg : 1, xl : 1 }} rowStart={{ base : 1, md : 1, lg : 1, xl : 1}} >
              <Heading as="h2" color="gray.600" fontSize={{ base : "md", md : "2xl", lg : "3xl"}} fontWeight="bold">
                Hosted by  
                <Text fontSize={{ base : "md", md : "2xl", lg : "3xl"}}  pl={2} as="i" textAlign="center" color="#CA511F"> John Doe</Text>
              </Heading>
        </GridItem>
        
        {/* Grid # 2 */}
        <GridItem colSpan={{ base: 9, md: 3, lg: 2, xl: 2 }} colStart={{ base : 1, md : 5, lg : 6, xl : 6 }} rowStart={{ base : 2, md : 1, lg : 1, xl : 1 }}>
              <HStack>
                <Heading as="h4" fontSize={{ md : "xl"}}> Reviews (24) </Heading>
                <HStack>
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiOutlineStar/>
                </HStack>
              </HStack>
        </GridItem>

        {/* Grid # 3 */}
        <GridItem colSpan={{ base : 2, md : 2, lg : 2, xl : 2 }} colStart={{ base : 8, md : 9, lg : 9, xl : 9 }} rowStart={{ base : 1, md : 1, lg : 1, xl : 1 }}>
          <Image borderRadius="full" boxSize="60px" src="/images/landlords/landlord.jpg" fallbackSrc='https://via.placeholder.com/60' alt="property listed by Rayan Abboud"/>
        </GridItem>  

        {/* Grid # 4 */}
        <GridItem colSpan={{ base : 4, md : 4, lg : 4, xl : 4 }} mt={4} colStart={{ base : 1, md : 1, lg : 1, xl : 1 }} rowStart={{ base : 3, md : 2, lg : 2, xl : 2}}>
          <Button fontSize={{ base : "sm"}} variant="outline" colorScheme="teal" onClick={onOpen}>
            About host
          </Button>
        </GridItem>
        
        {/* Grid # 5 */}
        <GridItem colSpan={{ base : 4, md : 4, lg : 4, xl : 4 }} mt={4} colStart={{ base : 6, md : 8, lg : 8, xl : 8 }} rowStart={{ base : 3, md : 2, lg : 2, xl : 2}}>
          <NextLink href="#" passHref>
            <Link>
              <Button fontSize={{ base : "sm"}} variant="outline" colorScheme="orange">
                 Contact Host
              </Button>
            </Link>
          </NextLink>
        </GridItem>

  
      </Grid>

          <Modal onClose={onClose} isOpen={isOpen} isCentered>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader> About host </ModalHeader>
              <ModalBody>
                <VStack alignItems="flex-start" spacing={4}>
                  <Text as="i"> “Min Jin Lee’s debut novel, Free Food for Millionaires, was one of the “Top 10 Novels of the Year” for The Times (London), NPR’s Fresh Air, and USA Today. Her short fiction has been featured on NPR’s Selected Shorts. Her writings have appeared in The Times Literary Supplement, Condé Nast Traveler, The Times (London), Vogue, Travel+Leisure, Wall Street Journal, New York Times Magazine, and Food & Wine. Her essays and literary criticism have been anthologized widely. She served as a columnist for the Chosun Ilbo, the leading paper on South Korea. She lives in New York with her family.”</Text>
                  <Text> Sincerely yours, </Text>
                  <Text> John Doe.</Text>
                </VStack>
              </ModalBody>
              <ModalFooter>
                <IconButton onClick={onClose} icon={<ModalCloseButton />}/>
              </ModalFooter>
            </ModalContent>
          </Modal>
    </VStack>
  )
}

export default PropertyHost;
