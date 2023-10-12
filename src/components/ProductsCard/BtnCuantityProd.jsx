import React from 'react'
import Button from '../UI/Button/Button'

import { ButtonContainer } from './CardProductsStyles'

const BtnCuantityProd = ({handleCuantityProd}) => {
  
    return (
    <ButtonContainer>
          <Button
           onClick={handleCuantityProd}
           /* hidden={INITIAL_LIMIT === limit} */
          > 
            ver menos
          </Button>
          <Button
            /* onClick={handleCuantityProd} */
           /*  hidden={totalProducts<= limit} */
          >
            ver mas
          </Button>
    </ButtonContainer>
    
  )
}

export default BtnCuantityProd



