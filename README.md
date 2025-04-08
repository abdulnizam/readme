import { Table } from 'some-ui-library' // adjust import based on your setup

const data = [
  {
    topic: 'Placeholder Topic 1',
    date: '07/04/2025',
    time: '12:00 AM',
    detailLink: '#',
    downloadLink: '#',
  },
  {
    topic: 'Placeholder Topic 2',
    date: '08/04/2025',
    time: '02:30 PM',
    detailLink: '#',
    downloadLink: '#',
  },
]

const MyTable = () => {
  return (
    <Table>
      <Table.Body>
        {data.map((item, index) => (
          <Table.Row key={index}>
            <Table.Cell>{item.topic}</Table.Cell>
            <Table.Cell>{item.date}</Table.Cell>
            <Table.Cell>{item.time}</Table.Cell>
            <Table.Cell>
              <a href={item.detailLink}>View details</a>
            </Table.Cell>
            <Table.Cell>
              <a href={item.downloadLink}>Download as PDF</a>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  )
}

export default MyTable