import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./CategoryProductsPage.module.css";
import { fetchCategoryProducts } from "./features/cartSlice";

export default function CategoryProductsPage() {
  const { id } = useParams(); // category id
  const dispatch = useDispatch();
  const { items: products, status } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchCategoryProducts(id)); 
  }, [id, dispatch]);

  return (
    <main className={styles.categoryProducts}>
      <p>Main Page - Categories - {id}</p>
      <h1>Products in Category {id}</h1>
      {status === "loading" && <p>Loading...</p>}
      {status === "failed" && <p>Error loading products</p>}
      {status === "succeeded" && (
        <div className={styles.grid}>
          {products.map((prod) => (
            <Link key={prod.id} to={`/product/${prod.id}`} className={styles.card}>
              <img src={prod.image} alt={prod.title} />
              <p>{prod.title}</p>
            </Link>
          ))}
        </div>
      )}
    </main>
  );
}
