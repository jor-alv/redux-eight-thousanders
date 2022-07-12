import { createSlice } from '@reduxjs/toolkit';
import eightThousanders from '../../data/eight-thousanders';

const initialState = {
  activeEightThousander: eightThousanders[0],
}

export const activeEightThousanderSlice = createSlice({
  name: 'activeEightThousander',
  initialState,
  reducers: {}
})

export const {} = activeEightThousanderSlice.actions;

export default activeEightThousanderSlice.reducer;
