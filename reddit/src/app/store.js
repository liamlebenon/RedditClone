import { configureStore } from '@reduxjs/toolkit';
import postsSlice from '../features/posts/postsSlice';
import userProfileSlice from '../features/userProfile/userProfileSlice';

export default configureStore({
    reducer: {
        posts: postsSlice,
        userProfile: userProfileSlice,
    }
});
