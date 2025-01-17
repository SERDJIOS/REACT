import styles from './Main.module.css';

export default function Main(props) {
    return (
        <main className={props.theme === 'light' ? styles.light_background : styles.dark_background}>
            <article>
                <h3>Title1</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, maxime. Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati corrupti ad nemo ea iusto cupiditate dicta facere quod corporis ab, maiores laboriosam porro! Fugit repudiandae veritatis ipsum dolorum quae in!</p>
            </article>
            <article>
                <h3>Title2</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, maxime. Lorem ipsum dolor sit amet consectetur adipisicing elit. A maxime alias molestias, rerum optio nam adipisci atque minima quis fuga facilis velit voluptate, hic, beatae corrupti reiciendis sed vel iste.</p>
            </article>
        </main>
    )
}