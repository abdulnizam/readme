import { useEffect, useRef, useState } from 'react'

const MyComponent = () => {
  const [chatMessages, setChatMessages] = useState([])
  const hasFetched = useRef(false)

  useEffect(() => {
    if (hasFetched.current) return
    hasFetched.current = true

    const fetchData = async () => {
      const now = convertDateToParts(new Date())
      const current_date = convertDateToISO(now.day, now.month, now.year)
      try {
        const res: messagesResponseType[] = await getMessages(current_date, current_date)
        setChatMessages(res)
      } catch (err) {
        console.error('Error fetching data:', err)
      }
    }

    fetchData()
  }, [])

  ...
}