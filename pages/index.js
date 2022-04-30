import { Box, Container, VStack } from "@chakra-ui/react"
import MainNavBar from "../components/MainNavBar";

const Home = () => { 
  return (
    <Container maxW="container.xl" p={0} >
      <VStack w="full" h="100vh" >
        <MainNavBar />
      </VStack>
    </Container>
  )
}

export default Home; 