
import React from 'react'
import Sidenav from './Sidenav'
import Topnav from './Topnav'
import { Container, Flex } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import SideDrawer from './SideDrawer'
import { useState } from 'react'
const DashBoardLayout = ({title ,children}) => {
     const [open, setOpen] = useState(true)
  return (
  



         <Flex>
            <SideDrawer open={open} setOpen={setOpen} >
         <Sidenav />
         </SideDrawer>
       <Box flexGrow="1">
         <Topnav title={title}  />
       <Container maxW={"72rem"} mx={"auto"} mt={"30px"} borderRadius={"5px"} bg={"gray.600"} px={4}>{children}</Container>
       </Box>
       </Flex>
    
   
  )
}

export default DashBoardLayout