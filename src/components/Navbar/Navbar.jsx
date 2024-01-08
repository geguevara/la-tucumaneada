import React, { useContext } from "react";
import {
  CarritoNavbar,
  LinksContainerStyled,
  LinksNavbarStyled,
  MenuContainer,
  MenuNavbarStyled,
  NavLinkStyled,
  NavbarContainerStyled,
  NavbarImgStyled,
} from "./NavbarStyles";
import Logo from "../../assets/Imagen2.png";
import { HiMenu } from "react-icons/hi";
import { Contexto } from "./ContextNavbar";
import ModalCart from "./ModalCart/ModalCart";
import CartIcon from "./IconoCarrito/CartIcon";
import ModalUser from "./ModalUser/ModalUser";
import NavbarUser from "./NavbarUser/NavbarUser";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { ADMIN } from "../../utils/constants";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { state, dispatch } = useContext(Contexto);

  const showNavbar = () => {
    dispatch({ type: "openBarsMenu" });
  };
  const currentUser = useSelector((state) => state.user.currentUser);
  return (
    <NavbarContainerStyled>
      <ModalCart />
      <ModalUser />

      <NavbarImgStyled>
        <a href="/#">
          <img src={Logo} alt="Logo" />
        </a>
      </NavbarImgStyled>
      <LinksNavbarStyled>
        <LinksContainerStyled className={state.isOpen ? "open" : ""}>
          <MenuContainer>
            <NavLinkStyled to={"/"}>Inicio</NavLinkStyled>
            <NavLinkStyled to={"/products"}>Productos</NavLinkStyled>
            <NavLinkStyled to={"/acerca"}>acerca</NavLinkStyled>
            <NavLinkStyled to={"/contacto"}>contacto</NavLinkStyled>
            <motion.div whileTap={{ scale: 0.97 }}>
              {currentUser?.rol === ADMIN ? (
                <NavLinkStyled to="/issue">Crear Issue</NavLinkStyled>
              ) : (
                <span></span>
              )}
            </motion.div>

            <NavbarUser />
          </MenuContainer>
        </LinksContainerStyled>

        <MenuNavbarStyled onClick={showNavbar}>
          <HiMenu />
        </MenuNavbarStyled>

        <CarritoNavbar>
          <CartIcon />
        </CarritoNavbar>
      </LinksNavbarStyled>
    </NavbarContainerStyled>
  );
};

export default Navbar;
