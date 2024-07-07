import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Works } from "../../Data/Works";
import { Box, Heading, Image, Text, Link, VStack } from "@chakra-ui/react";

// Here we create an interface to let the useState know that the params we'll be receiving, will be of those types
interface ProjectType {
  id: string;
  name: string;
  tecnologies: string;
  description: string;
  url: string;
}

export const Project = () => {
  // Here we use the useParams to get the parameters like id, descript, etc from the element we're reading (in this case, from
  // the items of the portfolio)

  const params = useParams();

  // And here, linked to the interface, we define the initial state of the useState depending on the parameter we receive. It'll be
  // of one of those types, or it'll be null

  const [proyecto, setProyecto] = useState<ProjectType | null>(null);

  useEffect(() => {
    const proyecto = Works.filter((trabajo) => trabajo.id === params.id);
    setProyecto(proyecto[0]);
  }, [params.id]);

  return (
    <Box className="page-work" padding="4" maxW="xl" margin="auto">
      {proyecto && (
        <Box
          className="mask"
          height="300px"
          overflow="hidden"
          boxShadow="0px 0px 20px #ddd"
        >
          <Image
            src={`/img/${proyecto.id}.jpg`}
            alt={proyecto.name}
            width="100%"
            height="100%"
            objectFit="cover"
          />
        </Box>
      )}
      {proyecto && (
        <VStack spacing={4} align="start" mt={4}>
          <Heading as="h1" size="xl">
            {proyecto.name}
          </Heading>
          <Text fontSize="lg">{proyecto.tecnologies}</Text>
          <Text>{proyecto.description}</Text>
          <Link href={proyecto.url} isExternal color="teal.500">
            Go to the Project
          </Link>
        </VStack>
      )}
    </Box>
  );
};
