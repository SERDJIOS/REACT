import { configureStore } from '@reduxjs/toolkit';
import postsReducer from './slices';

const store = configureStore({
  reducers: {
    posts: postsReducer
  }
})

export default store;