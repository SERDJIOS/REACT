import { Link } from "react-router-dom";
import styles from "./HomePage.module.css";

export default function HomePage() {
  return (
    <main className={styles.home}>
      {/* Промо-секция */}
      <section className={styles.hero}>
        <h1>Amazing Discounts on Pets Products!</h1>
        <Link to="/sales" className={styles.ctaButton}>
          Check Out
        </Link>
      </section>

      {/* Секция категорий (превью) */}
      <section className={styles.categoriesPreview}>
        <h2>Categories</h2>
        {/* Пример: кнопка "Все категории" */}
        <Link to="/categories">See all categories</Link>
        {/* Карточки категорий... */}
      </section>

      {/* Секция скидки на первый заказ (форма) */}
      {/* Можно использовать React Hook Form + axios.post("/sale/send") */}

      {/* Секция товаров со скидкой (превью) */}
      <section className={styles.salePreview}>
        <h2>Sale</h2>
        <Link to="/sales">See all sales</Link>
        {/* Карточки товаров со скидкой... */}
      </section>
    </main>
  );
}
