import React from 'react';
import Filter from './Components/Filter';
import UserList from './Components/UserList';
// import styles from './styles/App.module.css'; // если хотите отдельный модуль стилей

function App() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>User List</h1>
      <Filter />
      <UserList />
    </div>
  );
}

export default App;
