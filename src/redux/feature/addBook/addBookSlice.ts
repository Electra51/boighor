import { createSlice } from '@reduxjs/toolkit';
import { IBook } from '../../../types/globalTypes';

interface IAddBookList {
  addBook: IBook[];
}

const initialState: IAddBookList = {
  addBook: [],
};

const addBookSlice = createSlice({
  name: 'addBook',
  initialState,
  reducers: {
    addbooks: (state, action) => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      state.addBook.push(action.payload);
    },
    // updateBook:(state,action)=>{
    //   const {}
    // }
  },
});

export const { addbooks } = addBookSlice.actions;
export default addBookSlice.reducer;
