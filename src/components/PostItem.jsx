import React from "react";
import style from "../style/PostItem.module.css";
import {MyButton} from "./UI/button/MyButton";


const PostItem = (props) => {
    const deletePostHandler = () => {
        props.deletePost(props.post.id)
    }
    return (
        <div className={style.post}>
            <div className={'post-content'}>
                <strong>{props.post.id + '. ' + props.post.title}</strong>
                <div>{props.post.description}</div>
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
