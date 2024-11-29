import { Box } from '@chakra-ui/react'
import React from 'react'
import { Text } from '@chakra-ui/react'
import { Button, Card, Input, Stack,HStack } from "@chakra-ui/react"
import { Field } from "../../../components/ui/field"
import { Textarea } from '@chakra-ui/react'
const Right = () => {
  return (
    <Stack>
        
        <Card.Root maxW="100%">
    <Card.Header>
        <Text>You will receive response within 24 hours of time of submit.</Text>
      
      <Card.Description>
        Fill in the form below to create an account
      </Card.Description>
    </Card.Header>
    <Card.Body>
      <HStack gap="4" w="full">
        <Field label="First Name">
          <Input />
        </Field>
        <Field label="Last Name">
          <Input />
        </Field>
      </HStack>
      <Stack>
        <Field label="Email">
            <Input></Input>
        </Field>
        <Field label="Message">
          <Textarea
        placeholder="Write your thoughts..."
        h="250px"
        
       
        resize="vertical"
      />
        </Field>
        <HStack>
            <Text  fontSize={'sm'}>I agree with </Text>
        <Text fontSize={'sm'} color={'#5F00D9'}>Terms & Conditions</Text>
        </HStack>
      </Stack>
    </Card.Body>
    <Card.Footer flexDir={"column"} justifyContent="center">
      <Button w={'100%'} variant="outline">Send a Message</Button>
      <Button w={'100%'} variant="solid">Book a Meeting</Button>
    </Card.Footer>
  </Card.Root>

        </Stack>
  )
}

export default Right