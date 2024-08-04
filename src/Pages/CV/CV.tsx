import { useEffect } from "react";
import { Box, Flex } from "@chakra-ui/react";
import { COLORS } from "../../common/colors";
import { Education } from "./Education";
import { WorkExperience } from "./WorkExperience";
import { WorkingTools } from "./WorkingTools";
import { Languages } from "./Languages";

export const CV = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    });

    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach((el) => observer.observe(el));

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <Box padding="8% 5%" minH="500px" bg={COLORS.BLACK} color={COLORS.WHITE}>
      <Flex direction="column" gap="20px">
        <WorkExperience />
        <Education />
        <WorkingTools />
        <Languages />
      </Flex>
    </Box>
  );
};
