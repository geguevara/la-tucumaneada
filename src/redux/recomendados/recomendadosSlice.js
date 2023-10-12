import {createSlice} from '@reduxjs/toolkit';
import { randomProdSelect } from '../../utils/randomProdSelect'

const INITIAL_STATE= {
    recommended: randomProdSelect(3)
}

export const recomendadosSlice= createSlice({ 
    name: 'recommended',
    initialState: INITIAL_STATE,
    reducers:{
         recomendadosRandom: (state)=>{
            return state
        }
    }
})
export const {recomendadosRandom} =recomendadosSlice.actions;
export default recomendadosSlice.reducer