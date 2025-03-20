import './App.css'
import Navbar from "./components/Navbar/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Footer from "./components/Footer/Footer.jsx";



function App() {

    return (
        <div className="container">
            <Navbar />
            <Home />
            <Footer />

        </div>
    )
}
export default App
