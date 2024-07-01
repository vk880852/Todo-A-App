import { configureStore } from '@reduxjs/toolkit'
import taskActionReducer from './taskAction.jsx'

export default configureStore({
  reducer: {
    taskAction:taskActionReducer
  },
})