import './App.css'
import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Home from "./pages/Home.jsx";
import Reservations from "./pages/Reservations.jsx";
import Confirmation from "./pages/Confirmation.jsx";
import {useState} from "react";

function App() {
    const [confirmations, setConfirmations] = useState();
    const [showConfirmation, setShowConfirmation] = useState(false);
    let component

    const handleFillForm = (formData) => {
        setConfirmations(formData)
        setShowConfirmation(true);
    }

    switch(window.location.pathname){
        case '/':
            component = <Home />
            break
        case '/reservations':
            component = <Reservations handleFillForm={handleFillForm}/>
            break
    }
    if (showConfirmation) {
        component = <Confirmation confirmations={confirmations} />
    }

    return (
        <div className="container">
            <Navbar/>
            {component}
            <Footer/>
        </div>
    )
}

export default App
