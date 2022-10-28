import { configureStore } from '@reduxjs/toolkit';
import postsSlice from '../features/posts/postsSlice';
import userProfileSlice from '../features/userProfile/userProfileSlice';
import commentsSlice from '../features/comments/commentsSlice';

export default configureStore({
    reducer: {
        posts: postsSlice,
        userProfile: userProfileSlice,
        comments: commentsSlice
    }
});
