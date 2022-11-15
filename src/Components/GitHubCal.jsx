
import React from 'react'
import GitHubCalendar from "react-github-calendar"
import { Box, Center, Heading } from '@chakra-ui/react'
const GitHubCal = () => {
    return (
        <Box mt={'2rem'}>
            <Center> <Heading fontSize="3rem" textDecoration="underline" color={'#B83280'} mb="2rem">GitHub Stats</Heading></Center>
            <Box bg="#2D3748" color="white" m="auto" w={{ base: "95%", md: "80%" }} p={3} border="1px solid gray" borderRadius="0.5rem">

                <GitHubCalendar
                    username="madhukesh06"
                    blockSize={20}
                    blockMargin={5}
                    color="green"
                    fontSize={15}
                    m="auto"
                    style={{ margin: "auto", alignItems: "center" }}
                />
            </Box>

        </Box>
    )
}

export default GitHubCal