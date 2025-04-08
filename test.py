type DateParts = {
  day: string
  month: string
  year: string
}

export const validateDateRange = (
  start: DateParts,
  end?: DateParts
): { valid: boolean; message?: string } => {
  const isEmpty = (val: string | undefined) => !val?.trim()

  // 1️⃣ Check start date is fully filled
  if (isEmpty(start.day) || isEmpty(start.month) || isEmpty(start.year)) {
    return { valid: false, message: 'Start date is required and must be fully filled' }
  }

  // 2️⃣ Validate start date format
  const isValidDate = (d: DateParts): boolean => {
    const dd = parseInt(d.day)
    const mm = parseInt(d.month)
    const yy = parseInt(d.year)
    if (
      isNaN(dd) || isNaN(mm) || isNaN(yy) ||
      dd < 1 || dd > 31 || mm < 1 || mm > 12 || yy < 1000
    ) return false
    const jsDate = new Date(yy, mm - 1, dd)
    return jsDate.getDate() === dd && jsDate.getMonth() === mm - 1 && jsDate.getFullYear() === yy
  }

  if (!isValidDate(start)) {
    return { valid: false, message: 'Start date is not valid' } // ✅ 1
  }

  const startDate = new Date(`${start.year}-${start.month.padStart(2, '0')}-${start.day.padStart(2, '0')}T00:00:00Z`)
  const today = new Date()
  today.setHours(0, 0, 0, 0)

  // 3️⃣ If end date is not provided at all — use today (✅ 2)
  if (!end || (isEmpty(end.day) && isEmpty(end.month) && isEmpty(end.year))) {
    if (startDate > today) {
      return { valid: false, message: 'Start date cannot be in the future' } // ✅ 5
    }
    return { valid: true }
  }

  // 4️⃣ Check if end date is partially filled (e.g. only day)
  const endFieldsFilled = [end.day, end.month, end.year].filter(val => !isEmpty(val)).length
  if (endFieldsFilled !== 0 && endFieldsFilled !== 3) {
    return { valid: false, message: 'End date is incomplete or not valid' } // ✅ 3
  }

  // 5️⃣ Validate full end date
  if (!isValidDate(end)) {
    return { valid: false, message: 'End date is not valid' } // ✅ 3 fallback
  }

  const endDate = new Date(`${end.year}-${end.month.padStart(2, '0')}-${end.day.padStart(2, '0')}T00:00:00Z`)

  // 6️⃣ Start date must not be after end date
  if (startDate > endDate) {
    return { valid: false, message: 'Start date cannot be after end date' } // ✅ 4
  }

  // 7️⃣ Neither date can be in the future
  if (startDate > today) {
    return { valid: false, message: 'Start date cannot be in the future' } // ✅ 5
  }

  if (endDate > today) {
    return { valid: false, message: 'End date cannot be in the future' } // ✅ 6
  }

  return { valid: true }
}