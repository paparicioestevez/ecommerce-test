import { createSlice } from '@reduxjs/toolkit'

export const itemsSlice = createSlice({
  name: 'items',
  initialState: {
    items: [],
    expire: null
  },
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload;
      state.expire =  new Date().getTime() + 3600000;
    },
  },
})

export const { setItems } = itemsSlice.actions

export default itemsSlice.reducer