import { Box, Flex, Grid, IconButton, Text } from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";
import { FaHome } from "react-icons/fa";

export default function Custom404() {
  return (
    <Box w="100vw" h="100vh" p={3}>
      <Grid templateRows={"40px 1fr"} h="100%">
        <Flex>
          <Link href="/">
            <IconButton
              colorScheme="blue"
              aria-label="Search database"
              icon={<FaHome />}
              variant="link"
              fontSize={"4xl"}
              color="gray.900"
              mr={10}
            />
          </Link>
          <Box w="40px" h="40px" mr={"15px"}>
            <Image src="/img/icone.png" width={40} height={40} quality={100} />
          </Box>
          <Box w="100px" h="40px">
            <Image src="/img/logo.png" width={95} height={35} quality={100} />
          </Box>
        </Flex>
        <Flex h={"100%"} align="center" justify="center" direction="column">
          <Image src="/img/404.png" width={270} height={270} />
          <Text fontSize={"xl"}>Página não encontrada!</Text>
        </Flex>
      </Grid>
    </Box>
  );
}
