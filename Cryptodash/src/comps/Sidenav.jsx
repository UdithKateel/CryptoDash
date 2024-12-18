import React from 'react';
import { Box, Center, Heading, HStack, Stack, useBreakpointValue } from '@chakra-ui/react';
import { RxDashboard } from 'react-icons/rx';
import { GrTransaction } from 'react-icons/gr';
import { Text } from '@chakra-ui/react';
import { Icon } from '@chakra-ui/react';
import { useColorModeValue } from '../components/ui/color-mode';
import { BiSupport } from "react-icons/bi";
import { useNavigate } from 'react-router-dom';



const Sidenav = () => {
   const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path); // Navigate to the "About" page
  };
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
      justify="space-between"
      boxShadow={boxShadow}
      bg={bg}
      p={4}
      borderRadius="md"
      w={{
        base: '16rem', // Fixed width for small screens
        lg: '16rem', // Fixed width for large screens
      }}
      flexShrink={0} // Prevent shrinking
      position="fixed" // Keeps the sidebar fixed
      left={0}
      top={0}
      h="100vh" // Full height of the viewport
      overflow="hidden" // Prevent content overflow within the sidebar
    >
      <Box>
        <Heading as="h1"fontSize={"20px"} pt={"56px"} textAlign={"center"} color={"#BF40BF"}>@USKREACTPROJECT</Heading>
      <Box  mt={4} >
        {navlinks.map((ele) => (
        <HStack onClick={()=>handleClick(ele.link)} cursor={'pointer'} key={ele.text} py={3} px={3}  border="2px solid transparent" borderRadius={"5px"}
      _hover={{
        borderColor: 'blue.400',
        boxShadow: 'lg',
       bg:'black',
       transition:'ease-in-out'
        
      }} >
          <ele.icon size={20} />
          <Text>{ele.text}</Text>
        </HStack>
      ))}
      </Box>
      </Box>
      <HStack onClick={()=>handleClick('/support')}  py={3} px={3}  border="2px solid transparent" borderRadius={"5px"}
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
