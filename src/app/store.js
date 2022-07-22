import { configureStore } from '@reduxjs/toolkit';
import eightThousandersReducer from '../features/eightThousanders/eightThousandersSlice';

export const store = configureStore({
  reducer: {
    eightThousanders: eightThousandersReducer
  }
})
