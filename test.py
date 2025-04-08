type DateParts = {
  day: string
  month: string
  year: string
}

export const convertDateToParts = (date: Date): DateParts => {
  return {
    day: String(date.getDate()).padStart(2, '0'),
    month: String(date.getMonth() + 1).padStart(2, '0'), // months are 0-based
    year: String(date.getFullYear())
  }
}