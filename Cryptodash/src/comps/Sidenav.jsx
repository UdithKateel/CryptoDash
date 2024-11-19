import React from 'react';
import { Box, Center, Heading, HStack, Stack } from '@chakra-ui/react';
import { RxDashboard } from 'react-icons/rx';
import { GrTransaction } from 'react-icons/gr';
import { Text } from '@chakra-ui/react';
import { Icon } from '@chakra-ui/react';
import { useColorModeValue } from '../components/ui/color-mode';
import { BiSupport } from "react-icons/bi";

const Sidenav = () => {
   const boxShadow = useColorModeValue(
    'md rgba(0, 0, 40, 0.5)', // Light mode shadow
    'md rgba(0, 0, 0, 0.7)'   // Dark mode shadow
  );
  const bg = useColorModeValue('white', 'gray.900'); 
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
     display={{
      base:'none',
      lg:'flex'
     }}
     justify={"space-between"} boxShadow={boxShadow} bg={bg} p={4} borderRadius="md" maxW={"250px"} minH={"100vh"}>
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
