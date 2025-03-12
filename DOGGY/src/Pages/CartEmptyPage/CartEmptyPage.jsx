import styles from "./CartEmptyPage.module.css";

export default function CartEmptyPage() {
  return (
    <main className={styles.cartEmpty}>
      <h1>Your cart is empty</h1>
      <p>Looks like you have no items in your basket currently.</p>
    </main>
  );
}
