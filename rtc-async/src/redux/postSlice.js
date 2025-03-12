import {createSlice} from '@reduxjs/toolkit';
import {fetchPosts, createPost} from './thunks';


export const postSlice = createSlice({
    name: 'posts',
    initialState: {
        posts: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPosts.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.loading = false;
                state.posts = action.payload;
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(createPost.fulfilled, (state, action) => {
                state.posts.push(action.payload);
                state.error = null;

            })
            .addCase(createPost.rejected, (state, action) => {
                state.error = action.error.message;
            })
    },
});

export default 