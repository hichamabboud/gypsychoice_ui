import { Container, VStack } from "@chakra-ui/react";
import Header from "../../components/Header";
import TopNavBar from "../../components/TopNavBar";
import WhatsIncluded from "../../components/WhatsIncluded";
import AboutProperty from "../../components/AboutProperty";
import MainNavBar from "../../components/MainNavBar";

const Home = () => {
  return (
    <Container maxW='container.lg' py={{ base : 6, md: 8, lg : 5}}>
      <VStack spacing={6} alignItems="stretch">
        <MainNavBar />
        <TopNavBar />
        <Header />
        <AboutProperty />
        <WhatsIncluded />
      </VStack>
    </Container>
  )
}

export default Home;