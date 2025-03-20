import styles from "./StandardMenu.module.css"
export default function StandardMenu() {
    return (
        <ul className={styles.menu}>
            <li><a href="/">Home</a></li>
            <li><a href="/menu">Menu</a></li>
            <li><a href="/reservations">Reservations</a></li>
        </ul>
    )
}
