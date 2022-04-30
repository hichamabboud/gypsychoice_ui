import { Heading, Stack, HStack, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Image, Button, Text, VStack, IconButton, GridItem, Grid } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const PropertyHost = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <VStack alignItems="flex-start">
      <Grid templateColumns="repeat(9, 1fr)" templateRows="repeat(2, 0.5fr)" justifyContent="space-between" alignItems="center" w="full">
          {/* Grid # 1 */}
        <GridItem colStart={{ base : 1, md : 1, lg : 1, xl : 1 }} rowStart={{ base : 1, md : 1, lg : 1, xl : 1}} colSpan={{ base : 7, md : 4, lg : 5, xl : 5 }}>
              <Heading as="h2" color="gray.600" fontSize={{ base : "md", md : "2xl", lg : "3xl"}} fontWeight="bold">
                Hosted by  
                <Text fontSize={{ base : "md", md : "2xl", lg : "3xl"}}  pl={2} as="i" textAlign="center" color="#CA511F">Rayan Abboud</Text>
              </Heading>
        </GridItem>
        
        {/* Grid # 2 */}
        <GridItem colStart={{ base : 1, md : 5, lg : 6, xl : 6 }} rowStart={{ base : 2, md : 1, lg : 1, xl : 1 }} colSpan={{ base: 9, md: 3, lg: 2, xl: 2 }} >
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

        <GridItem colStart={{ base : 8, md : 9, lg : 9, xl : 9 }} rowStart={{ base : 1, md : 1, lg : 1, xl : 1 }} colSpan={{ base : 2, md : 2, lg : 2, xl : 2 }} >
          <Image borderRadius="full" boxSize="60px" src="/images/landlords/landlord.jpg" fallbackSrc='https://via.placeholder.com/60' alt="property listed by Rayan Abboud"/>
        </GridItem>  
              
      </Grid>

        <Button size="sm" variant="ghost" onClick={onOpen}>
          <Heading as="h3" size="md" color="gray.800"> About host ... </Heading>
        </Button>


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
