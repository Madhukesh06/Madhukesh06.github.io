import { DownloadIcon } from "@chakra-ui/icons";
import {
    Container,
    Stack,
    Flex,
    Box,
    Heading,
    Text,
    Button,
    Image,
    IconButton,
    Link,
    useToast,
    useColorModeValue,
    HStack,
} from "@chakra-ui/react";

import resume from "../Madhukesh_Kumar_Thakur_Resume.pdf";

import Time from "./Time";
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
export default function Home() {
    const toast = useToast();
    return (
        <Container maxW="7xl" fontFamily="sans-serif" borderRadius="lg" py="5rem">
            <Stack align={"center"} direction={{ base: "column", md: "row" }}>
                <Stack flex={1} spacing={{ base: 5, md: 10 }}>
                    <Heading
                        lineHeight={1.2}
                        fontWeight={700}
                        fontSize={{ base: "4xl", sm: "5xl", lg: "4xl" }}
                    >
                        <Text>
                            Hey 👋, I'm Madhukesh,
                        </Text>
                        <Text as={"span"} color={"#97266D"}>
                            <Time />
                        </Text>
                    </Heading>
                    <Stack
                        spacing={{ base: 5, md: 5 }}
                        direction={{ base: "column", sm: "row" }}
                    >
                        <Link
                            href={resume}
                            download
                            style={{ color: "inherit", textDecoration: "inherit" }}
                        >
                            <Stack
                                spacing={{ base: 5, md: 5 }}
                                direction={{ base: "column", sm: "row" }}
                            >
                                <Button
                                    rightIcon={<DownloadIcon />}
                                    size={"md"}
                                    fontWeight={"bold"}
                                    px={10}
                                    color="white"
                                    colorScheme={"teal"}
                                    bg={"#97266D"}
                                    _hover={{ bg: "teal.500", color: "white" }}
                                    onClick={() =>
                                        toast({
                                            title: "Resume Downloaded",
                                            status: "success",
                                            duration: 10000,
                                            isClosable: true,
                                        })
                                    }
                                >
                                    Resume
                                </Button>
                                <Box>
                                    <HStack spacing={5} px={5} alignItems="flex-start">
                                        <Link
                                            href="https://twitter.com/ThakurMadhukesh"
                                            target="_blank"
                                        >
                                            <IconButton
                                                aria-label="twitter"
                                                variant="ghost"
                                                size="lg"
                                                icon={<BsTwitter size="28px" />}
                                                _hover={{
                                                    bg: "teal.500",
                                                    color: useColorModeValue("white", "gray.700"),
                                                }}
                                                isRound
                                            />
                                        </Link>
                                        <Link href="https://github.com/Madhukesh06" target="_blank">
                                            <IconButton
                                                aria-label="github"
                                                variant="ghost"
                                                size="lg"
                                                fontSize="3xl"
                                                icon={<BsGithub />}
                                                _hover={{
                                                    bg: "teal.500",
                                                    color: useColorModeValue("white", "gray.700"),
                                                }}
                                                isRound
                                            />
                                        </Link>
                                        <Link
                                            href="https://www.linkedin.com/in/madhukesh06/"
                                            target="_blank"
                                        >
                                            <IconButton
                                                aria-label="linkedin"
                                                variant="ghost"
                                                size="lg"
                                                icon={<BsLinkedin size="28px" />}
                                                _hover={{
                                                    bg: "teal.500",
                                                    color: useColorModeValue("white", "gray.700"),
                                                }}
                                                isRound
                                            />
                                        </Link>
                                    </HStack>
                                </Box>
                            </Stack>
                        </Link>
                    </Stack>
                </Stack>

                <Flex
                    flex={1}
                    justify={"center"}
                    align={"center"}
                    position={"relative"}
                    w={"full"}
                >
                    <Image
                        alt={"Hero Image"}
                        fit={"cover"}
                        align={"center"}
                        borderRadius="1rem"
                        src={
                            "https://www.wingstechsolutions.com/wp-content/uploads/2022/03/full-stack-development.gif"
                        }
                    />
                </Flex>
            </Stack>
        </Container>
    );
}
