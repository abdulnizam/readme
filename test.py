const handleSubmit = () => {
  const { day, month, year } = date

  if (day && month && year) {
    // Step 1: Create a JS Date object
    const jsDate = new Date(
      `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}T00:00:00Z`
    )

    // Step 2: Convert to full ISO string
    const isoString = jsDate.toISOString()

    console.log('ISO Date:', isoString)
    alert(`Submitted date: ${isoString}`)
  } else {
    alert('Please enter full date')
  }
}