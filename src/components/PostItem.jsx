import React from "react";
import style from "../style/PostItem.module.css";
import {MyButton} from "./UI/button/MyButton";


const PostItem = ({post, deletePost}) => {
    const deletePostHandler = () => {
        deletePost(post.id)
    }
    return (
        <div className={style.post}>
            <div className={'post-content'}>
                <strong>{post.id + '. ' + post.title}</strong>
                <div>{post.description}</div>
            </div>
            <div className={'post-btns'}>
                <MyButton
                    onClick={deletePostHandler}
                    color={'red'}
                >
                    Delete
                </MyButton>
            </div>
        </div>
    );
};

export default PostItem
