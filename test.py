import { DateField, Input } from 'govuk-react'

<DateField
  input={{
    name: 'dob',
    onChange: (e) => console.log('Date changed:', e.target.value),
  }}
>
  Date of birth
</DateField>