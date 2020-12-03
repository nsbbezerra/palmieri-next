import HeaderApp from "../components/Header";
import FooterApp from "../components/Footer";
import { ContainerApp, ContainerNonFixed, Fixed } from "../styles/style";
import {
  Box,
  Container,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Grid,
  Flex,
  Avatar,
  Text,
  Divider,
  Heading,
} from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";
import {
  FaTshirt,
  FaFileInvoiceDollar,
  FaRulerCombined,
  FaCreditCard,
  FaMoneyBillAlt,
  FaShoppingCart,
} from "react-icons/fa";
import { AiFillMessage } from "react-icons/ai";

export default function ComoFunciona() {
  return (
    <ContainerApp>
      <ContainerNonFixed>
        <HeaderApp />
        <Box w="100%" display="block">
          <Image
            src="/img/banner.png"
            layout="responsive"
            objectFit="contain"
            width={1500}
            height={399}
            quality={100}
          />
        </Box>
      </ContainerNonFixed>
      <Fixed>
        <Container maxW="xl" mt={10} mb={10}>
          <Breadcrumb
            fontSize={"md"}
            display={["none", "flex", "flex", "flex", "flex"]}
          >
            <BreadcrumbItem>
              <Link href="/" passHref>
                <BreadcrumbLink>início</BreadcrumbLink>
              </Link>
            </BreadcrumbItem>
            <BreadcrumbItem isCurrentPage>
              <Link href="/comofunciona" passHref>
                <BreadcrumbLink>como funciona</BreadcrumbLink>
              </Link>
            </BreadcrumbItem>
          </Breadcrumb>

          <Grid
            templateColumns={[
              "100%",
              "150px 1fr",
              "150px 1fr",
              "150px 1fr",
              "150px 1fr",
            ]}
            gap={"20px"}
            mt={10}
          >
            <Flex
              w={["100%", "150px", "150px", "150px", "150px"]}
              h={"120px"}
              align="center"
              justify="center"
            >
              <Avatar
                bg="yellow.400"
                icon={<FaTshirt fontSize="5rem" />}
                size="6xl"
                p={5}
              />
            </Flex>
            <Box>
              <Heading fontSize={["2xl", "3xl", "3xl", "3xl", "3xl"]}>
                Primeiro Passo
              </Heading>
              <Text
                fontSize={["md", "xl", "xl", "xl", "xl"]}
                textAlign="justify"
                style={{ textIndent: "30px" }}
              >
                Você escolhe um dos nossos produtos oferecido no site, lembrando
                que a quantidade mínima de camisetas por modelo, cor e estampa
                são de 10 unidades, portanto não trabalhamos com quantidades
                menores que essa independente da quantidade total de camisetas.
              </Text>
            </Box>
          </Grid>
          <Divider mt={10} mb={10} />
          <Grid
            templateColumns={[
              "100%",
              "150px 1fr",
              "150px 1fr",
              "150px 1fr",
              "150px 1fr",
            ]}
            gap={"20px"}
            mt={10}
          >
            <Flex
              w={["100%", "150px", "150px", "150px", "150px"]}
              h={"120px"}
              align="center"
              justify="center"
            >
              <Avatar
                bg="yellow.400"
                icon={<AiFillMessage fontSize="5rem" />}
                size="6xl"
                p={5}
              />
            </Flex>
            <Box>
              <Heading fontSize={["2xl", "3xl", "3xl", "3xl", "3xl"]}>
                Segundo Passo
              </Heading>
              <Text
                fontSize={["md", "xl", "xl", "xl", "xl"]}
                textAlign="justify"
                style={{ textIndent: "30px" }}
              >
                Após escolher o produto entre em contacto com um dos nossos
                consultores através do link no nosso site para orçamentos; lá
                você tem duas opções. (1°) Mandar diretamente uma mensagem no
                nosso WhatsApp. (2°) Mandar uma mensagem ou pergunta informando
                o seu nome, e-mail e telefone, posteriormente iremos-lhe
                responder via email, ligação ou mensagem no WhatsApp respondendo
                à mensagem.
              </Text>
            </Box>
          </Grid>
          <Divider mt={10} mb={10} />
          <Grid
            templateColumns={[
              "100%",
              "150px 1fr",
              "150px 1fr",
              "150px 1fr",
              "150px 1fr",
            ]}
            gap={"20px"}
            mt={10}
          >
            <Flex
              w={["100%", "150px", "150px", "150px", "150px"]}
              h={"120px"}
              align="center"
              justify="center"
            >
              <Avatar
                bg="yellow.400"
                icon={<FaFileInvoiceDollar fontSize="5rem" />}
                size="6xl"
                p={5}
              />
            </Flex>
            <Box>
              <Heading fontSize={["2xl", "3xl", "3xl", "3xl", "3xl"]}>
                Terceiro Passo
              </Heading>
              <Text
                fontSize={["md", "xl", "xl", "xl", "xl"]}
                textAlign="justify"
                style={{ textIndent: "30px" }}
              >
                Envie o modelo que você escolheu anteriormente e envie as
                imagens, slogan ou logo que será colocada na arte de
                apresentação da camiseta, caso não tenha alguma dessas imagens,
                pode estar nos passando as informações da arte para o nosso
                designer estar criando uma pra você. Com essas informações
                iremos rapidamente enviar-lhe o seu orçamento.
              </Text>
            </Box>
          </Grid>
          <Divider mt={10} mb={10} />
          <Grid
            templateColumns={[
              "100%",
              "150px 1fr",
              "150px 1fr",
              "150px 1fr",
              "150px 1fr",
            ]}
            gap={"20px"}
            mt={10}
          >
            <Flex
              w={["100%", "150px", "150px", "150px", "150px"]}
              h={"120px"}
              align="center"
              justify="center"
            >
              <Avatar
                bg="yellow.400"
                icon={<FaRulerCombined fontSize="5rem" />}
                size="6xl"
                p={5}
              />
            </Flex>
            <Box>
              <Heading fontSize={["2xl", "3xl", "3xl", "3xl", "3xl"]}>
                Quarto Passo
              </Heading>
              <Text
                fontSize={["md", "xl", "xl", "xl", "xl"]}
                textAlign="justify"
                style={{ textIndent: "30px" }}
              >
                Após a aprovação do orçamento todas as informações das artes já
                passada para o nosso consultor será enviada para o designer onde
                temos um prazo de até 3 dias úteis para apresentação do layout,
                caso ainda haja alguma alteração na arte são mais 2 dias úteis
                para apresentação do novo layout, se mesmo assim houver alguma
                outra alteração serão mais 2 dias úteis. Não cobramos a arte de
                camisetas feita com a Palmieri Uniformes.
              </Text>
            </Box>
          </Grid>
          <Divider mt={10} mb={10} />
          <Grid
            templateColumns={[
              "100%",
              "150px 1fr",
              "150px 1fr",
              "150px 1fr",
              "150px 1fr",
            ]}
            gap={"20px"}
            mt={10}
          >
            <Flex
              w={["100%", "150px", "150px", "150px", "150px"]}
              h={"120px"}
              align="center"
              justify="center"
            >
              <Avatar
                bg="yellow.400"
                icon={<FaCreditCard fontSize="5rem" />}
                size="6xl"
                p={5}
              />
            </Flex>
            <Box>
              <Heading fontSize={["2xl", "3xl", "3xl", "3xl", "3xl"]}>
                Quinto Passo
              </Heading>
              <Text
                fontSize={["md", "xl", "xl", "xl", "xl"]}
                textAlign="justify"
                style={{ textIndent: "30px" }}
              >
                Aprovando o layout partiremos para os detalhes finais.
                OBSERVAÇÃO: após a aprovação do layout não nos responsabilizados
                por quaisquer erros na estampa. Enviaremos as medidas das nossas
                camisetas que você pode também estar consultando aqui. Você
                enviará-nos todos os tamanhos que irá querer para o pedido
                (podendo ser tamanhos variados).
              </Text>
            </Box>
          </Grid>
          <Divider mt={10} mb={10} />
          <Grid
            templateColumns={[
              "100%",
              "150px 1fr",
              "150px 1fr",
              "150px 1fr",
              "150px 1fr",
            ]}
            gap={"20px"}
            mt={10}
          >
            <Flex
              w={["100%", "150px", "150px", "150px", "150px"]}
              h={"120px"}
              align="center"
              justify="center"
            >
              <Avatar
                bg="yellow.400"
                icon={<FaMoneyBillAlt fontSize="5rem" />}
                size="6xl"
                p={5}
              />
            </Flex>
            <Box>
              <Heading fontSize={["2xl", "3xl", "3xl", "3xl", "3xl"]}>
                Sexto Passo
              </Heading>
              <Text
                fontSize={["md", "xl", "xl", "xl", "xl"]}
                textAlign="justify"
                style={{ textIndent: "30px" }}
              >
                Para boletos, transferências ou Depósito trabalhamos da seguinte
                forma: opção de 50% de entrada para início da fabricação das
                camisetas e os outros 50% será após termino da fabricação,
                enviaremos uma foto das camisetas prontas para verificação, após
                isso estaremos aguardaremos o restante do valor para despachar a
                encomenda.
              </Text>
              <Text
                fontSize={["md", "xl", "xl", "xl", "xl"]}
                textAlign="justify"
                style={{ textIndent: "30px" }}
              >
                Para compras no cartão de crédito parcelamos em até 12x através
                do mercado pago onde de acordo com a quantidade de parcelas o
                valor Total do pedido aumentara, bandeiras disponíveis: Visa,
                Mastercard, Hipercard, American Express, Diners, Elo, Cartão
                Mercado Livre.
              </Text>
            </Box>
          </Grid>
          <Divider mt={10} mb={10} />
          <Grid
            templateColumns={[
              "100%",
              "150px 1fr",
              "150px 1fr",
              "150px 1fr",
              "150px 1fr",
            ]}
            gap={"20px"}
            mt={10}
          >
            <Flex
              w={["100%", "150px", "150px", "150px", "150px"]}
              h={"120px"}
              align="center"
              justify="center"
            >
              <Avatar
                bg="yellow.400"
                icon={<FaShoppingCart fontSize="5rem" />}
                size="6xl"
                p={5}
              />
            </Flex>
            <Box>
              <Heading fontSize={["2xl", "3xl", "3xl", "3xl", "3xl"]}>
                Sétimo Passo
              </Heading>
              <Text
                fontSize={["md", "xl", "xl", "xl", "xl"]}
                textAlign="justify"
                style={{ textIndent: "30px" }}
              >
                Com a confirmação do pagamento damos o prazo de 15 dias úteis
                para produção e mais o tempo de envio da transportadora para o
                pedido estar chegando até você.
              </Text>
            </Box>
          </Grid>
        </Container>
      </Fixed>
      <ContainerNonFixed>
        <FooterApp />
      </ContainerNonFixed>
    </ContainerApp>
  );
}
