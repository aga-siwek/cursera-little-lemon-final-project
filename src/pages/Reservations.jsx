import styles from "./Reservations.module.css";
import HeroSection from "../components/Reservations/HeroSection.jsx";
import ReservationForm from "../components/Reservations/ReservationForm.jsx";

export default function Reservations ({handleFillForm}) {
    return (
        <main className={styles.container}>
            <HeroSection />
            <ReservationForm handleFillForm={handleFillForm} />
        </main>
    )
}

