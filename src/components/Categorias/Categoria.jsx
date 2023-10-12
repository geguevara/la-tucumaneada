import React from 'react'
import { CardCategory } from './CategoriasStyled'
import { useDispatch, useSelector } from 'react-redux'
import { selectCategory } from '../../redux/categories/categoriesSlice'


const Categoria = ({title, category}) => {
  const {selectedCategory}= useSelector((state)=> state.categories)
  const dispatch = useDispatch()
  return (
    <CardCategory 
      whileTap={{scale: 0.9}}
      selected={category===selectedCategory}
      onClick={()=> dispatch(selectCategory(category))}

    >
        <h3>{title}</h3>
    </CardCategory>
  )
}

export default Categoria