import { Button, Divider, Heading, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Stack, Text, Lorem, ModalFooter, VStack } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";

const PropertyDetails = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <Stack alignItems="flex-start" px={2}>
            <Heading as="h2" fontWeight='normal' size="lg"> Property details </Heading>
            <Text fontSize='sm' noOfLines={{ base: 4 }}> This home is a safe and respectable environment, it is also environmentally friendly. The room is furnished, clean and has large built ins for storage. There is a kitchen with refridgerator for your food also plenty of pantry storage for those who like to cook. It is a quiet respectable house hold. I am a teacher and interior designer. Travel-Public transport is close to universities, shops and CBD, there is also a ferry to the Central Business District. Buses and trains to the city and universities are easy to access. We are a caring home stay family and look after our guests. Clean and quiet respectable environment.</Text>  
            <Button onClick={onOpen} variant="detail" size={{ base: "sm" }}> More details </Button>
            
                <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                        <ModalContent>
                            <ModalHeader>Modal Title</ModalHeader>
                            <ModalCloseButton />
                            <ModalBody>
                                <VStack alignItems="flex-start" spacing={4}>
                                        <Heading as='h3' size={{ base: 'md' }}> More about this property</Heading>
                                        <Stack alignItems="flex-start">
                                            <Text fontSize={{ base : "sm"}}> -IMPORTANT-we are constructing a backyard cottage starting in March 2022. There will be significant noise, 8-4:30 Monday -Friday, quiet  evenings and weekends. </Text>
                                            <Text fontSize={{ base : "sm"}}> Extra Covid precautions </Text>
                                            <Text fontSize={{ base : "sm"}}> Great eating , Delancey, Fat Hen, 3 blocks away more a little farther </Text>
                                            <Text fontSize={{ base : "sm"}}> -center of Ballard an easy 15 minute walk </Text>
                                            <Text fontSize={{ base : "sm"}}> Ballard breweries a mile walk away </Text>
                                            <Text fontSize={{ base : "sm"}}> free parking </Text>
                                            <Text> Broadband fast WiFi </Text>
                                            <Text fontSize={{ base : "sm"}}> Smart HD tv YOUTUBE TV, HBO </Text>
                                            <Text fontSize={{ base : "sm"}}> fridge, microwave, toaster, kettle, dishes and snacks </Text>
                                            <Text fontSize={{ base : "sm"}}> Queen bed and sofa bed </Text>
                                            <Text fontSize={{ base : "sm"}}> full bath</Text>
                                        </Stack>
                            
                                </VStack>
                            </ModalBody>

                            <ModalFooter>
                                <Button colorScheme='blue' mr={3} onClick={onClose}>
                                Close
                                </Button>
                            </ModalFooter>
                        </ModalContent>
                </Modal>
        </Stack>
    )
}

export default PropertyDetails;