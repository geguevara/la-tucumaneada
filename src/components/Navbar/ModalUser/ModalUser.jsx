import React from 'react'
import { AnimatePresence } from "framer-motion";
import{LinkStyled, ModalContainer, UsernameStyled} from './ModalUser.styles'
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser, toggleHiddenMenu } from "../../../redux/user/userSlice"; 

const ModalUser = () => {

  const {hiddenMenu, currentUser} = useSelector((state) => state.user);

  const dispatch = useDispatch();

  return (
    <AnimatePresence>
    {!hiddenMenu && ( 
        <ModalContainer
          initial={{ translateX: 600 }}
          animate={{ translateX: 0 }}
          exit={{ translateX: 600 }}
          transition={{ duration: 0.5 }}
          key="cart-user"
        >
          <UsernameStyled>{currentUser.userName}</UsernameStyled>
          
          <LinkStyled to="/mis-ordenes">Mis Ordenes</LinkStyled>
          <span onClick={() => {
            dispatch(setCurrentUser(null))
            dispatch(toggleHiddenMenu()) 
          }}>Cerrar Sesion</span>
        </ModalContainer>
    )}
    </AnimatePresence>
  )
}

export default ModalUser