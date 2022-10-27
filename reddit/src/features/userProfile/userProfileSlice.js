import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchUserProfile = createAsyncThunk(
    'userProfiles/fetchUserProfile',
    async (username) => {
        const response = await fetch(`https://www.reddit.com/user/${username}/about.json`);
        const data = await response.json();
        return data;
    }
);

export const userProfileSlice = createSlice({
    name: 'userProfile',
    initialState: {
        userProfile: {},
        isLoadingUserProfile: true,
        failedToLoadUserProfile: false
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(fetchUserProfile.pending, (state) => {
            state.isLoadingUserProfile = true;
            state.failedToLoadUserProfile = false;
        });
        builder.addCase(fetchUserProfile.fulfilled, (state, action) => {
            state.isLoadingUserProfile = false;
            state.failedToLoadUserProfile = false;
            state.userProfile = action.payload;
        });
        builder.addCase(fetchUserProfile.rejected, (state) => {
            state.isLoadingUserProfile = false;
            state.failedToLoadUserProfile = true;
        })
    }
});

export const selectUserProfile = state => state.userProfile.userProfile;
export const selectIsLoadingUserProfile = state => state.userProfile.isLoadingUserProfile;
export const failedToLoadUserProfile = state => state.userProfile.failedToLoadUserProfile;
export default userProfileSlice.reducer;