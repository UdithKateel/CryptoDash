import React from 'react'
import {CustomCard} from"../../chakra/CustomCard"
import { Stack } from '@chakra-ui/react'
import { Tag } from '../../components/ui/tag'
import { Text } from '@chakra-ui/react'
const BottomCards = (props) => {
  return (
    <CustomCard p={3} bg={props.bg} bgImage={props.image} bgSize={'cover'} borderRadius={10} bgRepeat={'no-repeat'}>
        <Stack align={"start"}>
       <Tag
      fontWeight="bolder"   // Increase font weight
      size="lg"         // Increase font size
      border="none"         // Remove the border
      borderRadius="full"   // Full rounded corners
      color={props.bg}      // Text color based on props
      p={2}                 // Padding to increase tag size
      bg={props.tagbg}      // Background color based on props
    >
      {props.title}
    </Tag>

            <Text fontWeight={'bold'} color={props.c}>{props.content}</Text>
        </Stack>

    </CustomCard>
  )
}

export default BottomCards