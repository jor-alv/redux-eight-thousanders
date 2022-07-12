import { createSlice } from '@reduxjs/toolkit';
import eightThousanders from '../../data/eight-thousanders';

const initialState = {
  eightThousanders: eightThousanders,
};

export const eightThousandersSlice = createSlice({
  name: 'eightThousanders',
  initialState,
  reducers: {}
})

export const {} = eightThousandersSlice.actions;

export default eightThousandersSlice.reducer;
