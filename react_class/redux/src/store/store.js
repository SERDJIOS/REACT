import { createStore } from 'redux'

// 1. Store
const initialState = {
  count: 0
} // store -> все state приложения в одном объекте



// 2. Actions
const incrementAction = { type: 'INCREMENT' } // объект, в котором есть поле type
// state++
const decrementAction = { type: 'DECREMENT' }
// state--
const addX = { type: 'ADD_X', payload: x }  // опционально поле payload с данными для обновления
// state + x

const subtractY = { type: 'SUB_Y', payload: y }; // опционально поле payload с данными для обновления
// state - y

// 3. Reducer
function counterReducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 }
    case 'DECREMENT':
      return { count: state.count - 1 }
    case 'ADD_X':
      return { count: state.count + action.payload }
    case 'SUB_Y':
      return { count: state.count - action.payload }
    default:
      return state
  }
}


// // дефолтное значение параметра
// function add(a, b) {
//   return a + b;
// }
// add(5, 8) // 13
// add(4), 4 + undefined

// function addDefault(a = 10, b = 1) {
//   return a + b;
// }

// addDefault(5, 8) // 13
// addDefault(4) // 5
// addDefault() // 11