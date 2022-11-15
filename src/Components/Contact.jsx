import {

    Flex,
    Box,
    Heading,
    Text,
    IconButton,
    Button,
    VStack,
    HStack,

    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputLeftElement,
    Textarea,
    useColorModeValue,
    Link,
    Tooltip,
    useClipboard,
    useToast,
} from "@chakra-ui/react";
import { MdPhone, MdEmail, MdLocationOn, MdOutlineEmail } from "react-icons/md";
import { BsGithub, BsPerson, BsLinkedin, BsTwitter } from "react-icons/bs";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
            .sendForm(
                "service_tc5ip3g",
                "template_9q6hdzh",
                form.current,
                "P8P2sET96Wz1os3bD"
            )
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );
        toast({
            title: "Email Sent",
            description: "We've sent your message to Madhukesh",
            status: "success",
            duration: 9000,
            isClosable: true,
        });
    };

    const { hasCopied, onCopy } = useClipboard("+91-8789207188");
    const toast = useToast();
    return (
        <Box id="contact" centerContent p={3} m="auto" alignContent="center">
            < Heading
                textAlign="center"
                mt="1.5rem"
                textDecoration="underline"
                color={"#B83280"}
                fontSize="3rem"
            >
                Contact Me
            </ Heading>
            <Flex
                w={{ base: "100%", md: "60%", lg: "40%" }}
                m="auto"
                bg={useColorModeValue("gray.700", "gray.700")}
                color="white"
                borderRadius="lg"
                p={2}
                mt={2}
                align="center"
                flexDirection={{ base: "column", md: "row" }}
                gap={10}

            >

                <Box p={3}>
                    <Text
                        color="gray.100"
                        fontSize={"1rem"}
                        fontWeight="bold"
                        textAlign="center"
                    >
                        Fill up the form below to contact
                    </Text>
                    <Box
                        py={{ base: 5, sm: 5, md: 8, lg: 10 }}
                    >
                        <VStack pl={1} spacing={5} alignItems="flex-start">
                            <Tooltip
                                label={hasCopied ? "Number Copied!" : "Copy Number"}
                                closeOnClick={false}
                                hasArrow
                            >
                                <Button
                                    size="lg"
                                    height="48px"
                                    width="200px"
                                    variant="ghost"
                                    // color="#DCE2FF"
                                    _hover={{ border: "2px solid #1C6FEB" }}
                                    leftIcon={<MdPhone color="#1970F1" size="20px" />}
                                    onClick={onCopy}
                                >
                                    +91-8789207188
                                </Button>
                            </Tooltip>
                            <Link href="mailto:madhukeshthakur@gmail.com">
                                <Button
                                    size="lg"
                                    height="48px"
                                    width="200px"
                                    variant="ghost"
                                    color="#DCE2FF"
                                    _hover={{ border: "2px solid #1C6FEB" }}
                                    leftIcon={<MdEmail color="#1970F1" size="20px" />}
                                >
                                    Get In Touch
                                </Button>
                            </Link>
                            <Link
                                href="https://goo.gl/maps/YcLttHA7XE1ochPD8"
                                target="_blank"
                            >
                                <Button
                                    size="lg"
                                    height="48px"
                                    width="200px"
                                    variant="ghost"
                                    color="#DCE2FF"
                                    _hover={{ border: "2px solid #1C6FEB" }}
                                    leftIcon={
                                        <MdLocationOn color="#1970F1" size="20px" />
                                    }
                                >
                                    Bihar , India
                                </Button>
                            </Link>
                        </VStack>
                    </Box>
                    <HStack
                        mt={{ lg: 10, md: 10 }}
                        spacing={5}
                        px={5}
                        alignItems="flex-start"
                    >
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

                <Box p={3} bg={{ base: "blue.50", md: "white" }} borderRadius="lg" >
                    <Box color="#0B0E3F" p={1} >
                        <form ref={form} onSubmit={sendEmail}>
                            <VStack >
                                <FormControl id="name" isRequired>
                                    <FormLabel>Your Name</FormLabel>
                                    <InputGroup borderColor="#E0E1E7">
                                        <InputLeftElement
                                            pointerEvents="none"
                                            children={<BsPerson color="gray.800" />}
                                        />
                                        <Input
                                            type="text"
                                            name="user_name"
                                            placeholder="Your Name"
                                            size="md"
                                            required
                                        />
                                    </InputGroup>
                                </FormControl>
                                <FormControl id="name" isRequired>
                                    <FormLabel>Mail</FormLabel>
                                    <InputGroup borderColor="#E0E1E7">
                                        <InputLeftElement
                                            pointerEvents="none"
                                            children={<MdOutlineEmail color="gray.800" />}
                                        />
                                        <Input
                                            type="email"
                                            name="user_email"
                                            placeholder="Your Email"
                                            size="md"
                                            required
                                        />
                                    </InputGroup>
                                </FormControl>
                                <FormControl id="name" isRequired>
                                    <FormLabel>Message</FormLabel>
                                    <Textarea
                                        borderColor="gray.300"
                                        _hover={{
                                            borderRadius: "gray.300",
                                        }}
                                        name="message"
                                        placeholder="Your Message"
                                        rows={6}
                                        resize="none"
                                    />
                                </FormControl>
                                <FormControl id="name" float="right">
                                    <Button
                                        variant="solid"
                                        bg="#0D74FF"
                                        color="white"
                                        onClick={sendEmail}
                                        _hover={{
                                            bg: "teal.500",
                                            color: useColorModeValue("white"),
                                        }}
                                    >
                                        Send Message
                                    </Button>
                                </FormControl>
                            </VStack>
                        </form>
                    </Box>
                </Box>

            </Flex>

        </Box >
    );
}
