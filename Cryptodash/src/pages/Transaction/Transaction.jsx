import React from 'react'
import { Card } from '@chakra-ui/react'
import DashBoardLayout from '../../comps/DashBoardLayout'
import { CardBody } from '@chakra-ui/react'
import { IoMdDownload } from "react-icons/io";
import { Link, Tabs } from "@chakra-ui/react"
import { CiSearch } from "react-icons/ci";// Import the SearchIcon
import { Button, Input, Flex, Heading} from '@chakra-ui/react';
import { Tag } from '../../components/ui/tag';
import TransactionTable from './TransactionTable';
import { HStack, Kbd } from "@chakra-ui/react"
import { InputGroup } from "../../components/ui/input-group"
import {
  NativeSelectField,
  NativeSelectRoot,
} from "../../components/ui/native-select"
import { LuSearch } from "react-icons/lu"
import { useState } from 'react';
const Transaction = () => {
     const [searchValue, setSearchValue] = useState('');

  // Function to handle changes in the input field
  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <DashBoardLayout title={"Transactions"}>
        <Flex justify={'end'} >
            <Button fontWeight={'bold'} mb={6}>Export csv <IoMdDownload /></Button>
        </Flex>
        <Card.Root variant={"subtle"}>
   
 <CardBody>
         <Tabs.Root defaultValue="1" size={'lg'}>
      <Tabs.List justifyContent={'space-evenly'} display="flex" alignItems="center">
        <Tabs.Trigger value="1" asChild>
          <Link unstyled href="#members">
            All <Tag>555</Tag>
          </Link>
        </Tabs.Trigger>
        <Tabs.Trigger value="2" asChild>
          <Link unstyled href="#projects">
            Deposit <Tag>65</Tag>
          </Link>
        </Tabs.Trigger>
         <Tabs.Trigger value="3" asChild>
          <Link unstyled href="#projects">
            Withdraw <Tag>72</Tag>
          </Link>
        </Tabs.Trigger>
         <Tabs.Trigger value="4" asChild>
          <Link unstyled href="#projects">
            Trade <Tag>289</Tag>
          </Link>
        </Tabs.Trigger>
        
          
          <Flex>
             <InputGroup
        flex="1"
        startElement={<LuSearch />}
        
      >
        <Input placeholder="Search   ID or Amount" w={250}  onChange={handleSearchChange}   value={searchValue}  />
      </InputGroup>
          </Flex>
       
        
        
      </Tabs.List>
      <Tabs.Content value="1"><TransactionTable searchValue={searchValue}/></Tabs.Content>
      <Tabs.Content value="2">Manage your projects</Tabs.Content>
    </Tabs.Root>
      </CardBody>
  <Card.Footer />
</Card.Root>
    </DashBoardLayout>
  )
}

export default Transaction