import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
export const fetchposts = createAsyncThunk(
    'fetchposts',
    async (data, thunkAPI) => {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts/')
      return await response.json()
    }
  )
export const todoSlicer = createSlice({
    name: 'todolist',
    // for single 
    // initialState: [
    //     {
    //         id: 1,
    //         text : 'Hey',
    //     }
    // ],
    // for multiple
    initialState: {
        todos: [{text:'buy milk', id:1}],
        posts: []
    },
    reducers: {
        addTodo(state, action) {
            // const { id, text } = action.payload
            // return [...state,{ id : Math.random(0,9), 
            //     text : action.payload,
            //     completed: false}]
            state.todos.push({ 
                id : Math.random(0,9), 
                text : action.payload,
                completed: false
            })
        },
        delAll(state){
            state.todos.length = 0
        },
        delTodo(state, action){
            state.todos = state.todos.filter((item) => 
                item.id !== action.payload
            )
            // return state.todos
        },
        editTodo(state, action){
            let updatedTodo = state.todos.find((item) =>{
                console.log("KK")
                console.log(item.id)
                console.log(parseFloat(action.payload.id))

                if (item.id == parseFloat(action.payload.id) ) {
                    item.text = action.payload.text 
                    console.log("IN")
                }
            }
                
            )
            return updatedTodo
        }

    },
    extraReducers: {
        // Add reducers for additional action types here, and handle loading state as needed
        [fetchposts.fulfilled]: (state, action) => {
            // console.log(action.payload)
            action = action.payload.slice(0,10)
            console.log(action)

        // Add user to the state array
        state.posts = action
        // return state.post
        }
    }
})

export const {addTodo, delAll, delTodo, editTodo} = todoSlicer.actions;
export default todoSlicer.reducer



// We can return directly it will set in state but if we have multiple properties set data by yourself