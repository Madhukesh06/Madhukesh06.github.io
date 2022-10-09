import { Box, Center, Heading, Image, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import dsa from '../Images/dsa.png'
export default function TechStack() {
    return (
        <Box maxW={'7xl'} fontFamily="sans-serif" margin={"auto"} id="skills" mb="10rem"
        >
            <Center> <Heading fontSize="3rem" color={"#B83280"} mb={"2rem"} textDecoration="underline">Tech-Stacks</Heading> </Center>
            <SimpleGrid minChildWidth='110px' spacing='60px' mt={"1rem"} ml="1rem" >

                <Box height='80px'>
                    <Image style={{ padding: "0.4rem", boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset" }} objectFit='cover' boxSize='130px' src="https://miro.medium.com/max/1024/1*33CwBYkmnMfpA9Djup22Jw.png" />
                </Box>

                <Box height='80px'>
                    <Image style={{ padding: "0.4rem", boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset" }} objectFit='cover' boxSize='130px' src="https://cdn.iconscout.com/icon/free/png-256/node-js-1174925.png" />
                </Box>
                <Box height='80px'>
                    <Image style={{ padding: "0.4rem", boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset" }} objectFit='cover' boxSize='130px' src="https://cdn.icon-icons.com/icons2/2699/PNG/512/expressjs_logo_icon_169185.png" />
                </Box>
                <Box height='80px'>
                    <Image style={{ padding: "0.4rem", boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset" }} objectFit='cover' boxSize='130px' src="https://avatars.githubusercontent.com/u/7552965?s=280&v=4" />
                </Box>
                <Box height='80px'>
                    <Image style={{ padding: "0.4rem", boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset" }} objectFit='cover' boxSize='130px' src={dsa} />
                </Box>


            </SimpleGrid >
        </Box >
    )
}
