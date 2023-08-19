import React from 'react';
import {Link, Outlet} from "react-router-dom";
import style from "./style/Posts.module.css";


function App() {
    return <>
        <div className={style.navbar}>
            <div className={style.navbarItem}>
                <Link to="/about">About</Link>
                <br/>
                <Link to="/posts">Posts</Link>
            </div>
        </div>
        <Outlet/>
    </>

}

export default App;

