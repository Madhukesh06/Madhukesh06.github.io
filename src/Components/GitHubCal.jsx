import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Box, Heading } from "@chakra-ui/react";
const GitHubCal = () => {
    return (
        <Box mt={"2rem"}>
            <Heading
                fontSize={{ base: "2rem", md: "3rem" }}
                textAlign="center"
                textDecoration="underline"
                color={"#B83280"}
                mb="2rem"
            >
                GitHub Stats
            </Heading>
            <Box
                bg="#2D3748"
                color="white"
                m="auto"
                w={{ base: "95%", md: "80%" }}
                p={{ base: 2, md: 4 }}
                border="1px solid gray"
                borderRadius="0.5rem"
            >
                <GitHubCalendar
                    username="madhukesh06"
                    blockSize={20}
                    blockMargin={5}
                    color="green"
                    fontSize={15}
                    m="auto"
                    style={{ margin: "auto", alignItems: "center" }}
                />
            </Box>
        </Box>
    );
};

export default GitHubCal;
