import React from 'react';
import { Box, Center, Heading, HStack, Stack, useBreakpointValue } from '@chakra-ui/react';
import { RxDashboard } from 'react-icons/rx';
import { GrTransaction } from 'react-icons/gr';
import { Text } from '@chakra-ui/react';
import { Icon } from '@chakra-ui/react';
import { useColorModeValue } from '../components/ui/color-mode';
import { BiSupport } from "react-icons/bi";


const Sidenav = () => {
   const boxShadow = useBreakpointValue({
    base: 'none', // No shadow on small screens
    md: useColorModeValue('md rgba(0, 0, 40, 0.5)', 'md rgba(0, 0, 0, 0.7)'), // Medium shadow for medium screens
    lg: useColorModeValue('lg rgba(0, 0, 40, 0.5)', 'lg rgba(0, 0, 0, 0.7)'), // Larger shadow for large screens
  });

  const bg = useColorModeValue('white', 'gray.800'); 
  const navlinks = [
    {
      icon: RxDashboard,
      text: 'Dashboard',
      link: '/',
    },
    {
      icon: GrTransaction,
      text: 'Transaction',
      link: '/transactions',
    },
  ];

  return (
     <Stack
     
     justify={"space-between"} boxShadow={boxShadow} bg={bg} p={4} borderRadius="md" w={{
      base:"full",lg:"16rem"
     }} minH={"100vh"}>
      <Box>
        <Heading as="h1"fontSize={"20px"} pt={"56px"} textAlign={"center"} color={"#BF40BF"}>@USKREACTPROJECT</Heading>
      <Box  mt={4} >
        {navlinks.map((ele) => (
        <HStack  key={ele.text} py={3} px={3}  border="2px solid transparent" borderRadius={"5px"}
      _hover={{
        borderColor: 'blue.400',
        boxShadow: 'lg',
       bg:'black',
       transition:'ease-in-out'
        
      }} >
          <ele.icon size={20}/>
          <Text>{ele.text}</Text>
        </HStack>
      ))}
      </Box>
      </Box>
      <HStack  py={3} px={3}  border="2px solid transparent" borderRadius={"5px"}
      _hover={{
        borderColor: 'blue.400',
        boxShadow: 'lg',
       bg:'black',
       transition:'ease-in-out'
        
      }} >
          <BiSupport />
          <Text>Support</Text>
        </HStack>
    </Stack>
  );
};

export default Sidenav;
