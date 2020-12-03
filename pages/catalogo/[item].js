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
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { ContainerApp, Fixed, ContainerNonFixed } from "../../styles/style";
import HeaderApp from "../../components/Header";
import FooterApp from "../../components/Footer";
import { AiOutlineZoomIn } from "react-icons/ai";
import { RiFileTextFill } from "react-icons/ri";
import { FaRuler, FaVideo } from "react-icons/fa";

export default function ItemCatalogo() {
  const router = useRouter();
  const [route, setRoute] = useState("");
  const [productName, setProductName] = useState("CAMISETA MASCULINA");
  const [linkImage, setLinkImage] = useState("/img/camiseta.png");
  const [modal, setModal] = useState(false);

  useEffect(() => {
    const { item } = router.query;
    setRoute(item);
  }, [router]);

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
            <Text textAlign="justify" style={{ textIndent: "30px" }} mb={2}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>
            <Text textAlign="justify" style={{ textIndent: "30px" }} mb={2}>
              Vestibulum lorem sed risus ultricies tristique nulla aliquet enim.
              Id diam vel quam elementum pulvinar. Semper quis lectus nulla at
              volutpat diam ut venenatis tellus. Amet mattis vulputate enim
              nulla aliquet porttitor. Fermentum dui faucibus in ornare quam
              viverra orci sagittis eu. Adipiscing elit duis tristique
              sollicitudin nibh sit amet commodo nulla. Sit amet facilisis magna
              etiam tempor orci. Laoreet sit amet cursus sit amet dictum sit.
              Neque viverra justo nec ultrices dui sapien eget mi. Id ornare
              arcu odio ut sem nulla pharetra diam sit. Porttitor massa id neque
              aliquam vestibulum morbi blandit cursus. Elementum sagittis vitae
              et leo.
            </Text>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden" mt={10}>
              <Image
                src={
                  "https://w3uniformes.com.br/wp-content/uploads/2019/11/estrategias-para-ter-uniformes-frescos.png"
                }
                width={1000}
                height={650}
                layout="responsive"
              />
            </Box>
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
              gap={"40px"}
            >
              <Box w={"180px"}>
                <Box
                  w={"180px"}
                  h={"180px"}
                  borderWidth="1px"
                  borderRadius="lg"
                  overflow="hidden"
                >
                  <Image
                    src="https://i.pinimg.com/originals/aa/c0/ba/aac0ba411412fc8948ec4d20e0d75328.jpg"
                    width={180}
                    height={180}
                  />
                </Box>
                <Center>
                  <Text fontSize="xs" fontWeight="700" textAlign="center">
                    OMBRO
                  </Text>
                </Center>
                <Center>
                  <Text fontSize="xs" textAlign="center">
                    Meçamdjkalskdjlaskjd asdalskdjlaskjdas
                  </Text>
                </Center>
              </Box>
              <Box w={"180px"}>
                <Box
                  w={"180px"}
                  h={"180px"}
                  borderWidth="1px"
                  borderRadius="lg"
                  overflow="hidden"
                >
                  <Image
                    src="https://i.pinimg.com/originals/aa/c0/ba/aac0ba411412fc8948ec4d20e0d75328.jpg"
                    width={180}
                    height={180}
                  />
                </Box>
                <Center>
                  <Text fontSize="xs" fontWeight="700" textAlign="center">
                    OMBRO
                  </Text>
                </Center>
                <Center>
                  <Text fontSize="xs" textAlign="center">
                    Meçamdjkalskdjlaskjd asdalskdjlaskjdas
                  </Text>
                </Center>
              </Box>
              <Box w={"180px"}>
                <Box
                  w={"180px"}
                  h={"180px"}
                  borderWidth="1px"
                  borderRadius="lg"
                  overflow="hidden"
                >
                  <Image
                    src="https://i.pinimg.com/originals/aa/c0/ba/aac0ba411412fc8948ec4d20e0d75328.jpg"
                    width={180}
                    height={180}
                  />
                </Box>
                <Center>
                  <Text fontSize="xs" fontWeight="700" textAlign="center">
                    OMBRO
                  </Text>
                </Center>
                <Center>
                  <Text fontSize="xs" textAlign="center">
                    Meçamdjkalskdjlaskjd asdalskdjlaskjdas
                  </Text>
                </Center>
              </Box>
            </Grid>
            <Center mb={5} mt={10}>
              <Text fontSize="xl" fontWeight="700">
                TABELA DE MEDIDAS
              </Text>
            </Center>
            <Container>
              <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
                <Image
                  src="https://i.pinimg.com/originals/dd/a5/19/dda519deca28de5075e27d42d1dbbe0c.jpg"
                  width={1200}
                  height={630}
                  layout="responsive"
                />
              </Box>
            </Container>
          </TabPanel>
          <TabPanel>
            <AspectRatio maxW="560px" ratio={4 / 3}>
              <iframe
                title="naruto"
                src="https://www.youtube.com/embed/QhBnZ6NPOY0"
                allowFullScreen
              />
            </AspectRatio>
          </TabPanel>
        </TabPanels>
      </Tabs>
    );
  };

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
              <Link href="/produtos/todos" passHref>
                <BreadcrumbLink>produtos</BreadcrumbLink>
              </Link>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <Link href={`/catalogo/${route}`} passHref>
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
            templateColumns={"repeat(auto-fit, minmax(250px, 250px))"}
            gap={"30px"}
            justifyContent="center"
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
              <Box p={2}>
                <Button
                  size="sm"
                  variant="solid"
                  colorScheme="yellow"
                  mt={2}
                  p={1}
                  isFullWidth
                  leftIcon={<AiOutlineZoomIn />}
                  onClick={() => setModal(true)}
                >
                  Ampliar
                </Button>
              </Box>
            </Box>
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
              <Box p={2}>
                <Button
                  size="sm"
                  variant="solid"
                  colorScheme="yellow"
                  mt={2}
                  p={1}
                  isFullWidth
                  leftIcon={<AiOutlineZoomIn />}
                >
                  Ampliar
                </Button>
              </Box>
            </Box>
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
              <Box p={2}>
                <Button
                  size="sm"
                  variant="solid"
                  colorScheme="yellow"
                  mt={2}
                  p={1}
                  isFullWidth
                  leftIcon={<AiOutlineZoomIn />}
                >
                  Ampliar
                </Button>
              </Box>
            </Box>
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
              <Box p={2}>
                <Button
                  size="sm"
                  variant="solid"
                  colorScheme="yellow"
                  mt={2}
                  p={1}
                  isFullWidth
                  leftIcon={<AiOutlineZoomIn />}
                >
                  Ampliar
                </Button>
              </Box>
            </Box>
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
              <Box p={2}>
                <Button
                  size="sm"
                  variant="solid"
                  colorScheme="yellow"
                  mt={2}
                  p={1}
                  isFullWidth
                  leftIcon={<AiOutlineZoomIn />}
                >
                  Ampliar
                </Button>
              </Box>
            </Box>
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
              <Box p={2}>
                <Button
                  size="sm"
                  variant="solid"
                  colorScheme="yellow"
                  mt={2}
                  p={1}
                  isFullWidth
                  leftIcon={<AiOutlineZoomIn />}
                >
                  Ampliar
                </Button>
              </Box>
            </Box>
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
                width={250}
                height={250}
                layout="responsive"
              />
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </ContainerApp>
  );
}
