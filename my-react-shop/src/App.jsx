// App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<h1>Главная страница</h1>} />
        <Route path="/categories" element={<h1>Категории</h1>} />
        <Route path="/all-products" element={<h1>Все продукты</h1>} />
        <Route path="/all-services" element={<h1>Все услуги</h1>} />
        <Route path="/cart" element={<h1>Ваша корзина</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
