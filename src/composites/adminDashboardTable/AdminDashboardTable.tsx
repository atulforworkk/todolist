import React from 'react'
import { Button, Table } from '@mantine/core'

type Props = {}

const AdminDashboardTable = (props: Props) => {
  const elements = [
    { position: 6, mass: 12.011, symbol: 'C', name: 'Carbon' },
    { position: 7, mass: 14.007, symbol: 'N', name: 'Nitrogen' },
    { position: 39, mass: 88.906, symbol: 'Y', name: 'Yttrium' },
    { position: 56, mass: 137.33, symbol: 'Ba', name: 'Barium' },
    { position: 58, mass: 140.12, symbol: 'Ce', name: 'Cerium' },
  ];

  const rows = elements.map((element) => (
    <Table.Tr key={element.name}>
      <Table.Td style={{ width: '25%' }}>{element.position}</Table.Td>
      <Table.Td style={{ width: '25%' }}>{element.name}</Table.Td>
      <Table.Td style={{ width: '15%' }}>{element.symbol}</Table.Td>
      <Table.Td style={{ width: '15%' }}>
        <Button size="xs">EDIT</Button>
      </Table.Td>
      <Table.Td style={{ width: '20%' }}>20/10/2024</Table.Td>
    </Table.Tr>
  ));

  return (
    <div className="bg-white">
      <Table striped>
        <Table.Thead>
          <Table.Tr>
            <Table.Th style={{ width: '25%' }}>TASK</Table.Th>
            <Table.Th style={{ width: '25%' }}>ASSIGNED TO</Table.Th>
            <Table.Th style={{ width: '15%' }}>STATUS</Table.Th>
            <Table.Th style={{ width: '15%' }}>ACTION</Table.Th>
            <Table.Th style={{ width: '20%' }}>DATE ASSIGNED</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </div>
  );
}

export default AdminDashboardTable;
