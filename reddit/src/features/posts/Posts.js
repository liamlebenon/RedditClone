import './Posts.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectPosts, selectIsLoading } from './postsSlice';
import { fetchRedditPosts } from './postsSlice';
import { Post } from './Post';
import { Spinner } from '../../components/Spinner';

export const Posts = () => {

    const isLoading = useSelector(selectIsLoading);        
    const data = useSelector(selectPosts);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchRedditPosts());
    }, [dispatch]);
    
    if (isLoading) {
        return (
            <div className='post-list spinner'>
                <Spinner />
            </div>
        )
    } else {
        const posts = data.data.children
        console.log(posts)
        return (
        <div className='post-list'>
            {posts.map((post) => {
                return (
                    <div>
                        <Post post={post.data}/>
                    </div>
                )
            })}
        </div>
    )
    }

};