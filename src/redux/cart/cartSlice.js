import {createSlice} from "@reduxjs/toolkit"
import { addItemToCart, removeItemToCart, resetShipppinCost } from "./utils-cart"
import { SHIPPING_COST } from "../../utils/constants"


const INITIAL_STATE={
    cartItems: [],
    shippingCost: 0,
    hidden: true,
}

const cartSlice= createSlice({  
    name: 'cart',
    initialState: INITIAL_STATE,
    reducers: {
        addToCart:(state, action)=> {
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload),
                shippingCost: SHIPPING_COST,
            }
        },
        removeToCart:(state, action)=>{
            return{
                ...state,
                cartItems: removeItemToCart(state.cartItems, action.payload),
                shippingCost: resetShipppinCost(state.cartItems, SHIPPING_COST)
            }
        },
        clearCart:(state)=>{
            return {
                state,
                cartItems: [],
                shippingCost: 0
            }
        },
        toggleCart: state => {
            return{
                ...state,
                hidden:!state.hidden
            }
        }
    }
})

export const {
    addToCart,
    removeToCart,
    toggleCart,
    clearCart
}= cartSlice.actions

export default cartSlice.reducer