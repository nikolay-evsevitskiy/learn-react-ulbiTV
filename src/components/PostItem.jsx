import React from "react";
import style from "../style/PostItem.module.css";


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
                <button
                    onClick={deletePostHandler}
                >
                    Delete
                </button>
            </div>
        </div>
    );
};

export default PostItem
