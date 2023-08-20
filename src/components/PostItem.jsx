import React from "react";
import style from "../style/PostItem.module.css";
import {MyButton} from "./UI/button/MyButton";
import {useNavigate} from "react-router";


const PostItem = ({post, deletePost}) => {
    const navigate = useNavigate()
    const deletePostHandler = () => {
        deletePost(post.id)
    }
    const openPostHandler = () => {
        navigate(`/posts/${post.id}`)
    }
    return (
        <div className={style.post}>
            <div className={'post-content'}>
                <strong>{post.id + '. ' + post.title}</strong>
                <div>{post.body}</div>
            </div>
            <div className={style.postButtons}>
                <MyButton onClick={openPostHandler} color={'green'}>
                    Open
                </MyButton>
                <MyButton onClick={deletePostHandler} color={'red'}>
                    Delete
                </MyButton>

            </div>
        </div>
    );
};

export default PostItem
