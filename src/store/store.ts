import { configureStore } from '@reduxjs/toolkit';
import { consentSliceReducer } from './reducers';

export const store = configureStore({
  reducer: { consents: consentSliceReducer }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
