import HeaderApp from "../components/Header";
import FooterApp from "../components/Footer";
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
  Image as ChakraImage,
  Input,
  Textarea,
  IconButton,
} from "@chakra-ui/react";
import Image from "next/image";
import { FaPaintBrush, FaCreditCard, FaTruck, FaCheck } from "react-icons/fa";
import {
  RiMoneyDollarCircleFill,
  RiSendPlaneFill,
  RiWhatsappLine,
  RiArrowLeftSLine,
  RiArrowRightSLine,
} from "react-icons/ri";
import { useRouter } from "next/router";
import config from "../configs/index";
import Carousel from "react-multi-carousel";
import Link from "next/link";

const isBrowser = typeof window !== "undefined";

export default function Home() {
  const route = useRouter();
  function goTo(e, href) {
    e.preventDefault();
    route.push(href);
  }
  const ButtonGroup = ({ next, previous }) => {
    return (
      <Flex position="absolute" justify="center" mt={3} w="88vw">
        <IconButton
          onClick={() => previous()}
          icon={<RiArrowLeftSLine />}
          fontSize={"35px"}
          mr={5}
        />
        <IconButton
          onClick={() => next()}
          icon={<RiArrowRightSLine />}
          fontSize={"35px"}
        />
      </Flex>
    );
  };
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
          display={["none", "none", "none", "flex", "flex"]}
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
        <Flex
          justify="center"
          display={["none", "none", "none", "flex", "flex"]}
        >
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
                <Link href="/produtos/1">
                  <Button
                    size="sm"
                    variant="link"
                    colorScheme="yellow"
                    mt={2}
                    _focus={{ boxShadow: "none", outline: "none" }}
                    p={1}
                  >
                    Veja Mais
                  </Button>
                </Link>
              </Flex>
            </Box>
          </Grid>
        </Container>
      </Fixed>
      <ContainerNonFixed>
        <Box
          backgroundImage={`url(/img/middle-web.png)`}
          backgroundSize="cover"
          backgroundRepeat="no-repeat"
          mt={20}
          backgroundPosition="bottom"
        >
          <Flex align="center" justify="center">
            <Image src="/img/text-web.png" width={600} height={130} />
          </Flex>
          <Center>
            <Heading color="white" textAlign="center">
              UNIFORME PARA EVENTOS
            </Heading>
          </Center>
          <Grid
            templateColumns={[
              "100vw",
              "100vw",
              "400px 1fr",
              "500px 1fr",
              "500px 1fr",
            ]}
            justifyContent="center"
            maxWidth={"100%"}
          >
            <Flex
              mb={["0px", "0px", "-120px", "-120px", "-120px"]}
              display={["none", "none", "none", "flex", "flex"]}
            >
              <Image
                src="/img/camiseta-two-web.png"
                width={500}
                height={450}
                objectFit="cover"
                objectPosition="relative"
              />
            </Flex>
            <Flex
              mb={["0px", "0px", "-120px", "-120px", "-120px"]}
              display={["none", "none", "flex", "none", "none"]}
              align={"center"}
              w={"100%"}
              justify="center"
              mt={[2, 2, 0, 0, 0]}
            >
              <Image
                src="/img/camiseta-two-web.png"
                width={400}
                height={350}
                objectFit="cover"
                objectPosition="relative"
              />
            </Flex>
            <Flex
              mb={["20px", "20px", "-120px", "-120px", "-120px"]}
              display={["flex", "flex", "none", "none", "none"]}
              align={"center"}
              w={"100%"}
              justify="center"
              mt={[2, 2, 0, 0, 0]}
            >
              <Image
                src="/img/camiseta-two-web.png"
                width={300}
                height={250}
                objectFit="cover"
                objectPosition="relative"
              />
            </Flex>
            <Flex align="center">
              <Text
                fontSize={["lg", "lg", "lg", "2xl", "2xl"]}
                fontWeight="700"
                color="white"
                mt={-10}
                textAlign="justify"
                mb={[20, 20, 0, 0, 0]}
                p={[7, 7, 7, 10, 10]}
              >
                Trabalhamos para levar qualidade com preço justo aos nossos
                clientes, buscamos sempre entender e aprender com cada pedido e
                com cada pessoa, assim sempre melhorando nossos processos.
              </Text>
            </Flex>
          </Grid>
        </Box>
        <Grid
          templateColumns={[
            "100vw",
            "100vw",
            "45vw 45vw",
            "45vw 45vw",
            "45vw 45vw",
          ]}
          bg={
            "linear-gradient( 180deg, rgba(255, 255, 255, 1) 0%, rgba(221, 221, 221, 1) 100% )"
          }
          justifyContent="center"
        >
          <Box display="flex" alignItems="center" flexDirection="column" p={10}>
            <Box w={"100%"} pr={[2, 20, 0, 0, 0]} pl={[2, 20, 0, 0, 0]}>
              <Center>
                <Heading
                  mt={["5px", "5px", "85px", "85px", "85px"]}
                  fontSize={["xl", "2xl", "xl", "2xl", "4xl"]}
                  textAlign="center"
                >
                  UNIFORMES PARA ACADEMIA
                </Heading>
              </Center>
              <Box>
                <Text
                  fontWeight="700"
                  mt={5}
                  fontSize={["sm", "md", "xs", "sm", "lg"]}
                  textAlign="justify"
                >
                  <Icon as={FaCheck} color="green.400" mr={5} />
                  DESEMPENHO DRY FIT PREMIUM
                </Text>
                <Text
                  fontWeight="700"
                  fontSize={["sm", "md", "xs", "sm", "lg"]}
                  textAlign="justify"
                >
                  <Icon as={FaCheck} color="green.400" mr={5} />
                  MODELAGEM EXCLUSIVA
                </Text>
                <Text
                  fontWeight="700"
                  fontSize={["sm", "md", "xs", "sm", "lg"]}
                  textAlign="justify"
                >
                  <Icon as={FaCheck} color="green.400" mr={5} />
                  PERSONALIZADA COM SUA LOGO
                </Text>
                <Text
                  fontWeight="700"
                  fontSize={["sm", "md", "xs", "sm", "lg"]}
                  textAlign="justify"
                >
                  <Icon as={FaCheck} color="green.400" mr={5} />
                  DESEMPENHO QUE AFASTA O SUOR DA PELE
                </Text>
              </Box>
              <Button
                colorScheme="green"
                borderRadius="lg"
                isFullWidth
                size={"lg"}
                mt={6}
              >
                SOLICITE UM ORÇAMENTO
              </Button>
            </Box>
          </Box>
          <Box
            display={["none", "none", "flex", "flex", "flex"]}
            justifyContent="center"
          >
            <Image
              src="/img/camiseta-three-web.png"
              width={550}
              height={450}
              objectFit="contain"
            />
          </Box>
          <Box
            display={["flex", "flex", "none", "none", "none"]}
            justifyContent="center"
          >
            <Image
              src="/img/camiseta-three-web.png"
              width={320}
              height={220}
              objectFit="contain"
            />
          </Box>
        </Grid>
      </ContainerNonFixed>

      <Fixed>
        <Box mt={20} textAlign="center">
          <Heading>PORTIFÓLIO DE ARTES</Heading>
          <Text>Nosso Portifólio de Artes</Text>
        </Box>
        <Container maxW="xl" mt={10}>
          <Carousel
            additionalTransfrom={2}
            arrows={false}
            autoPlaySpeed={3000}
            centerMode={false}
            focusOnSelect={false}
            infinite
            itemClass=""
            keyBoardControl
            minimumTouchDrag={20}
            renderButtonGroupOutside={true}
            renderDotsOutside={true}
            responsive={config.carousel}
            ssr
            deviceType={isBrowser}
            customButtonGroup={<ButtonGroup />}
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

      <ContainerNonFixed>
        <Box mt={20} bg="gray.900" pt={10} pb={20}>
          <Container maxW={["100vw", "100vw", "xl", "xl", "xl"]}>
            <Box textAlign="center" mb={10}>
              <Heading color="yellow.400">DEPOIMENTOS</Heading>
            </Box>

            <Carousel
              additionalTransfrom={1}
              arrows={false}
              autoPlaySpeed={3000}
              centerMode={false}
              focusOnSelect={false}
              ssr
              infinite={false}
              itemClass=""
              keyBoardControl
              minimumTouchDrag={80}
              renderButtonGroupOutside={true}
              renderDotsOutside={true}
              responsive={config.depoiments}
              deviceType={isBrowser}
              customButtonGroup={<ButtonGroup />}
            >
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                flexDirection="column"
                w="255px"
              >
                <Flex
                  bg="gray.200"
                  borderRadius="lg"
                  w={"250px"}
                  h={"150px"}
                  direction="column"
                  align="center"
                  p={2}
                >
                  <Text fontSize="xs" textAlign="center">
                    Meu depoimento é meu depoimento Meu depoimento é meu
                    depoimento Meu depoimento é meu depoimento Meu depoimento é
                    meu depoimento Meu depoimento é meu depoimento
                  </Text>
                </Flex>
                <ChakraImage
                  borderRadius="full"
                  boxSize="80px"
                  src="https://bit.ly/sage-adebayo"
                  alt="Segun Adebayo"
                  mt={-10}
                  borderWidth="2px"
                  borderColor="yellow.400"
                  borderStyle="solid"
                />
                <Text color="gray.200" fontSize="sm">
                  Segun Adebayo
                </Text>
              </Box>
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                flexDirection="column"
                w="255px"
              >
                <Flex
                  bg="gray.200"
                  borderRadius="lg"
                  w={"250px"}
                  h={"150px"}
                  direction="column"
                  align="center"
                  p={2}
                >
                  <Text fontSize="xs" textAlign="center">
                    Meu depoimento é meu depoimento Meu depoimento é meu
                    depoimento Meu depoimento é meu depoimento Meu depoimento é
                    meu depoimento Meu depoimento é meu depoimento
                  </Text>
                </Flex>
                <ChakraImage
                  borderRadius="full"
                  boxSize="80px"
                  src="https://bit.ly/sage-adebayo"
                  alt="Segun Adebayo"
                  mt={-10}
                  borderWidth="2px"
                  borderColor="yellow.400"
                  borderStyle="solid"
                />
                <Text color="gray.200" fontSize="sm">
                  Segun Adebayo
                </Text>
              </Box>
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                flexDirection="column"
                w="255px"
              >
                <Flex
                  bg="gray.200"
                  borderRadius="lg"
                  w={"250px"}
                  h={"150px"}
                  direction="column"
                  align="center"
                  p={2}
                >
                  <Text fontSize="xs" textAlign="center">
                    Meu depoimento é meu depoimento Meu depoimento é meu
                    depoimento Meu depoimento é meu depoimento Meu depoimento é
                    meu depoimento Meu depoimento é meu depoimento
                  </Text>
                </Flex>
                <ChakraImage
                  borderRadius="full"
                  boxSize="80px"
                  src="https://bit.ly/sage-adebayo"
                  alt="Segun Adebayo"
                  mt={-10}
                  borderWidth="2px"
                  borderColor="yellow.400"
                  borderStyle="solid"
                />
                <Text color="gray.200" fontSize="sm">
                  Segun Adebayo
                </Text>
              </Box>
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                flexDirection="column"
                w="255px"
              >
                <Flex
                  bg="gray.200"
                  borderRadius="lg"
                  w={"250px"}
                  h={"150px"}
                  direction="column"
                  align="center"
                  p={2}
                >
                  <Text fontSize="xs" textAlign="center">
                    Meu depoimento é meu depoimento Meu depoimento é meu
                    depoimento Meu depoimento é meu depoimento Meu depoimento é
                    meu depoimento Meu depoimento é meu depoimento
                  </Text>
                </Flex>
                <ChakraImage
                  borderRadius="full"
                  boxSize="80px"
                  src="https://bit.ly/sage-adebayo"
                  alt="Segun Adebayo"
                  mt={-10}
                  borderWidth="2px"
                  borderColor="yellow.400"
                  borderStyle="solid"
                />
                <Text color="gray.200" fontSize="sm">
                  Segun Adebayo
                </Text>
              </Box>
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                flexDirection="column"
                w="255px"
              >
                <Flex
                  bg="gray.200"
                  borderRadius="lg"
                  w={"250px"}
                  h={"150px"}
                  direction="column"
                  align="center"
                  p={2}
                >
                  <Text fontSize="xs" textAlign="center">
                    Meu depoimento é meu depoimento Meu depoimento é meu
                    depoimento Meu depoimento é meu depoimento Meu depoimento é
                    meu depoimento Meu depoimento é meu depoimento
                  </Text>
                </Flex>
                <ChakraImage
                  borderRadius="full"
                  boxSize="80px"
                  src="https://bit.ly/sage-adebayo"
                  alt="Segun Adebayo"
                  mt={-10}
                  borderWidth="2px"
                  borderColor="yellow.400"
                  borderStyle="solid"
                />
                <Text color="gray.200" fontSize="sm">
                  Segun Adebayo
                </Text>
              </Box>
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                flexDirection="column"
                w="255px"
              >
                <Flex
                  bg="gray.200"
                  borderRadius="lg"
                  w={"250px"}
                  h={"150px"}
                  direction="column"
                  align="center"
                  p={2}
                >
                  <Text fontSize="xs" textAlign="center">
                    Meu depoimento é meu depoimento Meu depoimento é meu
                    depoimento Meu depoimento é meu depoimento Meu depoimento é
                    meu depoimento Meu depoimento é meu depoimento
                  </Text>
                </Flex>
                <ChakraImage
                  borderRadius="full"
                  boxSize="80px"
                  src="https://bit.ly/sage-adebayo"
                  alt="Segun Adebayo"
                  mt={-10}
                  borderWidth="2px"
                  borderColor="yellow.400"
                  borderStyle="solid"
                />
                <Text color="gray.200" fontSize="sm">
                  Segun Adebayo
                </Text>
              </Box>
            </Carousel>
          </Container>
        </Box>
      </ContainerNonFixed>

      <ContainerNonFixed>
        <Box bg={"gray.100"} pt={10} pb={10}>
          <Container maxW="lg">
            <Box textAlign="center">
              <Heading>ENTRE EM CONTATO</Heading>
            </Box>
            <Grid
              templateColumns={["1fr", "1fr", "1fr", "1fr 1fr", "1fr 1fr"]}
              gap={"30px"}
              mt={10}
            >
              <Box p={10}>
                <Text fontSize="sm" fontWeight="700" mb={2}>
                  Envie sua Mensagem
                </Text>
                <Input
                  placeholder="Nome"
                  focusBorderColor="yellow.400"
                  bg={"white"}
                  borderColor="gray.400"
                  mb={2}
                  size="sm"
                />
                <Input
                  placeholder="Telefone"
                  type="number"
                  focusBorderColor="yellow.400"
                  bg={"white"}
                  borderColor="gray.400"
                  mb={2}
                  size="sm"
                />
                <Input
                  placeholder="Email"
                  type="email"
                  focusBorderColor="yellow.400"
                  bg={"white"}
                  borderColor="gray.400"
                  mb={2}
                  size="sm"
                />
                <Input
                  placeholder="Quantidade de Camisetas"
                  type="number"
                  focusBorderColor="yellow.400"
                  bg={"white"}
                  borderColor="gray.400"
                  mb={2}
                  size="sm"
                />
                <Textarea
                  placeholder="Sua mensagem aqui"
                  focusBorderColor="yellow.400"
                  bg={"white"}
                  borderColor="gray.400"
                  rows={4}
                  mb={2}
                  size="sm"
                />
                <Button
                  isFullWidth
                  colorScheme="yellow"
                  leftIcon={<RiSendPlaneFill />}
                >
                  ENVIAR MENSAGEM
                </Button>
              </Box>
              <Box>
                <Center>
                  <Text fontSize="sm" fontWeight="700" mb={2}>
                    Solicite um orçamento via Whatsapp
                  </Text>
                </Center>
                <Center>
                  <Button
                    leftIcon={<RiWhatsappLine />}
                    colorScheme="green"
                    size="lg"
                    fontSize="4xl"
                    h={20}
                  >
                    Clique Aqui
                  </Button>
                </Center>
              </Box>
            </Grid>
          </Container>
        </Box>
      </ContainerNonFixed>
      <FooterApp />
    </ContainerApp>
  );
}
