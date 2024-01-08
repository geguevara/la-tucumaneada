
import {
  PriceContainerStyled,
  ProductLeftStyled,
  ProductPriceStyled,
  ProductStyled,
} from "./CardResumen.styles";

const CardResumen = ({name, desc, quantity, price}) => {
  return (
    <ProductStyled>
      <ProductLeftStyled>
          <h3>{name}</h3>
          <p>{desc}</p>
        
      </ProductLeftStyled>
      <PriceContainerStyled>
        <p>{quantity}u.</p>
        <ProductPriceStyled>${price * quantity}</ProductPriceStyled>
      </PriceContainerStyled>
    </ProductStyled>
  );
};

export default CardResumen;