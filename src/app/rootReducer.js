import { combineReducers } from '@reduxjs/toolkit'
import Todos from '../components/AddTodo'
import {Counter} from '../features/counter/Counter'

export default combineReducers({
  Todos,
  Counter
})

// export type RootState = ReturnType<typeof rootReducer>

// export default rootReducer