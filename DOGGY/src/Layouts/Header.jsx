import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import styles from "./Header.module.css";

export default function Header() {
  // Пример: берём количество товаров в корзине из Redux
  const cartItems = useSelector((state) => state.cart.items);
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link to="/">Pet Store</Link>
      </div>
      <nav className={styles.nav}>
        <Link to="/">Main Page</Link>
        <Link to="/categories">Categories</Link>
        <Link to="/products">All products</Link>
        <Link to="/sales">All sales</Link>
      </nav>
      <div className={styles.cart}>
        <Link to="/cart">
          <span>Cart</span>
          {totalItems > 0 && <span className={styles.badge}>{totalItems}</span>}
        </Link>
      </div>
    </header>
  );
}
