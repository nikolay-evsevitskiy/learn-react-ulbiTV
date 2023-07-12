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
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const addNewPost = (e) => {
        e.preventDefault();
        const newPost = {id: posts.length + 1, title, description}
        setPosts([...posts, newPost])
        setTitle('')
        setDescription('')
    }

    return (
        <div className={style.App}>
            <form>
                <MyInput
                    type="text"
                    placeholder={'Title of post'}
                    value={title}
                    onChange={e => setTitle(e.currentTarget.value)}
                />
                <MyInput
                    type="text"
                    placeholder={'Description of post'}
                    value={description}
                    onChange={e => setDescription(e.currentTarget.value)}
                />
                <MyButton onClick={addNewPost}>Create</MyButton>
            </form>
            <PostList posts={posts} title={'Posts about JavaScript!'}/>

        </div>
    );
}

export default App;
