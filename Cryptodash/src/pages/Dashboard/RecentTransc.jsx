import React from 'react'
import { CustomCard } from '../../chakra/CustomCard'
import { Stack,HStack } from '@chakra-ui/react'
import { Flex } from '@chakra-ui/react'
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { Heading } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';
import { PiCurrencyBtcFill } from "react-icons/pi";
import { TbCoinRupeeFilled } from "react-icons/tb";
const RecentTransc = () => {
  return (
    <CustomCard bg={"gray.900"}  borderRadius={10}>
        <Stack p={3} gap={5}  >
            <Text mx={3}>Transactions</Text>
            <Flex justify={"space-between"} align={"center"}>
                <HStack gap={6}>
                    <RiMoneyDollarCircleFill size={25} />
                    <Stack>
                       <Heading as="h1"> USD Deposit</Heading>
                      <Text fontFamily="Roboto" fontSize={13}>2024-06-09 7:06 PM</Text>
                    </Stack>

                </HStack>
                    <Heading as="h1">+ $962.23</Heading>
            </Flex>
            <Flex justify={"space-between"} align={"center"}>
                <HStack gap={6}>
                    <PiCurrencyBtcFill  size={25} />
                    <Stack>
                       <Heading as="h1"> BTC Sell</Heading>
                      <Text fontFamily="Roboto" fontSize={13}>2024-06-09 7:06 PM</Text>
                    </Stack>

                </HStack>
                   <Stack align={"end"}>
                     <Heading as="h1">- 12.48513391 BTC</Heading>
                     <Text fontSize={12} >+$962.23</Text>
                   </Stack>
            </Flex>
            <Flex justify={"space-between"} align={"center"}>
                <HStack gap={6}>
                    <TbCoinRupeeFilled  size={25} />
                    <Stack>
                       <Heading as="h1"> INR Deposit</Heading>
                        <Text fontFamily="Roboto" fontSize={13}>2024-06-09 7:06 PM</Text>
                    </Stack>

                </HStack>
                    <Heading as="h1">+ ₹81,123.10</Heading>
            </Flex>
            <Button fontWeight={"bolder"}>VIew All</Button>
        </Stack>

    </CustomCard>
  )
}

export default RecentTransc