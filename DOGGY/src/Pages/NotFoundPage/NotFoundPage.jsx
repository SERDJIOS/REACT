import { Link } from "react-router-dom";
import styles from "./NotFoundPage.module.css";

export default function NotFoundPage() {
  return (
    <main className={styles.notFound}>
      <h1>404</h1>
      <p>Page Not Found</p>
      <Link to="/">Go Home</Link>
    </main>
  );
}
