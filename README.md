import { Table } from 'some-ui-library' // update this to your real UI lib

const data = [
  {
    topic: 'Placeholder Topic 1',
    date: '07/04/2025 12:00 AM',
    detailLink: '#',
    downloadLink: '#',
  },
  {
    topic: 'Placeholder Topic 2',
    date: '08/04/2025 12:00 AM',
    detailLink: '#',
    downloadLink: '#',
  },
]

// 🔄 Utility to parse `dd/mm/yyyy hh:mm AM/PM` into Date
const parseCustomDate = (input: string): Date => {
  const [datePart, timePart, ampm] = input.split(/[\s:]+/)
  const [day, month, year] = datePart.split('/').map(Number)
  let [hour, minute] = timePart.split(':').map(Number)

  if (ampm.toUpperCase() === 'PM' && hour !== 12) hour += 12
  if (ampm.toUpperCase() === 'AM' && hour === 12) hour = 0

  return new Date(year, month - 1, day, hour, minute)
}

const MyTable = () => {
  return (
    <Table>
      <Table.Body>
        {data.map((item, index) => {
          const parsedDate = parseCustomDate(item.date)

          const formattedDate = parsedDate.toLocaleDateString('en-GB') // dd/mm/yyyy
          const formattedTime = parsedDate.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: true,
          })

          return (
            <Table.Row key={index}>
              <Table.Cell>{item.topic}</Table.Cell>
              <Table.Cell>{formattedDate}</Table.Cell>
              <Table.Cell>{formattedTime}</Table.Cell>
              <Table.Cell>
                <a href={item.detailLink}>View details</a>
              </Table.Cell>
              <Table.Cell>
                <a href={item.downloadLink}>Download as PDF</a>
              </Table.Cell>
            </Table.Row>
          )
        })}
      </Table.Body>
    </Table>
  )
}

export default MyTable