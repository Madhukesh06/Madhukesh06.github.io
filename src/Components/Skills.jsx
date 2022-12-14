import { Box, Heading, Image, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import boot from "../Images/boot.png";
import babel from "../skilsimage/babel.png";
import vite from "../skilsimage/vite.png";
import nextjs from "../skilsimage/nextjs.png";
import netlify from "../skilsimage/netlify.png";


export default function Skills() {
    return (
        <Box
            w={{ base: "85%", md: "80%" }}
            fontFamily="sans-serif"
            margin={"auto"}
            id="skills"
            mt={{ base: "4rem", md: "5rem" }}
        >
            <Box>
                <Heading
                    textAlign="center"
                    fontSize={{ base: "2rem", md: "3rem" }}
                    color={"#B83280"}
                    mb={"2rem"}
                    textDecoration="underline"
                >
                    Technical-Skills
                </Heading>{" "}

                <SimpleGrid columns={{ base: 2, md: 4, lg: 6 }} m="auto" spacing={5}  >
                    <Image
                        border="1px solid lightGray"
                        borderRadius="10px"
                        p={2}
                        objectFit="cover"
                        boxSize="130px"
                        // src={babel}
                        src="https://i.pinimg.com/originals/a2/7d/14/a27d14a27b5ef7d35c241d5cc9c1deb4.png"
                    />
                    <Image
                        border="1px solid lightGray"
                        borderRadius="10px"
                        p={2}
                        objectFit="cover"
                        boxSize="130px"
                        src="https://www.freepnglogos.com/uploads/html5-logo-png/html5-logo-css-logo-png-transparent-svg-vector-bie-supply-9.png"
                    />
                    <Image
                        border="1px solid lightGray"
                        borderRadius="10px"
                        p={2}
                        objectFit="cover"
                        boxSize="130px"
                        src="https://1000logos.net/wp-content/uploads/2020/09/JavaScript-Logo.png"
                    />
                    <Image
                        border="1px solid lightGray"
                        borderRadius="10px"
                        p={2}
                        objectFit="cover"
                        boxSize="130px"
                        src={boot}
                    />
                    <Image
                        border="1px solid lightGray"
                        borderRadius="10px"
                        p={2}
                        objectFit="cover"
                        boxSize="130px"
                        src="https://miro.medium.com/max/1024/1*33CwBYkmnMfpA9Djup22Jw.png"
                    />
                    <Image
                        border="1px solid lightGray"
                        borderRadius="10px"
                        p={2}
                        objectFit="cover"
                        boxSize="130px"
                        src="https://upload.wikimedia.org/wikipedia/commons/4/49/Redux.png"
                    />
                    <Image
                        border="1px solid lightGray"
                        borderRadius="10px"
                        p={2}
                        objectFit="cover"
                        boxSize="130px"
                        src="https://cdn.iconscout.com/icon/free/png-256/node-js-1174925.png"
                    />
                    <Image
                        border="1px solid lightGray"
                        borderRadius="10px"
                        p={2}
                        objectFit="cover"
                        boxSize="130px"
                        src="https://cdn.icon-icons.com/icons2/2699/PNG/512/expressjs_logo_icon_169185.png"
                    />
                    <Image
                        border="1px solid lightGray"
                        borderRadius="10px"
                        p={2}
                        objectFit="cover"
                        boxSize="130px"
                        src="https://avatars.githubusercontent.com/u/7552965?s=280&v=4"
                    />
                    <Image
                        border="1px solid lightGray"
                        borderRadius="10px"
                        p={2}
                        objectFit="cover"
                        boxSize="130px"
                        src={netlify}
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
                        p={2}
                        objectFit="cover"
                        boxSize="130px"
                        src="https://d2eip9sf3oo6c2.cloudfront.net/playlists/square_covers/000/505/265/square_480/chakra-lv1.png"
                    />
                    <Image
                        border="1px solid lightGray"
                        borderRadius="10px"
                        p={2}
                        objectFit="cover"
                        boxSize="130px"
                        src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/postman-icon.png"
                    />
                    <Image
                        border="1px solid lightGray"
                        borderRadius="10px"
                        p={2}
                        objectFit="fit"
                        boxSize="130px"
                        src={babel}
                    />
                    <Image
                        border="1px solid lightGray"
                        borderRadius="10px"
                        p={2}
                        objectFit="cover"
                        boxSize="130px"
                        src="https://cdn-icons-png.flaticon.com/512/52/52234.png"
                    />
                    <Image
                        border="1px solid lightGray"
                        borderRadius="10px"
                        p={2}
                        objectFit="cover"
                        boxSize="130px"
                        src={vite}
                    />
                    <Image
                        border="1px solid lightGray"
                        borderRadius="10px"
                        p={2}
                        objectFit="cover"
                        boxSize="130px"
                        src="https://miro.medium.com/max/1200/1*BfTeu35aPGjLDfkj4zmYJQ.png"
                    />
                    <Image
                        border="1px solid lightGray"
                        borderRadius="10px"
                        p={2}
                        objectFit="cover"
                        boxSize="130px"
                        src="https://reactrouter.com/twitterimage.jpg"
                    />

                </SimpleGrid>
            </Box>
        </Box>
    );
}
