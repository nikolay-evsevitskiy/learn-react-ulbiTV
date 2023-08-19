import React from 'react';
import style from "./Navbar.module.css";
import {Link} from "react-router-dom";

const NavBar = () => {
    return (
        <div className={style.navbar}>
            <div className={style.navbarItem}>
                <Link to="/about">About</Link>
                <br/>
                <Link to="/posts">Posts</Link>
            </div>
        </div>
    );
};

export default NavBar;
