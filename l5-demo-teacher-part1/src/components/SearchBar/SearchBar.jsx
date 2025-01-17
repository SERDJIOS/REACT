
import Companies from '../Companies/Companies';
import Container from '../Container/Container';
import styles from './SearchBar.module.css';

export default function SearchBar() {
  return (
    <section className={styles.section}>
      <Container>
        <h1 className={styles.heading}>Один клик и работа в кармане</h1>
        <form className={styles.form}>
          <input className={styles.input} placeholder='Должность или компания' />
          <input className={styles.input} placeholder='Город, Страна' />
          <button className={styles.button}>Поиск</button>
        </form>
      </Container>
      <Companies />
    </section>
  );
}