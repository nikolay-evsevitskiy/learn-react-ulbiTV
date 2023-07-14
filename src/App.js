import React, {useState} from 'react';
import style from './style/App.module.css'
import PostList from "./components/PostList";
import {PostForm} from "./components/PostForm";
import {MySelect} from "./components/UI/select/MySelect";
import {MyInput} from "./components/UI/input/MyInput";

function App() {
    const [posts, setPosts] = useState([
        {
            id: 1,
            title: 'JavaScript',
            description: 'Javascript - this is programming language.'
        },
        {
            id: 2,
            title: 'JavaScript2',
            description: 'Javascript - this is programming language.'
        },
        {
            id: 3,
            title: 'JavaScript3',
            description: 'Javascript - this is programming language.'
        },

    ])
    const [selectedSort, setSelectedSort] = useState('')
    const [searchQuery, setSearchQuery] = useState('')
    const getSortedPosts = () => {
        console.log('function is called')
        if (selectedSort) {
            return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))
        }
        return posts;
    }
    const sortedPosts = getSortedPosts()
    const deletePost = (postId) => {
        const newPosts = posts.filter(i => i.id !== postId)
        setPosts(newPosts)
    }
    const createNewPost = (post) => {
        setPosts([...posts, post])
    }
    const sortPosts = (sort) => {
        setSelectedSort(sort)
    }
    let title = 'Posts about JavaScript!'
    if (posts.length === 0) {
        title = 'No posts.'
    }

    return (
        <div className={style.App}>
            <PostForm createNewPost={createNewPost}/>
            <hr style={{margin: '15px 0'}}/>
            <div>
                <MyInput
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.currentTarget.value)}
                    placeholder={'search...'}
                />
                <MySelect
                    value={selectedSort}
                    onChange={sortPosts}
                    defaultValue={'sort'}
                    options={[
                        {
                            name: 'by name',
                            value: 'title',
                        },
                        {
                            name: 'by description',
                            value: 'description',
                        },

                    ]}
                />
            </div>
            <PostList
                posts={sortedPosts}
                title={title}
                deletePost={deletePost}
            />
        </div>
    );
}

export default App;
