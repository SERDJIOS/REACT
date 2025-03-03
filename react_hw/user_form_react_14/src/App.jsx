import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import User from './Components/User';
import UserForm from './Components/UserForm';

export default function App() {
  return (
    <Provider store={store}>
      <User />
      <UserForm />
    </Provider>
  );
}
