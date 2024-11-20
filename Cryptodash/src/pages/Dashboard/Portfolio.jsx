import { HStack, Stack } from "@chakra-ui/react";
import React from "react";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { Text } from "@chakra-ui/react";
import { Button } from "../../components/ui/button";
import {
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverRoot,
  PopoverTrigger,
} from "../../components/ui/popover";
import { useState } from "react";
import { Tag } from "@chakra-ui/react";
import { Badge } from "@chakra-ui/react";
import { PiHandWithdraw } from "react-icons/pi";
import { PiHandDeposit } from "react-icons/pi";


const Portfolio = () => {
  const [popen, setpOpen] = useState(false);
  const [wopen, setwOpen] = useState(false);
  return (
    <HStack justify={"space-evenly"} p={"20px"} flexDir={{
        base:"column",
        md:"row"
    }} >
      <Stack>
        <HStack>
          <Text>Total Portfolio Value</Text>

          <PopoverRoot open={popen} onOpenChange={(e) => setpOpen(e.open)}>
            <PopoverTrigger asChild>
              <Button size="fit" borderRadius={"50%"} variant="outline">
                <IoIosInformationCircleOutline />
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverArrow />
              <PopoverBody>
                Total portfolio value is the sum of the current market value of
                all assets and investments held within a portfolio.
              </PopoverBody>
            </PopoverContent>
          </PopoverRoot>
        </HStack>
        <Text fontSize={"24px"}>₹ 112,312.24</Text>
      </Stack>
      <Stack>
        <HStack>
          <Text>Wallet Balance</Text>

          <PopoverRoot open={wopen} onOpenChange={(e) => setwOpen(e.open)}>
            <PopoverTrigger asChild>
              <Button size="fit" borderRadius={"50%"} variant="outline">
                <IoIosInformationCircleOutline />
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverArrow />
              <PopoverBody>
                refers to the total amount of money or credit available in a
                digital or physical wallet for making transactions or purchases.
              </PopoverBody>
            </PopoverContent>
          </PopoverRoot>
        </HStack>
        <HStack>
          <Text fontSize={"24px"}>22.39401000</Text>
          <Badge
            colorScheme="blue"
            fontSize="sm"
            borderRadius="full"
            px={2}
            py={1}
          >
            BTC
          </Badge>
        </HStack>
      </Stack>
      <HStack>
        <Text fontSize={"24px"}>₹ 1,300.00</Text>
        <Badge
          colorScheme="blue"
          fontSize="sm"
          borderRadius="full"
          px={2}
          py={1}
        >
          INR
        </Badge>
      </HStack>
     <HStack gap={5} flexDir={{
        base:"column",
        xl:"row"
     }}>
         <Button bg="#5F00D9" color="white"><PiHandDeposit />Deposit</Button>
      <Button><PiHandWithdraw />Withdraw</Button>
     </HStack>
    </HStack>
  );
};

export default Portfolio;
