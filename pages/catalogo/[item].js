import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  Box,
  Container,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Heading,
  Grid,
  Button,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Text,
  Icon,
  Center,
  AspectRatio,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Flex,
  Spinner,
  IconButton,
} from "@chakra-ui/react";
import { ContainerApp, Fixed, ContainerNonFixed } from "../../styles/style";
import HeaderApp from "../../components/Header";
import FooterApp from "../../components/Footer";
import { AiOutlineZoomIn } from "react-icons/ai";
import { RiFileTextFill } from "react-icons/ri";
import { FaRuler, FaVideo } from "react-icons/fa";
import config from "../../configs/index";

export default function ItemCatalogo({ prods }) {
  const { query, isFallback, back } = useRouter();

  if (isFallback) {
    return (
      <Box w="100vw" h="100vh" p={3}>
        <Grid templateRows={"40px 1fr"} h="100%">
          <Flex>
            <Box w="40px" h="40px" mr={"15px"}>
              <Image
                src="/img/icone.png"
                width={40}
                height={40}
                quality={100}
              />
            </Box>
            <Box w="100px" h="40px">
              <Image src="/img/logo.png" width={95} height={35} quality={100} />
            </Box>
          </Flex>
          <Flex h={"100%"} align="center" justify="center" direction="column">
            <Spinner size="xl" color="yellow.400" mb={10} />
            <Text fontSize={"xl"}>Buscando Informações...</Text>
          </Flex>
        </Grid>
      </Box>
    );
  }

  const { products, urlPhoto, catalogs, tables, modelage } = prods;
  const [route, setRoute] = useState("");
  const [idRoute, setIdRoute] = useState("");
  const [productName, setProductName] = useState("CAMISETA MASCULINA");
  const [linkImage, setLinkImage] = useState("/img/camiseta.png");
  const [modal, setModal] = useState(false);
  const [information, setInformation] = useState({});

  async function setRouteName() {
    const { item } = query;
    const result = await products.find((obj) => obj._id === item);
    setRoute(result.name.toLowerCase());
    setIdRoute(result._id);
    setProductName(result.name.toUpperCase());
  }

  async function adminPage(id) {
    const catalog = await catalogs.filter((obj) => obj.product === id);
    const table = await tables.filter((obj) => obj.product === id);
    const model = await modelage.filter((obj) => obj.product === id);
    const prod = await products.find((obj) => obj._id === id);
    let inf = {
      cat: catalog,
      tab: table,
      mod: model,
      pr: prod,
    };
    await setInformation(inf);
  }

  useEffect(() => {
    adminPage(idRoute);
  }, [idRoute]);

  useEffect(() => {
    setRouteName();
  }, [query]);

  const CustomTabs = (sz) => {
    return (
      <Tabs variant="enclosed" colorScheme="yellow" borderRadius="sm" size={sz}>
        <TabList>
          <Tab p={sz === "xs" ? 2 : ""} borderRadius="lg">
            {sz === "xs" ? "" : <Icon as={RiFileTextFill} mr={2} />}
            DESCRIÇÃO
          </Tab>
          <Tab p={sz === "xs" ? 2 : ""} borderRadius="lg">
            {sz === "xs" ? "" : <Icon as={FaRuler} mr={2} />}
            MODELAGEM
          </Tab>
          <Tab p={sz === "xs" ? 2 : ""} borderRadius="lg">
            {sz === "xs" ? "" : <Icon as={FaVideo} mr={2} />}
            VÍDEO
          </Tab>
        </TabList>

        <TabPanels mt={2}>
          <TabPanel>
            {JSON.stringify(information.pr) === "{}" ||
            information.pr === undefined ||
            information.pr === null ||
            !information.pr ? (
              <Text>Nenhuma Informação</Text>
            ) : (
              <>
                {information.pr.slug.split(".").map((sl) => (
                  <Text
                    textAlign="justify"
                    style={{ textIndent: "30px" }}
                    mb={2}
                    key={sl}
                  >
                    {sl}
                  </Text>
                ))}

                {information.pr.imageDescMiddle === "" ||
                information.pr.imageDescMiddle === null ||
                information.pr.imageDescMiddle === undefined ||
                !information.pr.imageDescMiddle ? (
                  ""
                ) : (
                  <>
                    <Box borderRadius="lg" overflow="hidden" mt={10}>
                      <Image
                        src={`${urlPhoto}/${information.pr.imageDescMiddle}`}
                        alt={information.pr.imageDescription}
                        width={1000}
                        height={650}
                        layout="responsive"
                      />
                    </Box>
                  </>
                )}
              </>
            )}
          </TabPanel>
          <TabPanel>
            <Center mb={4}>
              <Text fontSize="xl" fontWeight="700" textAlign="center">
                COMO TIRAR SUAS MEDIDAS
              </Text>
            </Center>
            <Grid
              templateColumns="repeat(auto-fit, minmax(180px, 180px))"
              justifyContent="center"
              gap={"50px"}
            >
              {JSON.stringify(information.mod) === "[]" ||
              !information.mod ||
              information.mod === undefined ||
              information.mod === null ||
              !information.mod.length ? (
                <Text>Nenhuma Informação</Text>
              ) : (
                information.mod.map((md) => (
                  <Box w={"180px"} key={md._id}>
                    <Box
                      w={"180px"}
                      h={"180px"}
                      borderRadius="lg"
                      overflow="hidden"
                    >
                      <Image
                        src={`${urlPhoto}/${md.image}`}
                        alt={md.title}
                        width={180}
                        height={180}
                      />
                    </Box>
                    <Center>
                      <Text fontSize="xs" fontWeight="700" textAlign="center">
                        {md.title}
                      </Text>
                    </Center>
                    <Center>
                      <Text fontSize="xs" textAlign="center">
                        {md.desc}
                      </Text>
                    </Center>
                  </Box>
                ))
              )}
            </Grid>
            {JSON.stringify(information.tab) === "[]" ||
            information.tab === undefined ||
            information.tab === null ||
            !information.tab.length ? (
              <Text>Nenhuma Informação</Text>
            ) : (
              <>
                <Center mb={5} mt={10}>
                  <Text fontSize="xl" fontWeight="700">
                    TABELA DE MEDIDAS
                  </Text>
                </Center>
                <Container>
                  <Flex align="center" justifyContent="space-between">
                    {information.tab.map((t) => (
                      <Box
                        borderRadius="lg"
                        overflow="hidden"
                        key={t._id}
                        w="48%"
                        mr={"2%"}
                        key={t._id}
                      >
                        <Image
                          src={`${urlPhoto}/${t.image}`}
                          width={842}
                          height={667}
                          layout="responsive"
                        />
                      </Box>
                    ))}
                  </Flex>
                </Container>
              </>
            )}
          </TabPanel>
          <TabPanel>
            {JSON.stringify(information.pr) === "{}" ||
            information.pr === undefined ||
            information.pr === null ||
            !information.pr.length ? (
              <Text>Nenhuma Informação</Text>
            ) : (
              <AspectRatio maxW="560px" ratio={4 / 3}>
                <iframe
                  title="naruto"
                  src={information.pr.video}
                  allowFullScreen
                />
              </AspectRatio>
            )}
          </TabPanel>
        </TabPanels>
      </Tabs>
    );
  };

  function handleModal(act, href) {
    setModal(act);
    setLinkImage(href);
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
              <BreadcrumbLink onClick={() => back()}>produtos</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <Link href={`/catalogo/${idRoute}`} passHref>
                <BreadcrumbLink>catalogo</BreadcrumbLink>
              </Link>
            </BreadcrumbItem>
            <BreadcrumbItem isCurrentPage>
              <Link href={`/produtos/${encodeURIComponent("1234")}`} passHref>
                <BreadcrumbLink>{route}</BreadcrumbLink>
              </Link>
            </BreadcrumbItem>
          </Breadcrumb>

          <Box mt={10} textAlign="center" mb={10}>
            <Heading textAlign="center">{productName}</Heading>
            <Text>
              Catálogo de modelos prontos para você personalizar suas camisetas
              promocionais de acordo com a sua necessidade.
            </Text>
          </Box>

          <Grid
            templateColumns={"repeat(auto-fit, minmax(280px, 280px))"}
            gap={"30px"}
            justifyContent="center"
          >
            {JSON.stringify(information.cat) === "[]" ||
            information.cat === undefined ||
            information.cat === null ||
            !information.cat.length ? (
              <Text>Nenhuma Informação</Text>
            ) : (
              information.cat.map((ct) => (
                <Box
                  borderWidth="1px"
                  w="280px"
                  shadow="lg"
                  borderRadius="lg"
                  overflow="hidden"
                  key={ct._id}
                >
                  <Image
                    src={`${urlPhoto}/${ct.image}`}
                    alt={ct.imageDescription}
                    width={889}
                    height={667}
                    layout="intrinsic"
                  />
                  <Box p={2}>
                    <Button
                      size="sm"
                      variant="solid"
                      colorScheme="yellow"
                      mt={2}
                      p={1}
                      isFullWidth
                      leftIcon={<AiOutlineZoomIn />}
                      onClick={() =>
                        handleModal(true, `${urlPhoto}/${ct.image}`)
                      }
                    >
                      Ampliar
                    </Button>
                  </Box>
                </Box>
              ))
            )}
          </Grid>
        </Container>
      </Fixed>
      <ContainerNonFixed>
        <Box>
          <ContainerApp>
            <Fixed>
              <Container maxW="xl" mt={10} mb={10}>
                <Box borderWidth="1px" borderRadius="lg" p={5}>
                  <Box display={["none", "none", "block", "block", "block"]}>
                    {CustomTabs("lg", "md")}
                  </Box>
                  <Box display={["block", "block", "none", "none", "none"]}>
                    {CustomTabs("xs", "xs")}
                  </Box>
                </Box>
              </Container>
            </Fixed>
          </ContainerApp>
        </Box>
      </ContainerNonFixed>

      <ContainerNonFixed>
        <FooterApp />
      </ContainerNonFixed>

      <Modal
        isOpen={modal}
        onClose={() => setModal(false)}
        scrollBehavior="outside"
        size="xl"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Visualizar Imagem</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box>
              <Image
                src={linkImage}
                width={889}
                height={667}
                layout="responsive"
              />
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </ContainerApp>
  );
}

export const getStaticPaths = async () => {
  const response = await fetch(`${config.general.urlApi}/findAllProducts`);
  const data = await response.json();
  const paths = await data.products.map((product) => {
    return { params: { item: product._id } };
  });

  return {
    paths: paths,
    fallback: true,
  };
};

export const getStaticProps = async () => {
  const response = await fetch(`${config.general.urlApi}/catalogPage`);
  const data = await response.json();
  return {
    props: {
      prods: data,
    },
    revalidate: 30,
  };
};
