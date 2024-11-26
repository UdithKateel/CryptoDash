import { Table } from "@chakra-ui/react"
import { Stack } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Tag } from "../../components/ui/tag"
const TransactionTable = ({searchValue}) => {
    const items =  [
    {
      id: "HD82NA2H",
      date: "2023-06-20",
      time: "07:00 AM",
      type: {
        name: "INR Deposit",
        tag: "E-Transfer",
      },
      amount: "+₹81,123",
      status: "pending",
    },
    {
      id: "HD82NA4H",
      date: "2023-06-18",
      time: "07:00 AM",
      type: {
        name: "INR Widthdraw",
        tag: "Wire Transfer",
      },
      amount: "-₹55,123",
      status: "processing",
    },
    {
      id: "HD82NA5H",
      date: "2023-06-18",
      time: "07:00 AM",
      type: {
        name: "Buy",
        tag: "BTC",
      },
      amount: "12.0554484 BTC",
      status: "cancelled",
    },
    {
      id: "HD82NA6H",
      date: "2023-06-18",
      time: "07:00 AM",
      type: {
        name: "Sell",
        tag: "BTC",
      },
      amount: "-2.0554484 BTC",
      status: "completed",
    },
    {
      id: "HD82NA7H",
      date: "2023-06-20",
      time: "07:00 AM",
      type: {
        name: "BTC Deposit",
      },
      amount: "+15.5000000",
      status: "pending",
    },
    {
      id: "HD82NA8H",
      date: "2023-06-18",
      time: "07:00 AM",
      type: {
        name: "BTC Widthdraw",
      },
      amount: "-5.05555544",
      status: "completed",
    },
  ];

  const statusColor = {
    pending: "#797E82",
    processing: "#F5A50B",
    completed: "#059669",
    cancelled: "#DC2626",
  };
const filteredTransactions = items.filter(transaction => {
    return (
      transaction.id.toString().toLowerCase().includes(searchValue.toLowerCase()) ||  // Filter by ID
      transaction.amount.replace(/,/g, "").includes(searchValue)  // Filter by destination
    );
  });
  return (
    <Table.Root size="md" striped>
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeader 
            
            >ID</Table.ColumnHeader>
          <Table.ColumnHeader>Date & Time</Table.ColumnHeader>
          <Table.ColumnHeader >Type </Table.ColumnHeader>
          <Table.ColumnHeader >Amount </Table.ColumnHeader>
          <Table.ColumnHeader >Status </Table.ColumnHeader>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {filteredTransactions.map((item) => (
          <Table.Row key={item.id}>
            <Table.Cell>{item.id}</Table.Cell>
            <Table.Cell>
                <Stack>
                    <Text>
                          {item.date}
                    </Text>
                  
                    <Text>
                        {item.time}
                    </Text>
                </Stack>
            </Table.Cell>
            <Table.Cell >
                <Stack>
                    <Text>
                          {item.type.name}
                    </Text>
                  
                    <Text>
                        {item.type.tag}
                    </Text>
                </Stack>
            </Table.Cell>
              <Table.Cell>{item.amount}</Table.Cell>
              <Table.Cell><Tag
                  bg={statusColor[item.status]}
                  color="white"
                  p="2"
                  borderRadius="full"
                >
                  {item.status}
                </Tag></Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  )
}
 


export default TransactionTable;