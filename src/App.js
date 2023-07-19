import React, {useState} from 'react';
import style from './style/App.module.css'
import PostList from "./components/PostList";
import {PostForm} from "./components/PostForm";
import {PostFilter} from "./components/PostFilter";
import {MyModal} from "./components/UI/myModal/MyModal";
import {MyButton} from "./components/UI/button/MyButton";
import {usePosts} from "./hooks/usePosts";

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
    const [modal, setModal] = useState(false)
    const sortedAndSearchedPosts = usePosts(filter.sort, posts, filter.query)
    const deletePost = (postId) => {
        const newPosts = posts.filter(i => i.id !== postId)
        setPosts(newPosts)
    }
    const createNewPost = (post) => {
        setPosts([...posts, post])
        setModal(false)
    }
    return (
        <div className={style.App}>
            <MyButton
                style={{marginTop: '30px'}}
                onClick={() => setModal(true)}>
                Create new post
            </MyButton>
            <MyModal
                visible={modal}
                setVisible={setModal}
            >
                <PostForm createNewPost={createNewPost}/>
            </MyModal>

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
