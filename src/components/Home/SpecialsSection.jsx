import styles from "./SpecialsSection.module.css"
import ButtonLarge from "../Common/Buttons/ButtonLarge.jsx";
import ProductCard from "../Common/ProductCard/ProductCard.jsx";

export default function SpecialsSection({specials}) {
    return (
        <div className={styles.specials}>
            <hr className={styles.specials__line}/>
            <div className={styles.specials__header}>
                <div><h2 className={styles.specials__header_text}>This weeks specials</h2></div>
            </div>
            <div className={styles.specials__cards}>
                {specials.map((special, index) => <ProductCard key={index} title={special.title} price={special.price}
                                                               body={special.body} href={special.href}
                                                               image_name={special.image_name}/>)}
            </div>
            <div className={styles.specials__header_button}>
                <ButtonLarge text="Online Menu" href={"/menu"}/>
            </div>
        </div>
    )
}