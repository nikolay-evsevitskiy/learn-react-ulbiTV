import React from 'react';
import style from './style/App.module.css';
import {
    createBrowserRouter, Link,
    RouterProvider,
} from "react-router-dom";
import About from "./pages/About";
import Posts from "./pages/Posts";


function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <div>Hello world!</div>,
        },
        {
            path: '/about',
            element: <About/>,
        },
        {
            path: '/posts',
            element: <Posts/>,
        },
    ]);
    return <>
        <div className={style.navbar}>
            <div className={style.navbarItem}>
                <a href="/about">About</a>
                <a href="/posts">Posts</a>
            </div>
        </div>
        <RouterProvider router={router}/>
    </>
}

export default App;

