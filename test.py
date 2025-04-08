export const isValidDate = (day: string, month: string, year: string): boolean => {
  const d = parseInt(day, 10)
  const m = parseInt(month, 10)
  const y = parseInt(year, 10)

  // Basic checks
  if (
    !day || !month || !year ||
    isNaN(d) || isNaN(m) || isNaN(y) ||
    d < 1 || d > 31 ||
    m < 1 || m > 12 ||
    y < 1000
  ) {
    return false
  }

  // Create the JS date object
  const jsDate = new Date(y, m - 1, d)

  // Validate that the JS date matches the user input
  return (
    jsDate.getDate() === d &&
    jsDate.getMonth() === m - 1 &&
    jsDate.getFullYear() === y
  )
}


import { isValidDate } from '@/helpers/helper'

const handleSubmit = () => {
  const { day, month, year } = date

  if (!isValidDate(day, month, year)) {
    alert('Invalid date, please check your input.')
    return
  }

  const isoString = new Date(
    `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}T00:00:00Z`
  ).toISOString()

  console.log('ISO Date:', isoString)
  alert(`Submitted date: ${isoString}`)
}