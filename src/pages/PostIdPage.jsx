import React, {useEffect, useState} from 'react';
import {useParams} from "react-router";
import useFetching from "../hooks/useFetching";
import PostService from "../api/postService";
import {Loader} from "../components/UI/loader/Loader";
import style from '../style/PostIdPage.module.css';
const PostIdPage = () => {
    const params = useParams()
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);
    const [fetchPostById, isLoading, error] = useFetching(async () => {
        const response = await PostService.getPostById(params.id)
        setPost(response.data)
    })
    const [fetchComments, isComLoading, comError] = useFetching(async () => {
        const response = await PostService.getCommentsByPostId(params.id)
        setComments(response.data)
    })
    useEffect(() => {
        fetchPostById()
        fetchComments()
    }, [])
    return (
        <>
            <h1>You opened post page! ID = {params.id}</h1>
            {isLoading
                ? <Loader/>
                : <h2> {post.id}. {post.title}</h2>
            }
            <h3>Comments</h3>
            {
                isComLoading
                    ? <Loader/>
                    : <div>
                        {
                            comments.map(comm => <div className={style.commentBlock}>
                                <h4>{comm.email}</h4>
                                <h5>{comm.name}</h5>
                                <div>{comm.body}</div>
                            </div>)
                        }
                    </div>
            }
        </>
    );
};

export default PostIdPage;
