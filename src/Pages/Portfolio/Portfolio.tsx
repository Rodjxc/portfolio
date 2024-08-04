import { Works } from "../../Data/Works";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpFromBracket } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faFigma } from "@fortawesome/free-brands-svg-icons";
import { Link as RouterLink } from "react-router-dom";
import {
  Box,
  Flex,
  Heading,
  Image,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import { COLORS } from "../../common/colors";

export const Portfolio = () => {
  return (
    <Box className="page" padding="4%" bg="black" color="white">
      <Heading
        as="h1"
        textAlign="center"
        fontSize="4xl"
        my="8"
        color={COLORS.PINK}
      >
        Portfolio
      </Heading>
      <VStack spacing="40px" align="stretch">
        {Works.map((work) => {
          return (
            <Flex
              key={work.id}
              direction={{ base: "column", md: "row" }}
              borderTop="1px solid white"
              borderRight="1px solid white"
              align="stretch"
            >
              <Box
                overflow="hidden"
                maxHeight="450px"
                width={{ base: "100%", md: "50%" }}
              >
                <Link
                  as={RouterLink}
                  to={work.url || "/default-path-if-undefined"}
                  target="_blank"
                  display="block"
                  data-cursor-text="See project live"
                >
                  <Image
                    src={"/img/" + work.id + ".jpg"}
                    alt="Image of the project"
                    objectFit="cover"
                    width="100%"
                    height="100%"
                  />
                </Link>
              </Box>
              <Flex
                direction="column"
                textAlign="center"
                justifyContent="center"
                fontFamily="'Uncut-Sans', sans-serif"
                p="4"
                width={{ base: "100%", md: "50%" }}
              >
                <Heading as="h1" color={COLORS.PINK} fontSize="2xl" mt="2">
                  {work.name}
                </Heading>
                <Text color={COLORS.PINK} fontSize="lg" mt="2">
                  {work.technologies}
                </Text>
                <Text my="4" mx="auto" width="80%">
                  {work.description}
                </Text>
                <Flex justifyContent="center" mt="4" mb="4">
                  <Link
                    as={RouterLink}
                    to={work.url || "/default-path-if-undefined"}
                    target="_blank"
                    color={COLORS.WHITE}
                    fontSize="25px"
                    mx="2"
                    _hover={COLORS.PINK}
                  >
                    <FontAwesomeIcon icon={faArrowUpFromBracket} />
                  </Link>
                  {work.github && (
                    <Link
                      as={RouterLink}
                      to={work.github}
                      target="_blank"
                      color={COLORS.WHITE}
                      fontSize="25px"
                      mx="2"
                      _hover={COLORS.PINK}
                    >
                      <FontAwesomeIcon icon={faGithub} />
                    </Link>
                  )}
                  {work.figma && (
                    <Link
                      as={RouterLink}
                      to={work.figma}
                      target="_blank"
                      color={COLORS.WHITE}
                      fontSize="25px"
                      mx="2"
                      _hover={COLORS.PINK}
                    >
                      <FontAwesomeIcon icon={faFigma} />
                    </Link>
                  )}
                </Flex>
              </Flex>
            </Flex>
          );
        })}
      </VStack>
    </Box>
  );
};