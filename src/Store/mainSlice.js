import { createSlice } from '@reduxjs/toolkit'

export const mainSlice = createSlice({
    name: 'main',
    initialState: {
        isLoading: false,
        basketCount: 0
    },
    reducers: {
        toogle: (state) => {
            state.isLoading = !state.isLoading
        },
        updateBasket: (state, action) => {
            /**
             * por algún motivo que desconozco, postman me devuelve el conteo correcto, pero a través de la app no 
             * lo hace, supongo que tendrá que ver con la sesión de heroku, si se quiere ver la respuesta real de heroku,
             * descomenta la siguiente linea
             */
            //state.basketCount = action.payload;

            state.basketCount ++;
        }
    },
})

export const { toogle, updateBasket } = mainSlice.actions
export default mainSlice.reducer