import { useEffect, useState, useContext } from "react";
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
  Container,
  Input,
  Textarea,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Spinner,
} from "@chakra-ui/react";
import Link from "next/link";
import { TiArrowRightOutline } from "react-icons/ti";
import { FaWhatsapp } from "react-icons/fa";
import {
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiOutlineClockCircle,
  AiOutlineMail,
} from "react-icons/ai";
import { RiSendPlaneFill, RiWhatsappLine } from "react-icons/ri";
import axios from "axios";
import configs from "../configs/index";

import { useFooter } from "../context/footer";

export default function FooterApp() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [qtd, setQtd] = useState("");
  const [message, setMessage] = useState("");
  const [loadingModal, setLoadingModal] = useState(false);
  const [waiting, setWaiting] = useState(false);
  const [titleModal, setTitleModal] = useState("Atenção!");
  const [modalMessage, setModalMessage] = useState("");
  const [sendLoading, setSendLoading] = useState(false);
  const [disable, setDisable] = useState(false);
  const [complete, setComplete] = useState(false);

  const { footerItens, setFooterItens } = useFooter();

  function allClear() {
    setName("");
    setPhone("");
    setEmail("");
    setQtd("");
    setMessage("");
    setWaiting(false);
    setDisable(false);
    setComplete(false);
    setModalMessage("");
  }

  async function sendBitrix() {
    if (name === "") {
      setTitleModal("Atenção!");
      setModalMessage("O Nome está em Branco");
      setLoadingModal(true);
      return false;
    }
    if (phone === "") {
      setTitleModal("Atenção!");
      setModalMessage("O Telefone está em Branco");
      setLoadingModal(true);
      return false;
    }
    if (email === "") {
      setTitleModal("Atenção!");
      setModalMessage("O Email está em Branco");
      setLoadingModal(true);
      return false;
    }
    if (qtd === "") {
      setTitleModal("Atenção!");
      setModalMessage("A Quantidade de Camisetas está em Branco");
      setLoadingModal(true);
      return false;
    }
    if (message === "") {
      setTitleModal("Atenção!");
      setModalMessage("Digite uma mensagem");
      setLoadingModal(true);
      return false;
    }
    setDisable(true);
    setSendLoading(true);
    await axios
      .post(`${configs.general.bitrix}crm.lead.add`, {
        fields: {
          TITLE: name,
          UF_CRM_1594849103038: message,
          ADDRESS: qtd,
          PHONE: [{ VALUE: phone, VALUE_TYPE: "WORK" }],
          UF_CRM_1562994962166: email,
          NAME: name,
        },
      })
      .then((response) => {
        setComplete(true);
        setModalMessage("Mensagem Enviada!");
        setDisable(false);
      })
      .catch((error) => {
        setComplete(true);
        setModalMessage("Ocorreu um erro ao enviar a Mensagem!");
        setDisable(false);
      });
  }

  function handleClose() {
    setSendLoading(false);
    allClear();
  }

  function createLink() {
    let link = document.createElement("a");
    link.href = `https://api.whatsapp.com/send?phone=${configs.general.phone}&text=${configs.general.message}`;
    link.target = "_blank";
    link.click();
  }

  return (
    <>
      <IconButton
        colorScheme="green"
        aria-label="Call Segun"
        size="xl"
        icon={<RiWhatsappLine />}
        position="fixed"
        right={5}
        bottom={7}
        borderRadius={"50%"}
        fontSize="4xl"
        p={3}
        _active={{ outline: "none" }}
        onClick={() => createLink()}
        zIndex={9000}
        shadow="xl"
        className="ball"
      />

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
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <Input
                placeholder="Telefone"
                type="number"
                focusBorderColor="yellow.400"
                bg={"white"}
                borderColor="gray.400"
                mb={2}
                size="sm"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <Input
                placeholder="Email"
                type="email"
                focusBorderColor="yellow.400"
                bg={"white"}
                borderColor="gray.400"
                mb={2}
                size="sm"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                placeholder="Quantidade de Camisetas"
                type="number"
                focusBorderColor="yellow.400"
                bg={"white"}
                borderColor="gray.400"
                mb={2}
                size="sm"
                value={qtd}
                onChange={(e) => setQtd(e.target.value)}
              />
              <Textarea
                placeholder="Sua mensagem aqui"
                focusBorderColor="yellow.400"
                bg={"white"}
                borderColor="gray.400"
                rows={4}
                mb={2}
                size="sm"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <Button
                isFullWidth
                colorScheme="yellow"
                leftIcon={<RiSendPlaneFill />}
                onClick={() => sendBitrix()}
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
                <Link
                  href={`https://api.whatsapp.com/send?phone=${configs.general.phone}&text=${configs.general.message}`}
                  passHref
                >
                  <a target="_blank" style={{ textDecoration: "none" }}>
                    <Button
                      leftIcon={<RiWhatsappLine />}
                      colorScheme="green"
                      size="lg"
                      fontSize="4xl"
                      h={20}
                      textDecoration="none"
                    >
                      Clique Aqui
                    </Button>
                  </a>
                </Link>
              </Center>
            </Box>
          </Grid>
        </Container>
      </Box>
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
            <Link href="/contato">
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
            <Link href="/comofunciona">
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
              <Link
                href="https://www.instagram.com/palmieriuniformes/"
                passHref
              >
                <a target="_blank">
                  <IconButton
                    aria-label="Search database"
                    icon={<AiOutlineInstagram />}
                    fontSize={"35px"}
                    variant="link"
                    colorScheme="yellow"
                    color="yellow.400"
                    mr={5}
                  />
                </a>
              </Link>
              <Link
                href="https://www.facebook.com/Palmieri-Uniformes-2099607197005471/"
                passHref
              >
                <a target="_blank">
                  <IconButton
                    aria-label="Search database"
                    icon={<AiOutlineFacebook />}
                    fontSize={"35px"}
                    variant="link"
                    colorScheme="yellow"
                    color="yellow.400"
                  />
                </a>
              </Link>
            </Flex>
          </Box>

          <Box>
            <Heading color="yellow.400" size="md" mb={5}>
              CATÁLOGOS
            </Heading>
            {JSON.stringify(footerItens) === "[]"
              ? ""
              : footerItens.map((p) => (
                  <Link href={`/catalogo/${p._id}`} key={p._id}>
                    <Flex
                      align="center"
                      color="gray.200"
                      cursor="pointer"
                      _hover={{ textDecoration: "underline" }}
                      mb={2}
                    >
                      <Icon as={TiArrowRightOutline} />
                      <Text ml={2} fontSize="sm">
                        {p.name}
                      </Text>
                    </Flex>
                  </Link>
                ))}
          </Box>

          <Box>
            <Heading color="yellow.400" size="md" mb={5}>
              PRECISA DE AJUDA?
            </Heading>
            <Link href="/contato">
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
            <Link href="/quemsomos">
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

            <Link href="/comofunciona">
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
            <Link href={`tel:+5563985014015`} passHref>
              <a target="_blank">
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
              </a>
            </Link>
            <Link
              href={`https://api.whatsapp.com/send?phone=5563984852266&text=${configs.general.message}`}
              passHref
            >
              <a target="_blank">
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
              </a>
            </Link>
            <Link
              href={`https://api.whatsapp.com/send?phone=5563984892058&text=${configs.general.message}`}
              passHref
            >
              <a target="_blank">
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
              </a>
            </Link>
            <Link href="https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=Palmieriuniformes@gmail.com">
              <a target="_blank">
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
              </a>
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

      <Modal isOpen={loadingModal} onClose={() => setLoadingModal(false)}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{titleModal}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{modalMessage}</ModalBody>

          <ModalFooter>
            <Button colorScheme="yellow" onClick={() => setLoadingModal(false)}>
              Fechar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Modal
        isOpen={sendLoading}
        closeOnOverlayClick={false}
        onClose={() => handleClose()}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Aguarde!</ModalHeader>
          <ModalBody>
            {complete === false ? (
              <Flex align="center" justify="center" direction="column">
                <Spinner
                  thickness="4px"
                  speed="0.65s"
                  emptyColor="gray.200"
                  color="yellow.400"
                  size="xl"
                />
                <Text mt={5}>Enviando a Mensagem...</Text>
              </Flex>
            ) : (
              <Text>{modalMessage}</Text>
            )}
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="yellow"
              disabled={disable}
              onClick={() => handleClose()}
            >
              Fechar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
