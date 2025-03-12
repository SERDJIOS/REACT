import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

// Создаем асинхронное действие
export const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',
  async () => {
    const response = await axios.get('https://example.com')
    return response.data; // Возвращаем данные, полученные в ответ 
  }
)

export const createPost = createAsyncThunk(
  'posts/createPost',
  async (newPost) => {
    const response = await axios.post('https://example.com', newPost)
    return response.data; // Возвращаем данные, полученные в ответ 
  }
)