import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import axios from 'axios';
import styles from './Header.module.css'; // CSS-модуль

const Header = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.get('/api/search', { params: { query: data.search } });
      console.log('Результаты поиска:', response.data);
    } catch (error) {
      console.error('Ошибка при поиске:', error);
    }
  };

  return (
    <header className={styles.header}>
      {/* Логотип */}
      <div className={styles.header__logo}>
        <Link to="/">
          <img src="/logo.png" alt="Logo" />
        </Link>
      </div>

      {/* Навигация */}
      <nav className={styles.header__nav}>
        <ul>
          <li><Link to="/">Главная</Link></li>
          <li><Link to="/categories">Категории</Link></li>
          <li><Link to="/all-products">Все продукты</Link></li>
          <li><Link to="/all-services">Все услуги</Link></li>
        </ul>
      </nav>

      {/* Поисковая форма */}
      <form className={styles.header__searchForm} onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="Поиск..." {...register('search')} />
        <button type="submit">Найти</button>
      </form>

      {/* Корзина */}
      <div className={styles.header__cart}>
        <Link to="/cart">
          <span>Корзина ({cartItems.length})</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
