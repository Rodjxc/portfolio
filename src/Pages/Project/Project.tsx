import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Works } from "../Portfolio/Works";
import { Box, Heading, Image, Text, Link, VStack } from "@chakra-ui/react";
import { ProjectType } from "./projectTypes";

export const Project = () => {
	const params = useParams();
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
					<Text fontSize="lg">{proyecto.technologies}</Text>
					<Text>{proyecto.description}</Text>
					<Link href={proyecto.url} isExternal color="teal.500">
						Go to the Project
					</Link>
				</VStack>
			)}
		</Box>
	);
};
