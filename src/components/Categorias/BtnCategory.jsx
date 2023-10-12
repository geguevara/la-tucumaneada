import React from 'react'
import { CardCategory } from './CategoriasStyled'

export const BtnCategory = ({onClickHandler, value, category}) => {
  return (
    <CardCategory onClick={onClickHandler} value={value} >
        {category}
    </CardCategory>
  )
}

export default BtnCategory