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
    },
    setExpire: (state, action) => {
      state.expire =  action.payload;
    },
  },
})

export const { setItems, setExpire } = itemsSlice.actions

export default itemsSlice.reducer