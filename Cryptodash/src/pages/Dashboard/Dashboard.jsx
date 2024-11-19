import React from 'react'
import Sidenav from '../../comps/Sidenav'
import Topnav from '../../comps/Topnav'
import { Flex } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
const Dashboard = () => {
  return (
    <div>
       <Flex>
         <Sidenav/>
       <Box flexGrow="1">
         <Topnav/>
       </Box>
       </Flex>
    </div>
  )
}

export default Dashboard