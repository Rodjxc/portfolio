import { Box, Text, Wrap, WrapItem, Button, Image } from "@chakra-ui/react";
import { COLORS } from "../../common/colors";
import { workExperienceData } from "./workExperienceData";
import { motion, useScroll, useTransform } from "framer-motion";
import { useMediaQuery } from "@chakra-ui/react";
import { useRef, useState, useEffect } from "react";

export const WorkExperience = () => {
  const { scrollYProgress } = useScroll();
  const [isLargerThanMd] = useMediaQuery("(min-width: 48em)");

  // For scroll-based animations
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  // Corrected useEffect to calculate the height of the timeline
  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, []);

  // Control timeline animations based on scroll position
  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <Box
      className="relative flex flex-col items-center py-6"
      px={{ base: "4", md: "20" }}
      ref={containerRef}
    >
      {/* Animated Title */}
      <Box
        as={motion.div}
        fontWeight="bold"
        fontSize={{ base: "40px", md: "90px" }}
        textAlign="center"
        color={COLORS.PINK}
        fontFamily="'Montserrat', sans-serif"
      >
        Work Experience
      </Box>

      <Box
        fontWeight="normal"
        fontSize={{ base: "16px", md: "20px" }}
        textAlign="left"
        px={{ base: "4", md: "20" }}
        my="10"
        mb="16"
      >
        Here is a summary of my work experience as a Front-end Developer.
      </Box>

      {/* Timeline container */}
      <Box
        ref={ref}
        className="relative w-full max-w-7xl mx-auto"
        py={10}
        position="relative"
      >
        {/* Timeline Line - only visible on larger screens */}
        {isLargerThanMd && (
          <Box
            style={{
              height: `${height}px`,
            }}
            className="absolute left-[4%] md:left-[1%] w-[2px] bg-gradient-to-b from-pink-300 to-transparent"
          >
            <motion.div
              style={{
                height: heightTransform,
                opacity: opacityTransform,
              }}
              className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-pink-300 to-transparent"
            />
          </Box>
        )}

        {workExperienceData.map((experience) => (
          <Box
            key={experience.title}
            className="flex flex-col md:flex-row justify-start pt-10 md:pt-40 gap-6"
          >
            {/* Title, Date, and Location */}
            <Box
              className="sticky flex flex-col items-start top-40 self-start max-w-xs md:max-w-sm md:w-full"
              textAlign="left"
              mb={isLargerThanMd ? 0 : 4}
              pl={{ base: 0, md: 8 }} // Padding for mobile and desktop views
            >
              {experience.image ? (
                <Image
                  src={experience.image}
                  maxW="50%"
                  maxH="300px"
                  objectFit="cover"
                  width="auto"
                  height="auto"
                  alt="Experience Image"
                />
              ) : null}

              <Text
                fontSize={{ base: "20px", md: "30px" }}
                fontWeight="bold"
                color={COLORS.PINK}
              >
                {experience.title}
              </Text>
              <Text fontSize="sm" color="neutral-500" mb="2">
                {experience.date}
              </Text>
              <Text fontSize="sm" color="neutral-500">
                {experience.location}
              </Text>
            </Box>

            {/* Description */}
            <Box className="relative w-full">
              <Text
                borderLeft={`4px solid ${COLORS.PINK}`}
                pl="5%"
                lineHeight="2rem"
                fontSize={{ base: "14px", md: "16px" }}
              >
                {experience.description}
              </Text>

              {/* Tech Stack */}
              {experience.stack && (
                <Wrap justify="start" mt="6" spacing="2">
                  {experience.stack.map((tech) => (
                    <WrapItem key={tech}>
                      <Button
                        variant="outline"
                        borderColor={COLORS.PINK}
                        color={COLORS.WHITE}
                        _hover={{
                          borderColor: COLORS.PINK,
                          color: COLORS.PINK,
                        }}
                        size="sm"
                        fontSize="sm"
                      >
                        {tech}
                      </Button>
                    </WrapItem>
                  ))}
                </Wrap>
              )}
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
