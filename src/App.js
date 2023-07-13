import React, {useState} from 'react';
import style from './style/App.module.css'
import PostList from "./components/PostList";
import {PostForm} from "./components/PostForm";

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
    const deletePost = (postId) => {
        const newPosts = posts.filter(i => i.id !== postId)
        setPosts(newPosts)
    }
    const createNewPost = (post) => {
        setPosts([...posts, post])
    }
    let title = 'Posts about JavaScript!'
    if (posts.length === 0) {
        title = 'No posts.'
    }

    return (
        <div className={style.App}>
            <PostForm createNewPost={createNewPost}/>
            <PostList
                posts={posts}
                title={title}
                deletePost={deletePost}
            />
        </div>
    );
}

export default App;
