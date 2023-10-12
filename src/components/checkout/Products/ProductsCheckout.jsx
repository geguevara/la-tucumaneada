
import ProductCheckoutCard from "../../ProductCheckoutCard/ProductCheckoutCard";
import {
  CardsWrapperStyled,
  EnvioStyled,
  HrStyled,
  PriceContainerStyled,
  PriceTotalStyled,
  ProductosContainerStyled,
  ProductsTitleStyled,
  SubtotalStyled,
  TotalStyled
} from "./ProductsCheckout.styles"

const ProductsCheckout = ({cartItems, shippingCost, price}) => {
  return (
    <ProductosContainerStyled>
      <ProductsTitleStyled>Tu pedido</ProductsTitleStyled>
      <CardsWrapperStyled>

        {
          cartItems.length ? (
            cartItems.map((item) => {
              return <ProductCheckoutCard key={item.id} {...item} />
            })
          ) : (
            <p>Aun no ha hecho ningun pedido.</p>
          )
        }
      </CardsWrapperStyled>
      <PriceContainerStyled>
        <SubtotalStyled>
          <p>Subtotal</p>
          <span>${price}</span>
        </SubtotalStyled>
        <EnvioStyled>
          <p>Envío:</p>
          <span>${shippingCost}</span>
        </EnvioStyled>
        <HrStyled />
        <TotalStyled>
          <p>Total:</p>
          <PriceTotalStyled>${price + shippingCost}</PriceTotalStyled>
        </TotalStyled>
      </PriceContainerStyled>
    </ProductosContainerStyled>
  );
};

export default ProductsCheckout;
