import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Posts from "./pages/Posts";
import About from "./pages/About";
import App from "./App";
import ErrorPage from "./pages/ErrorPage";
import PostIdPage from "./pages/PostIdPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: 'about',
                element: <About/>,
            },
            {
                path: 'posts',
                element: <Posts/>,
            },
            {
                path: 'posts/:id',
                element: <PostIdPage/>,
            },
        ]
    },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
);

