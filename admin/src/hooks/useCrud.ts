import axios from 'axios'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

export const useCrud = (path: string) => {
  const [items, setItems] = useState<any>([])

  useEffect(() => {
    axios.get('http://localhost:5000/' + path).then((res) => {
      setItems(res.data)
    })
  }, [path])

  const deleteItem = (id: string) => {
    axios
      .delete('http://localhost:5000/' + path + '/' + id)
      .then(() => {
        setItems(items.filter((item: any) => item._id !== id))
        toast.success('Amjilttai ustgalaa!')
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const updateItem = (id: string, item: any) => {
    axios
      .patch('http://localhost:5000/' + path + '/' + id, item)
      .then((res) => {
        setItems(items.map((item: any) => (item.id === id ? res.data : item)))
        toast.success('Amjilttai zaslaa!')
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const createItem = (item: any) => {
    console.log('items:', item)
    axios
      .post('http://localhost:5000/' + path, item)
      .then((res) => {
        setItems([...items, res.data])
        toast.success('Amjilttai nemlee!')
        console.log('res and items', [...items, res.data])
      })
      .catch((err) => {
        console.log(err)
      })
  }
  return { createItem, updateItem, deleteItem, items }
}
