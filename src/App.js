import React, {useState} from 'react';
import {Outlet} from "react-router-dom";
import NavBar from "./components/UI/navbar/NavBar";
import './style/App.css'
import {AuthContext} from "./context";


function App() {
    const [isAuth, setIsAuth] = useState(false)
    return <>
        <AuthContext.Provider value={{
            isAuth,
            setIsAuth
        }}>
            <NavBar/>
            <Outlet/>
        </AuthContext.Provider>
    </>
}

export default App;

