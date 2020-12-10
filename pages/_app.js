import { ChakraProvider } from "@chakra-ui/react";
import theme from "../styles/theme";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-multi-carousel/lib/styles.css";
import "../styles/pagination.css";
import FooterProvider from "../context/footer";

function MyApp({ Component, pageProps }) {
  return (
    <FooterProvider>
      <ChakraProvider theme={theme} resetCSS={true}>
        <Component {...pageProps} />
      </ChakraProvider>
    </FooterProvider>
  );
}

export default MyApp;
