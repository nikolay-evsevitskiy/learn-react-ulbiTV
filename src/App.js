import React, {useState} from 'react';
import style from './style/App.module.css'
import PostList from "./components/PostList";
import {MyButton} from "./components/UI/button/MyButton";
import {MyInput} from "./components/UI/input/MyInput";

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
    const [addPost, setAddPost] = useState({
        title: '',
        description: ''
    })
    const deletePost = (postId) => {
        const newPosts = posts.filter(i => i.id !== postId)
        setPosts(newPosts)
    }
    const addNewPost = (e) => {
        e.preventDefault();
        const newPost = {id: posts.length + 1, title: addPost.title, description: addPost.description}
        setPosts([...posts, newPost])
        setAddPost(
            {
                description: '',
                title: ''
            }
        )
    }

    return (
        <div className={style.App}>
            <form style={{
                margin: '10px'
            }}>
                <MyInput
                    type="text"
                    placeholder={'Title of post'}
                    value={addPost.title}
                    onChange={e => setAddPost({...addPost, title: e.currentTarget.value})}
                />
                {/*uncontrolled input*/}
                <MyInput
                    type="text"
                    placeholder={'Description of post'}
                    value={addPost.description}
                    onChange={e => setAddPost({...addPost, description: e.currentTarget.value})}
                />
                <MyButton onClick={addNewPost}>Create</MyButton>
            </form>
            <PostList
                posts={posts}
                title={'Posts about JavaScript!'}
                deletePost={deletePost}
            />

        </div>
    );
}

export default App;
