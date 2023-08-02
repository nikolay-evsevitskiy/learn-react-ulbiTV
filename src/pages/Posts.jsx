import React, {useEffect, useState} from 'react';
import style from '../style/Posts.module.css'
import {usePosts} from "../hooks/usePosts";
import {getPageCount, getPagesArray} from "../utils/pages";
import PostService from "../api/postService";
import useFetching from "../hooks/useFetching";
import {MyButton} from "../components/UI/button/MyButton";
import {MyModal} from "../components/UI/myModal/MyModal";
import {PostForm} from "../components/PostForm";
import {PostFilter} from "../components/PostFilter";
import {Loader} from "../components/UI/loader/Loader";
import PostList from "../components/PostList";
import Pagination from "../components/UI/pagination/Pagination";

function Posts() {
    const [posts, setPosts] = useState([])
    const [filter, setFilter] = useState({sort: '', query: ''})
    const [modal, setModal] = useState(false)
    const [totalPages, setTotalPages] = useState(0)
    const [limit, setLimit] = useState(10)
    const [page, setPage] = useState(1)
    const sortedAndSearchedPosts = usePosts(filter.sort, posts, filter.query)
    const pagesArray = getPagesArray(totalPages)
    const [fetchPosts, isPostLoader, postError] = useFetching(async () => {
        const response = await PostService.getAll(limit, page)
        const totalCount = response.headers['x-total-count']
        setTotalPages(getPageCount(totalCount, limit))
        setPosts(response.data)
    })

    useEffect(() => {
        fetchPosts()
    }, [page])

    const deletePost = (postId) => {
        const newPosts = posts.filter(i => i.id !== postId)
        setPosts(newPosts)
    }
    const createNewPost = (post) => {
        setPosts([...posts, post])
        setModal(false)
    }

    return (
        <div className={style.App}>
            <MyButton
                style={{marginTop: '30px'}}
                onClick={() => setModal(true)}>
                Create new post
            </MyButton>
            <MyModal
                visible={modal}
                setVisible={setModal}
            >
                <PostForm createNewPost={createNewPost}/>
            </MyModal>

            <hr/>
            <PostFilter
                filter={filter}
                setFilter={setFilter}
            />
            {postError &&
                <h1>
                    {'An error has occurred. ' + postError}
                </h1>
            }
            {
                isPostLoader
                    ? <Loader/>
                    : <PostList
                        posts={sortedAndSearchedPosts}
                        deletePost={deletePost}
                    />
            }
            <Pagination
                page={page}
                setPage={setPage}
                pagesArray={pagesArray}
            />

        </div>
    );
}

export default Posts;
