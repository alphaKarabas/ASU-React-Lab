import { configureStore } from '@reduxjs/toolkit';
import AppSlice from './AppSlice';
import UserSlice from './UserSlice';
import CommentsSlice from './CommentsSlice';
import { CommentsApi } from './CommentsApi';

export default configureStore({
  reducer: {
    AppSlice,
    UserSlice,
    CommentsSlice,
    [CommentsApi.reducerPath]: CommentsApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(CommentsApi.middleware),
});
