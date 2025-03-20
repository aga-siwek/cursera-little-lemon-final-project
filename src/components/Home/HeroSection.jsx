import ButtonLarge from "../Common/Buttons/ButtonLarge.jsx";
import styles from "./HeroSection.module.css"
import HeroImage from "../../assets/icons_assets/restauranfood.jpg"

export default function HeroSection () {
return(
    <div className={styles.hero}>
        <div className={styles.hero__content}>
            <div className={styles.hero__header}>
                <div className={styles.hero__header_title}>
                    <h1>Little Lemon</h1>
                </div>
                <div className={styles.hero__header_body}>
                    <h2>Chicago</h2>
                </div>

            </div>
            <div >
                <p className={styles.hero__body}>We are a family owned cozy restaurant, focused on traditional recipes served with a modern twist.</p>
            </div>
            <div className={styles.hero__button}><ButtonLarge text="Reserve a Table" href="/reservations"/></div>
        </div>
        <div className={styles.hero__image__wrapper}>
        <img src={HeroImage} alt="restaurant image for hero" className={styles.hero__image}/>
        </div>
    </div>
)

}