import { Heading, keyframes, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Button, Text, VStack, IconButton, GridItem, Grid, Link, Avatar, Wrap, WrapItem, HStack, Divider, Icon } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import NextLink from "next/link";
import { motion } from "framer-motion";
import { AiFillStar } from "react-icons/ai";

const animationKeyframes = keyframes`
  0% { transform: scale(1) rotate(0); border-radius: 20%; }
  25% { transform: scale(1.01) rotate(0); border-radius: 20%; }
  50% { transform: scale(1.03) rotate(0); border-radius: 20%; }
  75% { transform: scale(1.04) rotate(0); border-radius: 20%; }
  100% { transform: scale(1.07) rotate(0); border-radius: 20%; }
`;

const animation = `${animationKeyframes} 2s ease-in-out infinite`;

const PropertyHost = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <VStack w="full">
      <Grid templateColumns="repeat(5, 1fr)" templateRows={{ base: "repeat(3, 0.5fr)", md: "repeat(1, 1fr)" }} justifyContent="space-between" w="full" gap={4} alignItems="center" px={4}>
          {/* Grid # 1 */}
        <GridItem colSpan={{ base : 5, md : 3 }} colStart={{ base : 2, md : 1 }} rowStart={{ base : 1, md : 1}} >
              <Heading as="h2" color="gray.600" fontSize={{ base : "md", md : "2xl", lg : "3xl"}} fontWeight="bold">
                Hosted by  
                <Text fontSize={{ base : "md", md : "2xl", lg : "3xl"}}  pl={2} as="i" textAlign="center" color="#CA511F"> John Doe</Text>
              </Heading>
        </GridItem>
        
        

        {/* Grid # 3 */}
        <GridItem as={motion.div} animation={animation} colSpan={{ base: 5, md: 1 }} colStart={{ base: 3, md: 5 }} rowStart={{ base: 2, md: 1 }} ml={{ md : 14, lg : 20 }}>
          <Wrap>
            <WrapItem>
              <Avatar name="John Doe" src="/images/landlords/johndoe.jpg" size="lg" />
            </WrapItem>
          </Wrap>
        </GridItem>  

        <GridItem colSpan={{ base: 5, md: 2 }} colStart={{ base: 1, md: 3 }} rowStart={{ base: 3, md: 1 }} w="full" ml={{ base : 4, md : 0 }}>
          <Button w="full"  variant="outline" colorScheme="orange" _hover={{ transform : "scale(1.01)", backgroundColor : "#CA511F", color : "#fff", borderWidth : "none"}} >
            <NextLink href="#" passHref>
              <Link _hover={{ textDecoration:"none" }}>
                Chat with landlord
              </Link>
            </NextLink>
          </Button>
        </GridItem>
      </Grid>

      <Divider />

      <VStack w="full" alignItems="flex-start">
        <HStack w="full">
          <Heading as="h2" color="gray.600" fontSize={{ base: "md", md: "2xl", lg: "3xl" }} fontWeight="bold"> (5) Reviews </Heading>
          
          <HStack>
            <Icon color="orange.400" as={AiFillStar} />
            <Icon color="orange.400" as={AiFillStar}/>
            <Icon color="orange.400" as={AiFillStar}/>
            <Icon color="orange.400" as={AiFillStar}/>
            <Icon color="orange.400" as={AiFillStar}/>
          </HStack>
        </HStack>

        {/* Review # 1 */}
        <VStack alignItems="flex-start" spacing={4}>
          <HStack>
            <Wrap>
              <WrapItem>
                <Avatar name="John Doe" src="/images/landlords/jennifer.jpg" size="sm" />
              </WrapItem>
            </Wrap>

            <Text fontSize={{ base: "xs" }} fontWeight="bold" color="gray.700" > Mellisa Brown </Text>
            <Text fontSize={{ base: "xs" }} fontWeight="bold" color="gray.500"> Aug 2022 </Text>
          </HStack>

          <Text fontSize={{ base: "sm" }} color="gray.700">
            Great location, super clean and lovely room overall! Not too far from downtown so a little noise but nothing too bad. Hosts are friendly and responsive to questions. All in all, a wonderful spot to stay!
          </Text>
          <Divider w="full" borderWidth={1} borderColor="gray.600" />
        </VStack>

        {/* Review # 2 */}
        <VStack alignItems="flex-start" spacing={4}>
          <HStack>
            <Wrap>
              <WrapItem>
                <Avatar name="John Doe" src="/images/landlords/jennifer-smith.jpg" size="sm" />
              </WrapItem>
            </Wrap>

            <Text fontSize={{ base: "xs" }} fontWeight="bold" color="gray.700" > Jennifer Smith </Text>
            <Text fontSize={{ base: "xs" }} fontWeight="bold" color="gray.500"> Jan 2020 </Text>
          </HStack>

          <Text fontSize={{ base: "sm" }} color="gray.700">
            The post for this location was exactly what we received. The space is modern and clean. It is a little bit of a walk into town, but you could get there by vehicle in less than a minute. Francisco was very responsive with all communication and I would highly recommend this location to anyone!
          </Text>
          <Divider w="full" borderWidth={1} borderColor="gray.600" />
        </VStack>

        {/* Review # 3 */}
        <VStack alignItems="flex-start" spacing={4}>
          <HStack w="full">
            <Wrap>
              <WrapItem>
                <Avatar name="John Doe" src="/images/landlords/victor.jpg" size="sm" />
              </WrapItem>
            </Wrap>

            <Text fontSize={{ base: "xs" }} fontWeight="bold" color="gray.700" > Victor Dimond </Text>
            <Text fontSize={{ base: "xs" }} fontWeight="bold" color="gray.500"> May 2021 </Text>
          </HStack>

          <Text fontSize={{ base: "sm" }} color="gray.700">
            Great location, super clean and lovely room overall! Not too far from downtown so a little noise but nothing too bad. Hosts are friendly and responsive to questions. All in all, a wonderful spot to stay!
          </Text>
          <Divider w="full" borderWidth={1} borderColor="gray.600" />
        </VStack>

          {/* Review # 4 */}
        <VStack alignItems="flex-start" spacing={4}>
          <HStack w="full">
            <Wrap>
              <WrapItem>
                <Avatar name="John Doe" src="/images/landlords/victor.jpg" size="sm" />
              </WrapItem>
            </Wrap>

            <Text fontSize={{ base: "xs" }} fontWeight="bold" color="gray.700" > James Pallate </Text>
            <Text fontSize={{ base: "xs" }} fontWeight="bold" color="gray.500"> May 2022 </Text>
          </HStack>

          <Text fontSize={{ base: "sm" }} color="gray.700">
            Great location, super clean and lovely room overall! Not too far from downtown so a little noise but nothing too bad. Hosts are friendly and responsive to questions. All in all, a wonderful spot to stay!
          </Text>
          <Divider w="full" borderWidth={1} borderColor="gray.600" />
        </VStack>
      </VStack>

          <Modal onClose={onClose} isOpen={isOpen} isCentered>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader> About host </ModalHeader>
              <ModalBody>
                <VStack alignItems="flex-start" spacing={4}>
                  <Text as="i"> “Min Jin Lee debut novel, Free Food for Millionaires, was one of the “Top 10 Novels of the Year” for The Times (London), Fresh Air, and USA Today. Her short fiction has been featured on NPR Selected Shorts. Her writings have appeared in The Times Literary Supplement, Condé Nast Traveler, The Times (London), Vogue, Travel+Leisure, Wall Street Journal, New York Times Magazine, and Food & Wine. Her essays and literary criticism have been anthologized widely. She served as a columnist for the Chosun Ilbo, the leading paper on South Korea. She lives in New York with her family.”</Text>
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
