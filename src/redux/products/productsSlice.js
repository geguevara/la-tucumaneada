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
        
        getProducts: state => state
    }
})
export const {getProducts} =productsSlice.actions;
export default productsSlice.reducer;