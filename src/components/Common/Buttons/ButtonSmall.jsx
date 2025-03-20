
import styles from "./ButtonSmall.module.css"
import {Link} from "react-router-dom";

export default function ButtonSmall({text="test", href="/"}) {
    return (
        <a href={href}>
            <button className={styles.button}>{text}</button>
        </a>
    )
}
