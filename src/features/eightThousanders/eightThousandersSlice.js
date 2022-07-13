import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedEightThousander: {}
};

export const eightThousandersSlice = createSlice({
  name: 'eightThousanders',
  initialState,
  reducers: {
    selectEightThousander: (state, action) => {
      return action.payload
    }
  }
})

export const { selectEightThousander } = eightThousandersSlice.actions;

export default eightThousandersSlice.reducer;
