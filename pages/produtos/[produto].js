import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Container,
  Flex,
  Grid,
  Icon,
  Text,
  Collapse,
  Button,
} from "@chakra-ui/react";
import { ContainerApp, Fixed, ContainerNonFixed } from "../../styles/style";
import HeaderApp from "../../components/Header";
import FooterApp from "../../components/Footer";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { FaTags, FaTshirt, FaImages, FaTag } from "react-icons/fa";
import ReactPaginate from "react-paginate";

export default function Produtos() {
  const router = useRouter();
  const [route, setRoute] = useState("");
  const [idOpen, setIdOpen] = useState("");

  useEffect(() => {
    const { produto } = router.query;
    setRoute(produto);
  }, [router]);

  function handleToogle(id) {
    if (idOpen === id) {
      setIdOpen("");
    } else {
      setIdOpen(id);
    }
  }

  function goTo(e, href) {
    e.preventDefault();
    router.push(href);
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
        <Box w="100%" display="block">
          <Image
            src="/img/banner-web.png"
            layout="responsive"
            objectFit="contain"
            width={1500}
            height={361}
            quality={100}
          />
        </Box>
      </ContainerNonFixed>
      <Fixed>
        <Container maxW="xl" mt={10} mb={10}>
          <Breadcrumb fontSize={"md"}>
            <BreadcrumbItem>
              <Link href="/" passHref>
                <BreadcrumbLink>início</BreadcrumbLink>
              </Link>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <Link href="/produtos/todos" passHref>
                <BreadcrumbLink>produtos</BreadcrumbLink>
              </Link>
            </BreadcrumbItem>
            <BreadcrumbItem isCurrentPage>
              <Link href={`/produtos/${encodeURIComponent("1234")}`} passHref>
                <BreadcrumbLink>{route}</BreadcrumbLink>
              </Link>
            </BreadcrumbItem>
          </Breadcrumb>

          <Grid templateColumns={"280px 1fr"} gap={"15px"} mt={10}>
            <Box>
              <Flex
                bg={"yellow.400"}
                p={3}
                align="center"
                borderRadius={"md"}
                shadow="md"
              >
                <Icon as={FaTags} mr={3} />
                <Text fontSize={"sm"} fontWeight="700">
                  TODOS OS PRODUTOS
                </Text>
              </Flex>

              <Box
                shadow="md"
                borderWidth={".5px"}
                borderRadius="md"
                mt={2}
                pt={2}
                pr={2}
                pl={2}
              >
                <Box
                  as={"button"}
                  display="flex"
                  alignItems="center"
                  w="100%"
                  fontSize={"sm"}
                  h="30px"
                  bg={"yellow.100"}
                  borderRadius="md"
                  pl={3}
                  pr={3}
                  onClick={() => handleToogle("1")}
                  mb={2}
                >
                  <Icon as={FaTshirt} mr={2} />
                  UNIFORMES DE ACADEMIA
                </Box>
                <Collapse in={idOpen === "1" ? true : false} animateOpacity>
                  <Box
                    pt={3}
                    pl={5}
                    pr={3}
                    pb={2}
                    color="white"
                    rounded="md"
                    borderWidth="1px"
                    mb={2}
                  >
                    <Link href="/">
                      <Flex
                        align="center"
                        color="gray.800"
                        cursor="pointer"
                        _hover={{ textDecoration: "underline" }}
                        mb={2}
                      >
                        <Icon as={FaTag} fontSize={`xs`} />
                        <Text ml={2} fontSize="xs">
                          Academia Manga Curta Femenina
                        </Text>
                      </Flex>
                    </Link>
                  </Box>
                </Collapse>
              </Box>
            </Box>

            <Box>
              <Grid
                templateColumns="repeat(auto-fit, minmax(250px, 250px))"
                gap={"40px"}
                justifyContent="center"
              >
                <Box
                  borderWidth="1px"
                  w="250px"
                  shadow="lg"
                  borderRadius="lg"
                  overflow="hidden"
                  h={"max-content"}
                >
                  <Image
                    src="/img/camiseta.png"
                    width={250}
                    height={250}
                    layout="intrinsic"
                  />

                  <Flex
                    p={2}
                    direction="column"
                    justify="center"
                    align="center"
                    h="110px"
                  >
                    <Text fontSize="md" fontWeight="700" textAlign="center">
                      Uniformes de Academia
                    </Text>
                    <Text fontSize="xs" textAlign="center">
                      Descrição descrição descrição descrição descrição
                      descrição
                    </Text>
                    <Button
                      variant="solid"
                      colorScheme="yellow"
                      mt={1}
                      _focus={{ boxShadow: "none", outline: "none" }}
                      p={2}
                      onClick={(e) => goTo(e, "/")}
                      isFullWidth
                      leftIcon={<FaImages />}
                      fontSize={"sm"}
                    >
                      Catálogo
                    </Button>
                  </Flex>
                </Box>
              </Grid>
              <Box mt={10} className="pag-large">
                <ReactPaginate
                  previousLabel={"Anterior"}
                  nextLabel={"Próxima"}
                  breakLabel={"..."}
                  breakClassName={"break-me"}
                  pageCount={30}
                  marginPagesDisplayed={1}
                  pageRangeDisplayed={2}
                  onPageChange={() => {}}
                  containerClassName={"pagination-pages"}
                  activeClassName={"active"}
                  pageClassName={"pages"}
                  pageLinkClassName={"page-link"}
                  previousClassName={"prev"}
                  nextClassName={"next"}
                  previousLinkClassName={"prev-link"}
                  nextLinkClassName={"next-link"}
                  breakLinkClassName={"break-link"}
                />
              </Box>
              <Box mt={10} className="pag-small">
                <ReactPaginate
                  previousLabel={"Anterior"}
                  nextLabel={"Próxima"}
                  breakLabel={"..."}
                  breakClassName={"break-me"}
                  pageCount={30}
                  marginPagesDisplayed={1}
                  pageRangeDisplayed={1}
                  onPageChange={() => {}}
                  containerClassName={"pagination-pages"}
                  activeClassName={"active"}
                  pageClassName={"pages"}
                  pageLinkClassName={"page-link"}
                  previousClassName={"prev"}
                  nextClassName={"next"}
                  previousLinkClassName={"prev-link"}
                  nextLinkClassName={"next-link"}
                  breakLinkClassName={"break-link"}
                />
              </Box>
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
