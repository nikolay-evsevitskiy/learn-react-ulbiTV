import React from "react";
import style from "../style/PostList.module.css";
import PostItem from "./PostItem";


const PostList = (props) => {

    return (
        <>
            <h1 className={style.main}>List with posts:</h1>
            {props.posts.map((post) => <PostItem key={post.id} post={post}/>)}
        </>
    );
};

export default PostList
