import React from 'react'
import { Stack,HStack } from '@chakra-ui/react'
import { Heading,Text } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { IoMdMail } from "react-icons/io";
const Left = () => {
  return (
    <Box p={6} borderRadius={10} bg={"gray.900"}>
        <Stack gap={4}>
      <Box><IoMdMail color='#5F00D9' size={40} /></Box>
      <Heading  fontSize={35}>Contact Us</Heading>
      <Text >Have a question or just want to know more? Feel free to reach out to us.</Text>
    </Stack>
    </Box>
  )
}

export default Left