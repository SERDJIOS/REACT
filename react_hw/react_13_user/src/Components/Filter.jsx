import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../redux/actions';
import styles from '../styles/Filter.module.css';

export default function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter);

  const handleChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <div className={styles.filterContainer}>
      <input
        type="text"
        value={filter}
        onChange={handleChange}
        placeholder="Search users..."
        className={styles.filterInput}
      />
    </div>
  );
}
