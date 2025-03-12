// src/App.jsx
import { Routes, Route } from "react-router-dom";
import Header from "./Layouts/Header";
import Footer from "./Layouts/Footer";
import HomePage from "./Pages/HomePage/HomePage";
import CategoriesPage from "./Pages/CategoriesPage/CategoriesPage";
import CategoryProductsPage from "./Pages/CategoryProductsPage/CategoryProductsPage";
import AllProductsPage from "./Pages/AllProductsPage/AllProductsPage";
import SaleProductsPage from "./Pages/SaleProductsPage/SaleProductsPage";
import ProductDetailPage from "./Pages/ProductDetailPage/ProductDetailPage";
import CartPage from "./Pages/CartPage/CartPage";
import CartSuccessPage from "./Pages/CartSuccessPage/CartSuccessPage";
import CartEmptyPage from "./Pages/CartEmptyPage/CartEmptyPage";
import NotFoundPage from "./Pages/NotFoundPage/NotFoundPage";

export default function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/categories/:id" element={<CategoryProductsPage />} />
        <Route path="/products" element={<AllProductsPage />} />
        <Route path="/sales" element={<SaleProductsPage />} />
        <Route path="/product/:id" element={<ProductDetailPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/cart/success" element={<CartSuccessPage />} />
        <Route path="/cart/empty" element={<CartEmptyPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      <Footer />
    </>
  );
}
