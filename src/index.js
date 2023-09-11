import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Login from "./pages/Login";
import About from "./pages/About";
import Posts from "./pages/Posts";
import PostIdPage from "./pages/PostIdPage";
import App from "./App";
import ErrorPage from "./pages/ErrorPage";
import {AuthContext} from "./context";


const publicRoutes = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <ErrorPage/>,
        children: [
            {path: 'login', element: <Login/>},
        ],
    },
]);
const privateRoutes = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <ErrorPage/>,
        children: [
            {path: 'about', element: <About/>},
            {path: 'posts', element: <Posts/>},
            {path: 'posts/:id', element: <PostIdPage/>},
        ]
    },
]);
const isAuth = true;


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <AuthContext.Provider value={{}}>
            <RouterProvider router={isAuth ? privateRoutes : publicRoutes}/>
        </AuthContext.Provider>
    </React.StrictMode>
);

