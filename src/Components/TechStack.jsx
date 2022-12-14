import { Box, Heading, Image, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import dsa from "../Images/dsa.png";
import nextjs from "../skilsimage/nextjs.png";
export default function TechStack() {
    return (
        <Box
            w={{ base: "85%", md: "80%" }}
            fontFamily="sans-serif"
            margin={"auto"}
            id="skills"
            mt="1rem"
        >
            <Heading
                fontSize={{ base: "2rem", md: "3rem" }}
                color={"#B83280"}
                mb={"2rem"}
                textDecoration="underline"
                textAlign="center"
            >
                Tech-Stacks
            </Heading>
            <SimpleGrid columns={{ base: 2, md: 4, lg: 6 }} spacing={6}>
                <Image
                    border="1px solid lightGray"
                    borderRadius="10px"
                    objectFit="cover"
                    boxSize="130px"
                    src="https://miro.medium.com/max/1024/1*33CwBYkmnMfpA9Djup22Jw.png"
                />

                <Image
                    border="1px solid lightGray"
                    borderRadius="10px"

                    objectFit="cover"
                    boxSize="130px"
                    src="https://cdn.iconscout.com/icon/free/png-256/node-js-1174925.png"
                />
                <Image
                    border="1px solid lightGray"
                    borderRadius="10px"
                    objectFit="cover"
                    boxSize="130px"
                    src="https://cdn.icon-icons.com/icons2/2699/PNG/512/expressjs_logo_icon_169185.png"
                />
                <Image
                    border="1px solid lightGray"
                    borderRadius="10px"
                    objectFit="cover"
                    boxSize="130px"
                    src="https://avatars.githubusercontent.com/u/7552965?s=280&v=4"
                />
                <Image
                    bg="smokeywhite"
                    border="1px solid lightGray"
                    borderRadius="10px"
                    p={2}
                    objectFit="fit"
                    boxSize="130px"
                    src={nextjs}
                />
                <Image
                    border="1px solid lightGray"
                    borderRadius="10px"
                    objectFit="cover"
                    boxSize="130px"
                    src={dsa}
                />
            </SimpleGrid>
        </Box>
    );
}
