import { Collapse, Box, Flex, Text, Icon } from "@chakra-ui/react";
import Link from "next/link";
import { FaTag } from "react-icons/fa";

export default function Collapse() {
  return (
    <Collapse in={idOpen === cat._id ? true : false} animateOpacity>
      <Box
        pt={3}
        pl={5}
        pr={3}
        pb={2}
        color="white"
        rounded="md"
        borderWidth="1px"
        mb={2}
      >
        <Link href="/">
          <Flex
            align="center"
            color="gray.800"
            cursor="pointer"
            _hover={{ textDecoration: "underline" }}
            mb={2}
          >
            <Icon as={FaTag} fontSize={`xs`} />
            <Text ml={2} fontSize="xs">
              Academia Manga Curta Femenina
            </Text>
          </Flex>
        </Link>
      </Box>
    </Collapse>
  );
}
