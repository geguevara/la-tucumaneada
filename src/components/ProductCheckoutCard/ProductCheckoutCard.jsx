import React from 'react'
import { IoMdTrash } from 'react-icons/io';
import { BsPlusLg } from 'react-icons/bs';
import { FaMinus } from 'react-icons/fa';
import Count from '../UI/Contador/Count';
import Increment from '../UI/Increment/Increment';
import { useDispatch } from 'react-redux';
import { addToCart, removeToCart } from '../../redux/cart/cartSlice';


import {
    CardContainerStyled, CardInfoStyled, PriceStyled, ProductTitleStyled, TextStyled, QuantityContainerStyled,
  } from './ProductCheckout.styles';

const ProductCheckoutCard = ({img, name, desc, price, quantity, id}) => {
    const dispatch = useDispatch();
  return (
    <CardContainerStyled>
    <img
      src={img}
      alt={name}
    />
    <CardInfoStyled>
      <ProductTitleStyled>{name}</ProductTitleStyled>
      <TextStyled>{desc}</TextStyled>
      <PriceStyled>${price}</PriceStyled>
    </CardInfoStyled>
    <QuantityContainerStyled>
      <Increment
        bgColor='#94b3ac'
        onClick={() => dispatch(removeToCart(id))}
      >
        {
          quantity === 1 ? <IoMdTrash /> : <FaMinus />
        }
      </Increment>
      <Count>{quantity}</Count>
      <Increment 
        bgColor='#94b3ac'
        onClick={() => dispatch(addToCart({img, name, desc, price, quantity, id}))}
      >
          <BsPlusLg />
      </Increment>
    </QuantityContainerStyled>
  </CardContainerStyled>
  )
}

export default ProductCheckoutCard