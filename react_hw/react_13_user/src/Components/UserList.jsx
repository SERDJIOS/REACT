import React from 'react';
import { useSelector } from 'react-redux';
import UserItem from './UserItem';
import styles from '../styles/UserList.module.css';

function UserList() {
  // Достаём список пользователей и строку фильтра из Redux
  const { users, filter } = useSelector((state) => ({
    users: state.users,
    filter: state.filter
  }));

  // Фильтруем пользователей по строке filter
  const filteredUsers = users.filter((user) =>
    user.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className={styles.userListContainer}>
      {filteredUsers.map((user) => (
        <UserItem key={user} user={user} />
      ))}
    </div>
  );
}

export default UserList;
