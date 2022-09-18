import { Box, Heading, Image, Link, Text } from "@chakra-ui/react";
import React from "react";

export default function SkillsMeter() {
    return (
        <Box align="center">
            <Heading
                fontSize="3rem"
                mb={"3rem"}
                textDecoration="underline"
                color={"#B83280"}
                cursor="pointer"
            >
                Skills on Data
            </Heading>

            <Box
                style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "-1rem",
                }}
            >
                <Text align="center">
                    <Link href="https://github.com/Madhukesh06" target="_blank">
                        <Image
                            src="https://github-profile-trophy.vercel.app/?username=madhukesh06"
                            alt="madhukesh06"
                        />
                    </Link>
                </Text>
            </Box>
            <Text mt="-.2rem">
                <Image
                    align="center"
                    src="https://github-readme-stats.vercel.app/api/top-langs?username=madhukesh06&show_icons=true&locale=en&layout=compact"
                    alt="madhukesh06"
                />
            </Text>

            <Box
                style={{
                    display: "flex",
                    gap: "1rem",
                    justifyContent: "center",
                    alignItems: "center",
                    alignContent: "center",
                }}
            >
                <div style={{ marginBottom: "1.5rem" }}>
                    <p>
                        &nbsp;
                        <img
                            align="center"
                            src="https://github-readme-stats.vercel.app/api?username=madhukesh06&show_icons=true&locale=en"
                            alt="madhukesh06"
                        />
                    </p>
                </div>

                <div>
                    <p>
                        <img
                            align="center"
                            src="https://github-readme-streak-stats.herokuapp.com/?user=madhukesh06&"
                            alt="madhukesh06"
                        />
                    </p>
                </div>
            </Box>
        </Box>
    );
}
