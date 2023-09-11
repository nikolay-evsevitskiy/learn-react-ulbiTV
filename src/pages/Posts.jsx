import React, {useEffect, useRef, useState} from 'react';
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
import {useObserver} from "../hooks/useObserver";
import {MySelect} from "../components/UI/select/MySelect";

function Posts() {
    const [posts, setPosts] = useState([])
    const [filter, setFilter] = useState({sort: '', query: ''})
    const [modal, setModal] = useState(false)
    const [totalPages, setTotalPages] = useState(0)
    const [limit, setLimit] = useState(10)
    const [page, setPage] = useState(1)
    const sortedAndSearchedPosts = usePosts(filter.sort, posts, filter.query)
    const pagesArray = getPagesArray(totalPages)
    const lastElement = useRef()
    const [fetchPosts, isPostLoader, postError] = useFetching(async () => {
        const response = await PostService.getAll(limit, page)
        const totalCount = response.headers['x-total-count']
        setTotalPages(getPageCount(totalCount, limit))
        setPosts([...posts, ...response.data])
    })

    useObserver(lastElement, page < totalPages, isPostLoader, () => {
        setPage(page + 1)
    })

    useEffect(() => {
        fetchPosts(limit, page)
    }, [page, limit])

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
            <MySelect value={limit}
                      onChange={value => setLimit(value)}
                      defaultValue={'number of elements per page'}
                      options={[
                          {value: 5, name: '5'},
                          {value: 10, name: '10'},
                          {value: 25, name: '25'},
                          {value: -1, name: 'show all'},
                      ]}
            />
            {postError &&
                <h1>
                    {'An error has occurred. ' + postError}
                </h1>
            }
            <PostList posts={sortedAndSearchedPosts}
                      deletePost={deletePost}
            />
            <div ref={lastElement} style={{height: 20, width: '63%'}}/>
            {isPostLoader && <Loader/>}

            <Pagination page={page}
                        setPage={setPage}
                        pagesArray={pagesArray}
            />

        </div>
    );
}

export default Posts;
