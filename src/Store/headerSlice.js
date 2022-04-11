import { createSlice } from '@reduxjs/toolkit'

export const headerSlice = createSlice({
    name: 'header',
    initialState: {
        isLoading: false,
        basketCount: 0
    },
    reducers: {
        toogle: (state) => {
            state.isLoading = !state.isLoading
        },
        incrementBasket: (state) => {
            state.basketCount ++;
        }
    },
})

export const { toogle } = headerSlice.actions
export default headerSlice.reducer