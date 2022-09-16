import {
    Box,
    Flex,
    HStack,
    Link,
    IconButton,
    Button,
    useDisclosure,
    useColorModeValue,
    Stack,
    useColorMode,
    useToast,
    Text,
} from "@chakra-ui/react";
import {
    HamburgerIcon,
    CloseIcon,
    SunIcon,
    MoonIcon,
    DownloadIcon,
} from "@chakra-ui/icons";
import resume from "../Madhukesh_Kumar_Thakur.pdf";

const Links = [
    { name: "HOME", id: "#" },
    { name: "ABOUT", id: "#about" },
    { name: "SKILLS", id: "#skills" },
    { name: "PROJECTS", id: "#projects" },
    { name: "CONTACT", id: "#contact" },
];

const NavLink = ({ children }) => (
    <Link
        px={2}
        py={1}
        rounded={"md"}
        _hover={{
            textDecoration: "none",
            bg: useColorModeValue("gray.200", "gray.700"),
        }}
        href={"#"}
    >
        {children}
    </Link>
);

export default function Simple() {
    const toast = useToast();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <>
            <Box
                bg={useColorModeValue("gray.100", "gray.900")}
                px={4}
                pos="fixed"
                w="100%"
                zIndex={2}
            >
                <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
                    <IconButton
                        size={"md"}
                        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                        aria-label={"Open Menu"}
                        display={{ md: "none" }}
                        onClick={isOpen ? onClose : onOpen}
                    />
                    <HStack
                        spacing={10}
                        alignItems={"center"}
                        fontSize="1.5rem"
                        fontFamily="sans-serif"
                        fontWeight="bold"
                    >
                        <Box
                            cursor="pointer"
                            fontSize="1.5rem"
                            fontFamily="sans-serif"
                            fontWeight="bold"
                        >
                            MADHU<span style={{ color: "#B83280" }}>KESH</span>{" "}
                        </Box>
                        <HStack
                            as={"nav"}
                            spacing={5}
                            display={{ base: "none", md: "flex" }}
                        >
                            {Links.map((link) => (
                                <Box _hover={{ color: "#B83280" }} p={5}>
                                    <NavLink p={5} key={link}>
                                        {" "}
                                        <Link href={link.id}>{link.name} </Link>
                                    </NavLink>
                                </Box>
                            ))}
                            <Box>
                                <Link
                                    href={resume}
                                    download
                                    style={{ color: "inherit", textDecoration: "inherit" }}
                                >
                                    <Button
                                        rightIcon={<DownloadIcon />}
                                        fontWeight={"bold"}
                                        ml="10rem"
                                        fontSize="1.5rem"
                                        _hover={{
                                            color: "#B83280",
                                            fontcolor: "white"
                                        }}
                                        onClick={() =>
                                            toast({
                                                title: "RESUME DOWNLOADED",
                                                status: "success",
                                                duration: 10000,
                                                isClosable: true,
                                            })
                                        }
                                    >
                                        <NavLink> RESUME</NavLink>
                                    </Button>
                                </Link>
                            </Box>
                        </HStack>
                    </HStack>

                    <Flex alignItems={"center"} h="100vh" justifyContent="center" >
                        <Button onClick={toggleColorMode} size={"5xl"} mr="2rem" padding={2} margin={5} >
                            {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
                        </Button>
                    </Flex>
                </Flex>

                {isOpen ? (
                    <Box pb={4} display={{ md: "none" }}>
                        <Stack as={"nav"} spacing={4}>
                            {Links.map((link) => (
                                <Link key={link} href={link.id}>
                                    {link.name}
                                </Link>
                            ))}
                        </Stack>
                    </Box>
                ) : null}
            </Box>
        </>
    );
}
