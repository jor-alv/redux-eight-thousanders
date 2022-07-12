import { configureStore } from '@reduxjs/toolkit';
import eightThousanderReducer from '../features/eightThousander/eightThousanderSlice';

export const store = configureStore({
  reducer: {
    eightThousander: eightThousanderReducer
  }
})
