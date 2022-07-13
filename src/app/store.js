import { configureStore } from '@reduxjs/toolkit';
import selectedEightThousanderReducer from '../features/eightThousanders/eightThousandersSlice';

export const store = configureStore({
  reducer: {
    selectedEightThousander: selectedEightThousanderReducer
  }
})
