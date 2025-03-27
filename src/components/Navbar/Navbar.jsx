import HamburgerMenu from "./HamburgerMenu.jsx";
import StandardMenu from "./StandardMenu.jsx";
import Logo from "../../assets/icons_assets/logo.svg";
import styles from "./Navbar.module.css"

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <a href="/"><img src={Logo} alt="logo" className={styles.navbar__logo_img}/></a>
            <HamburgerMenu/>
            <StandardMenu/>
        </nav>
    )
}
