import { createSlice } from '@reduxjs/toolkit';
import { IBook } from '../../../types/globalTypes';
import type { PayloadAction } from '@reduxjs/toolkit';
interface IWishList {
  wish: IBook[];
}

const initialState: IWishList = {
  wish: [],
};

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    addToWishList: (state, action: PayloadAction<IBook>) => {
      const existing = state.wish.find(
        (singleWish) => singleWish._id === action.payload._id
      );

      if (existing) {
        console.log('test');
      } else {
        state.wish.push(action.payload);
      }
    },

    removeFromWishList: (state, action: PayloadAction<IBook>) => {
      state.wish = state.wish.filter(
        (singleWish) => singleWish._id !== action.payload._id
      );
    },
  },
});

export const { addToWishList, removeFromWishList } = wishlistSlice.actions;
export default wishlistSlice.reducer;
