import { configureStore } from '@reduxjs/toolkit';
import { registroSlice } from '../slices/resgistro';
import { uiSlice } from '../slices/ui';

export const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    registro: registroSlice.reducer,
  },
});
