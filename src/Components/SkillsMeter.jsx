import { Box, Flex, Heading, Image } from "@chakra-ui/react";
import React from "react";

export default function SkillsMeter() {
    return (
        <Box align="center">
            <Heading
                fontSize={{ base: "2rem", md: "3rem" }}
                mb={"3rem"}
                textDecoration="underline"
                color={"#B83280"}
                cursor="pointer"
            >
                Statistics
            </Heading>

            <Box
                style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "-1rem",
                }}
            >
                <Box w={{ base: "100%", md: "80%" }}>

                    <Image
                        p={2}
                        w={{ base: "100%", md: "80%" }}
                        src="https://github-profile-trophy.vercel.app/?username=madhukesh06"
                        alt="madhukesh06"
                    />
                </Box>

            </Box>
            <Image
                p={2}
                w={{ base: "100%", md: "30%" }}
                align="center"
                src="https://github-readme-stats.vercel.app/api/top-langs?username=madhukesh06&show_icons=true&locale=en&layout=compact"
                alt="madhukesh06"
            />

            <Flex
                alignItems="center"
                p={2}
                style={{
                    gap: "1rem",
                    justifyContent: "center",

                    alignContent: "center",
                }}
                flexDirection={{ base: "column", md: "row" }}

            >
                <Box >
                    <Image
                        align="center"
                        src="https://github-readme-stats.vercel.app/api?username=madhukesh06&show_icons=true&locale=en&count_private=true"
                        alt="madhukesh06"
                    />
                </Box>

                <Box>
                    <Image
                        align="center"
                        src="https://github-readme-streak-stats.herokuapp.com/?user=madhukesh06&count_private=true"
                        alt="madhukesh06"
                    />
                </Box>
            </Flex>
        </Box>
    );
}
