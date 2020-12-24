import { ChakraProvider } from "@chakra-ui/react";
import theme from "../styles/theme";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/animation.css";
import FooterProvider from "../context/footer";
import HeaderProvider from "../context/header";

function MyApp({ Component, pageProps }) {
  return (
    <HeaderProvider>
      <FooterProvider>
        <ChakraProvider theme={theme} resetCSS={true}>
          <Component {...pageProps} />
        </ChakraProvider>
      </FooterProvider>
    </HeaderProvider>
  );
}

export default MyApp;
