import { ChakraProvider } from "@chakra-ui/react"
import theme from "../styles/theme";
import "@fontsource/josefin-sans/700.css";

const MyApp = ({ Component, pageProps }) => {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )}

export default MyApp
