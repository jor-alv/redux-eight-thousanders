import { createSlice } from '@reduxjs/toolkit';
import eightThousanders from '../../data/eight-thousanders';

const initialState = {
  allEightThousanders: eightThousanders,
  selectedEightThousander: null,
};

export const eightThousandersSlice = createSlice({
  name: 'eightThousanders',
  initialState,
  reducers: {
    selectMountain: (state, action) => {
      state.selectedEightThousander = action.payload
    },
  },
});

export const { selectMountain } = eightThousandersSlice.actions;

export default eightThousandersSlice.reducer;
