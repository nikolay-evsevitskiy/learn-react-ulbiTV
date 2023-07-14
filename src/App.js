import React, {useState} from 'react';
import style from './style/App.module.css'
import PostList from "./components/PostList";
import {PostForm} from "./components/PostForm";
import {MySelect} from "./components/UI/select/MySelect";

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
    const [selectedSort, setSelectedSort] = useState('')
    const deletePost = (postId) => {
        const newPosts = posts.filter(i => i.id !== postId)
        setPosts(newPosts)
    }
    const createNewPost = (post) => {
        setPosts([...posts, post])
    }
    const sortPosts = (sort) => {
        setSelectedSort(sort)
        setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])))

    }
    let title = 'Posts about JavaScript!'
    if (posts.length === 0) {
        title = 'No posts.'
    }

    return (
        <div className={style.App}>
            <PostForm createNewPost={createNewPost}/>
            <hr style={{margin: '15px 0'}}/>
            <div>
                <MySelect
                    value={selectedSort}
                    onChange={sortPosts}
                    defaultValue={'sort'}
                    options={[
                        {
                            name: 'by name',
                            value: 'title',
                        },
                        {
                            name: 'by description',
                            value: 'description',
                        },

                    ]}
                />
            </div>
            <PostList
                posts={posts}
                title={title}
                deletePost={deletePost}
            />
        </div>
    );
}

export default App;
