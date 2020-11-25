import HeaderApp from "../components/Header";
import Head from "next/head";
import { ContainerApp, Fixed, ContainerNonFixed } from "../styles/style";
import Banner from "../components/Banner";
import {
  Grid,
  Box,
  Flex,
  Icon,
  Text,
  Heading,
  Button,
  Container,
  Center,
} from "@chakra-ui/react";
import Image from "next/image";
import { FaPaintBrush, FaCreditCard, FaTruck, FaCheck } from "react-icons/fa";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { useRouter } from "next/router";
import config from "../configs/index";
import Carousel from "react-multi-carousel";

export default function Home() {
  const route = useRouter();

  function goTo(e, href) {
    e.preventDefault();
    route.push(href);
  }

  return (
    <ContainerApp>
      <Head>
        <title>
          Palmieri Uniformes | Uniforme Empresarial, Uniforme Esportivo,
          Uniforme Promocional, Abadás
        </title>
        <link rel="icon" href="/icone.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Uniformes para todos os segmentos, uniformes esportivos, para academia, para formandos, para eventos, para empresas, abadás para festas, máscadas e muito mais"
        />
        <meta
          name="keywords"
          content="uniformes, abadá, uniforme, esportivo, esportivos, academia, formandos, eventos, máscara, empresas, serigrafia, malha"
        />
        <meta name="robots" content="index,nofollow" />
        <meta name="author" content="Natanael Bezerra - NK Informática" />
        <meta name="googletboot" content="index,nofollow" />
        <meta httpEquiv="content-language" content="pt-br" />
        <meta content="Global" name="distribution" />
      </Head>
      <ContainerNonFixed>
        <HeaderApp />
        <Banner />
        <Box
          bg="linear-gradient( 180deg, rgba(252,252,252,1) 0%, rgba(238,238,238,1) 49%, rgba(252,252,252,1) 100% )"
          display="flex"
          alignItems="center"
          justifyContent="center"
          p="5px"
        >
          <Grid
            templateColumns="repeat(4, 1fr)"
            justifyContent="center"
            gap="15px"
          >
            <Flex align="center">
              <Icon as={FaCreditCard} fontSize="5xl" mr="10px" />
              <Text fontSize={"sm"}>Pague no Boleto ou Cartão de Crédito</Text>
            </Flex>
            <Flex align="center">
              <Icon as={FaTruck} fontSize="5xl" mr="10px" />
              <Text fontSize={"sm"}>Entregamos para todo o Brasil</Text>
            </Flex>
            <Flex align="center">
              <Icon as={RiMoneyDollarCircleFill} fontSize="5xl" mr="10px" />
              <Text fontSize={"sm"}>Cobrimos 40% do valor do Frete</Text>
            </Flex>
            <Flex align="center">
              <Icon as={FaPaintBrush} fontSize="4xl" mr="10px" />
              <Text fontSize={"sm"}>Criamos sua arte 100% grátis</Text>
            </Flex>
          </Grid>
        </Box>
        <Flex justify="center">
          <Image
            src="/img/shadow-web.png"
            width={1350}
            height={50}
            layout="fixed"
          />
        </Flex>
      </ContainerNonFixed>
      <Fixed>
        <Box mt={10} textAlign="center">
          <Heading>VEJA NOSSOS MODELOS</Heading>
          <Text>
            Uniformes para diferentes utilidades, Escolha o que melhor lhe
            atender
          </Text>
        </Box>

        <Container maxW="xl">
          <Grid
            templateColumns="repeat(auto-fit, minmax(250px, 250px))"
            gap={"30px"}
            justifyContent="center"
            mt={10}
          >
            <Box
              borderWidth="1px"
              w="250px"
              shadow="lg"
              borderRadius="lg"
              overflow="hidden"
            >
              <Image
                src="/img/camiseta.png"
                width={250}
                height={250}
                layout="intrinsic"
              />

              <Flex
                p={4}
                direction="column"
                justify="center"
                align="center"
                h="80px"
              >
                <Text fontSize="md" fontWeight="700" textAlign="center">
                  Uniformes de Academia
                </Text>
                <Button
                  size="sm"
                  variant="link"
                  colorScheme="yellow"
                  mt={2}
                  _focus={{ boxShadow: "none", outline: "none" }}
                  p={1}
                  onClick={(e) => goTo(e, "/")}
                >
                  Veja Mais
                </Button>
              </Flex>
            </Box>
          </Grid>
        </Container>
      </Fixed>
      <ContainerNonFixed>
        <Box
          backgroundImage={`url(/img/middle-web.png)`}
          backgroundSize="100%"
          backgroundRepeat="no-repeat"
          mt={20}
          backgroundPosition="bottom"
        >
          <Flex align="center" justify="center">
            <Image src="/img/text-web.png" width={600} height={130} />
          </Flex>
          <Center>
            <Heading color="white">UNIFORME PARA EVENTOS</Heading>
          </Center>
          <Container maxW="xl">
            <Grid templateColumns={"500px 1fr"}>
              <Flex mb={"-120px"}>
                <Image
                  src="/img/camiseta-two-web.png"
                  width={500}
                  height={450}
                  objectFit="cover"
                  objectPosition="relative"
                />
              </Flex>
              <Flex align="center">
                <Text fontSize="2xl" fontWeight="700" color="white" mt={-10}>
                  Trabalhamos para levar qualidade com preço justo aos nossos
                  clientes, buscamos sempre entender e aprender com cada pedido
                  e com cada pessoa, assim sempre melhorando nossos processos.
                </Text>
              </Flex>
            </Grid>
          </Container>
        </Box>
        <Grid
          templateColumns={"1fr 1fr"}
          bg={
            "linear-gradient( 180deg, rgba(255, 255, 255, 1) 0%, rgba(221, 221, 221, 1) 100% )"
          }
          justifyContent="center"
        >
          <Box display="flex" alignItems="center" flexDirection="column">
            <Box w={"550px"}>
              <Center>
                <Heading mt={"120px"}>UNIFORMES PARA ACADEMIA</Heading>
              </Center>
              <Box>
                <Text fontWeight="700" mt={5} fontSize={"lg"}>
                  <Icon as={FaCheck} color="green.400" mr={5} />
                  DESEMPENHO DRY FIT PREMIUM
                </Text>
                <Text fontWeight="700" fontSize={"lg"}>
                  <Icon as={FaCheck} color="green.400" mr={5} />
                  MODELAGEM EXCLUSIVA
                </Text>
                <Text fontWeight="700" fontSize={"lg"}>
                  <Icon as={FaCheck} color="green.400" mr={5} />
                  PERSONALIZADA COM SUA LOGO
                </Text>
                <Text fontWeight="700" fontSize={"lg"}>
                  <Icon as={FaCheck} color="green.400" mr={5} />
                  DESEMPENHO QUE AFASTA O SUOR DA PELE
                </Text>
              </Box>
              <Button
                colorScheme="green"
                borderRadius="lg"
                isFullWidth
                size="lg"
                mt={6}
              >
                SOLICITE UM ORÇAMENTO
              </Button>
            </Box>
          </Box>
          <Box display="flex" justifyContent="center">
            <Image
              src="/img/camiseta-three-web.png"
              width={550}
              height={450}
              objectFit="contain"
            />
          </Box>
        </Grid>
      </ContainerNonFixed>

      <Fixed>
        <Box mt={10} textAlign="center">
          <Heading>PORTIFÓLIO DE ARTES</Heading>
          <Text>Nosso Portifólio de Artes</Text>
        </Box>
        <Container maxW="xl" mt={10}>
          <Carousel
            additionalTransfrom={0}
            arrows
            autoPlaySpeed={3000}
            centerMode={true}
            focusOnSelect={false}
            infinite
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            renderButtonGroupOutside={true}
            renderDotsOutside={true}
            responsive={config.carousel}
          >
            <Box w={"200px"} h={"250px"} p={1}>
              <Box
                w={"195px"}
                borderWidth="1px"
                borderRadius="lg"
                shadow="md"
                overflow="hidden"
              >
                <Image
                  src="/img/camiseta.png"
                  width={195}
                  height={195}
                  layout="intrinsic"
                />
                <Flex>
                  <Button
                    size="md"
                    variant="ghost"
                    colorScheme="yellow"
                    isFullWidth
                    _focus={{ boxShadow: "none", outline: "none" }}
                    p={1}
                    onClick={(e) => goTo(e, "/")}
                  >
                    Veja Mais
                  </Button>
                </Flex>
              </Box>
            </Box>
            <Box w={"200px"} h={"250px"} p={1}>
              <Box
                w={"195px"}
                borderWidth="1px"
                borderRadius="lg"
                shadow="md"
                overflow="hidden"
              >
                <Image
                  src="/img/camiseta.png"
                  width={195}
                  height={195}
                  layout="intrinsic"
                />
                <Flex>
                  <Button
                    size="md"
                    variant="ghost"
                    colorScheme="yellow"
                    isFullWidth
                    _focus={{ boxShadow: "none", outline: "none" }}
                    p={1}
                    onClick={(e) => goTo(e, "/")}
                  >
                    Veja Mais
                  </Button>
                </Flex>
              </Box>
            </Box>
            <Box w={"200px"} h={"250px"} p={1}>
              <Box
                w={"195px"}
                borderWidth="1px"
                borderRadius="lg"
                shadow="md"
                overflow="hidden"
              >
                <Image
                  src="/img/camiseta.png"
                  width={195}
                  height={195}
                  layout="intrinsic"
                />
                <Flex>
                  <Button
                    size="md"
                    variant="ghost"
                    colorScheme="yellow"
                    isFullWidth
                    _focus={{ boxShadow: "none", outline: "none" }}
                    p={1}
                    onClick={(e) => goTo(e, "/")}
                  >
                    Veja Mais
                  </Button>
                </Flex>
              </Box>
            </Box>
            <Box w={"200px"} h={"250px"} p={1}>
              <Box
                w={"195px"}
                borderWidth="1px"
                borderRadius="lg"
                shadow="md"
                overflow="hidden"
              >
                <Image
                  src="/img/camiseta.png"
                  width={195}
                  height={195}
                  layout="intrinsic"
                />
                <Flex>
                  <Button
                    size="md"
                    variant="ghost"
                    colorScheme="yellow"
                    isFullWidth
                    _focus={{ boxShadow: "none", outline: "none" }}
                    p={1}
                    onClick={(e) => goTo(e, "/")}
                  >
                    Veja Mais
                  </Button>
                </Flex>
              </Box>
            </Box>
            <Box w={"200px"} h={"250px"} p={1}>
              <Box
                w={"195px"}
                borderWidth="1px"
                borderRadius="lg"
                shadow="md"
                overflow="hidden"
              >
                <Image
                  src="/img/camiseta.png"
                  width={195}
                  height={195}
                  layout="intrinsic"
                />
                <Flex>
                  <Button
                    size="md"
                    variant="ghost"
                    colorScheme="yellow"
                    isFullWidth
                    _focus={{ boxShadow: "none", outline: "none" }}
                    p={1}
                    onClick={(e) => goTo(e, "/")}
                  >
                    Veja Mais
                  </Button>
                </Flex>
              </Box>
            </Box>
            <Box w={"200px"} h={"250px"} p={1}>
              <Box
                w={"195px"}
                borderWidth="1px"
                borderRadius="lg"
                shadow="md"
                overflow="hidden"
              >
                <Image
                  src="/img/camiseta.png"
                  width={195}
                  height={195}
                  layout="intrinsic"
                />
                <Flex>
                  <Button
                    size="md"
                    variant="ghost"
                    colorScheme="yellow"
                    isFullWidth
                    _focus={{ boxShadow: "none", outline: "none" }}
                    p={1}
                    onClick={(e) => goTo(e, "/")}
                  >
                    Veja Mais
                  </Button>
                </Flex>
              </Box>
            </Box>
            <Box w={"200px"} h={"250px"} p={1}>
              <Box
                w={"195px"}
                borderWidth="1px"
                borderRadius="lg"
                shadow="md"
                overflow="hidden"
              >
                <Image
                  src="/img/camiseta.png"
                  width={195}
                  height={195}
                  layout="intrinsic"
                />
                <Flex>
                  <Button
                    size="md"
                    variant="ghost"
                    colorScheme="yellow"
                    isFullWidth
                    _focus={{ boxShadow: "none", outline: "none" }}
                    p={1}
                    onClick={(e) => goTo(e, "/")}
                  >
                    Veja Mais
                  </Button>
                </Flex>
              </Box>
            </Box>
          </Carousel>
        </Container>
      </Fixed>
    </ContainerApp>
  );
}
