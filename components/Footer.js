import {
  Box,
  Grid,
  Heading,
  Text,
  Flex,
  IconButton,
  Icon,
  Divider,
  Center,
} from "@chakra-ui/react";
import Link from "next/link";
import { TiArrowRightOutline } from "react-icons/ti";
import { FaWhatsapp } from "react-icons/fa";
import {
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiOutlineWhatsApp,
  AiOutlineClockCircle,
  AiOutlineMail,
} from "react-icons/ai";

export default function FooterApp() {
  return (
    <Box bg={"gray.900"} p={10} w="100%">
      <Grid
        templateColumns={"repeat(auto-fit, minmax(250px, 250px))"}
        gap={`10px`}
        justifyContent="center"
      >
        <Box>
          <Heading color="yellow.400" size="md" mb={5}>
            INSTITUCIONAL
          </Heading>
          <Link href="/">
            <Flex
              align="center"
              color="gray.200"
              cursor="pointer"
              _hover={{ textDecoration: "underline" }}
              mb={2}
            >
              <Icon as={TiArrowRightOutline} />

              <Text ml={2} fontSize="sm">
                Onde Estamos
              </Text>
            </Flex>
          </Link>
          <Link href="/">
            <Flex
              align="center"
              color="gray.200"
              cursor="pointer"
              _hover={{ textDecoration: "underline" }}
              mb={2}
            >
              <Icon as={TiArrowRightOutline} />
              <Text ml={2} fontSize="sm">
                Fretes e Entrega
              </Text>
            </Flex>
          </Link>
          <Flex mt={10}>
            <Link href="/">
              <IconButton
                aria-label="Search database"
                icon={<AiOutlineInstagram />}
                fontSize={"35px"}
                variant="link"
                colorScheme="yellow"
                color="yellow.400"
                mr={5}
              />
            </Link>
            <Link href="/">
              <IconButton
                aria-label="Search database"
                icon={<AiOutlineFacebook />}
                fontSize={"35px"}
                variant="link"
                colorScheme="yellow"
                color="yellow.400"
              />
            </Link>
          </Flex>
        </Box>

        <Box>
          <Heading color="yellow.400" size="md" mb={5}>
            CATÁLOGOS
          </Heading>
          <Link href="/">
            <Flex
              align="center"
              color="gray.200"
              cursor="pointer"
              _hover={{ textDecoration: "underline" }}
              mb={2}
            >
              <Icon as={TiArrowRightOutline} />
              <Text ml={2} fontSize="sm">
                Onde Estamos
              </Text>
            </Flex>
          </Link>
        </Box>

        <Box>
          <Heading color="yellow.400" size="md" mb={5}>
            PRECISA DE AJUDA?
          </Heading>
          <Link href="/">
            <Flex
              align="center"
              color="gray.200"
              cursor="pointer"
              _hover={{ textDecoration: "underline" }}
              mb={2}
            >
              <Icon as={TiArrowRightOutline} />
              <Text ml={2} fontSize="sm">
                Fale Conosco
              </Text>
            </Flex>
          </Link>
          <Link href="/">
            <Flex
              align="center"
              color="gray.200"
              cursor="pointer"
              _hover={{ textDecoration: "underline" }}
              mb={2}
            >
              <Icon as={TiArrowRightOutline} />
              <Text ml={2} fontSize="sm">
                Quem Somos
              </Text>
            </Flex>
          </Link>
          <Link href="/">
            <Flex
              align="center"
              color="gray.200"
              cursor="pointer"
              _hover={{ textDecoration: "underline" }}
              mb={2}
            >
              <Icon as={TiArrowRightOutline} />
              <Text ml={2} fontSize="sm">
                Tabela de Tamanhos
              </Text>
            </Flex>
          </Link>
          <Link href="/">
            <Flex
              align="center"
              color="gray.200"
              cursor="pointer"
              _hover={{ textDecoration: "underline" }}
              mb={2}
            >
              <Icon as={TiArrowRightOutline} />
              <Text ml={2} fontSize="sm">
                Como Comprar
              </Text>
            </Flex>
          </Link>
        </Box>

        <Box>
          <Heading color="yellow.400" size="md" mb={5}>
            ATENDIMENTO
          </Heading>
          <Link href="/">
            <Flex
              align="center"
              color="gray.200"
              cursor="pointer"
              _hover={{ textDecoration: "underline" }}
              mb={2}
            >
              <Icon as={FaWhatsapp} />
              <Text ml={2} fontSize="sm">
                (63) 98501-4015
              </Text>
            </Flex>
          </Link>
          <Link href="/">
            <Flex
              align="center"
              color="gray.200"
              cursor="pointer"
              _hover={{ textDecoration: "underline" }}
              mb={2}
            >
              <Icon as={FaWhatsapp} />
              <Text ml={2} fontSize="sm">
                (63) 98485-2266
              </Text>
            </Flex>
          </Link>
          <Link href="/">
            <Flex
              align="center"
              color="gray.200"
              cursor="pointer"
              _hover={{ textDecoration: "underline" }}
              mb={2}
            >
              <Icon as={FaWhatsapp} />
              <Text ml={2} fontSize="sm">
                (63) 98489-2058
              </Text>
            </Flex>
          </Link>
          <Link href="/">
            <Flex
              align="center"
              color="gray.200"
              cursor="pointer"
              _hover={{ textDecoration: "underline" }}
              mb={2}
            >
              <Icon as={AiOutlineMail} />

              <Text ml={2} fontSize="sm">
                Palmieriuniformes@gmail.com
              </Text>
            </Flex>
          </Link>
          <Flex align="center" color="gray.200" mt={5}>
            <Icon as={AiOutlineClockCircle} />

            <Text ml={2} fontSize="sm">
              9:00 - 18:00hrs de Seg a Sex
            </Text>
          </Flex>
        </Box>
      </Grid>
      <Divider mt={10} mb={7} />
      <Center>
        <Text fontSize="sm" color="gray.300" mb={-3}>
          © Palmieri Uniformes 2021 - Todos os Direitos Reservados
        </Text>
      </Center>
    </Box>
  );
}
