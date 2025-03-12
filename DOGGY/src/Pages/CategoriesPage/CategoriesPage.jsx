import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./CategoriesPage.module.css";
import { fetchCategories } from "../features/categoriesSlice"; // пример, если у вас есть такой слайс

export default function CategoriesPage() {
  const dispatch = useDispatch();
  const { items: categories, status } = useSelector((state) => state.categories);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchCategories()); // /categories/all
    }
  }, [status, dispatch]);

  return (
    <main className={styles.categories}>
      <p>Main Page - Categories</p>
      <h1>All Categories</h1>
      {status === "loading" && <p>Loading...</p>}
      {status === "failed" && <p>Error loading categories</p>}
      {status === "succeeded" && (
        <div className={styles.grid}>
          {categories.map((cat) => (
            <Link key={cat.id} to={`/categories/${cat.id}`} className={styles.card}>
              <img src={cat.image} alt={cat.title} />
              <p>{cat.title}</p>
            </Link>
          ))}
        </div>
      )}
    </main>
  );
}
