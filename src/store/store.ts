import { configureStore } from '@reduxjs/toolkit';
import { consentSliceReducer } from './reducers';

/**
 * Redux store
 */
export const store = configureStore({
  reducer: { consents: consentSliceReducer }
});

/**
 * Redux storage state
 */
export type RootState = ReturnType<typeof store.getState>;

/**
 * Redux dispatcher
 */
export type AppDispatch = typeof store.dispatch;
