import { useRouter } from "next/router";
import { Box, Button, Flex } from "@chakra-ui/react";
import Image from "next/image";
import {
  FaHome,
  FaTags,
  FaInfoCircle,
  FaPhone,
  FaQuestionCircle,
} from "react-icons/fa";

export default function HeaderApp() {
  const router = useRouter();

  function goTo(e, href) {
    e.preventDefault();
    router.push(href);
  }

  return (
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
      <Flex w={"70%"} h="50px" justify="flex-end" align="center">
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
          onClick={(e) => goTo(e, "/")}
        >
          Início
        </Button>
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
          onClick={(e) => goTo(e, "/")}
        >
          Produtos
        </Button>
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
          onClick={(e) => goTo(e, "/")}
        >
          Sobre Nós
        </Button>
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
          onClick={(e) => goTo(e, "/")}
        >
          Fale Conosco
        </Button>
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
          onClick={(e) => goTo(e, "/")}
        >
          Como Funciona
        </Button>
      </Flex>
    </Flex>
  );
}
