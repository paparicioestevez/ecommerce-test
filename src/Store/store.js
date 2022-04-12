import { configureStore } from '@reduxjs/toolkit'
import mainReducer from './mainSlice';
import itemsReducer from './itemsSlice';

export default configureStore({
  reducer: {
      items: itemsReducer,
      main: mainReducer
  },
})