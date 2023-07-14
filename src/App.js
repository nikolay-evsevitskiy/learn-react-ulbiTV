import React, {useMemo, useState} from 'react';
import style from './style/App.module.css'
import PostList from "./components/PostList";
import {PostForm} from "./components/PostForm";
import {PostFilter} from "./components/PostFilter";

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
    const [filter, setFilter] = useState({sort: '', query: ''})
    const sortedPosts = useMemo(() => {
        console.log('function is called')
        if (filter.sort) {
            return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
        }
        return posts;
    }, [filter.sort, posts])
    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query))
    }, [filter.query, sortedPosts])
    const deletePost = (postId) => {
        const newPosts = posts.filter(i => i.id !== postId)
        setPosts(newPosts)
    }
    const createNewPost = (post) => {
        setPosts([...posts, post])
    }
    return (
        <div className={style.App}>
            <PostForm createNewPost={createNewPost}/>
            <hr style={{margin: '15px 0'}}/>
            <PostFilter
                filter={filter}
                setFilter={setFilter}
            />
            <PostList
                posts={sortedAndSearchedPosts}
                deletePost={deletePost}
            />
        </div>
    );
}

export default App;
