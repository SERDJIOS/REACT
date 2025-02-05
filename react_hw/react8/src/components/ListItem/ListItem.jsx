
import { useEffect, useState } from 'react'

export default function ListItems() {
  const [items, setItems] = useState([])
  const [inputValue, setInputValue] = useState('')

  function addItems() {
    //why IF
    setItems(prevItems => [...prevItems, inputValue])
    setInputValue('')
  }

  function handleChange(e) {
    setInputValue(e.target.value)
  }

  useEffect(() => {
    //why 2 times otrisovka
    console.log('Компонент ListItems обновлен')
  }, [])

  return (
    <>
      <form>
        <input
          type='text'
          value={inputValue}
          onChange={handleChange}
          required
        />
        <button onClick={addItems}>Add Item</button>
      </form>

      <ul>
        {items.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  )
}