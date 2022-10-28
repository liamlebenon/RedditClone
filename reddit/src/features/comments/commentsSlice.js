import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchCommentsForPost = createAsyncThunk(
    'comments/loadCommentsForPost',
    async ({ subreddit, author, permalink }) => {
        const response = await fetch(`https://www.reddit.com/r/${subreddit}/comments/${author}/${permalink}.json`);
        const data = await response.json();
        return data;
    }
)

export const commentsSlice = createSlice({
    name: 'comments',
    initialState: {
        comments: {},
        isLoadingComments: true,
        failedToLoadComments: false
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(fetchCommentsForPost.pending, (state) => {
            state.isLoadingComments = true;
            state.failedToLoadComments = false;
        });
        builder.addCase(fetchCommentsForPost.fulfilled, (state, action) => {
            state.isLoadingComments = false;
            state.failedToLoadComments = false; 
            state.comments = action.payload;
        });
        builder.addCase(fetchCommentsForPost.rejected, (state) => {
            state.isLoadingComments = false;
            state.failedToLoadComments = true;
        })
    }
});

export const selectComments = state => state.comments.comments;
export const selectIsLoadingComments = state => state.comments.isLoadingComments;
export const failedToLoadComments = state => state.comments.failedToLoadComments;
export default commentsSlice.reducer;