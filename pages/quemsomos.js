import { ContainerNonFixed, ContainerApp, Fixed } from "../styles/style";
import HeaderApp from "../components/Header";
import FooterApp from "../components/Footer";
import {
  Box,
  Container,
  BreadcrumbLink,
  BreadcrumbItem,
  Breadcrumb,
  Grid,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";

export default function QuemSomos() {
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
          >
            <BreadcrumbItem>
              <Link href="/" passHref>
                <BreadcrumbLink>início</BreadcrumbLink>
              </Link>
            </BreadcrumbItem>
            <BreadcrumbItem isCurrentPage>
              <Link href="/quemsomos" passHref>
                <BreadcrumbLink>quem somos</BreadcrumbLink>
              </Link>
            </BreadcrumbItem>
          </Breadcrumb>

          <Grid
            templateColumns={[
              "100%",
              "160px 1fr",
              "160px 1fr",
              "160px 1fr",
              "160px 1fr",
            ]}
            gap="40px"
            mt={10}
          >
            <Box w={"160px"} h={"160px"} justify="center" align="center">
              <Image
                src="/img/icone.png"
                width={160}
                height={160}
                layout="responsive"
              />
            </Box>
            <Box>
              <Text
                style={{ textIndent: "30px" }}
                fontSize={"lg"}
                textAlign="justify"
              >
                A Palmieri Uniformes a menos de um ano se localiza na cidade de
                Pedro Afonso - TO vindo de Palmas - TO. Somos uma empresa com
                visão de crescimento buscando sempre novidades e qualidade para
                nossos cliente, temos nos destacados com fabricação de uniformes
                para toda o brasil através da internet e estamos comprometidos
                não apenas com fabricar camisetas, mas sim levar a melhor
                experiência para todos fazem camisetas conosco. A empresa está
                no mercado a mais de 4 anos e tem desenvolvidos ótimos produtos
                na região e agradando muitas pessoas, nosso trabalho tem sido
                reconhecido cada vez mais, o estado do tocantins ha muita
                concorrência e estamos firmes e fortes até hoje.
              </Text>
            </Box>
          </Grid>

          <Text
            style={{ textIndent: "30px" }}
            fontSize={"lg"}
            textAlign="justify"
            mt={8}
          >
            Atualmente nosso produtos mais vendidos estão voltados para eventos
            promocionais, empresas e uniformes escolares, feitos em malhas com
            100% da produção feita no Brasil e ótima qualidade, temos uma equipe
            de costeiras que estão a mais de 10 anos na profissão com acabamento
            exelente em nossas peças, temos serigrafos que desemvelmen uma
            produção em larga escala, fazendo diversidade de aplicação nas
            peças, nossos profissionais em artes graficas estão prontos
            proporcionar lindas artes para nossos clientes, contamos também com
            grupo de consultores que ajuda o cliente a escolher a melhor peça
            para seu evento, empresa ou esporte.
          </Text>
          <Text
            style={{ textIndent: "30px" }}
            fontSize={"lg"}
            textAlign="justify"
            mt={8}
          >
            Fazemos as peças para nossos cliente assim como se fesse para nós
            mesmo, temos temor a palavra de Deus e trabalhamos acima de tuda
            para que o reino de Deus venha crescer na Terra e pedimos a Deus
            para que cada camiseta nossa sendo usada em qualquer lugar seja
            motivo de benção na vida de quem estiver usando.
          </Text>
        </Container>
      </Fixed>
      <ContainerNonFixed>
        <FooterApp />
      </ContainerNonFixed>
    </ContainerApp>
  );
}
