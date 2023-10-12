import {createSlice} from '@reduxjs/toolkit'
import { Products, TotalProducts, products } from '../../data/Products'

const INITIAL_STATE ={
    product: Products,
    prod: products,
    totalProducts: TotalProducts,
    selectedProd: null
}

export const productsSlice = createSlice({
    name: 'products',
    initialState: INITIAL_STATE,
    reducers: {
        selectProduct: (state, action) =>{
            return{
                ...state,
                selectedProd:action.payload !== state.selectedProd
                ? action.payload :null
            }
        },
        getProducts: state => state
    }
})
export const {getProducts, selectProduct} =productsSlice.actions;
export default productsSlice.reducer;