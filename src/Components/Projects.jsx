import React from "react";

import {
  Box,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
  Flex,
  Button,
  Center,
} from "@chakra-ui/react";

import ssense from "../Images/ssense.JPG";
import cricinfo from "../Images/cricinfo.JPG";
import outlook from "../Images/outlook.JPG";
const Project = () => {
  const ProjectData = [
    {
      title: "SSENSE Clone",
      link: "https://tangerine-bublanina-ddee4c.netlify.app",
      url: "https://github.com/RohitMBelure/Project-SSENSE",
      description:
        "A web application for buying at for men’s, women’s, and kids street fashion products Mostly into cloothing . We have used HTML | CSS | Javascript for making the website",
      language: " HTML | CSS | JavaScript | BootStrap",
      image: ssense,
    },
    {
      title: "ESPN Cricinfo Clone",
      link: "https://illustrious-yeot-4a1c49.netlify.app/",
      url: "https://github.com/Madhukesh06?tab=repositories",
      description:
        "A web application for cricket lovers , It has all th information related to cricket teams, leagues, players etc, .. we have ssed HTML | CSS | JavaScript for making the website",
      language: " HTML | CSS | JavaScript",
      image: cricinfo,
    },
    {
      title: "Outlook India News Web clone",
      link: "https://keen-end-1084.vercel.app/",
      url: "https://github.com/Madhukesh06/keen-end-1084",
      description:
        "A web application for viewing all the latest news. I have used HTML | CSS | ReactJS | Bootstrap | React-Router Dom for making the website",
      language:
        " HTML | CSS | JavaScript | ReactJS | Bootstrap | API (NEWS API & JSON Server API )",
      image: outlook,
    },
  ];
  return (
    <Box mt={20} id="projects" p={"0.5rem"}>
      <Center>
        {" "}
        <Heading fontSize="3rem" color={"#B83280"} textDecoration="underline">
          My Projects
        </Heading>
      </Center>
      <SimpleGrid columns={[1, 1, 2, 3]} spacing={4} mt={8} mb="2rem">
        {ProjectData.map((t) => {
          return (
            <Stack
              style={{
                padding: "1rem",
                boxShadow: "rgba(0, 0, 0, 0.25) 0px 25px 50px -12px",
              }}
              justifyContent={"center"}
              alignItems={"center"}
              border="1px solid"
              borderColor={"gray.300"}
              rounded={"xl"}
              mx={8}
              p={2}
            >
              <Image src={t.image} />
              <Text fontSize={"1.3rem"}>{t.title}</Text>
              <Text>{t.description}</Text>
              <Text>
                <b> Tech-Stack :</b> {t.language}{" "}
              </Text>

              <Flex justifyContent={"space-between"} gap={[4]}>
                <Button
                  target="_blank"
                  as="a"
                  href={t.url}
                  bg={"#97266D"}
                  color="white"
                  _hover={{ bg: "teal" }}
                >
                  Github
                </Button>
                <Button
                  as="a"
                  href={t.link}
                  target="_blank"
                  bg={"#97266D"}
                  color="white"
                  _hover={{ bg: "teal" }}
                >
                  Deployment
                </Button>
              </Flex>
            </Stack>
          );
        })}
      </SimpleGrid>
    </Box>
  );
};

export default Project;
