import Post from '../Post/Post';
import axios from 'axios';
import styles from './PostList.module.css';
import { useEffect, useState } from 'react';
export default function PostList() {
    const [allPosts, setAllPosts] = useState([]);
    const [currentPost, setCurrentPost] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(1);
    const POSTS_PER_PAGE = 3;

  async function fetchData() {
    try {
      const res = await axios.get(`https://6799e6b3747b09cdccccec43.mockapi.io/post`);
      setAllPosts(res.data)
      setCurrentPost(res.data.slice(0, 3))
      setLoading(false);
    } catch (e) {
      setError(e);
      setLoading(false);
    }
  }   
 

  useEffect(() => {
    fetchData();
  }, []);

  function loadMorePosts() {
    setPage(page => page + 1);
    const start = page * POSTS_PER_PAGE;
    const end = start + POSTS_PER_PAGE;
    setCurrentPost(allPosts.slice(start, end));

  }

  function handledelete (id) {
  const newPosts = allPosts.filter(post => post.id !== id);
  setAllPosts(newPosts);
  setCurrentPost(newPosts.slice(start, end));
    }
    if (loading) {
      return <p>Posts are loading...</p>;
    }
    if (error) {
        return <p>{error.message}</p>;

  }


    return (
        <div className={styles.postListContainer}>
            <h1 className={styles.title}>Spisok postov</h1>
        <ul className={styles.postList}>
            {<Post />}      
            {currentPost.map(post => 
            <Post key={post.id} post={post} handledelete={handledelete} />
            )} 
        </ul>
        { allPosts.length > end && <button className={styles.nextBtn} onClick={loadMorePosts}>Next</button>}
        </div>
    )
}

