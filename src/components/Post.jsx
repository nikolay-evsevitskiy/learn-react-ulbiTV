import React from "react";
import style from "../style/Post.module.css";


const Post = () => {

    return (
        <div className={style.post}>
            <div className={'post-content'}>
                <strong>1. Javascript</strong>
                <div>
                    Javascript - this is programming language.
                </div>
            </div>
            <div className={'post-btns'}>
                <button>Delete</button>
            </div>
        </div>
    );
};

export default Post
