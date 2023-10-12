import ProductsCheckout from "../../components/checkout/Products/ProductsCheckout";
import {useSelector} from "react-redux"
import { CheckoutContainer } from "./Checkout.styles";
import CheckoutForm from "../../components/checkout/Form/CheckoutForm";

const Checkout = () => {

  const {cartItems, shippingCost} = useSelector((state) => state.cart)

  const price = cartItems.reduce((acc, item) => {
    return (acc += item.price * item.quantity)
  }, 0);
//formulario con carrito
  return (
      <CheckoutContainer>
        <CheckoutForm
          cartItems = {cartItems}
          shippingCost = {shippingCost}
          price = {price}
        />
        <ProductsCheckout
          cartItems = {cartItems}
          shippingCost = {shippingCost}
          price = {price}
        />
      </CheckoutContainer>
  );
};

export default Checkout;
