import React from 'react'
import { CategoriesContainerStyled, CategoriesSectionStyled } from './CategoriasStyled'
import {useSelector} from 'react-redux'
import { BtnCategory } from './BtnCategory'

const Categorias = ({handleClick}) => {
  const {categories} =useSelector((state) =>state.categories)

  return (
    <CategoriesSectionStyled>
        <h2>Categorias</h2>
        <CategoriesContainerStyled>

          <BtnCategory onClickHandler={handleClick} value="" category="Todos"/>

          {
          categories.map((category)=>{
              return <BtnCategory onClickHandler={handleClick} value={category.category} key={category.id} {...category}/>
          })
          } 
        </CategoriesContainerStyled>

    </CategoriesSectionStyled>
  )
}

export default Categorias