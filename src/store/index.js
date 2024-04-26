import {configureStore} from '@reduxjs/toolkit'
import AppSlice from './AppSlice'
import UserSlice from './UserSlice'
import CommentsSlice from './CommentsSlice'

export default configureStore({
  reducer: {
    AppSlice,
    UserSlice,
    CommentsSlice
  }
})