import React from 'react'
import { BuyProdContainer, CardTextContainer, ContainerImg, PriceProdStyled, ProductCard } from './CardProductsStyles'
import Button from '../UI/Button/Button'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../redux/cart/cartSlice'

const CardProduct = ({img,name, desc, price, id}) => {
  const dispatch= useDispatch()
  return (
    <ProductCard className='card'>
      <ContainerImg >
        <img src={img} alt={name} />
      </ContainerImg>
      
      <CardTextContainer>
        <h3>{name}</h3>
        <span>{desc}</span>
        <BuyProdContainer>
            <PriceProdStyled>${price}</PriceProdStyled>
            <Button 
              whileTap={{scale:0.9}}
              onClick={()=>dispatch(addToCart({img, name, desc, price, id}))}
            >agregar
            </Button>
        </BuyProdContainer>
      </CardTextContainer>
    </ProductCard>
  )
}

export default CardProduct