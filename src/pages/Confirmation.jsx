import styles from "./Confirmation.module.css"
import ConfirmInformation from "../components/Confirmation/ConfirmInformation.jsx";
import HeroSection from "../components/Confirmation/HeroSection.jsx"
function Confirmation ({confirmations}) {
    return (
        <div className={styles.container}>
            <HeroSection />
            <ConfirmInformation confirmations={confirmations} />
        </div>
    )
}

export default Confirmation