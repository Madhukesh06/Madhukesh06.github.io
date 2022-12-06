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
} from "@chakra-ui/react";

import ssense from "../Images/ssense.JPG";
import outlook from "../Images/outlook.JPG";
import everhour from "../Images/everhourProject.JPG";

const Project = () => {
  const ProjectData = [
    {
      title: "Everhour Clone",
      link: "https://clone-everhour.netlify.app",
      url: "https://github.com/Madhukesh06/everhour.com-clone",
      description:
        "A web application for Time-Tracking , Everhour is a team-oriented time tracking software product, One of the properties of Everhour is Integration and synchronization with many kinds of business tools such as: Asana, Basecamp, GitHub, Trello etc.",
      language:
        " React js | React-redux | React-redux-thunk | Chakra UI | NodeJS | MongoDB | Express js | Mongoose",
      image: everhour,
    },
    {
      title: "SSENSE Clone",
      link: "https://tangerine-bublanina-ddee4c.netlify.app",
      url: "https://github.com/RohitMBelure/Project-SSENSE",
      description:
        "A web application to buy men’s, women’s, and kids street fashion products Mostly into cloothing .SSENSE is a multi-brand retailer based in Montreal, Canada specialising in the sale of designer fashion and high end streetwear.",
      language: " HTML | CSS | JavaScript | BootStrap",
      image: ssense,
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
    <Box
      id="projects"
      p={"0.5rem"}
      w={{ base: "95%", md: "85%" }}
      m="auto"
      mt={{ base: "3rem", md: "1rem" }}
    >
      <Heading
        textAlign="center"
        fontSize={{ base: "2rem", md: "3rem" }}
        color={"#B83280"}
        textDecoration="underline"
        mb={5}
      >
        My Projects
      </Heading>

      <SimpleGrid columns={[1, 2, 3]} mb="2rem" spacing={2}>
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
              p={2}
            >
              <Image src={t.image} />
              <Text
                fontSize={"1.3rem"}
                textAlign="center"
                fontWeight="600"
                color="#B83280"
              >
                {t.title}
              </Text>
              <Text>{t.description}</Text>
              <Text>
                <b> Tech-Stack :</b> {t.language}
              </Text>

              <Flex gap={5}>
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
