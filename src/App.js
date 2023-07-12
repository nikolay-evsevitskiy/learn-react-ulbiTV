import React from 'react';
import style from './style/App.module.css'
import Post from "./components/Post";

function App() {

    return (
        <div className={style.App}>
            <Post/>
        </div>
    );
}

export default App;
