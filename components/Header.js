import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import {
  Box,
  Button,
  Flex,
  IconButton,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  Icon,
  Heading,
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
} from "react-icons/fa";
import { FixedPanel } from "../styles/style";
import Link from "next/link";

export default function HeaderApp() {
  const [display, setDisplay] = useState(0);
  const [position, setPosition] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

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

  function goTo(e, href) {
    e.preventDefault();
    router.push(href);
  }

  return (
    <>
      <Flex
        bg="gray.100"
        h="50px"
        pr={10}
        pl={10}
        justify={"space-between"}
        mb="-2px"
      >
        <Flex h="50px" align="center">
          <Box w="40px" h="40px" mr={"15px"}>
            <Image src="/img/icone.png" width={40} height={40} quality={100} />
          </Box>
          <Box w="100px" h="40px">
            <Image src="/img/logo.png" width={95} height={35} quality={100} />
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
          <Link href={"/produtos/todos"}>
            <Button
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
            >
              Produtos
            </Button>
          </Link>
          <Link href="/">
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
              Sobre Nós
            </Button>
          </Link>
          <Link href={"/"}>
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
          <Link href="/">
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
      <FixedPanel display={display}>
        <Flex h="50px" pr={10} pl={10} justify={"space-between"}>
          <Flex h="50px" align="center">
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
            <Link href="/">
              <Button
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
                onClick={(e) => goTo(e, "/produtos/todos")}
              >
                Produtos
              </Button>
            </Link>
            <Link href="/">
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
                Sobre Nós
              </Button>
            </Link>
            <Link href="/">
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
            <Link href="/">
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

      <Drawer
        isOpen={menuOpen}
        placement="left"
        onClose={() => setMenuOpen(false)}
      >
        <DrawerOverlay>
          <DrawerContent>
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
              <Link href={"/produtos/todos"}>
                <Button
                  size="lg"
                  borderRadius="lg"
                  colorScheme="gray"
                  leftIcon={<FaTags />}
                  fontSize="sm"
                  isFullWidth
                  mb={3}
                >
                  Produtos
                </Button>
              </Link>
              <Link href="/">
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
              <Link href="/">
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
            <DrawerFooter>
              <Button colorScheme="yellow" onClick={() => setMenuOpen(false)}>
                Fechar
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
}
