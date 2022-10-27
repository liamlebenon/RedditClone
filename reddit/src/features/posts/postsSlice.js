import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchRedditPosts = createAsyncThunk(
    'posts/loadPosts',
    async () => {
        const response = await fetch('https://www.reddit.com/r/popular.json');
        const data = await response.json();
        return data;
    }
)
export const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        posts: {
        },
        isLoading: true,
        failedToLoadPosts: false
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(fetchRedditPosts.pending, (state) => {
            state.isLoading = true;
            state.failedToLoadPosts = false;
        });
        builder.addCase(fetchRedditPosts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.failedToLoadPosts = false;
            state.posts = action.payload;
        });
        builder.addCase(fetchRedditPosts.rejected, (state) => {
            state.isLoading = false;
            state.failedToLoadPosts = true;
        })
    }
});


export const selectPosts = state => state.posts.posts;
export const selectIsLoading = state  => state.posts.isLoading;
export const { loadPosts } = postsSlice.actions;
export default postsSlice.reducer;