import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import User from './components/User';
import UserForm from './components/UserForm';
import './App.css';

const App = () => (
  <Provider store={store}>
    <div className="App">
      <header className="header"></header>
      <div className="container">
        <div className="user-card">
          <User />
        </div>
        <div className="form-container">
          <UserForm />
        </div>
      </div>
    </div>
  </Provider>
);

export default App;
