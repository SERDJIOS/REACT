import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./ProductDetailPage.module.css";
import { fetchSingleProduct } from "../features/productsSlice";
import { addToCart } from "../features/cartSlice";

export default function ProductDetailPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { item: product, status } = useSelector((state) => state.products.singleProduct || {});

  useEffect(() => {
    dispatch(fetchSingleProduct(id)); 
  }, [id, dispatch]);

  const handleAddToCart = () => {
    dispatch(addToCart({ product }));
  };

  if (status === "loading") return <p>Loading...</p>;
  if (status === "failed") return <p>Error loading product</p>;

  return (
    <main className={styles.productDetail}>
      <p>Main Page - Products - {id}</p>
      {product && (
        <>
          <img src={product.image} alt={product.title} />
          <h1>{product.title}</h1>
          <p>Price: {product.price}$</p>
          <p>{product.description}</p>
          <button onClick={handleAddToCart}>Add to Cart</button>
        </>
      )}
    </main>
  );
}
