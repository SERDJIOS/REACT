import { createStore } from 'redux';
import userReducer from './reducers';

export default function store() {
  return createStore(userReducer);
}
