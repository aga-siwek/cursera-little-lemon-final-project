
import styles from "./ButtonLarge.module.css"
import {Link} from "react-router-dom";

export default function ButtonLarge({text="test", href="/"}) {
    return (
        <a href={href}>
            <button className={styles.button}>{text}</button>
        </a>
    )
}
