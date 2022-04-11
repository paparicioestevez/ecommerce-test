import { configureStore } from '@reduxjs/toolkit'
import headerReducer from './headerSlice';
import itemsReducer from './itemsSlice';

export default configureStore({
  reducer: {
      items: itemsReducer,
      header: headerReducer
  },
})