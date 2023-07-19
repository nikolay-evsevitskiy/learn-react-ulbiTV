import React from "react";
import   "../style/PostList.css";
import PostItem from "./PostItem";
import {CSSTransition, TransitionGroup} from "react-transition-group";


const PostList = ({posts, deletePost}) => {
    let title = 'Posts about JavaScript!'
    if (posts.length === 0) {
        title = 'Posts not found'
    }

    return (
        <>
            <h1 className={'main'}>{title}</h1>
            <TransitionGroup>
                {posts.map((post, index) => <CSSTransition
                    key={post.id}
                    timeout={500}
                    classNames="post"
                >
                    <PostItem
                        key={post.id}
                        post={post}
                        index={index}
                        deletePost={deletePost}
                    />
                    </CSSTransition>
                )}
            </TransitionGroup>
        </>
    );
};

export default PostList
