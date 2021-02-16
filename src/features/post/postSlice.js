import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchposts = createAsyncThunk(
    'fetchposts',
    async (data, thunkAPI) => {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts/')
      return await response.json()
    }
  )

export const postSlice = createSlice({
    name: 'posts',
    initialState: [],
    reducers: {
        // standard reducer logic, with auto-generated action types per reducer
    },
    extraReducers: {
        // Add reducers for additional action types here, and handle loading state as needed
        [fetchposts.fulfilled]: (state, action) => {
            console.log(action.payload)
        // Add user to the state array
        state.push(action.payload)
        return state
        }
    }
})

export default postSlice.reducer
