import styles from "./ProductCard.module.css"
import ButtonSmall from "../Buttons/ButtonSmall.jsx";
import {getImageURL} from "../../../utils/image-utils.js";

export default function ProductCard({title, price, body, href, image_name}) {
    console.log(image_name)
    console.log(getImageURL(image_name))

    return (
        <div className={styles.card}>
            <div className={styles.card__image__wrapper}>
                <img src={getImageURL(image_name)} className={styles.card__image} />

            </div>
            <div className={styles.card__content}>
                <div className={styles.card__header}>
                    <div className={styles.card__header__text}><h3>{title}</h3></div>
                    <div className={styles.card__header__price}>{price}$</div>
                </div>
                <div className={styles.card__body}>{body}</div>
            </div>
            <div className={styles.card__button}></div>
            <ButtonSmall text="Order a delivery" href={href} />
        </div>
    )
}