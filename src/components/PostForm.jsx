import {MyInput} from "./UI/input/MyInput";
import {MyButton} from "./UI/button/MyButton";
import React, {useState} from "react";

export const PostForm = ({createNewPost}) => {
    const [post, setPost] = useState({
        title: '',
        description: ''
    })
    const addNewPost = (e) => {
        e.preventDefault();
        const newPost = {
            ...post, id: Date.now()
        }
        createNewPost(newPost)
        setPost({
            description: '',
            title: ''
        })
    }

    return (
        <form style={{
            margin: '10px'
        }}>
            <MyInput
                type="text"
                placeholder={'Title of post'}
                value={post.title}
                onChange={e => setPost({...post, title: e.currentTarget.value})}
            />
            {/*uncontrolled input*/}
            <MyInput
                type="text"
                placeholder={'Description of post'}
                value={post.description}
                onChange={e => setPost({...post, description: e.currentTarget.value})}
            />
            <MyButton
                onClick={addNewPost}
            >
                Create
            </MyButton>
        </form>
    );
};
