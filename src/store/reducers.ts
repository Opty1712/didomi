import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ConsentServer } from './interface';

/**
 * Redux storage state config
 */
interface ConsentState {
  value: ConsentServer[];
}

/**
 * Redux storage initial value
 */
const initialState: ConsentState = {
  value: []
};

/**
 * Consent redux-toolkit «slice»
 */
export const consentSlice = createSlice({
  name: 'consent',
  initialState,
  reducers: {
    addConsent: (state, action: PayloadAction<ConsentServer>) => {
      state.value = [action.payload, ...state.value];
    },
    addInitialMockData: (state, action: PayloadAction<ConsentServer[]>) => {
      state.value = action.payload;
    }
  }
});

/**
 * Adding consent action creator
 */
export const addConsent = consentSlice.actions.addConsent;

/**
 * Adding initial consents mocks action creator
 */
export const addInitialMockData = consentSlice.actions.addInitialMockData;

/**
 * Consent reducer
 */
export const consentSliceReducer = consentSlice.reducer;
