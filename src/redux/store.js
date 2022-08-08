import { configureStore } from '@reduxjs/toolkit';
import { contactSlice } from './contactSlice';

export const store = configureStore({
  reducer: {
    contacts: contactSlice.reducer,
  },
});
// export default store;
// contacts: {
//       items: [],
//       filter: '',
//     },
