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
  IconButton,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  Heading,
} from "@chakra-ui/react";
import { ContainerApp, Fixed, ContainerNonFixed } from "../../styles/style";
import HeaderApp from "../../components/Header";
import FooterApp from "../../components/Footer";
import Image from "next/image";
import Link from "next/link";
import {
  FaTags,
  FaTshirt,
  FaImages,
  FaTag,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import ReactPaginate from "react-paginate";

export default function Produtos() {
  const router = useRouter();
  const [route, setRoute] = useState("");
  const [idOpen, setIdOpen] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

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

  return (
    <ContainerApp>
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
          <Flex align="center" justify="space-between" pr={10}>
            <Box>
              <Breadcrumb
                fontSize={"md"}
                display={["none", "flex", "flex", "flex", "flex"]}
              >
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
                  <Link
                    href={`/produtos/${encodeURIComponent("1234")}`}
                    passHref
                  >
                    <BreadcrumbLink>{route}</BreadcrumbLink>
                  </Link>
                </BreadcrumbItem>
              </Breadcrumb>
            </Box>
            <Box display={["block", "block", "block", "none", "none"]}>
              <IconButton
                aria-label="Search database"
                icon={menuOpen === false ? <FaBars /> : <FaTimes />}
                fontSize={"30px"}
                onClick={() => setMenuOpen(!menuOpen)}
              />
            </Box>
          </Flex>

          <Grid
            templateColumns={["100%", "100%", "100%", "280px 1fr", "280px 1fr"]}
            gap={"15px"}
            mt={10}
          >
            <Box display={["none", "none", "none", "block", "block"]}>
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
                    <Link href="/catalogo/1">
                      <Button
                        variant="solid"
                        colorScheme="yellow"
                        mt={1}
                        _focus={{ boxShadow: "none", outline: "none" }}
                        p={2}
                        isFullWidth
                        leftIcon={<FaImages />}
                        fontSize={"sm"}
                      >
                        Catálogo
                      </Button>
                    </Link>
                  </Flex>
                </Box>
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
                    <Link href="/catalogo/2">
                      <Button
                        variant="solid"
                        colorScheme="yellow"
                        mt={1}
                        _focus={{ boxShadow: "none", outline: "none" }}
                        p={2}
                        isFullWidth
                        leftIcon={<FaImages />}
                        fontSize={"sm"}
                      >
                        Catálogo
                      </Button>
                    </Link>
                  </Flex>
                </Box>
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
                    <Link href="/catalogo/3">
                      <Button
                        variant="solid"
                        colorScheme="yellow"
                        mt={1}
                        _focus={{ boxShadow: "none", outline: "none" }}
                        p={2}
                        isFullWidth
                        leftIcon={<FaImages />}
                        fontSize={"sm"}
                      >
                        Catálogo
                      </Button>
                    </Link>
                  </Flex>
                </Box>
              </Grid>
              <Box mt={10} className="pag-large-custom">
                <ReactPaginate
                  previousLabel={"Anterior"}
                  nextLabel={"Próxima"}
                  breakLabel={"..."}
                  breakClassName={"break-me-custom"}
                  pageCount={30}
                  marginPagesDisplayed={1}
                  pageRangeDisplayed={2}
                  onPageChange={() => {}}
                  containerClassName={"pagination-pages-custom"}
                  activeClassName={"active-custom"}
                  pageClassName={"pages-custom"}
                  pageLinkClassName={"page-link-custom"}
                  previousClassName={"prev-custom"}
                  nextClassName={"next-custom"}
                  previousLinkClassName={"prev-link-custom"}
                  nextLinkClassName={"next-link-custom"}
                  breakLinkClassName={"break-link-custom"}
                />
              </Box>
              <Box mt={10} className="pag-small-custom">
                <ReactPaginate
                  previousLabel={"Anterior"}
                  nextLabel={"Próxima"}
                  breakLabel={"..."}
                  breakClassName={"break-me-custom"}
                  pageCount={30}
                  marginPagesDisplayed={1}
                  pageRangeDisplayed={1}
                  onPageChange={() => {}}
                  containerClassName={"pagination-pages-custom"}
                  activeClassName={"active-custom"}
                  pageClassName={"pages-custom"}
                  pageLinkClassName={"page-link-custom"}
                  previousClassName={"prev-custom"}
                  nextClassName={"next-custom"}
                  previousLinkClassName={"prev-link-custom"}
                  nextLinkClassName={"next-link-custom"}
                  breakLinkClassName={"break-link-custom"}
                />
              </Box>
            </Box>
          </Grid>
        </Container>
      </Fixed>
      <ContainerNonFixed>
        <FooterApp />
      </ContainerNonFixed>
      <Drawer
        isOpen={menuOpen}
        placement="left"
        onClose={() => setMenuOpen(false)}
      >
        <DrawerOverlay>
          <DrawerContent>
            <DrawerHeader bg="yellow.300">
              <Flex align="center">
                <Icon as={FaTags} fontSize={"20px"} mr={5} />
                <Heading size="md">TODOS OS PRODUTOS</Heading>
              </Flex>
            </DrawerHeader>

            <DrawerBody overflow="auto" p={2}>
              <Box>
                <Box borderRadius="md" mt={2} pt={2} pr={2} pl={2}>
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
            </DrawerBody>

            <DrawerFooter
              borderTopWidth="1px"
              borderTopStyle="solid"
              borderTopColor="gray.200"
            >
              <Button
                variant="solid"
                colorScheme="yellow"
                onClick={() => setMenuOpen(false)}
              >
                Fechar
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </ContainerApp>
  );
}
