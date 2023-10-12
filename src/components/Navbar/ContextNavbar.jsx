import {createContext, useReducer} from 'react'

export const Contexto= createContext();

export const ContextNavbar = ({children}) => {
  const initialState ={
    isOpen: false,
  }

  const contextReducer =(state, action) =>{
    switch (action.type) {
      case 'openBarsMenu':
        return{
          ...state, 
          isOpen:!state.isOpen
        }
    
      default:
        return state;
    }
  }
  const [state, dispatch]= useReducer(contextReducer, initialState)
  return (
    <Contexto.Provider value= {{state, dispatch}}>
      {children}
    </Contexto.Provider>
  )
}
