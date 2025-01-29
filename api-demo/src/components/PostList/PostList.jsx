import Post from '../Post/Post'
import styles from './PostList.module.css'
import axios from 'axios'
import { useState, useEffect } from 'react'

export default function PostList() {
    const [ allPosts, setAllPosts ] = useState([])
    const [ currentPosts, setCurrentPosts ] = useState([])
    const [ loading, setLoading ] = useState(false)
    const [ error, setError ] = useState(null)
    const [ page, setPage ] = useState(1)

    const POSTS_PER_PAGE = 3
    const start = page * POSTS_PER_PAGE
    const end = start + POSTS_PER_PAGE

    async function fetchPosts() {
        try {
            setLoading(true)
            const res = await axios.get('https://6799e595747b09cdcccce69c.mockapi.io/post-api/posts');
            setAllPosts(res.data)
            setCurrentPosts(res.data.slice(0, POSTS_PER_PAGE))
            setLoading(false)
        } catch (error) {
            setError(error)
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchPosts()
    }, [])



    function loadMorePosts() {
        setPage(page => page + 1)
        setCurrentPosts(allPosts.slice(start, end))
    }

    function handleDelete(id) {
        const newPosts = allPosts.filter(post => post.id !== id)
        setAllPosts(newPosts)
        setCurrentPosts(newPosts.slice(start, end))
    }

    if(loading) {
        return <p>Posts are loading...</p>
    }

    if(error) {
        return <p>{error.message}</p>
    }

    return (
        <div className={styles.postsListContainer}>
            <h1 className={styles.title}>List of posts</h1>
            <ul className={styles.postList}>
                {currentPosts.map(post => 
                    <Post key={post.id} post={post} handleDelete={handleDelete}/>
                )}
            </ul>
            { allPosts.length > end && <button className={styles.nextBtn} onClick={loadMorePosts}>Next</button> }
        </div>

    )
}