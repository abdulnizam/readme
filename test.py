import { useEffect, useState } from 'react'

const MyComponent = () => {
  const [data, setData] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/messages')
        const json = await res.json()
        setData(json)
      } catch (err) {
        console.error('Error fetching data:', err)
      }
    }

    fetchData()
  }, []) // ⬅️ Empty array = run once on mount

  return (
    <div>
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : 'Loading...'}
    </div>
  )
}