import { createSlice } from '@reduxjs/toolkit';

interface IUserState {
  user: {
    email: string | null;
  };
  isLoading: boolean;
  isError: boolean;
  error: string | null;
}
const initialState: IUserState = {
  user: { email: null },
  isLoading: false,
  isError: false,
  error: null,
};

const userSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {},
});

export default userSlice.reducer;
