
import React from 'react'
import Sidenav from './Sidenav'
import Topnav from './Topnav'
import { Container, Flex } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import SideDrawer from './SideDrawer'
import { useState } from 'react'
const DashBoardLayout = ({title ,children}) => {
     const [open, setOpen] = useState(false)
     
  return (
  



         <Flex>
          <Box display={{
      base:'none',
      lg:'flex'
     }}>

      <Sidenav />
     </Box>
         
            <SideDrawer open={open} setOpen={setOpen} >
              <Sidenav />
         </SideDrawer>
       <Box flexGrow="1">
         <Topnav title={title} open={open} setOpen={setOpen} />
       <Container maxW={"72rem"} mx={"auto"} mt={"30px"} borderRadius={'xl'}  px={4}>{children}</Container>
       </Box>
       </Flex>
    
   
  )
}

export default DashBoardLayout