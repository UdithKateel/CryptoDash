
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
  



         <Flex x h="100vh" direction="row" overflow="hidden">
          <Box 
        display={{ base: 'none', lg: 'block' }} 
        w="16rem" 
        boxShadow="md" 
        position="fixed" 
        left={0} 
        top={0} 
        h="100vh" 
        zIndex="10"
      >

      <Sidenav />
     </Box>
         
            <SideDrawer open={open} setOpen={setOpen} >
              <Sidenav />
         </SideDrawer>
        <Box 
        ml={{ lg: '16rem' }}  // To provide space for the sidebar on large screens
        flex="1" 
        overflowY="auto"
      >
         <Topnav title={title} open={open} setOpen={setOpen} />
       <Container maxW={"72rem"} mx={"auto"} mt={"30px"} borderRadius={'xl'} overflowX={'hidden'} overflowY={'auto'} h={"calc(100vh-100px)"} px={4}>{children}</Container>
       </Box>
       </Flex>
    
   
  )
}

export default DashBoardLayout