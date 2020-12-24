import Head from "next/head";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import {
  Box,
  Button,
  Flex,
  IconButton,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  Icon,
  Heading,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Collapse,
  DrawerCloseButton,
} from "@chakra-ui/react";
import Image from "next/image";
import {
  FaHome,
  FaTags,
  FaInfoCircle,
  FaPhone,
  FaQuestionCircle,
  FaBars,
  FaTimes,
  FaTshirt,
} from "react-icons/fa";
import { FixedPanel } from "../styles/style";
import Link from "next/link";
import { BiChevronDown } from "react-icons/bi";

import { useHeader } from "../context/header";

export default function HeaderApp() {
  const [display, setDisplay] = useState(0);
  const [position, setPosition] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const { headerItens, setHeaderItens } = useHeader();

  useEffect(() => {
    if (position < 132) {
      setDisplay(0);
    } else {
      setDisplay(1);
    }
  }, [position]);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setPosition(window.scrollY);
    });
  }, []);

  const router = useRouter();

  return (
    <>
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

      {/** MENU NORMAL */}

      <Flex
        bg="gray.100"
        h="50px"
        pr={10}
        pl={10}
        justify={"space-between"}
        mb="-2px"
      >
        <Flex h="50px" align="center">
          <Box w="40px" h="40px" mr={"15px"} cursor="pointer">
            <Link href="/">
              <Image
                src="/img/icone.png"
                width={40}
                height={40}
                quality={100}
              />
            </Link>
          </Box>
          <Box w="100px" h="40px" cursor="pointer">
            <Link href="/">
              <Image src="/img/logo.png" width={95} height={35} quality={100} />
            </Link>
          </Box>
        </Flex>
        <Flex
          w={"70%"}
          h="50px"
          justify="flex-end"
          align="center"
          display={["flex", "flex", "flex", "none", "none"]}
        >
          <IconButton
            aria-label="Search database"
            icon={menuOpen === false ? <FaBars /> : <FaTimes />}
            fontSize="28px"
            onClick={() => setMenuOpen(!menuOpen)}
          />
        </Flex>
        <Flex
          w={"70%"}
          h="50px"
          justify="flex-end"
          align="center"
          display={["none", "none", "none", "flex", "flex"]}
        >
          <Link href="/">
            <Button
              size="lg"
              borderRadius="sm"
              variant="ghost"
              colorScheme="yellow"
              leftIcon={<FaHome />}
              _focus={{
                boxShadow: "none",
                outline: "none",
              }}
              color="gray.900"
              _hover={{ bg: "yellow.400" }}
              fontSize="sm"
              onClick={() => {}}
            >
              Início
            </Button>
          </Link>
          <Menu colorScheme="yellow">
            <MenuButton
              as={Button}
              size="lg"
              borderRadius="sm"
              variant="ghost"
              colorScheme="yellow"
              leftIcon={<FaTags />}
              _focus={{
                boxShadow: "none",
                outline: "none",
              }}
              color="gray.900"
              _hover={{ bg: "yellow.400" }}
              fontSize="sm"
              onClick={() => {}}
              rightIcon={<BiChevronDown />}
            >
              Produtos
            </MenuButton>
            <MenuList shadow="lg" bg="yellow.400" borderColor="transparent">
              {headerItens.map((item) => (
                <Link key={item._id} href={`/produtos/${item._id}`}>
                  <MenuItem
                    icon={<FaTshirt />}
                    _hover={{
                      bg: "gray.900",
                      outline: "none",
                      color: "gray.100",
                    }}
                    _focus={{
                      bg: "gray.900",
                      outline: "none",
                      color: "gray.100",
                    }}
                  >
                    {item.name}
                  </MenuItem>
                </Link>
              ))}
            </MenuList>
          </Menu>

          <Link href="/quemsomos">
            <Button
              size="lg"
              borderRadius="sm"
              variant="ghost"
              colorScheme="yellow"
              leftIcon={<FaInfoCircle />}
              _focus={{
                boxShadow: "none",
                outline: "none",
              }}
              color="gray.900"
              _hover={{ bg: "yellow.400" }}
              fontSize="sm"
            >
              Quem Somos
            </Button>
          </Link>
          <Link href={"/contato"}>
            <Button
              size="lg"
              borderRadius="sm"
              variant="ghost"
              colorScheme="yellow"
              leftIcon={<FaPhone />}
              _focus={{
                boxShadow: "none",
                outline: "none",
              }}
              color="gray.900"
              _hover={{ bg: "yellow.400" }}
              fontSize="sm"
            >
              Fale Conosco
            </Button>
          </Link>
          <Link href="/comofunciona">
            <Button
              size="lg"
              borderRadius="sm"
              variant="ghost"
              colorScheme="yellow"
              leftIcon={<FaQuestionCircle />}
              _focus={{
                boxShadow: "none",
                outline: "none",
              }}
              color="gray.900"
              _hover={{ bg: "yellow.400" }}
              fontSize="sm"
            >
              Como Funciona
            </Button>
          </Link>
        </Flex>
      </Flex>

      {/** MENU FIXO */}

      <FixedPanel display={display}>
        <Flex h="50px" pr={10} pl={10} justify={"space-between"}>
          <Flex h="50px" align="center">
            <Box w="40px" h="40px" mr={"15px"} cursor="pointer">
              <Link href="/">
                <Image
                  src="/img/icone.png"
                  width={40}
                  height={40}
                  quality={100}
                />
              </Link>
            </Box>
            <Box w="100px" h="40px" cursor="pointer">
              <Link href="/">
                <Image
                  src="/img/logo.png"
                  width={95}
                  height={35}
                  quality={100}
                />
              </Link>
            </Box>
          </Flex>
          <Flex
            w={"70%"}
            h="50px"
            justify="flex-end"
            align="center"
            display={["flex", "flex", "flex", "none", "none"]}
          >
            <IconButton
              aria-label="Search database"
              icon={menuOpen === false ? <FaBars /> : <FaTimes />}
              fontSize="28px"
              onClick={() => setMenuOpen(!menuOpen)}
            />
          </Flex>
          <Flex
            w={"70%"}
            h="50px"
            justify="flex-end"
            align="center"
            display={["none", "none", "none", "flex", "flex"]}
          >
            <Link href="/">
              <Button
                size="lg"
                borderRadius="sm"
                variant="ghost"
                colorScheme="yellow"
                leftIcon={<FaHome />}
                _focus={{
                  boxShadow: "none",
                  outline: "none",
                }}
                color="gray.900"
                _hover={{ bg: "yellow.400" }}
                fontSize="sm"
              >
                Início
              </Button>
            </Link>
            <Menu>
              <MenuButton
                as={Button}
                size="lg"
                borderRadius="sm"
                variant="ghost"
                colorScheme="yellow"
                leftIcon={<FaTags />}
                _focus={{
                  boxShadow: "none",
                  outline: "none",
                }}
                color="gray.900"
                _hover={{ bg: "yellow.400" }}
                fontSize="sm"
                onClick={() => {}}
                rightIcon={<BiChevronDown />}
              >
                Produtos
              </MenuButton>
              <MenuList shadow="lg" bg={"yellow.400"} borderColor="transparent">
                {headerItens.map((item) => (
                  <Link key={item._id} href={`/produtos/${item._id}`}>
                    <MenuItem
                      icon={<FaTshirt />}
                      _hover={{
                        bg: "gray.900",
                        outline: "none",
                        color: "gray.100",
                      }}
                      _focus={{
                        bg: "gray.900",
                        outline: "none",
                        color: "gray.100",
                      }}
                    >
                      {item.name}
                    </MenuItem>
                  </Link>
                ))}
              </MenuList>
            </Menu>
            <Link href="/quemsomos">
              <Button
                size="lg"
                borderRadius="sm"
                variant="ghost"
                colorScheme="yellow"
                leftIcon={<FaInfoCircle />}
                _focus={{
                  boxShadow: "none",
                  outline: "none",
                }}
                color="gray.900"
                _hover={{ bg: "yellow.400" }}
                fontSize="sm"
              >
                Quem Somos
              </Button>
            </Link>
            <Link href="/contato">
              <Button
                size="lg"
                borderRadius="sm"
                variant="ghost"
                colorScheme="yellow"
                leftIcon={<FaPhone />}
                _focus={{
                  boxShadow: "none",
                  outline: "none",
                }}
                color="gray.900"
                _hover={{ bg: "yellow.400" }}
                fontSize="sm"
              >
                Fale Conosco
              </Button>
            </Link>
            <Link href="/comofunciona">
              <Button
                size="lg"
                borderRadius="sm"
                variant="ghost"
                colorScheme="yellow"
                leftIcon={<FaQuestionCircle />}
                _focus={{
                  boxShadow: "none",
                  outline: "none",
                }}
                color="gray.900"
                _hover={{ bg: "yellow.400" }}
                fontSize="sm"
              >
                Como Funciona
              </Button>
            </Link>
          </Flex>
        </Flex>
      </FixedPanel>

      {/** MENU MOBILE */}

      <Drawer
        isOpen={menuOpen}
        placement="left"
        onClose={() => setMenuOpen(false)}
      >
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader bg="yellow.300">
              <Flex align="center">
                <Icon as={FaBars} fontSize={"25px"} mr={5} />
                <Heading size="lg">MENU</Heading>
              </Flex>
            </DrawerHeader>

            <DrawerBody>
              <Link href="/">
                <Button
                  size="lg"
                  borderRadius="lg"
                  colorScheme="gray"
                  leftIcon={<FaHome />}
                  fontSize="sm"
                  isFullWidth
                  mb={3}
                  mt={2}
                >
                  Início
                </Button>
              </Link>

              <Button
                size="lg"
                borderRadius="lg"
                colorScheme="gray"
                leftIcon={<FaTags />}
                rightIcon={<BiChevronDown />}
                fontSize="sm"
                isFullWidth
                mb={3}
                onClick={() => setIsOpen(!isOpen)}
              >
                Produtos
              </Button>
              <Collapse in={isOpen} animateOpacity>
                <Box
                  p="10px"
                  color="white"
                  mb={3}
                  borderWidth="1px"
                  borderRadius="md"
                >
                  {headerItens.map((itm) => (
                    <Link href={`/produtos/${itm._id}`} key={itm._id}>
                      <Flex
                        color="gray.900"
                        fontSize="xs"
                        align="center"
                        mb={2}
                      >
                        <Icon as={FaTshirt} mr={2} />
                        {itm.name}
                      </Flex>
                    </Link>
                  ))}
                </Box>
              </Collapse>
              <Link href="/quemsomos">
                <Button
                  size="lg"
                  borderRadius="lg"
                  colorScheme="gray"
                  leftIcon={<FaInfoCircle />}
                  fontSize="sm"
                  isFullWidth
                  mb={3}
                >
                  Sobre Nós
                </Button>
              </Link>
              <Link href="/">
                <Button
                  size="lg"
                  borderRadius="lg"
                  colorScheme="gray"
                  leftIcon={<FaPhone />}
                  fontSize="sm"
                  isFullWidth
                  mb={3}
                >
                  Fale Conosco
                </Button>
              </Link>
              <Link href="/comofunciona">
                <Button
                  size="lg"
                  borderRadius="lg"
                  colorScheme="gray"
                  leftIcon={<FaQuestionCircle />}
                  fontSize="sm"
                  isFullWidth
                  mb={3}
                >
                  Como Funciona
                </Button>
              </Link>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
}
