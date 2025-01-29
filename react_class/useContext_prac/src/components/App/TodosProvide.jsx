import TodosContext from '../context/TodosContext'
import { useState } from 'react'
export default function TodosProvider({ children }) {
    const [todos, setTodos] = useState([])

    function handleDelete (id) {
        setTodos (prevTodos=> prevTodos.filter(todo => todo.id !== id))
    }
     function handleAddTodo(newTodo){
        // setTodos(prevTodos => [...prevTodos, newTodo])
        setTodos(prevTodos => {
            return [...prevTodos, newTodo]
        })
    } 
    const obj = {   
        id: 1,
        title: 'Tarefa 1',
        compledet: true
    }

  function handleCheked(id) {
    setTodos(prevTodos => 
         prevTodos.map(todo => 
            todo.id === id ? {...todo, compledet = !todo.compledet } : todo
         )
    )
  }

  
  
  
  
  
  
  return <TodosContext.Provider>{children}</TodosContext.Provider>
}