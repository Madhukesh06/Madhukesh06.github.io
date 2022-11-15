import {
    Container,
    Stack,
    Flex,
    Box,
    Heading,
    Text,
    Image,
    Icon,
    useColorModeValue,
} from "@chakra-ui/react";

import image from "../Images/image.png";

export default function About() {
    return (
        <Container maxW={"7xl"} id="about">
            <Stack
                mt={{ base: "-10rem", md: -10 }}
                align={"center"}
                spacing={{ base: 8, md: 10 }}
                py={{ base: 20, md: 28 }}
                direction={{ base: "column", md: "row" }}
            >
                <Stack flex={1} spacing={{ base: 5, md: 10 }}>
                    <Heading lineHeight={1.1} fontSize="3rem">
                        <br />
                        <Text as={"span"} textDecoration="underline" color={"#B83280"} >
                            About Me
                        </Text>
                    </Heading>
                    <Text color={"gray.600"} fontSize={"1.3rem"}>
                        Hello ! I am Madhukesh Thakur a Full Stack Web Developer, Currently
                        located in Bhopal, I am a consistent learner who believe in hard
                        work.I have a hands on experince on many projects created on HTML,
                        CSS, JavaScript, ReactJS, NodeJS ,MongoDB & many more. Most of the
                        time I explore new stuff related to technology and try to learn new
                        things daily.
                    </Text>
                </Stack>

                <Flex
                    flex={1}
                    justify={"center"}
                    align={"center"}
                    position={"relative"}
                    w={"full"}
                >
                    <Blob
                        w={"150%"}
                        h={"150%"}
                        position={"absolute"}
                        top={"-20%"}
                        left={0}
                        color={useColorModeValue("gray.300", "gray.700")}
                    />
                    <Box position={"relative"} height={"300px"} width={"full"} textAlign="center">
                        <Image
                            className="zoom"
                            alt={"Hero Image"}
                            fit={"cover"}

                            cursor="pointer"
                            align={"center"}
                            mt={{ base: 7, md: "" }}
                            src={image}
                        />
                    </Box>
                </Flex>
            </Stack>
        </Container>
    );
}

export const Blob = (props) => {
    return (
        <Icon
            width={"100%"}
            viewBox="0 0 578 440"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.019 5.115 112.774 10.886 150.881 49.482 39.916 40.427 49.421 100.753 53.385 157.402 4.13 59.015 11.255 128.44-30.444 170.44-41.383 41.683-111.6 19.106-169.213 30.663-46.68 9.364-88.56 35.21-135.943 30.551z"
                fill="currentColor"
            />
        </Icon>
    );
};
