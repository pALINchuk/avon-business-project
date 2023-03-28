import './App.css';
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import FirstBlock from "./Components/FirstBlock/FirstBlock";
import Advantages from "./Components/Advantages/Advantages";
import Steps from "./Components/Steps/Steps";
import Registration from "./Components/Registration/Registration";
import Footer from "./Components/Footer/Footer";

function App() {
    return (
        <div className="App">
            <Navbar/>
            <Home/>
            <FirstBlock/>
            <Advantages/>
            <Steps/>
            <Registration/>
            <Footer/>
        </div>
    );
}

export default App;
