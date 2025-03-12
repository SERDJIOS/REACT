import { Link } from "react-router-dom";
import styles from "./CartSuccessPage.module.css";

export default function CartSuccessPage() {
  return (
    <main className={styles.cartSuccess}>
      <h1>Congratulations!</h1>
      <p>Your order has been successfully placed on the website.</p>
      <p>A manager will contact you shortly to confirm your order.</p>
      <Link to="/">Go Home</Link>
    </main>
  );
}
