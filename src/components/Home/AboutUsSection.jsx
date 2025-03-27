import styles from "./AboutUsSection.module.css"
import TeamCard from "./TeamCard"
import image from "../../assets/icons_assets/MarioAndAdrianA.jpg"

export default function AboutUsSection() {
    return (
        <div className={styles.about}>
            <hr className={styles.about__line}/>
            <div className={styles.about__history}>
                <div className={styles.about__header}>
                    <div className={styles.about__header__title}><h2>About us</h2></div>
                    <div className={styles.about__header__body}><p>History</p></div>
                </div>
                <div className={styles.about__content}>
                    <div className={styles.about__body}><p>This cozy family restaurant in Chicago offers delicious
                        homemade
                        dishes and a warm, welcoming atmosphere perfect for all ages. With friendly service and generous
                        portions, it’s the ideal spot for a memorable meal with loved ones.</p>
                    </div>
                    <div className={styles.about__image__wrapper}>
                        <img src={image} alt="restaurant photo with owners" className={styles.about__image}/>
                    </div>
                </div>
            </div>
            <div className={styles.about__team}>
                <div className={styles.about__header}>
                    <div className={styles.about__header__body}><p>Team</p></div>
                </div>
                <div className={styles.about__team_cards}>
                    <TeamCard name="Alice" image="Alice.jpg"/>
                    <TeamCard name="Poul" image="Poul.jpg"/>
                    <TeamCard name="Karol" image="Karol.jpg"/>
                </div>
            </div>
        </div>
    )
}