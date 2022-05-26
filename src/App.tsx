import React from 'react';
import './App.css';
import Offers from "./pages/Offers";
import Footer from "./basic-components/Footer";


function App() {
    return (
        <div className="container flex flex-col mx-auto my-5 max-h-screen">
            <Offers/>
            <Footer/>
        </div>
    );
}

export default App;
