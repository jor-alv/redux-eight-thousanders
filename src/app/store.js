import { configureStore } from '@reduxjs/toolkit';
import eightThousandersReducer from '../features/eightThousanders/eightThousandersSlice';
import activeEightThousanderReducer from '../features/activeEightThousander/activeEightThousanderSlice';

export const store = configureStore({
  reducer: {
    eightThousanders: eightThousandersReducer,
    activeEightThousander: activeEightThousanderReducer
  }
})
