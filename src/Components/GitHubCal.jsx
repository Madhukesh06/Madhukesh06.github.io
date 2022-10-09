// import { Box, Center, Heading, Image } from '@chakra-ui/react'
// import React from 'react'
// import gitImage from "../Images/calender.JPG"

// export default function GitHubCal() {
//     return (
//         <Box >
//             <Center> <Heading fontSize="3rem" textDecoration="underline" color={'#B83280'} mt="1rem" mb="2rem">GitHub Calender</Heading></Center>
//             <Box align={"center"} mt="0.5rem" >
//                 <Image borderRadius={"1rem"} src={gitImage} alt="git-calender" />
//             </Box>


//         </Box>
//     )
// }

// Steps to follow
// npm i react-github-calendar
// Add the below code snipet

import React from 'react'
import GitHubCalendar from "react-github-calendar"
import { Box, Center, Heading } from '@chakra-ui/react'
const GitHubCal = () => {
    return (
        <Box mt={'3rem'}>
            <Center> <Heading fontSize="3rem" textDecoration="underline" color={'#B83280'} mt="1rem" mb="2rem">GitHub Stats</Heading></Center>
            <GitHubCalendar
                username="madhukesh06"
                blockSize={20}
                blockMargin={5}
                color="green"
                fontSize={15}
                m={40}
                // w='70%'
                style={{ margin: "auto", alignItems: "center" }}
            />

        </Box>
    )
}

export default GitHubCal