import styles from "./Confirmation.module.css"
import ConfirmInformation from "../components/Confirmation/ConfirmInformation.jsx";
import HeroSection from "../components/Confirmation/HeroSection.jsx"
function Confirmation ({confirmations}) {
    return (
        <main className={styles.container}>
            <HeroSection />
            <ConfirmInformation confirmations={confirmations} />
        </main>
    )
}

export default Confirmation