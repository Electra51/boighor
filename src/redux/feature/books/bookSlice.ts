import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface IBook {
  status: boolean;
  genre: string;
  publication_date: string;
}

const initialState: IBook = {
  status: false,
  genre: 'Fiction',
  publication_date: 'Jun 13, 2023',
};

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    // toggleState:(state)=>({
    //   state.status =!state.status;
    // }
    // setGenre:(state,action:PayloadAction<string>))
  },
});

export default bookSlice.reducer;
