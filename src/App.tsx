import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from "./header/Header";
import {Main} from "./main/Main";
import {Particl} from "./components/particl/Particl";
import {Footer} from "./footer/Footer";

function App() {
    return (
        <div className="App">
            <Particl/>
            <Header/>
            <Main/>
            <Footer/>
        </div>
    );
}

export default App;
