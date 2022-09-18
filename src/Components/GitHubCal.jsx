import { Box, Center, Heading, Image } from '@chakra-ui/react'
import React from 'react'
import gitImage from "../Images/calender.JPG"

export default function GitHubCal() {
    return (
        <Box >
            <Center> <Heading fontSize="3rem" textDecoration="underline" color={'#B83280'} mt="1rem" mb="2rem">GitHub Calender</Heading></Center>
            <Box align={"center"} mt="0.5rem" >
                <Image borderRadius={"1rem"} src={gitImage} alt="git-calender" />
            </Box>


        </Box>
    )
}
