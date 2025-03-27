import styles from "./Footer.module.css"

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer_navigation}>
                <div className={styles.footer__header}>Navigation</div>
                <div className={styles.footer__links}>
                    <div className={styles.footer__links_3}>
                        <a href="/" className={styles.footer__link}>Home</a>
                        <a href="/about" className={styles.footer__link}>About</a>
                        <a href="/menu" className={styles.footer__link}>Menu</a>
                    </div>
                    <div className={styles.footer__links_3}>
                        <a href="/reservations" className={styles.footer__link}>Reservations</a>
                        <a href="/order_online" className={styles.footer__link}>Order Online</a>
                        <a href="/login" className={styles.footer__link}>Login</a>
                    </div>
                </div>
            </div>
            <div className={styles.footer_contact}>
                <div className={styles.footer__header}>Contact</div>
                <div className={styles.footer__body}>
                    <p className={styles.footer__address}>Little Lemon Chicago 6</p>
                    <p className={styles.footer__phone}>535- 363-638</p>
                    <p className={styles.footer__mail}>contact@little.com</p>
                </div>
            </div>
        </footer>
    )
}