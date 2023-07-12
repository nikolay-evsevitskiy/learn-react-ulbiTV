import React, {useState} from 'react';
import style from './style/App.module.css'
import PostList from "./components/PostList";

function App() {
    const [posts, setPosts] = useState([
        {
            id: 1,
            title: 'JavaScript',
            description: 'Javascript - this is programming language.'
        },
        {
            id: 2,
            title: 'JavaScript2',
            description: 'Javascript - this is programming language.'
        },
        {
            id: 3,
            title: 'JavaScript3',
            description: 'Javascript - this is programming language.'
        },

    ])

    return (
        <div className={style.App}>
            <PostList posts={posts}/>
        </div>
    );
}

export default App;
