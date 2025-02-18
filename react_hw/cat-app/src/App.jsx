import React from 'react';
import CatImage from './component/CatImage';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.appContainer}>
      <CatImage />
    </div>
  );
}

export default App;
