import HeaderApp from "../components/Header";
import FooterApp from "../components/Footer";
import { ContainerApp, ContainerNonFixed, Fixed } from "../styles/style";
import {
  Box,
  Container,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  AspectRatio,
  Heading,
  Icon,
  Flex,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { AiOutlineMail, AiOutlineClockCircle } from "react-icons/ai";

export default function Contato() {
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
            mb={10}
          >
            <BreadcrumbItem>
              <Link href="/" passHref>
                <BreadcrumbLink>início</BreadcrumbLink>
              </Link>
            </BreadcrumbItem>
            <BreadcrumbItem isCurrentPage>
              <Link href="/contato" passHref>
                <BreadcrumbLink>contato</BreadcrumbLink>
              </Link>
            </BreadcrumbItem>
          </Breadcrumb>

          <Heading mb={5}>Onde Estamos</Heading>

          <Box borderWidth="1px" borderRadius="lg" p={3} mb={10}>
            <AspectRatio ratio={16 / 9}>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d585.8309283354702!2d-48.17393714785431!3d-8.973524737632859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9326856a0e7c0c19%3A0x1f4abd2a0ce1772d!2sPalmieri%20Uniformes!5e0!3m2!1spt-BR!2sbr!4v1594834485788!5m2!1spt-BR!2sbr"></iframe>
            </AspectRatio>
          </Box>

          <Heading mb={5}>Palmieri Uniformes</Heading>
          <Flex align="center" mb={2}>
            <Icon as={FaWhatsapp} fontSize="2xl" />
            <Text ml={2} fontSize="xl">
              (63) 98501-4015
            </Text>
          </Flex>
          <Flex align="center" mb={2}>
            <Icon as={FaWhatsapp} fontSize="2xl" />
            <Text ml={2} fontSize="xl">
              (63) 98484-2266
            </Text>
          </Flex>
          <Flex align="center" mb={2}>
            <Icon as={FaWhatsapp} fontSize="2xl" />
            <Text ml={2} fontSize="xl">
              (63) 98489-2058
            </Text>
          </Flex>
          <Flex align="center" mb={2}>
            <Icon as={AiOutlineMail} fontSize="2xl" />
            <Text ml={2} fontSize="xl">
              Palmieriuniformes@gmail.com
            </Text>
          </Flex>
          <Flex align="center" mb={2}>
            <Icon as={AiOutlineClockCircle} fontSize="2xl" />
            <Text ml={2} fontSize="xl">
              De Segunda a Sexta das 9:00 às 18:00hrs
            </Text>
          </Flex>
        </Container>
      </Fixed>
      <ContainerNonFixed>
        <FooterApp />
      </ContainerNonFixed>
    </ContainerApp>
  );
}
