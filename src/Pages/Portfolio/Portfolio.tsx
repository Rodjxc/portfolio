import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpFromBracket } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faFigma } from "@fortawesome/free-brands-svg-icons";
import { Link as RouterLink } from "react-router-dom";
import { Flex, Heading, Image, Link, Text, VStack } from "@chakra-ui/react";
import { Works } from "./Works";

type Project = {
	id: string;
	name: string;
	url?: string;
	technologies: string;
	categories: string;
	description: string;
	figma?: string;
	github?: string;
};

export const Portfolio = () => {
	return (
		<div className="bg-lightBlack-custom text-white p-28 mt-4">
			<Heading className="text-center my-8 text-pink-custom">Portfolio</Heading>
			<VStack spacing="40px" align="stretch">
				{Works.map((work: Project) => {
					return (
						<Flex
							key={work.id}
							direction={{ base: "column", md: "row" }}
							borderBottom="1px solid white"
							borderRight="1px solid white"
							align="stretch"
						>
							<div className="overflow-hidden max-h-[450px] w-full md:w-1/2">
								<Link
									as={RouterLink}
									to={work.url || "/default-path-if-undefined"}
									target="_blank"
									display="block"
									data-cursor-text="See project live"
								>
									<Image
										src={`/img/${work.id}.jpg`}
										alt="Image of the project"
										className="object-cover w-full h-full"
									/>
								</Link>
							</div>
							<Flex
								className="p-4 justify-center"
								direction="column"
								textAlign="center"
								fontFamily="'Uncut-Sans', sans-serif"
								width={{ base: "100%", md: "50%" }}
							>
								<Heading
									as="h1"
									className="text-pink-custom text-2xl mt-2 mb-4"
								>
									{work.name}
								</Heading>
								<Text className="text-pink-custom text-xl mt-2 mb-6">
									{work.technologies}
								</Text>
								<Text my="4" mx="auto" width="80%">
									{work.description}
								</Text>
								<Flex className="justify-center mt-4 mb-4 space-x-20">
									<Link
										className="flex items-center mx-2 text-2xl text-white hover:text-pink-custom"
										as={RouterLink}
										to={work.url || "/default-path-if-undefined"}
										target="_blank"
									>
										<FontAwesomeIcon icon={faArrowUpFromBracket} />
										<span className="ml-2 text-base">See live</span>
									</Link>
									{work.github && (
										<Link
											className="flex items-center mx-2 text-2xl text-white hover:text-pink-custom"
											as={RouterLink}
											to={work.github}
											target="_blank"
										>
											<FontAwesomeIcon icon={faGithub} />
											<span className="ml-2 text-base">GitHub</span>
										</Link>
									)}
									{work.figma && (
										<Link
											className="flex items-center mx-2 text-2xl text-white hover:text-pink-custom"
											as={RouterLink}
											to={work.figma}
											target="_blank"
										>
											<FontAwesomeIcon icon={faFigma} />
											<span className="ml-2 text-base">See in Figma</span>
										</Link>
									)}
								</Flex>
							</Flex>
						</Flex>
					);
				})}
			</VStack>
		</div>
	);
};
