import {useState, useEffect} from 'react'

export const useFetch = (url) => {
const [data, setData] = useState(null)
  useEffect(() => {
    async function getData() {
      const res = await fetch(url)
      const data = await res.json()
        
      setData(data.products)
      
    }

    getData()
  }, [])

  return {data}
}