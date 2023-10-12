import React from 'react'
import { ProductContainerStyled, ProductsSectionStyled} from './CardProductsStyles'



const ProductsList = ({result}) => {
  return (
    <ProductsSectionStyled>
      <h2>Productos</h2>
      <ProductContainerStyled>{result}</ProductContainerStyled>
    </ProductsSectionStyled>
   
  )
}

export default ProductsList