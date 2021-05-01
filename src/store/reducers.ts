import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Consent } from './interface';

interface ConsentState {
  value: Consent[];
}

const initialState: ConsentState = {
  value: []
};

export const consentSlice = createSlice({
  name: 'consent',
  initialState,
  reducers: {
    addConsent: (state, action: PayloadAction<Consent>) => {
      state.value = [action.payload, ...state.value];
    },
    addInitialMockData: (state, action: PayloadAction<Consent[]>) => {
      state.value = action.payload;
    }
  }
});

export const { addConsent, addInitialMockData } = consentSlice.actions;
export const consentSliceReducer = consentSlice.reducer;
