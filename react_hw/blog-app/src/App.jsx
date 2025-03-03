
import React from 'react';

import { Routes, Route, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import Articles from './pages/Articles';
import ArticleDetail from './pages/ArticleDetail';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.appContainer}>
      <nav className={styles.navBar}>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? styles.activeLink : '')}
          end
        >
          Главная
        </NavLink>
        <NavLink
          to="/articles"
          className={({ isActive }) => (isActive ? styles.activeLink : '')}
        >
          Статьи
        </NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:id" element={<ArticleDetail />} />
      </Routes>
    </div>
  );
}

export default App;
