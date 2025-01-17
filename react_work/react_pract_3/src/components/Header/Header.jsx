import styles from './Header.module.css';

export default function Header(props) {
    return (
        <header className={props.theme === 'light' ? styles.light_header : styles.dark_header}>
            <h1>Title</h1>
            <button className={props.theme === 'light' ? styles.light_button : styles.dark_button} onClick={props.switchTheme}>Theme Switcher</button>
        </header>
    )
}