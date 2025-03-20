import styles from "./TeamCard.module.css"
import {getImageURL} from "../../utils/image-utils.js";
export default function TeamCard ({name, image}) {
    return (
        <div className={styles.card}>
            <div className={styles.card__image__wrapper}>
                <img src={getImageURL(image)} className={styles.card__image} />
            </div>
            <div className={styles.card__name}>
                <p>{name}</p>
            </div>

        </div>
    )
}