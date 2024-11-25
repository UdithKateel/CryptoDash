import { HStack, Stack } from "@chakra-ui/react";
import { CustomCard } from "../../chakra/CustomCard";
import React from 'react'
import { Text } from "@chakra-ui/react";
import { Badge } from "@chakra-ui/react";
import { GoArrowUpRight } from "react-icons/go";
import { FiPlusCircle } from "react-icons/fi";
import { FiMinusCircle } from "react-icons/fi";
import { Button } from "@chakra-ui/react";
import Graph from "../../images/Learn React with 10 Projects (Copy)/Dashboard/Graph.svg"
import { Tabs } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";
const Pricing = () => {
    const timestamps=["9:00 AM","9.30 AM","10:00 AM","10:30 AM","11:00 AM","11:30 AM","12:00 PM"]
  return (
    <CustomCard bg={"gray.800"} borderRadius={10}>
        <Stack p={3}>
        <HStack justify={"space-between"} p={2} flexDir={{
        base:"column",
        md:"row"
    }}  >
      <Stack>
          <Text>Current Value</Text>
        <HStack>
        
        <Text fontSize={"24px"}>₹26,670.25</Text>
        <Badge
            colorScheme="blue"
            fontSize="sm"
            borderRadius="full"
            px={2}
            py={1}
            color={"green.300"}
            fontWeight={600}
          >
          <GoArrowUpRight /> 0.04%
          </Badge>
         
        </HStack>
        
      </Stack> 
      <HStack gap={5} flexDir={{
        base:"column",
        xl:"row"
     }}>
         <Button bg="#5F00D9" color="white"  _hover={{
        borderColor: 'blue.900',
        boxShadow: 'lg',
       
       transition:'ease-in-out'
        
      }}   ><FiPlusCircle />Buy</Button>
      <Button  _hover={{
        borderColor: 'black',
        boxShadow: 'lg',
       
       transition:'ease-in-out'
        
      }}><FiMinusCircle />Sell</Button>
     </HStack>
     </HStack>
     <Tabs.Root lazyMount unmountOnExit defaultValue="tab-1">
      <Flex justify="end">
          <Tabs.List>
        
        {["1D","1W","1M","1Y"].map((tab,index)=>(
            <Tabs.Trigger value={`tab-${index}`}>{tab}</Tabs.Trigger>
        ))}
      </Tabs.List>
      </Flex>
      <Tabs.Content value="tab-0">
        <img src={Graph} width={"100%"}/>
      <HStack justify={"space-between"}>
        {timestamps.map((t,index)=>(
            <Text key={index} fontSize={"12px"}>{t}</Text>
        ))}
      </HStack>
      </Tabs.Content>
      <Tabs.Content value="tab-1">
        Tab 1: Content 
      </Tabs.Content>
      <Tabs.Content value="tab-2">
        Tab 2: Content 
      </Tabs.Content>
      <Tabs.Content value="tab-3">
        Tab 3: Content 
      </Tabs.Content>
    </Tabs.Root>
     
      </Stack>
    </CustomCard >
  )
}

export default Pricing