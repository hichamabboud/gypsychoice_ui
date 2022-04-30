import { Divider, Container, VStack } from "@chakra-ui/react";
import Header from "../../components/Header";
import TopNavBar from "../../components/TopNavBar";
import WhatsIncluded from "../../components/WhatsIncluded";
import PropertyDetails from "../../components/PropertyDetails";
import MainNavBar from "../../components/MainNavBar";

const Home = () => {
  return (
    <Container maxW='container.lg' py={{ base : 0, md: 0, lg : 5}}>
      <VStack spacing={6} alignItems="stretch">
        <MainNavBar />
        <TopNavBar />
        <Header />
          <Divider />
        <PropertyDetails />
          <Divider />
        <WhatsIncluded />
          <Divider />
      </VStack>
    </Container>
  )
}

export default Home;