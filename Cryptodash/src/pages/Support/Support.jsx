import React from 'react'
import DashBoardLayout from '../../comps/DashBoardLayout'
import { Grid } from '@chakra-ui/react'
import { GridItem } from '@chakra-ui/react'
import { Stack,HStack } from '@chakra-ui/react'
import loan from "../../images/lolaoan/Dashboard/visual.png"
import Contact from "../../images/conconnconc/Dashboard/visual.png"
import { IoChatbubbleSharp } from "react-icons/io5";
import { Box } from '@chakra-ui/react'
import { Heading,Text } from '@chakra-ui/react'
import Left from './compp/Left'
import Right from './compp/Right'
import BottomCards from '../Dashboard/BottomCards'
const Support = () => {
  return (
   <DashBoardLayout title={"Support"}>
    <Grid  p={6} borderRadius={10} gridTemplateColumns={{
        base:"repeat(1,1fr)",
        lg:"repeat(2,1fr)"
      }} gap={"24px"} h='100%'>
    <GridItem>
    <Left/>
    </GridItem>
    <GridItem>
      <Right/>
    </GridItem>
    <GridItem >
      <BottomCards  bg="white"
   c="black"
   tagbg="#5F00D9"
   head="Live Chat" 
   icon={<IoChatbubbleSharp/>}
   content="Don’t have time to wait for the answer? Chat with us now." 
   image={`url(${loan})`} />
    </GridItem>
    <GridItem >
     <BottomCards  
    bg="#5F00D9"
   c="white"
   tagbg="white"
   title="ChatBot" 
   content="Chat with us now" 
   image={`url(${Contact})`}
   
   />
    </GridItem>
    </Grid>

   </DashBoardLayout>
  )
}

export default Support