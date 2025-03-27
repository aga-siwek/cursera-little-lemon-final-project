import './App.css'
import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Home from "./pages/Home.jsx";
import Reservations from "./pages/Reservations.jsx";
import Confirmation from "./pages/Confirmation.jsx";
import {useState} from "react";
import React from "react";
import {fetchAPI} from "./api/api.js";

function App() {
    const [confirmations, setConfirmations] = useState();
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [availableTimes, setAvailableTimes] = useState(["choose date"]);
    let component

    const handleFillForm = (formData) => {
        setConfirmations(formData)
        setShowConfirmation(true)
    };

    const getAvailableTimes = (date) => {
        const selectDate = new Date(date);
        const times = fetchAPI(selectDate)
        setAvailableTimes(times)
    };

    switch (window.location.pathname) {
        case '/':
            component = <Home/>
            break
        case '/reservations':
            component = <Reservations handleFillForm={handleFillForm} availableTimes={availableTimes}
                                      getAvailableTimes={getAvailableTimes}/>
            break
    }


    if (showConfirmation) {
        component = <Confirmation confirmations={confirmations}/>
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
