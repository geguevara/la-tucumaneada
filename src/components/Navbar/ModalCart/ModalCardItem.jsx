import { BsPlusLg } from "react-icons/bs";
import { FaMinus } from "react-icons/fa";
import Count from "../../UI/Contador/Count";
import Increment from "../../UI/Increment/Increment";
import {
  CardTitle,
  PriceStyled,
  ProductContainerStyled,
  QuantityContainerStyled,
  TextContainerStyled,
  TextStyled,
} from "./ModalCart.styles";
import { useDispatch } from "react-redux";
import { addToCart, removeToCart } from "../../../redux/cart/cartSlice";
import { BsTrash } from "react-icons/bs";

const ModalCardItem = ({img, name, desc, price, quantity, id}) => {

  const dispatch = useDispatch()

  return (
    <ProductContainerStyled>
      <img
        src={img}
        alt={name}
      />
      <TextContainerStyled>
        <CardTitle>{name}</CardTitle>
        <PriceStyled>${price}</PriceStyled>
      </TextContainerStyled>
     
      <QuantityContainerStyled>
         
        <Increment
        bgColor='#dbd8d536'
          onClick={() => dispatch(removeToCart(id))}
        >
          {
            quantity === 1 ? <BsTrash /> : <FaMinus />
          }
          
        </Increment>
        <Count> {quantity} </Count>
        <Increment 
          bgColor='#dbd8d536'
          onClick={() => dispatch(addToCart({img, name, desc, price, quantity, id}))}>
          <BsPlusLg />
        </Increment>
      </QuantityContainerStyled>
    </ProductContainerStyled>
  );
};

export default ModalCardItem;