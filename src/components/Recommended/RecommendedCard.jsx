import React from 'react'
import { CardRecommended, ImgCard, TextCard } from './Recommended.styles'
/* import { typeOfMoney } from '../../utils/TypeOfMoney' */
import Button from '../UI/Button/Button'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../redux/cart/cartSlice'
import {BsCartPlus} from 'react-icons/bs'
const RecommendedCard = ({img, name,desc, price, id}) => {
  
  const dispatch= useDispatch();

  return (
    <CardRecommended>
        <ImgCard alt={name} src={img} />
        <TextCard>
            <h3>{name} </h3>
            <span>{desc}</span>
           <p> ${price}</p>
        </TextCard>
        <Button onClick={()=>dispatch(addToCart({img, name,desc, price, id}))}
        >
          <BsCartPlus/>
        </Button>
    </CardRecommended>
  )
}

export default RecommendedCard