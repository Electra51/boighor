import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { api } from './api/apiSlice';
import wishListReducer from './feature/wishList/wishlistSlice';
import userReducer from './feature/user/userSlice';
import bookReducer from './feature/books/bookSlice';
export const store = configureStore({
  reducer: {
    wishlist: wishListReducer,
    user: userReducer,
    book: bookReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
