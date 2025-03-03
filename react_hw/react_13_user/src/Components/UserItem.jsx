import React from 'react';
import styles from '../styles/UserItem.module.css';

export default function UserItem({ user }) {
  return <div className={styles.userItem}>{user}</div>;
}
