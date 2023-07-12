import React from "react";
import style from "../style/PostItem.module.css";


const PostItem = (props) => {

    return (
        <div className={style.post}>
            <div className={'post-content'}>
                <strong>{props.post.id + '. ' + props.post.title}</strong>
                <div>{props.post.description}</div>
            </div>
            <div className={'post-btns'}>
                <button>Delete</button>
            </div>
        </div>
    );
};

export default PostItem
