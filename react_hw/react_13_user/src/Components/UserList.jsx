import React from 'react';
import { useSelector } from 'react-redux';
import UserItem from './UserItem';
import styles from '../styles/UserList.module.css';

export default function UserList() {
 
  const { users, filter } = useSelector((state) => ({
    users: state.users,
    filter: state.filter
  }));


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
