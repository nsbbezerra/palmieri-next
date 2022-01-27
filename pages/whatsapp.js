import HeaderApp from "../components/Header";
import FooterApp from "../components/Footer";
import { ContainerApp, ContainerNonFixed } from "../styles/style";
import {
  Container,
  Heading,
  Flex,
  Text,
  Spinner,
  Button,
} from "@chakra-ui/react";
import { useEffect } from "react";
import configs from "../configs";
import { AiOutlineWhatsApp } from "react-icons/ai";
import Link from "next/link";

export default function Whatsapp() {
  function goTo() {
    let a = document.createElement("a");
    a.href = `https://api.whatsapp.com/send?phone=${configs.general.phone}&text=${configs.general.message}`;
    a.target = "blank";
    a.click();
  }

  useEffect(() => {
    setTimeout(() => {
      goTo();
    }, 2000);
  }, []);

  return (
    <ContainerApp>
      <ContainerNonFixed>
        <HeaderApp />
        <Flex
          w="100%"
          bg="green.500"
          justify={"center"}
          align={"center"}
          h="60"
          color={"white"}
        >
          <Heading>WHATSAPP</Heading>
        </Flex>
      </ContainerNonFixed>

      <Container maxW="5xl" mt={10} mb={10}>
        <Flex direction={"column"} justify={"center"} align={"center"} h="80">
          <Spinner size={"xl"} mb={5} />
          <Text fontSize={"lg"}>Iniciando Whatsapp</Text>

          <Text fontSize={"sm"} textAlign={"center"} mt={5} mb={2}>
            Se o Whatsapp não abrir automaticamente clique no botão abaixo
          </Text>
          <Link
            href={`https://api.whatsapp.com/send?phone=${configs.general.phone}&text=${configs.general.message}`}
            passHref
          >
            <a target={"_blank"}>
              <Button leftIcon={<AiOutlineWhatsApp />} colorScheme={"whatsapp"}>
                Abrir Whatsapp
              </Button>
            </a>
          </Link>
        </Flex>
      </Container>

      <ContainerNonFixed>
        <FooterApp />
      </ContainerNonFixed>
    </ContainerApp>
  );
}
