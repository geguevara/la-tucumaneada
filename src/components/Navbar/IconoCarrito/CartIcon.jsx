import { HiShoppingCart } from "react-icons/hi";
import {  NavLinkStyled } from "./../NavbarStyles";
import { useDispatch, useSelector } from "react-redux";
import { toggleCart } from "../../../redux/cart/cartSlice";

const CartIcon = () => {
  const totalCartItems = useSelector((state) => state.cart.cartItems).reduce((acc, item) => (acc += item.quantity), 0)

  const dispatch = useDispatch()

  return (
    <NavLinkStyled onClick={() => dispatch(toggleCart())}>
      <HiShoppingCart />
      <span>{totalCartItems}</span>
    </NavLinkStyled>
  );
};

export default CartIcon;