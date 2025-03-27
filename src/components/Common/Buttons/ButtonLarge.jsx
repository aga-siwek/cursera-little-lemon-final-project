import styles from "./ButtonLarge.module.css"
import {Link} from "react-router-dom";

export default function ButtonLarge({text = "test", href = "/", aria="click button"}) {
    return (
        <a href={href}>
            <button className={styles.button} aria-label={aria}>{text}</button>
        </a>
    )
}
