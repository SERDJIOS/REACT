import styles from './Footer.module.css';

export default  function Footer (props) {
    return (
        <footer className={props.theme === 'light' ? styles.light_background : styles.dark_background}>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor, atque veniam ipsum enim maiores accusantium id deserunt provident quo modi!</p>
        </footer>
    )
}