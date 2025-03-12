import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.contact}>
        <p>+49 30 915-88492</p>
        <p>Wallstraße 9-13, 10179 Berlin, Deutschland</p>
        <p>24 hours a day</p>
      </div>
      <div className={styles.social}>
        <p>Facebook | Instagram | WhatsApp</p>
      </div>
      <div className={styles.map}>
        <p>Google/Yandex Map</p>
      </div>
    </footer>
  );
}
