import React, { useState } from 'react'
import { DateField, Input, Button } from 'govuk-react'

const MyDateForm = () => {
  const [date, setDate] = useState({ day: '', month: '', year: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setDate((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = () => {
    const { day, month, year } = date
    if (day && month && year) {
      const formattedDate = `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
      console.log('Full date:', formattedDate)
      alert(`Submitted date: ${formattedDate}`)
    } else {
      alert('Please enter full date')
    }
  }

  return (
    <div>
      <DateField>
        <Input
          name="day"
          input={{
            placeholder: 'DD',
            value: date.day,
            onChange: handleChange,
            maxLength: 2,
          }}
        />
        <Input
          name="month"
          input={{
            placeholder: 'MM',
            value: date.month,
            onChange: handleChange,
            maxLength: 2,
          }}
        />
        <Input
          name="year"
          input={{
            placeholder: 'YYYY',
            value: date.year,
            onChange: handleChange,
            maxLength: 4,
          }}
        />
      </DateField>

      <Button onClick={handleSubmit} type="button">
        Get Date
      </Button>
    </div>
  )
}

export default MyDateForm