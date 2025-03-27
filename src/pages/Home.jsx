import HeroSection from "../components/Home/HeroSection.jsx";
import SpecialsSection from "../components/Home/SpecialsSection.jsx";
import TestimonialsSection from "../components/Home/TestimonialsSection.jsx";
import AboutUsSection from "../components/Home/AboutUsSection.jsx";
import styles from "./Home.module.css";
import {getDishes} from "../dishes.js";

function Home() {
    let specialDishes = [];
    const dishes = getDishes();


    const SelectSpecialDishes = () => {

        dishes.map(dish => {
            dish.special === true &&
            specialDishes.push(dish)
        })
    };

    SelectSpecialDishes()

    return (
        <main className={styles.container}>
            <HeroSection/>
            <SpecialsSection specials={specialDishes}/>
            <TestimonialsSection/>
            <AboutUsSection/>
        </main>
    )
}

export default Home