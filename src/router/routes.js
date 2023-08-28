import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import ErrorPage from "../pages/ErrorPage";
import About from "../pages/About";
import Posts from "../pages/Posts";
import PostIdPage from "../pages/PostIdPage";
import React from "react";
import Login from "../pages/Login";

const isAuth = false;


const publicRoutes = [
    {path: 'login', element: <Login/>},
]

const privateRoutes = [
    {path: 'about', element: <About/>},
    {path: 'posts', element: <Posts/>},
    {path: 'posts/:id', element: <PostIdPage/>},
]

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <ErrorPage/>,
        children: isAuth ? privateRoutes : publicRoutes
    },
]);

