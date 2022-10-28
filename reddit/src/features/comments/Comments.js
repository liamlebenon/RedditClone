import './Comments.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCommentsForPost, selectIsLoadingComments, selectComments } from './commentsSlice';
import { useParams } from 'react-router-dom';
import { Spinner } from '../../components/Spinner';
import { Comment } from './Comment.js';

export const Comments = () => {
    
    const dispatch = useDispatch();
    const data = useSelector(selectComments);
    const isLoading = useSelector(selectIsLoadingComments);
    const { subreddit, author, permalink } = useParams();

    useEffect(() => {
        dispatch(fetchCommentsForPost({subreddit: subreddit, author: author, permalink: permalink}));
    }, []);

    if (isLoading) {
        return (
            <div className='post-list spinner'>
                <Spinner />
            </div>
        )
    } else {
        const comments = data[1].data.children;
        console.log(comments)
        return (
            <div className='comment-list'>
                {comments.map((comment) => {
                    return (
                        <div className='comment'>
                            <Comment 
                                body={comment.data.body}
                                user={comment.data.author}
                                date={comment.data.created}
                                ups={comment.data.ups}
                            />
                        </div>
                    )
                })}
            </div>
        ) 
    }


};