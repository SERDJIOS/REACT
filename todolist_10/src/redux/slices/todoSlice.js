// slice
// {
//   id: "1",
//   text: "Learn Redux Toolkit",
//   completed: false;
// }

import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const todosSlice = createSlice({
  name: 'todos', // Имя slice, используется для генерации action'ов
  initialState, // Начальное состояние
  reducers: { // Reducers – функции для изменения состояния
    addTodo: (state, action) => {
      state.push(action.payload)
    },
    toggleTodo: (state, action) => {
      const todo = state.find(todo => todo.id === action.payload)
      if (todo) {
        todo.completed = !todo.completed
      }
    },
    deleteTodo: (state, action) => state.filter(todo => todo.id !== action.payload)
  }
})

export const { addTodo, toggleTodo, deleteTodo } = todosSlice.actions;
export default todosSlice.reducer;