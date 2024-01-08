import CardResumen from "../../components/Resumen/CardResumen";

import {
  CostoEnvioStyled,
  CostoProductoStyled,
  CostoTotalStyled,
  HrStyled,
  ProductsContainerStyled,
  ResumenContainerInfoStyled,
  ResumenContainerStyled,
  ResumenTitleStyled,
  StyledLink,
} from "./Resumen.styles";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "../../axios/axios-orders";
import { Link, useParams } from "react-router-dom";
import { RiArrowGoBackFill } from "react-icons/ri";

const Resumen = () => {
  const [visitedOrder, setVisitedOrder] = useState(null);
  const { currentUser } = useSelector((state) => state.user);
  const { orders } = useSelector((state) => state.orders);
  const dispatch = useDispatch();
  const { orderId } = useParams();

  useEffect(() => {
    if (!orders) {
      getOrders(dispatch, currentUser);
    }
    setVisitedOrder(orders?.find((order) => order._id === orderId));
  }, [currentUser, dispatch, orderId, orders]);

  //console.log(visitedOrder);

  return (
    <ResumenContainerStyled>
      <ResumenTitleStyled>
        <h1>Resumen Orden: #{visitedOrder?._id.slice(0, 6)}</h1>
        <StyledLink to="/mis-ordenes">
          <RiArrowGoBackFill />
        </StyledLink>
      </ResumenTitleStyled>
      <h2>Productos:</h2>
      <ProductsContainerStyled>
        {visitedOrder?.items.map((item) => {
          return <CardResumen key={item._id} {...item} />;
        })}
      </ProductsContainerStyled>
      <HrStyled />
      <ResumenContainerInfoStyled>
        <h3>Costos:</h3>
        <CostoProductoStyled>
          <p>Costo de productos</p>
          <span>${visitedOrder?.price}</span>
        </CostoProductoStyled>
        <CostoEnvioStyled>
          <p>Costo de envío</p>
          <span>${visitedOrder?.shippingCost}</span>
        </CostoEnvioStyled>
        <CostoTotalStyled>
          <p>Total</p>
          <span>${visitedOrder?.total}</span>
        </CostoTotalStyled>
      </ResumenContainerInfoStyled>
    </ResumenContainerStyled>
  );
};

export default Resumen;
