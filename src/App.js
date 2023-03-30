import React, {useEffect, useRef} from "react";
import './App.css';
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import FirstBlock from "./Components/FirstBlock/FirstBlock";
import Advantages from "./Components/Advantages/Advantages";
import Steps from "./Components/Steps/Steps";
import Registration from "./Components/Registration/Registration";
import Footer from "./Components/Footer/Footer";
import {HashRouter, Routes, Route} from "react-router-dom"
import About from "./Components/About/About";
import Bestsellers from "./Components/Bestsellers/Bestsellers";

function App() {
    // const containerRef = useRef(null);
    //
    // useEffect(() => {
    //     const container = containerRef.current;
    //     const lastChild = container.lastChild;
    //     const lastChildHeight = lastChild.offsetHeight;
    //     container.style.paddingBottom = `${lastChildHeight}px`;
    // }, []);
    return (
        <HashRouter>
            <div className="App">
                <Navbar/>
                <Routes>
                    <Route path='/' element={
                        <>
                            <Home/>
                            <FirstBlock/>
                            <Advantages/>
                            <Steps/>
                            <Registration/>
                        </>
                    }/>
                    <Route path='/about' element={<About/>}/>
                    <Route path='/bestsellers' element={<Bestsellers/>}/>
                    <Route path='*' element={<h1>Not found!</h1>}/>
                </Routes>
                <Footer/>
            </div>
        </HashRouter>
    );
}

export default App;
