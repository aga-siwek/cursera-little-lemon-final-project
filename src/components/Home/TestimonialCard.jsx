import styles from "./TestimonialCard.module.css"
import {getImageURL} from "../../utils/image-utils.js";
import Star from "../../assets/icons_assets/star2.svg"
import {ReactSVG} from "react-svg";

export default function TestimonialCard({testimonial}) {
    let stars = []
    const showStart = () => {
        for (let i = 0; i < testimonial.stars; i++) {
            stars.push(<ReactSVG src={Star} className={styles.card__good_stars}/>)
        }
        for (let i = 0; i < 5 - testimonial.stars; i++) {
            stars.push(<ReactSVG src={Star} className={styles.card__good_no_stars}/>)
        }
        return stars;
    }
    showStart();
    return (
        <div className={styles.card}>
            <div className={styles.card__header}>
                <div className={styles.card__header__image__wrapper}>
                    <img src={getImageURL(testimonial.photo)} className={styles.card__header__image} alt={testimonial.name}/>
                </div>
                <div className={styles.card__header_content}>
                    <div className={styles.card__header__name}><p>{testimonial.name}</p></div>
                    <div className={styles.card__header__stars}>
                        {stars.map(star => <div>{star}</div>)}
                    < /div>
                </div>
            </div>
            <div className={styles.card__body}>{testimonial.opinion}</div>
        </div>)
}