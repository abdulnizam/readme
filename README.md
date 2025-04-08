const rawDate = "Mon, 07 Apr 2025 17:58:38 GMT"
const date = new Date(rawDate)

// 1. Format as dd/mm/yyyy
const day = String(date.getDate()).padStart(2, '0')
const month = String(date.getMonth() + 1).padStart(2, '0') // JS months are 0-indexed
const year = date.getFullYear()
const formattedDate = `${day}/${month}/${year}`

// 2. Format as 00:00 AM
const formattedTime = '12:00 AM' // static if you always want "00:00 AM"

// If you want actual time from date:
const hours = date.getHours()
const minutes = date.getMinutes()
const ampm = hours >= 12 ? 'PM' : 'AM'
const hour12 = hours % 12 || 12
const formattedActualTime = `${String(hour12).padStart(2, '0')}:${String(minutes).padStart(2, '0')} ${ampm}`

console.log('Formatted Date:', formattedDate)
console.log('Static Time:', formattedTime)
console.log('Actual Time:', formattedActualTime)