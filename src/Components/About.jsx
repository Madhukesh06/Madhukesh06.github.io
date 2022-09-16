import {
    Box,
    Container,
    Heading,
    SimpleGrid,
    Icon,
    Text,
    Stack,
    HStack,
    VStack,
    Button,
    Flex,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";

// Replace test data with your own
const features = Array.apply(null, Array(8)).map(function (x, i) {
    return {
        id: i,
        title: "Lorem ipsum dolor sit amet",
        text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.",
    };
});

export default function About() {
    return (
        <Container maxW={"8xl"} fontFamily="sans-serif" id="about">
            <Box p={4}>
                <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
                    <Heading fontSize={"4xl"}>
                        All <span style={{ color: "#B83280" }}> About</span> Me and My{" "}
                        <span style={{ color: "#B83280" }}> Experience</span>{" "}
                    </Heading>


                </Stack>
                {/* <Flex gap={10} alignItems={"center"}>
                    <Button>About me</Button>
                    <Button>Experince</Button>
                </Flex> */}

                <Container maxW={"8xl"} mt={10}>
                    <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
                        {features.map((feature) => (
                            <HStack key={feature.id} align={"top"}>
                                <Box color={"green.400"} px={2}>
                                    <Icon as={CheckIcon} />
                                </Box>
                                <VStack align={"start"}>
                                    <Text fontWeight={600}>{feature.title}</Text>
                                    <Text color={"gray.600"}>{feature.text}</Text>
                                </VStack>
                            </HStack>
                        ))}
                    </SimpleGrid>
                </Container>
            </Box>
        </Container>
    );
}
