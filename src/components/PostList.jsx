import React from "react";
import style from "../style/PostList.module.css";
import PostItem from "./PostItem";


const PostList = ({posts, title, deletePost}) => {

    return (
        <>
            <h1 className={style.main}>{title}</h1>
            {posts.map((post, index) => <PostItem
                    key={post.id}
                    post={post}
                    index={index}
                    deletePost={deletePost}
                />
            )}
        </>
    );
};

export default PostList
