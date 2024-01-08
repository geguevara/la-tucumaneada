import React from "react";
import { AnimatePresence } from "framer-motion";
import { LinkStyled, ModalContainer, UsernameStyled } from "./ModalUser.styles";
import { useDispatch, useSelector } from "react-redux";
import {
  setCurrentUser,
  toggleHiddenMenu,
} from "../../../redux/user/userSlice";
import { useNavigate } from "react-router-dom";

const ModalUser = () => {
  const navigate = useNavigate();

  const { hiddenMenu } = useSelector((state) => state.user);
  const currentUser = useSelector((state) => state.user.currentUser);
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
          <UsernameStyled>{currentUser.nombre}</UsernameStyled>
          <div>
            {currentUser?.verified ? (
              <p className="title">Usuario Verificado</p>
            ) : (
              <div>
                <span className="title">Tenes que validar tu cuenta</span>
                <LinkStyled
                  onClick={() => {
                    navigate("/validate");
                    dispatch(toggleHiddenMenu());
                  }}
                  radius="10"
                >
                  Validar usuario
                </LinkStyled>
              </div>
            )}
          </div>
          <LinkStyled to="/mis-ordenes">Mis Ordenes</LinkStyled>
          <span
            onClick={() => {
              dispatch(setCurrentUser(null));
              dispatch(toggleHiddenMenu());
            }}
          >
            Cerrar Sesion
          </span>
        </ModalContainer>
      )}
    </AnimatePresence>
  );
};

export default ModalUser;
