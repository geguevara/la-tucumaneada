import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ModalOverlayStyled } from '../NavbarStyles';
import { ButtonContainerStyled, PriceTotalStyled, ContainerStyled, EnvioStyled, MainContainer, PriceContainerStyled, PriceStyled, ProductsWrapperStyled, SubtotalStyled, Title, TotalStyled } from './ModalCart.styles';
import Submit from '../../UI/Submit/Submit'
import { AnimatePresence } from "framer-motion";

import {BsTrash} from 'react-icons/bs'
import ModalCardItem from './ModalCardItem';
import { clearCart, toggleCart } from '../../../redux/cart/cartSlice';
import Increment from '../../UI/Increment/Increment';

const ModalCart = () => {
  
        const navigate = useNavigate();
        const dispatch = useDispatch();
      
        const {cartItems, shippingCost} = useSelector((state) => state.cart)
      
        const hiddenCart = useSelector((state) => state.cart.hidden)
      
        const totalPrice = cartItems.reduce((acc, item) => {
          return (acc += item.price * item.quantity)
        }, 0);
      
        return (
          <>
            {!hiddenCart && (
              <ModalOverlayStyled
                onClick={() => dispatch(toggleCart())}
                isHidden={hiddenCart}
              />
            )}
            <AnimatePresence >
              {!hiddenCart && (
                <ContainerStyled
                  initial={{ translateX: 600 }}
                  animate={{ translateX: 0 }}
                  exit={{ translateX: 900 }}
                  transition={{ type: "spring", damping: 27 }}
                  key="cart-modal"
                >
      
                  <MainContainer>
                    <Title>
                      <h1>Tus Productos</h1>
                      <Increment 
                        onClick={() => dispatch(clearCart())}
                        disabled={!cartItems.length}
                      >
                        <BsTrash size="2rem"/>
                      </Increment>
                    </Title>
      
                    <ProductsWrapperStyled>
                      {
                        cartItems.length ? (
                          cartItems.map((item) => {
                            return < ModalCardItem key={item.id} {...item} />
                          })
                        ) : (
                          <p>Su carritto se encuentra vacío.</p>
                        )
                      }
                    </ProductsWrapperStyled>

                    <PriceContainerStyled>
                        <SubtotalStyled>
                            <p>Subtotal:</p>
                            <span>${totalPrice}</span>
                        </SubtotalStyled>
                        <EnvioStyled>
                            <p>Envio</p>
                            <span>${shippingCost}</span>
                        </EnvioStyled>
                        <hr/>
                        <TotalStyled>
                            <p>Total:</p>
                            <PriceTotalStyled>${totalPrice + shippingCost}</PriceTotalStyled>
                        </TotalStyled>
                        <ButtonContainerStyled>
                            <Submit
                                onClick={() => {
                                    navigate("/checkout")
                                    dispatch(toggleCart())
                                }
                                } 
                                disabled={!cartItems.length}>
                                Iniciar pedido
                            </Submit>
                        </ButtonContainerStyled>
                    </PriceContainerStyled>
                
                  </MainContainer>
                 </ContainerStyled>
                  
             )}
            </AnimatePresence> 
          </>
    )
}

export default ModalCart