import React from 'react'
import { Flex ,Container, HStack, Icon} from '@chakra-ui/react'
import { useColorModeValue } from '../components/ui/color-mode'
import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
    MenuItemCommand
} from "../components/ui/menu"
import { Button } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import { LuUserCircle2 } from "react-icons/lu";
import { FaRegMoon } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { FaQuestionCircle } from "react-icons/fa";
import { CiCircleInfo } from "react-icons/ci";
import { CiLogout } from "react-icons/ci";


const Topnav = () => {
     const boxShadow = useColorModeValue(
    'md rgba(0, 0, 40, 0.5)', // Light mode shadow
    'md rgba(0, 0, 0, 0.7)'   // Dark mode shadow
  );
    const bg = useColorModeValue('white', 'gray.900'); 
  return (
    <HStack justify={"space-between"} px={10} bg={bg} h={16}
      boxShadow={boxShadow}>
        
           <Heading as={"h1"} fontSize={"25px"}>DashBoard </Heading>
            <MenuRoot>
      <MenuTrigger asChild>
        <Button variant="outline" size="fit" borderRadius={"50%"}>
         <LuUserCircle2 size={35} />
        </Button>
      </MenuTrigger>
      <MenuContent >
        <MenuItem value="new-txt-a">
          Theme  <MenuItemCommand><FaRegMoon /> </MenuItemCommand>
        </MenuItem>
        <MenuItem value="new-file-a">
          Settings <MenuItemCommand><IoSettingsOutline /></MenuItemCommand>
        </MenuItem>
        <MenuItem value="new-win-a">
          FAQ's <MenuItemCommand><FaQuestionCircle /></MenuItemCommand>
        </MenuItem>
        <MenuItem value="open-file-a">
         About <MenuItemCommand><CiCircleInfo /></MenuItemCommand>
        </MenuItem>
        <MenuItem value="export-a">
          Log Out <MenuItemCommand><CiLogout /></MenuItemCommand>
        </MenuItem>
      </MenuContent>
    </MenuRoot>
        
      </HStack>
  )
}

export default Topnav