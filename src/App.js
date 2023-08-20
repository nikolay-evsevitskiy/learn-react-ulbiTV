import React from 'react';
import {Outlet} from "react-router-dom";
import NavBar from "./components/UI/navbar/NavBar";
import './style/App.css'


function App() {
    return <>
        <NavBar/>
        <Outlet/>
    </>
}

export default App;

